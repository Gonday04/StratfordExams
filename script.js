document.addEventListener('DOMContentLoaded', function () {

    // ==================================================================
    // 1. ELEMENTOS DEL DOM Y CATÁLOGOS
    // ==================================================================
    const testTypeSelect = document.getElementById('test-type');
    const selectedTestSelect = document.getElementById('selected-test');

    const testCatalog = {
        admision: [
            { value: 'uam', label: 'Examen de Admisión UAM (96 Preguntas)' },
            { value: 'comipems', label: 'Examen de Admisión COMIPEMS (90 Preguntas)' },
            { value: 'comipems_simulacion', label: 'Examen de Simulación COMIPEMS (128 Preguntas)' },
            { value: 'unammedicina', label: 'Examen de Simulación UNAM Médicina (128 Preguntas)' },
            { value: 'ipn', label: 'Examen de Admisión IPN (110 Preguntas)' }
        ],
        vocacional: [
            { value: 'universitario', label: 'Test Vocacional Universitario (80 Preguntas)' },
            { value: 'bachillerato', label: 'Test Vocacional Bachillerato (98 Preguntas)' }
        ]
    };

    const registrationForm = document.getElementById('registration-form');
    const userRegistrationForm = document.getElementById('user-registration');
    const resultsSection = document.getElementById('results');
    const userDetails = document.getElementById('user-details');
    const resultsCards = document.getElementById('results-cards');
    const restartBtn = document.getElementById('restart-btn');
    const instructionsScreen = document.getElementById('instructions-screen');
    const startTestBtn = document.getElementById('start-test-btn');

    // ==================================================================
    // 2. ESTADO GLOBAL DEL EXAMEN
    // ==================================================================
    let userData = {};
    let examenActivoId = null;       // Guarda el ID del examen 
    let preguntasActivas = [];       // Array plano con las preguntas actuales
    let respuestasUsuario = [];      // Guarda las respuestas del usuario
    let preguntaActualIndex = 0;     // Índice de la pregunta visible

    // ==================================================================
    // 3. EVENTOS DE FORMULARIO Y MENÚS
    // ==================================================================
    testTypeSelect.addEventListener('change', function () {
        const selectedType = testTypeSelect.value;
        selectedTestSelect.innerHTML = '';
        selectedTestSelect.disabled = false;

        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = `Selecciona el examen de ${selectedType}...`;
        defaultOption.disabled = true;
        defaultOption.selected = true;
        selectedTestSelect.appendChild(defaultOption);

        const tests = testCatalog[selectedType] || [];
        if (tests.length > 0 && tests[0].value === 'none') {
            selectedTestSelect.innerHTML = `<option value="">${tests[0].label}</option>`;
            selectedTestSelect.disabled = true;
        } else {
            tests.forEach(test => {
                const option = document.createElement('option');
                option.value = test.value;
                option.textContent = test.label;
                selectedTestSelect.appendChild(option);
            });
        }
    });
    selectedTestSelect.disabled = true;

    userRegistrationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        userData = {
            name: document.getElementById('name').value,
            age: document.getElementById('age').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            careerInterest: document.getElementById('career-interest').value,
            average: document.getElementById('average').value,
            selectedTest: selectedTestSelect.value
        };
        registrationForm.style.display = 'none';
        instructionsScreen.style.display = 'block';
    });

    startTestBtn.addEventListener('click', () => {
        instructionsScreen.style.display = 'none';
        examenActivoId = userData.selectedTest;

        const contenedores = {
            'universitario': document.getElementById('test-universitario'),
            'bachillerato': document.getElementById('test-bachillerato'),
            'uam': document.getElementById('test-uam'),
            'comipems': document.getElementById('test-comipems'),
            'comipems_simulacion': document.getElementById('test-comipems2'),
            'unammedicina': document.getElementById('test-unammedicina'),
            'ipn': document.getElementById('test-ipn'),
            'cambridge_general': document.getElementById('test-cambridge-general'),
            'cambridge_ket': document.getElementById('test-cambridge-ket')
        };

        if (contenedores[examenActivoId]) {
            contenedores[examenActivoId].style.display = 'block';
            iniciarExamenUniversal(examenActivoId);
        } else {
            alert("No se seleccionó un examen válido. Por favor, reinicia.");
            registrationForm.style.display = 'block';
        }
    });

    // ==================================================================
    // 4. 🧠 MOTOR UNIVERSAL DE EXÁMENES
    // ==================================================================

    function getHtmlPrefix() {
        if (examenActivoId === 'universitario') return 'uni';
        if (examenActivoId === 'bachillerato') return 'bach';
        if (examenActivoId === 'comipems_simulacion') return 'comipems2';
        if (examenActivoId === 'starters_movers') return 'sm';
        if (examenActivoId === 'movers_exam') return 'me';
        if (examenActivoId === 'cambridge_general') return 'cg';
        if (examenActivoId === 'cambridge_ket') return 'ck'; // NUEVO PREFIJO
        return examenActivoId; 
    }

    function iniciarExamenUniversal(id) {
        preguntaActualIndex = 0;
        respuestasUsuario = [];
        preguntasActivas = [];

        try {
            // Mapeamos el array plano de preguntas desde datosExamenes.js
            if (id === 'uam') preguntasActivas = preguntasUAM;
            else if (id === 'ipn') preguntasActivas = preguntasIPN;
            else if (id === 'comipems') preguntasActivas = preguntasCOMIPEMS;
            else if (id === 'comipems_simulacion') preguntasActivas = preguntasCOMIPEMS2;
            else if (id === 'unammedicina') preguntasActivas = preguntasUnamedicina;
            else if (id === 'universitario') preguntasActivas = preguntasUniversitario;
            else if (id === 'bachillerato') preguntasActivas = preguntasBachillerato;
            // Cambridge
            else if (id === 'movers') preguntasActivas = Object.values(preguntasPorSeccionMovers).flat();
            else if (id === 'starters') preguntasActivas = Object.values(preguntasPorSeccionStarters).flat();
            else if (id === 'starters_movers') preguntasActivas = Object.values(preguntasPorSeccionStartersMovers).flat();
            else if (id === 'movers_exam') preguntasActivas = Object.values(preguntasPorSeccionMoversExam).flat();
            else if (id === 'cambridge_general') preguntasActivas = Object.values(preguntasPorSeccionCambridgeGeneral).flat();
            else if (id === 'cambridge_ket') preguntasActivas = Object.values(preguntasPorSeccionCambridgeKet).flat();

        } catch (error) {
            console.error(error);
            alert("🚨 ERROR CRÍTICO: No se pudieron cargar los datos del examen.");
            return;
        }

        generarPreguntasUniversal();
        mostrarPreguntaUniversal(0);
    }

    function generarPreguntasUniversal() {
        const prefix = getHtmlPrefix();
        const container = document.getElementById(`test-questions-container-${prefix}`);
        
        if (!container) {
            alert(`🚨 ERROR HTML: No se encontró un contenedor con el ID: test-questions-container-${prefix}`);
            return;
        }
        
        container.innerHTML = "";
        let numPregunta = 1;

        let iterador;
        if (examenActivoId === 'uam') iterador = { "Preguntas": preguntasUAM };
        else if (examenActivoId === 'ipn') iterador = preguntasPorSeccionIPN;
        else if (examenActivoId === 'comipems') iterador = preguntasPorSeccionComipems;
        else if (examenActivoId === 'comipems_simulacion') iterador = preguntasPorSeccionComipems2;
        else if (examenActivoId === 'unammedicina') iterador = preguntasPorSeccionUnammedicina;
        else if (examenActivoId === 'universitario') iterador = { "Preguntas": preguntasUniversitario };
        else if (examenActivoId === 'bachillerato') iterador = { "Preguntas": preguntasBachillerato };
        // Cambridge
        else if (examenActivoId === 'movers') iterador = preguntasPorSeccionMovers;
        else if (examenActivoId === 'starters') iterador = preguntasPorSeccionStarters;
        else if (examenActivoId === 'starters_movers') iterador = preguntasPorSeccionStartersMovers;
        else if (examenActivoId === 'movers_exam') iterador = preguntasPorSeccionMoversExam;
        else if (examenActivoId === 'cambridge_general') iterador = preguntasPorSeccionCambridgeGeneral;
        else if (examenActivoId === 'cambridge_ket') iterador = preguntasPorSeccionCambridgeKet;

        const isCambridge = ['movers', 'starters', 'starters_movers', 'movers_exam', 'cambridge_general', 'cambridge_ket'].includes(examenActivoId);

        for (const [seccion, preguntas] of Object.entries(iterador)) {
            if (!preguntas || !Array.isArray(preguntas)) continue; 
            
            if (seccion !== "Preguntas") {
                const style = isCambridge ? `style="color: var(--rojo); border-bottom: 2px solid var(--rojo); padding-bottom: 10px; margin-bottom: 20px;"` : '';
                container.innerHTML += `<h3 class="section-title-${prefix}" ${style}>${seccion}</h3>`;
            }

            preguntas.forEach((preg) => {
                const n = numPregunta;
                
                // GENERADOR DE ELEMENTO AUDIO
                const audioHTML = preg.audio ? `<div style="text-align: center; margin-bottom: 20px; background:#f4f4f4; padding:15px; border-radius:10px;"><p style="margin-bottom:10px; font-weight:bold; color:#555;">🔊 Escucha el siguiente audio:</p><audio controls style="width: 100%; max-width: 400px;"><source src="${preg.audio}" type="audio/mpeg">Tu navegador no soporta audios.</audio></div>` : "";

                // 4.1 Lógica Tests Vocacionales
                if (examenActivoId === 'universitario' || examenActivoId === 'bachillerato') {
                    const labelSi = examenActivoId === 'universitario' ? 'Me interesa' : 'Si';
                    const labelNo = examenActivoId === 'universitario' ? 'No me interesa' : 'No';
                    container.innerHTML += `
                        <div class="question" id="question-${prefix}-${n}">
                            <p><strong>${n}.</strong> ${preg}</p>
                            <div class="options-group">
                                <label><input type="radio" name="q-${prefix}-${n}" value="interesa" required> ${labelSi}</label>
                                <label><input type="radio" name="q-${prefix}-${n}" value="no-interesa" required> ${labelNo}</label>
                            </div>
                        </div>`;
                } 
                // 4.2 Lógica Especial Cambridge
                else if (isCambridge) {
                    if (preg.type === "reading") {
                        container.innerHTML += `
                            <div class="question reading-section" id="question-${prefix}-${n}">
                                <h4 style="color: var(--azul-fuerte); margin-bottom: 15px; font-size: 1.3rem;">${preg.title || ''}</h4>
                                <div style="background-color: var(--azul-claro); padding: 25px; border-radius: 8px; font-size: 1.15rem; line-height: 1.6; text-align: justify; border: 1px solid rgba(0, 86, 179, 0.2);">
                                    ${preg.text}
                                </div>
                                <p style="margin-top: 20px; font-style: italic; color: #666; text-align: center;">📖 Presiona "Siguiente" cuando estés listo.</p>
                            </div>`;
                    } 
                    else if (preg.type === "writing_example") {
                        const preguntaTexto = preg.p ? `<p style="font-size: 1.1rem; margin-bottom: 5px;">${preg.p}</p>` : "";
                        container.innerHTML += `
                            <div class="question reading-section" id="question-${prefix}-${n}">
                                <p style="color: red; margin-bottom: 15px;">* <span style="color: black;">${preg.instruction}</span></p>
                                <h4 style="color: purple; margin-bottom: 15px;">${preg.title}</h4>
                                <div style="display: flex; align-items: center; justify-content: center; background-color: white; border: 1px solid #ddd; padding: 20px; border-radius: 8px; gap: 30px; flex-wrap: wrap;">
                                    <div style="text-align: center;">
                                        ${preguntaTexto}
                                        <p style="font-style: italic; color: #555; font-size: 1.1rem;">${preg.exampleAnswer}</p>
                                    </div>
                                    <img src="${preg.img}" style="height: 100px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                                </div>
                                <p style="margin-top: 20px; font-style: italic; color: #666; text-align: center;">📖 Observa el ejemplo y presiona "Siguiente".</p>
                            </div>`;
                    }
                    else if (preg.type === "open_image" || preg.type === "scrambled_word" || preg.type === "writing_input") {
                        let innerHtml = '';
                        if (preg.type === "open_image") {
                            let subpreguntasHTML = "";
                            preg.subpreguntas.forEach((sub, idx) => {
                                subpreguntasHTML += `
                                    <div style="margin-bottom: 15px; text-align: left;">
                                        <p style="font-size: 1.1rem; color: #333; margin-bottom: 8px;"><strong>– ${sub.p}</strong></p>
                                        <input type="text" id="input-${prefix}-${n}-${idx}" placeholder="Tu respuesta..." style="width: 100%; padding: 10px; border-radius: 5px; border: 1px solid #ccc; font-family: inherit;">
                                    </div>`;
                            });
                            innerHtml = `
                                ${audioHTML}
                                <h4 style="background-color: orange; color: white; padding: 10px; border-radius: 5px; margin-bottom: 15px;">${preg.title}</h4>
                                <div style="text-align: center; margin-bottom: 20px;">
                                    <img src="${preg.img}" style="max-width: 100%; border-radius: 8px; border: 1px solid #ccc;">
                                </div>
                                <div style="background-color: #fcfcfc; padding: 15px; border-radius: 5px; border: 1px solid #eee;">
                                    ${subpreguntasHTML}
                                </div>`;
                        } else if (preg.type === "scrambled_word") {
                            innerHtml = `
                                ${audioHTML}
                                <div style="background-color: white; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; text-align: center; margin-bottom: 20px;">
                                    <p style="font-size: 1.5rem; font-weight: bold; letter-spacing: 3px;">${preg.scrambled}</p>
                                    <img src="${preg.img}" style="max-width: 250px; border-radius: 8px;">
                                </div>
                                <div style="background-color: #fcfcfc; padding: 15px; border-radius: 5px; border: 1px solid #eee;">
                                    <p style="font-size: 1.1rem; margin-bottom: 10px;">${preg.instruction}</p>
                                    <input type="text" id="input-${prefix}-${n}" placeholder="Tu respuesta..." style="width: 100%; padding: 12px; border-radius: 5px; border: 1px solid #ccc;">
                                </div>`;
                        } else {
                            const imagenMostrar = preg.img ? `<div style="text-align: center; margin-bottom: 20px;"><img src="${preg.img}" style="max-height: 150px; max-width: 100%; border-radius: 5px;"></div>` : '';
                            const isLongText = preg.bancoRespuestas && preg.bancoRespuestas.includes("dear");
                            
                            const inputBox = isLongText 
                                ? `<textarea id="input-${prefix}-${n}" placeholder="Escribe tu texto aquí..." rows="8" style="width: 100%; padding: 15px; border-radius: 5px; border: 1px solid #ccc; font-family: inherit; font-size: 1.05rem; resize: vertical;"></textarea>`
                                : `<input type="text" id="input-${prefix}-${n}" placeholder="Tu respuesta..." style="width: 100%; padding: 12px; border-radius: 5px; border: 1px solid #ccc; font-family: inherit; font-size: 1.1rem; border-bottom: 2px solid #ccc;">`;
                                
                            innerHtml = `
                                ${audioHTML}
                                <p style="font-size: 1.1rem; margin-bottom: 15px; color: red;">* <span style="color: black;">${preg.p}</span></p>
                                ${imagenMostrar}
                                ${inputBox}`;
                        }
                        container.innerHTML += `<div class="question" id="question-${prefix}-${n}">${innerHtml}</div>`;
                    }
                    else if (preg.type === "image_options") {
                        const opcionesHTML = preg.o.map((op, i) => {
                            const letra = String.fromCharCode(65 + i);
                            return `
                                <label style="border: 1px solid #ccc; border-radius: 8px; padding: 20px 15px; text-align: center; cursor: pointer; background: white; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 100%;">
                                    <div style="flex-grow: 1; display: flex; align-items: center; justify-content: center; margin-bottom: 15px;">
                                        <img src="${op.img}" style="max-height: 100px; max-width: 100%;">
                                    </div>
                                    <input type="radio" name="q-${prefix}-${n}" value="${letra}" style="margin: 0 0 10px 0; transform: scale(1.3); cursor: pointer;">
                                    <span style="font-size: 1.05rem; color: #333;">${op.text}</span>
                                </label>`;
                        }).join("");
                        container.innerHTML += `
                            <div class="question" id="question-${prefix}-${n}">
                                ${audioHTML}
                                <p style="font-size: 1.2rem; margin-bottom: 20px;"><strong>${n}.</strong> <span style="color: black;">${preg.p}</span></p>
                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; align-items: stretch;">${opcionesHTML}</div>
                            </div>`;
                    }
                    else {
                        // AQUÍ ESTÁ LA MAGIA QUE SOLUCIONA EL DESCUADRE DEL CSS GLOBAL
                        const opciones = preg.o.map((op, i) => {
                            const letra = String.fromCharCode(65 + i);
                            return `
                                <label style="display: flex !important; flex-direction: row !important; align-items: center !important; justify-content: flex-start !important; padding: 15px !important; border: 1px solid #ccc !important; border-radius: 8px !important; background: white !important; margin-bottom: 12px !important; width: 100% !important; box-sizing: border-box !important; cursor: pointer !important;">
                                    <div style="display: flex; align-items: center; justify-content: center; width: 30px; flex-shrink: 0; margin-right: 10px;">
                                        <input type="radio" name="q-${prefix}-${n}" value="${letra}" style="transform: scale(1.3); margin: 0; cursor: pointer;">
                                    </div>
                                    <span style="font-size: 1.1rem; color: #333; text-align: left; flex-grow: 1; word-wrap: break-word;">${op}</span>
                                </label>`;
                        }).join("");
                        
                        let imagenHTML = preg.img ? `<div style="text-align: center; margin-bottom: 25px;"><img src="${preg.img}" style="max-width: 100%; border-radius: 8px; max-height: 350px; object-fit: contain;"></div>` : "";
                        const pText = preg.p ? `<p style="font-size: 1.2rem; margin-bottom: 15px; text-align: left; color: #333;"><strong>${n}.</strong> ${preg.p}</p>` : "";
                        
                        container.innerHTML += `
                            <div class="question" id="question-${prefix}-${n}">
                                ${audioHTML}
                                ${imagenHTML} ${pText}
                                <div style="display: flex; flex-direction: column; width: 100%; gap: 5px;">
                                    ${opciones}
                                </div>
                            </div>`;
                    }
                } 
                // 4.3 Lógica Simuladores de Admisión (IPN, UAM, COMIPEMS...)
                else {
                    let imagenHTML = "";
                    if (preg.imgs && preg.imgs.length > 0) {
                        imagenHTML = '<div class="question-images" style="text-align: center; margin: 10px 0;">';
                        preg.imgs.forEach(src => {
                            imagenHTML += `<img src="${src}" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 5px; margin-bottom: 5px;">`;
                        });
                        imagenHTML += '</div>';
                    } else if (preg.img) {
                        const src = preg.img.includes('/') ? preg.img : `IMG_IPN/${preg.img}`;
                        imagenHTML = `<div style="text-align: center; margin: 10px 0;"><img src="${src}" style="max-width: 100%; height: auto; border-radius: 5px;"></div>`;
                    }

                    const opciones = preg.o.map((op, i) => {
                        const letra = String.fromCharCode(65 + i);
                        return `
                            <label class="option">
                                <input type="radio" name="q-${prefix}-${n}" value="${letra}">
                                <strong>${letra}.</strong> <span class="math-render">${op}</span>
                            </label>
                        `;
                    }).join("");

                    container.innerHTML += `
                        <div class="question" id="question-${prefix}-${n}">
                            <p><strong>${n}.</strong> <span class="math-render">${preg.p}</span></p>
                            ${imagenHTML}
                            <div class="options-group">${opciones}</div>
                        </div>
                    `;
                }
                numPregunta++;
            });
        }

        if (window.MathJax) MathJax.typesetPromise();
    }

    // Mostrar y ocultar las preguntas activas (Navegación)
    function mostrarPreguntaUniversal(index) {
        const prefix = getHtmlPrefix();
        const preguntasHtml = document.querySelectorAll(`#test-questions-container-${prefix} .question`);
        
        preguntasHtml.forEach((q, i) => {
            q.style.display = i === index ? "block" : "none";
            // Detener audios si se cambia de pregunta
            if (i !== index) {
                const audios = q.querySelectorAll('audio');
                audios.forEach(a => { a.pause(); a.currentTime = 0; });
            }
        });

        const nextBtn = document.getElementById(`next-btn-${prefix}`);
        const submitBtn = document.getElementById(`submit-btn-${prefix}`);
        const progressBar = document.getElementById(`progress-${prefix}`);

        if (nextBtn) nextBtn.style.display = index === preguntasActivas.length - 1 ? "none" : "inline-block";
        if (submitBtn) submitBtn.style.display = index === preguntasActivas.length - 1 ? "inline-block" : "none";

        if (progressBar) {
            const progreso = ((index + 1) / preguntasActivas.length) * 100;
            progressBar.style.width = progreso + "%";
        }

        // Mostrar título de la sección correcta
        document.querySelectorAll(`.section-title-${prefix}`).forEach(t => t.style.display = "none");
        const currentQuestionElement = document.getElementById(`question-${prefix}-${index + 1}`);
        if (currentQuestionElement) {
            let prev = currentQuestionElement.previousElementSibling;
            while (prev && prev.tagName !== "H3") prev = prev.previousElementSibling;
            if (prev) prev.style.display = "block";
        }
    }

    // Lógica para validar, guardar y avanzar
    function guardarRespuestaYAvanzar(esFinal = false) {
        const prefix = getHtmlPrefix();
        const n = preguntaActualIndex + 1;
        const preguntaActual = preguntasActivas[preguntaActualIndex];
        const isCambridge = ['movers', 'starters', 'starters_movers', 'movers_exam', 'cambridge_general', 'cambridge_ket'].includes(examenActivoId);

        if (isCambridge) {
            if (preguntaActual.type === "reading" || preguntaActual.type === "writing_example") {
                respuestasUsuario[preguntaActualIndex] = "LECTURA_COMPLETADA";
            } 
            else if (preguntaActual.type === "open_image") {
                let respuestasEstudiante = [];
                let todasContestadas = true;
                preguntaActual.subpreguntas.forEach((sub, idx) => {
                    const input = document.getElementById(`input-${prefix}-${n}-${idx}`);
                    if (input.value.trim() === "") todasContestadas = false;
                    respuestasEstudiante.push(input.value.trim());
                });
                if (!todasContestadas) {
                    alert(`Por favor, llena todas las cajas de texto para ${esFinal ? 'finalizar' : 'continuar'}.`);
                    return false;
                }
                respuestasUsuario[preguntaActualIndex] = respuestasEstudiante;
            } 
           else if (preguntaActual.type === "scrambled_word" || preguntaActual.type === "writing_input") {
    const input = document.getElementById(`input-${prefix}-${n}`);
    const texto = input.value.trim();

    // Validar que no esté vacío
    if (texto === "") {
        alert(`Por favor, escribe tu respuesta para ${esFinal ? 'finalizar' : 'continuar'}.`);
        return false;
    }

    // VALIDACIÓN PARA FCE (cambridge_general)
    if (examenActivoId === 'cambridge_general') {
        const palabras = texto.split(/\s+/).filter(p => p.length > 0);
        const cantidad = palabras.length;

        if (cantidad < 100 || cantidad > 150) {
            alert(`Tu texto debe tener entre 100 y 150 palabras. Actualmente tienes ${cantidad}.`);
            return false;
        }
    }

    // Guardar respuesta
    respuestasUsuario[preguntaActualIndex] = texto;
}
            else {
                const selector = `input[name="q-${prefix}-${n}"]:checked`;
                const seleccionada = document.querySelector(selector);
                if (!seleccionada) {
                    alert(`Selecciona una respuesta para ${esFinal ? 'finalizar' : 'continuar'}.`);
                    return false;
                }
                respuestasUsuario[preguntaActualIndex] = seleccionada.value;
            }
        } else {
            const selector = `input[name="q-${prefix}-${n}"]:checked`;
            const seleccionada = document.querySelector(selector);
            if (!seleccionada) {
                alert(`Selecciona una respuesta para ${esFinal ? 'finalizar' : 'continuar'}.`);
                return false;
            }
            respuestasUsuario[preguntaActualIndex] = seleccionada.value;
        }

        if (!esFinal) {
            preguntaActualIndex++;
            mostrarPreguntaUniversal(preguntaActualIndex);
        }
        return true;
    }

    function manejarBotonSiguiente() {
        guardarRespuestaYAvanzar(false);
    }

    function manejarBotonSubmit() {
        if (!guardarRespuestaYAvanzar(true)) return;

        const isCambridge = ['movers', 'starters', 'starters_movers', 'movers_exam', 'cambridge_general', 'cambridge_ket'].includes(examenActivoId);
        const prefix = getHtmlPrefix();
        
        if (!isCambridge) displayUserInfo();

        if (examenActivoId === 'universitario' || examenActivoId === 'bachillerato') {
            const scores = examenActivoId === 'universitario' ? calculateResultsUniversitario() : calculateResultsBachillerato();
            displayResults(scores, examenActivoId);
            document.getElementById(`test-${examenActivoId}`).style.display = "none";
            resultsSection.style.display = "block";
        } 
        else if (isCambridge) {
            const resultado = calificarCambridge();
            let titulos = {
                'movers': 'Resultados Examen Movers',
                'starters': 'Resultados Examen Starters',
                'starters_movers': 'Resultados A2 Starters & Movers',
                'movers_exam': 'Resultados Movers Exam',
                'cambridge_general': 'Resultados de Inglés General',
                'cambridge_ket': 'Resultados KET Cambridge'
            };
            
            document.getElementById('cambridge-score-details').innerHTML = `
                <div class="career-card top-area">
                    <h3 style="text-align:center;">${titulos[examenActivoId]}</h3>
                    <p style="text-align:center; font-size: 1.2rem;"><strong>Aciertos Totales:</strong> ${resultado.aciertos} de ${resultado.total}</p>
                    <p style="text-align:center; font-size: 1.2rem;"><strong>Calificación Global:</strong> ${resultado.porcentaje}%</p>
                </div>
            `;
            
            const idContenedorHTML = {'sm': 'test-starters-movers', 'me': 'test-movers-exam', 'cg': 'test-cambridge-general', 'ck': 'test-cambridge-ket'}[prefix] || `test-${prefix}`;
            document.getElementById(idContenedorHTML).style.display = "none";
            document.getElementById('results-cambridge').style.display = "block";
        }
        else {
            let aciertos = 0;
            preguntasActivas.forEach((p, i) => { if (respuestasUsuario[i] === p.c) aciertos++; });
            const porcentaje = ((aciertos / preguntasActivas.length) * 100).toFixed(2);

            let tituloExamen = "Resultados del Examen";
            const opcionMenu = testCatalog.admision.find(t => t.value === examenActivoId);
            if(opcionMenu) tituloExamen = opcionMenu.label;

            resultsCards.innerHTML = `
                <div class="career-card top-area">
                    <h3>${tituloExamen}</h3>
                    <p><strong>Aciertos:</strong> ${aciertos} de ${preguntasActivas.length}</p>
                    <p><strong>Calificación:</strong> ${porcentaje}%</p>
                </div>
            `;
            mostrarDesgloseUniversal();
            const idContenedorHTML = {'comipems2': 'test-comipems2'}[prefix] || `test-${prefix}`;
            document.getElementById(idContenedorHTML).style.display = "none";
            resultsSection.style.display = "block";
        }
        window.scrollTo(0, 0);
    }

    // Generar el Desglose Universal para exámenes de admisión
    function mostrarDesgloseUniversal() {
        const contenedor = document.getElementById("uam-details");
        contenedor.innerHTML = "<h3>Desglose de respuestas por sección</h3>";
        
        let preguntaGlobalNum = 1;
        let iterador;
        
        if (examenActivoId === 'uam') iterador = { "Preguntas": preguntasUAM };
        else if (examenActivoId === 'ipn') iterador = preguntasPorSeccionIPN;
        else if (examenActivoId === 'comipems') iterador = preguntasPorSeccionComipems;
        else if (examenActivoId === 'comipems_simulacion') iterador = preguntasPorSeccionComipems2;
        else if (examenActivoId === 'unammedicina') iterador = preguntasPorSeccionUnammedicina;

        for (const [seccion, preguntas] of Object.entries(iterador)) {
            if (seccion !== "Preguntas") contenedor.innerHTML += `<h4>${seccion}</h4>`;

            preguntas.forEach((p) => {
                const num = preguntaGlobalNum;
                const correcta = p.c;
                const respuesta = respuestasUsuario[num - 1] || "Sin responder";
                
                let imagenHTML = "";
                if (p.img) {
                    const src = p.img.includes('/') ? p.img : `IMG_IPN/${p.img}`;
                    imagenHTML = `<div style="text-align: center; margin: 10px 0;"><img src="${src}" style="max-width: 200px;"></div>`;
                }

                const estado = (respuesta === correcta)
                    ? `<span style="color: green; font-weight: bold;">✔ Correcta</span>`
                    : `<span style="color: red; font-weight: bold;">✘ Incorrecta</span>`;

                contenedor.innerHTML += `
                <div class="uam-detail-card" style="border:1px solid #ddd; padding:10px; margin:10px 0; border-radius:8px;">
                    <p><strong>${num}.</strong> <span class="math-render">${p.p}</span></p>
                    ${imagenHTML}
                    <p><strong>Tu respuesta:</strong> ${respuesta}</p>
                    <p><strong>Respuesta correcta:</strong> ${correcta}</p>
                    <p>${estado}</p>
                </div>`;
                preguntaGlobalNum++;
            });
        }
        if (window.MathJax) MathJax.typesetPromise();
    }

    // ==================================================================
    // 5. ASIGNACIÓN DE EVENTOS DE BOTONES
    // ==================================================================
    
    // Asignar eventos de Siguiente y Finalizar a todos los exámenes
    ['uni', 'bach', 'uam', 'comipems', 'comipems2', 'unammedicina', 'ipn', 'movers', 'starters', 'sm', 'me', 'cg', 'ck'].forEach(prefix => {
        const btnSiguiente = document.getElementById(`next-btn-${prefix}`);
        const btnSubmit = document.getElementById(`submit-btn-${prefix}`);
        if(btnSiguiente) btnSiguiente.addEventListener('click', manejarBotonSiguiente);
        if(btnSubmit) btnSubmit.addEventListener('click', manejarBotonSubmit);
    });

    // Eventos de los botones de Cambridge en la pantalla principal
    ['movers', 'starters', 'starters-movers', 'movers-exam', 'cambridge-ket', 'cambridge-general'].forEach(id => {
        const btn = document.getElementById(`btn-start-${id}`);
        if(btn) {
            btn.addEventListener('click', () => {
                const internalId = id.replace('-', '_');
                examenActivoId = internalId;
                document.getElementById('cambridge-cards').style.display = 'none';
                const intro = document.getElementById('cambridge-intro-text');
                if (intro) intro.style.display = 'none';
                
                const containerId = id === 'movers' ? 'test-movers' : `test-${id}`;
                const elem = document.getElementById(containerId) || document.getElementById('testMovers');
                if(elem) elem.style.display = 'block';
                
                iniciarExamenUniversal(internalId);
            });
        }
    });

    // ==================================================================
    // 6. FUNCIONES ESPECÍFICAS DE CALIFICACIÓN Y RESULTADOS
    // ==================================================================

    function calificarCambridge() {
        let aciertos = 0;
        let evaluables = 0;

        preguntasActivas.forEach((p, i) => {
            if (p.type === "reading" || p.type === "writing_example") return;
            
            if (p.type === "open_image") {
                p.subpreguntas.forEach((sub, idx) => {
                    evaluables++;
                    const resp = respuestasUsuario[i][idx].toLowerCase().trim();
                    let esCorrecta = false;
                    for (let k = 0; k < sub.bancoRespuestas.length; k++) {
                        if (resp === sub.bancoRespuestas[k].toLowerCase().trim() || resp.includes(sub.bancoRespuestas[k].toLowerCase().trim())) {
                            esCorrecta = true; break;
                        }
                    }
                    if (esCorrecta) aciertos++;
                });
            } else {
                evaluables++;
                if (p.type === "scrambled_word") {
                    if ((respuestasUsuario[i] || "").toLowerCase().trim() === p.c.toLowerCase().trim()) aciertos++;
                } else if (p.type === "writing_input") {
                    const resp = (respuestasUsuario[i] || "").toLowerCase().trim();
                    let esCorrecta = false;
                    for (let k = 0; k < p.bancoRespuestas.length; k++) {
                        if (resp.includes(p.bancoRespuestas[k].toLowerCase())) {
                            esCorrecta = true; break;
                        }
                    }
                    if (esCorrecta) aciertos++;
                } else {
                    if (respuestasUsuario[i] === p.c) aciertos++;
                }
            }
        });
        const porcentaje = evaluables > 0 ? ((aciertos / evaluables) * 100).toFixed(0) : 0;
        return { aciertos, total: evaluables, porcentaje };
    }

    function calculateResultsUniversitario() {
        const scores = { 'arte': 0, 'sociales': 0, 'economica': 0, 'ciencia': 0, 'ecologicas': 0 };
        const questionToArea = {};
        for (const area in mapeoAreasUniversitario) {
            mapeoAreasUniversitario[area].forEach(qNum => {
                if (!questionToArea[qNum]) questionToArea[qNum] = [];
                questionToArea[qNum].push(area);
            });
        }
        for (let i = 1; i <= preguntasUniversitario.length; i++) {
            const selectedOption = document.querySelector(`input[name="q-uni-${i}"]:checked`);
            if (selectedOption && selectedOption.value === 'interesa') {
                if (questionToArea[i]) questionToArea[i].forEach(area => scores[area]++);
            }
        }
        return scores;
    }

    function calculateResultsBachillerato() {
        const scores = { 'C': 0, 'H': 0, 'A': 0, 'S': 0, 'I': 0, 'D': 0, 'E': 0 };
        const questionToArea = {};
        for (const area in mapeoAreasBachillerato) {
            mapeoAreasBachillerato[area].forEach(qNum => {
                if (!questionToArea[qNum]) questionToArea[qNum] = [];
                questionToArea[qNum].push(area);
            });
        }
        for (let i = 1; i <= preguntasBachillerato.length; i++) {
            const selectedOption = document.querySelector(`input[name="q-bach-${i}"]:checked`);
            if (selectedOption && selectedOption.value === 'interesa') {
                if (questionToArea[i]) questionToArea[i].forEach(area => scores[area]++);
            }
        }
        return scores;
    }

    function displayUserInfo() {
        let careerInterestText = 'No especificada';
        if (userData.careerInterest) {
            const option = document.querySelector(`#career-interest option[value="${userData.careerInterest}"]`);
            if (option) careerInterestText = option.textContent;
        }

        userDetails.innerHTML = `
            <div class="user-detail"><strong>Nombre:</strong> ${userData.name}</div>
            <div class="user-detail"><strong>Edad:</strong> ${userData.age} años</div>
            <div class="user-detail"><strong>Teléfono:</strong> ${userData.phone}</div>
            <div class="user-detail"><strong>Correo:</strong> ${userData.email}</div>
            <div class="user-detail"><strong>Carrera de interés:</strong> ${careerInterestText}</div>
            <div class="user-detail"><strong>Promedio académico:</strong> ${userData.average}</div>
        `;
    }

    function displayResults(scores, testType) {
        resultsCards.innerHTML = '';
        const areasProfesionales = (testType === 'universitario') ? areasProfesionalesUniversitario : areasProfesionalesBachillerato;
        const sortedScores = Object.entries(scores).sort(([, a], [, b]) => b - a);
        let topScore = sortedScores.length > 0 ? sortedScores[0][1] : 0;

        sortedScores.forEach(([areaKey, score]) => {
            const areaInfo = areasProfesionales[areaKey];
            if (!areaInfo) return;

            const isTopArea = score === topScore && topScore > 0 ? 'top-area' : '';
            const listTitle = (testType === 'bachillerato') ? 'Aptitudes y características:' : 'Sugerencias:';
            const professionsList = areaInfo.profesiones.map(prof => `<li>${prof}</li>`).join('');

            resultsCards.innerHTML += `
                <div class="career-card ${isTopArea}">
                    <h3>${areaInfo.titulo} (Puntuación: ${score})</h3>
                    <p><strong>${listTitle}</strong></p>
                    <ul>${professionsList}</ul>
                </div>
            `;
        });

        const uamDetails = document.getElementById("uam-details");
        if (uamDetails) uamDetails.innerHTML = '';
    }

    // ==================================================================
    // 7. BOTONES DE REINICIO
    // ==================================================================
    restartBtn.addEventListener('click', () => {
        userData = {};
        examenActivoId = null;
        preguntasActivas = [];
        respuestasUsuario = [];
        preguntaActualIndex = 0;

        userRegistrationForm.reset();
        resultsCards.innerHTML = '';
        const uamDetails = document.getElementById("uam-details");
        if (uamDetails) uamDetails.innerHTML = '';

        resultsSection.style.display = 'none';
        ['test-universitario', 'test-bachillerato', 'test-uam', 'test-comipems', 'test-comipems2', 'test-unammedicina', 'test-ipn', 'test-movers', 'test-starters', 'test-starters-movers', 'test-movers-exam', 'test-cambridge-general', 'test-cambridge-ket'].forEach(id => {
            const el = document.getElementById(id) || document.getElementById(id.replace('-', ''));
            if(el) el.style.display = 'none';
        });
        
        instructionsScreen.style.display = 'none';
        registrationForm.style.display = 'block';
    });

    const restartCambridgeBtn = document.getElementById('restart-cambridge-btn');
    if (restartCambridgeBtn) {
        restartCambridgeBtn.addEventListener('click', () => {
            document.getElementById('results-cambridge').style.display = 'none';
            document.getElementById('cambridge-cards').style.display = 'flex'; // o 'grid'|
            const cambridgeIntroText = document.getElementById('cambridge-intro-text');
            if (cambridgeIntroText) cambridgeIntroText.style.display = 'block';
            
            // Ocultar contenedores de test de cambridge
            ['test-movers', 'test-starters', 'test-starters-movers', 'test-movers-exam', 'test-cambridge-general', 'test-cambridge-ket'].forEach(id => {
                const el = document.getElementById(id) || document.getElementById(id.replace('-', ''));
                if(el) el.style.display = 'none';
            });
        });
    }
});