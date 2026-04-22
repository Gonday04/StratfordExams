// ==========================================================
// 1. DATOS TEST UNIVERSITARIO
// ==========================================================
const totalQuestionsUniversitario = 80;
const preguntasUniversitario = [
    "Diseñar programas de computación y explorar nuevas aplicaciones tecnológicas para uso del internet.", // 1
    "Criar, cuidar y tratar animales domésticos y de campo.", // 2
    "Investigar sobre áreas verdes, medioambiente y cambios climáticos.", // 3
    "Ilustrar, dibujar y animar digitalmente.", // 4
    "Seleccionar, capacitar y motivar al personal de una organización o empresa.", // 5
    "Realizar excavaciones para descubrir restos del pasado.", // 6
    "Resolver problemas de cálculo para construir un puente.", // 7
    "Diseñar cursos para enseñar a la gente sobre temas de salud e higiene.", // 8
    "Tocar un instrumento y componer música.", // 9
    "Planificar las metas de una organización pública o privada a mediano y largo plazos.", // 10
    "Diseñar y planificar la producción masiva de artículos como muebles, autos, equipos de oficina, empaques y envases para alimentos y otros.", // 11
    "Diseñar logotipos y portadas de una revista.", // 12
    "Organizar eventos y atender a sus asistentes.", // 13
    "Atender la salud de personas enfermas.", // 14
    "Controlar ingresos y egresos de fondos y presentar el balance final de una institución.", // 15
    "Hacer experimentos con plantas (frutas, árboles, flores).", // 16
    "Concebir planos para viviendas, edificios y ciudadelas.", // 17
    "Investigar y probar nuevos productos farmacéuticos.", // 18
    "Hacer propuestas y formular estrategias para aprovechar las relaciones económicas entre dos países.", // 19
    "Pintar, hacer esculturas, ilustrar libros de arte, etc.", // 20
    "Elaborar campañas para introducir un nuevo producto al mercado.", // 21
    "Examinar y tratar los problemas visuales.", // 22
    "Defender a clientes individuales o empresas en juicios de diferente naturaleza.", // 23
    "Diseñar máquinas que puedan simular actividades humanas.", // 24
    "Investigar las causas y efectos de los trastornos emocionales.", // 25
    "Supervisar las ventas de un centro comercial.", // 26
    "Atender y realizar ejercicios a personas que tienen limitaciones físicas, problemas de lenguaje, etc.", // 27
    "Prepararse para ser modelo profesional.", // 28
    "Aconsejar a las personas sobre planes de ahorro e inversiones.", // 29
    "Elaborar mapas, planos e imágenes para el estudio y análisis de datos geográficos.", // 30
    "Diseñar juegos interactivos electrónicos para computadora.", // 31
    "Realizar el control de calidad de los alimentos.", // 32
    "Tener un negocio propio de tipo comercial.", // 33
    "Escribir artículos periodísticos, cuentos, novelas y otros.", // 34
    "Redactar guiones y libretos para un programa de tv.", // 35
    "Organizar un plan de distribución y venta de un gran almacén.", // 36
    "Estudiar la diversidad cultural en el ámbito rural y urbano.", // 37
    "Gestionar y evaluar convenios internacionales de cooperación para el desarrollo social.", // 38
    "Crear campañas publicitarias.", // 39
    "Trabajar investigando la reproducción de peces, camarones y otros animales marinos.", // 40
    "Dedicarse a fabricar productos alimenticios de consumo masivo.", // 41
    "Gestionar y evaluar proyectos de desarrollo en una institución educativa y/o fundación.", // 42
    "Rediseñar y decorar espacios físicos en viviendas, oficinas y locales comerciales.", // 43
    "Administrar una empresa de turismo o agencias de viaje.", // 44
    "Aplicar métodos alternativos a la medicina tradicional, para atender personas con dolencias de diversa índole.", // 45
    "Diseñar ropa para niños, jóvenes y adultos de manera sustentable.", // 46
    "Investigar organismos vivos para elaborar vacunas.", // 47
    "Manejar o dar mantenimiento a dispositivos tecnológicos en aviones, barcos, radares, etc.", // 48
    "Estudiar idiomas extranjeros - actuales y antiguos - para hacer traducción.", // 49
    "Restaurar piezas y obras de arte.", // 50
    "Revisar y dar mantenimiento a artefactos eléctricos, electrónicos y computadoras.", // 51
    "Enseñar a niños de cero a cinco años.", // 52
    "Investigar y sondear nuevos mercados.", // 53
    "Atender la salud dental de las personas.", // 54
    "Tratar a niños, jóvenes y adultos con problemas psicológicos.", // 55
    "Crear estrategias de promoción y venta de nuevos productos nacionales en el mercado internacional.", // 56
    "Planificar y recomendar dietas para personas diabéticas o con sobrepeso.", // 57
    "Trabajar en una empresa petrolera en un cargo técnico como control de la producción.", // 58
    "Administrar una empresa (familiar, privada o pública).", // 59
    "Tener un taller de reparación y mantenimiento de carros, tractores, etcétera.", // 60
    "Ejecutar proyectos de extracción minera y metalúrgica.", // 61
    "Asistir a directivos de multinacionales con manejo de varios idiomas.", // 62
    "Diseñar programas educativos para niños con discapacidad.", // 63
    "Aplicar conocimientos de estadística en investigaciones en diversas áreas (social, administrativa, salud, etcétera).", // 64
    "Fotografiar hechos históricos, lugares significativos, rostros, paisajes para el área publicitaria, artística, periodística y social.", // 65
    "Trabajar en museos y bibliotecas nacionales e internacionales.", // 66
    "Ser parte de un grupo de teatro.", // 67
    "Producir cortometrajes, spots publicitarios, programas educativos, de ficción, etc.", // 68
    "Estudiar la influencia entre las corrientes marinas y el clima y sus consecuencias ecológicas.", // 69
    "Conocer las distintas religiones (su filosofía) y transmitirlas a la comunidad en general.", // 70
    "Asesorar a inversionistas en la compra de bienes y acciones en mercados nacionales e internacionales.", // 71
    "Estudiar grupos étnicos, sus costumbres, tradiciones, cultura y compartir sus vivencias.", // 72
    "Explora el espacio sideral, los planetas, características y componentes.", // 73
    "Mejorar la imagen facial y corporal de las personas aplicando diferentes técnicas.", // 74
    "Decorar jardines de casas y parques públicos.", // 75
    "Administrar y renovar menús de comida en un hotel o restaurante.", // 76
    "Trabajar como presentador de televisión, locutor de radio y televisión, animador de programas culturales y concursos.", // 77
    "Diseñar y ejecutar programas de turismo.", // 78
    "Administrar y ordenar adecuadamente la ocupación del espacio físico de ciudades, países etc., utilizando imágenes de satélite y mapas.", // 79
    "Organizar, planificar y administrar centros educativos." // 80
];
const mapeoAreasUniversitario = {
    'arte': [4, 9, 12, 20, 28, 31, 35, 39, 43, 46, 50, 56, 57, 67, 68, 77],
    'sociales': [6, 13, 23, 25, 34, 37, 38, 42, 49, 55, 63, 66, 70, 72, 78],
    'economica': [5, 10, 15, 19, 21, 26, 29, 33, 36, 44, 53, 56, 59, 62, 71, 80],
    'ciencia': [1, 7, 11, 17, 18, 24, 30, 41, 48, 51, 58, 60, 61, 64, 73, 79],
    'ecologicas': [2, 3, 8, 14, 16, 22, 27, 32, 40, 45, 47, 54, 57, 69, 74, 76]
};
const areasProfesionalesUniversitario = {
    'arte': { titulo: 'Área 1: Arte y creatividad', profesiones: ['Diseño Gráfico', 'Diseño de Interiores', 'Diseño de Modas', 'Artes Plásticas', 'Dibujo Publicitario', 'Restauración', 'Modelaje', 'Fotografía', 'Locución', 'Actuación', 'Producción Audiovisuall', 'Música', 'Teatro'] },
    'sociales': { titulo: 'Área 2: Ciencias Sociales', profesiones: ['Psicología', 'Trabajo Social', 'Idiomas', 'Educación', 'Historia', 'Periodismo', 'Derecho', 'Ciencias Políticas', 'Sociología', 'Antropología', 'Relaciones Internacionales', 'Comunicación Social', 'Hotelería y Turismo', 'Teología'] },
    'economica': { titulo: 'Área 3: Económica, administrativa y financiera', profesiones: ['Administración de Empresas', 'Contabilidad', 'Auditoría', 'Ventas', 'Marketing', 'Economía', 'Negocios Internacionales', 'Comercio Exterior', 'Banca y Finanzas', 'Recursos Humanos', 'Comercio Electrónico', 'Emprendimiento'] },
    'ciencia': { titulo: 'Área 4: Ciencia y tecnología', profesiones: ['Ingeniería en Sistemas', 'Geología', 'Ingeniería Civil', 'Arquitectura', 'Electrónica', 'Telecomunicaciones', 'Ingeniería Mecatrónica', 'Robótica', 'Ingeniería Mecánica', 'Ingeniería Industrial', 'Física', 'Matemáticas', 'Estadística', 'Ingeniería Automotriz', 'Biotecnología', 'Astronomía'] },
    'ecologicas': { titulo: 'Área 5: Ciencias ecológicas, biológicas y de salud', profesiones: ['Biología', 'Bioquímica', 'Farmacología', 'Biología Marina', 'Biotecnología', 'Veterinaria', 'Nutrición', 'Medicina', 'Odontología', 'Enfermería', 'Oceanografía', 'Agronomía', 'Ingeniería de alimentos', 'Gastronomía', 'Gestión Ambiental', 'Optometría'] }
};

// ==========================================================
// 2. DATOS TEST BACHILLERATO
// ==========================================================
const totalQuestionsBachillerato = 98;
const preguntasBachillerato = [
    "¿Aceptarías trabajar escribiendo artículos en la sección económica de un diario?", // 1
    "¿Te ofrecerías para organizar la despedida de soltero de uno de tus amigos?", // 2
    "¿Te gustaría dirigir/crear un proyecto de urbanización en tu provincia?", // 3
    "¿A una frustración siempre opones un pensamiento positivo?", // 4
    "¿Te dedicarías a soccorrer a personas accidentadas o atacadas por asaltantes?", // 5
    "¿Cuando eras chico, te interesaba saber cómo estaban construidos tus juguetes?", // 6
    "¿Te interesan más los misterios de la naturaleza que los secretos de la tecnología?", // 7
    "¿Escuchas atentamente los problemas que te plantean tus amigos?", // 8
    "¿Te ofrecerías para explicar a tus compañeros un determinado tema que ellos no entendieron?", // 9
    "¿Eres exigente y crítico con tu equipo de trabajo?", // 10
    "¿Te atrae armar rompecabezas o puzzles?", // 11
    "¿Te gustaría conocer la diferencia entre macroeconomía y microeconomía?", // 12
    "¿Usar uniforme te hace sentir distinto, importante?", // 13
    "¿Participarías como profesional en un espectáculo de acrobacia aérea?", // 14
    "¿Organizas tu dinero de manera que te alcance hasta el próximo cobro?", // 15
    "¿Convences fácilmente a otras personas sobre la validez de tus argumentos?", // 16
    "¿Te gustaría estar informado sobre los nuevos descubrimientos que se están realizando sobre el origen del Universo?", // 17
    "¿Ante una situación de emergencia actúas rápidamente?", // 18
    "¿Cuando tienes que resolver un problema matemático, perseveras hasta encontrar la solución?", // 19
    "¿Si te convocara tu club preferido para planificar, organizar y dirigir un campo de deportes, aceptarías?", // 20
    "¿Eres el que pone un toque de alegría en las fiestas?", // 21
    "¿Crees que los detalles son tan importantes como el todo?", // 22
    "¿Te sentirías a gusto trabajando en un ámbito hospitalario?", // 23
    "¿Te gustaría participar para mantener el orden ante grandes desórdenes y cataclismos?", // 24
    "¿Pasarías varias horas leyendo algún libro de tu interés?", // 25
    "¿Planificas detalladamente tus trabajos antes de empezar?", // 26
    "¿Entablas una relación casi personal con tu ordenador?", // 27
    "¿Disfrutas modelando con arcilla?", // 28
    "¿Ayudas habitualmente a los no videntes (a quien lo necesite) a cruzar la calle?", // 29
    "¿Consideras importante que desde la educación secundaria se fomente la actitud crítica y la participación activa?", // 30
    "¿Aceptarías que las mujeres formaran parte de las fuerzas armadas bajo las mismas normas que los hombres?", // 31
    "¿Te gustaría crear nuevas técnicas para descubrir las patologías de algunas enfermedades a través del microscopio?", // 32
    "¿Participarías en una campaña de prevención contra la enfermedad como el sida?", // 33
    "¿Te interesan los temas relacionados al pasado y a la evolución del hombre?", // 34
    "¿Te incluirías en un proyecto de investigación de los movimientos sísmicos y sus consecuencias?", // 35
    "¿Fuera de los horarios escolares, dedicas algún día de la semana a la realización de actividades corporales?", // 36
    "¿Te interesan las actividades de mucha acción y de reacción rápida en situaciones imprevistas y de algún peligro?", // 37
    "¿Te ofrecerías para colaborar como voluntario en los gabinetes espaciales de la NASA?", // 38
    "¿Te gusta más el trabajo manual que el trabajo intelectual?", // 39
    "¿Estarías dispuesto a renunciar a un momento placentero para ofrecer tu servicio como profesional (ayudando)?", // 40
    "¿Participarías de una investigación sobre la violencia en el fútbol?", // 41
    "¿Te gustaría trabajar en un laboratorio mientras estudias?", // 42
    "¿Arriesgarías tu vida para salvar la vida de otro que no conoces?", // 43
    "¿Te agradaría hacer un curso de primeros auxilios?", // 44
    "¿Tolerarías empezar tantas veces como fuere necesario hasta obtener el logro deseado?", // 45
    "¿Distribuyes tu horarios del día adecuadamente para poder hacer todo lo planeado?", // 46
    "¿Harías un curso para aprender a fabricar los instrumentos y/o piezas de las máquinas o aparatos con que trabajas?", // 47
    "¿Elegirías una profesión en la tuvieras que estar algunos meses alejado de tu familia, por ejemplo el marino?", // 48
    "¿Te radicarías en una zona agrícola-ganadera para desarrollar tus actividades como profesional?", // 49
    "¿Cuando estás en un grupo trabajando, te entusiasma producir ideas originales y que sean tenidas en cuenta?", // 50
    "¿Te resulta fácil coordinar un grupo de trabajo?", // 51
    "¿Te resultó interesante el estudio de las ciencias biológicas?", // 52
    "¿Si una gran empresa solicita un profesional como gerente de comercialización, te sentirías a gusto desempeñando ese rol?", // 53
    "¿Te incluirías en un proyecto nacional de desarrollo de la principal fuente de recursos de tu provincia?", // 54
    "¿Tienes interés por saber cuales son las causas que determinan ciertos fenómenos, aunque saberlo no altere tu vida?", // 55
    "¿Descubriste algún filósofo o escritor que haya expresado tus mismas ideas con antelación?", // 56
    "¿Desearías que te regalen algún instrumento musical para tu cumpleaños?", // 57
    "¿Aceptarías colaborar con el cumplimiento de las normas en lugares públicos?", // 58
    "¿Crees que tus ideas son importantes, y haces todo lo posible para ponerlas en práctica?", // 59
    "¿Cuando se descompone un artefacto en tu casa, te dispones prontamente a repararlo?", // 60
    "¿Formarías parte de un equipo de trabajo orientado a la preservación de la flora y la fauna en extinción?", // 61
    "¿Leerías revistas relacionadas con los últimos avances científicos y tecnológicos en el área de la salud?", // 62
    "¿Preservar las raíces culturales de nuestro país, te parece importante y necesario?", // 63
    "¿Te gustaría realizar una investigación que contribuyera a hacer más justa la distribución de la riqueza?", // 64
    "¿Te gustaría realizar tareas auxiliares en una nave, como por ejemplo izado y arriado de velas, pintura y conservación del casco, arreglo de averías, conservación de motores, etc.?", // 65
    "¿Crees que un país debe poseer la más alta tecnología armamentista, a cualquier precio?", // 66
    "¿La libertad y la justicia son valores fundamentales en tu vida?", // 67
    "¿Aceptarías hacer una práctica pagadas en una industria de productos alimenticios en el sector de control de calidad?", // 68
    "¿Consideras que la salud pública debe ser prioritaria, gratuita y eficiente para todos?", // 69
    "¿Te interesaría investigar sobre alguna nueva vacuna?", // 70
    "¿En un equipo de trabajo, preferís el rol de coordinador?", // 71
    "¿En una discusión entre amigos, te ofreces como mediador?", // 72
    "¿Estás de acuerdo con la formación de un cuerpo de soldados profesionales?", // 73
    "¿Lucharías por una causa justa hasta las últimas consecuencias?", // 74
    "¿Te gustaría investigar científicamente sobre cultivos agrícolas?", // 75
    "¿Harías un nuevo diseño de una prenda pasada de moda, ante una reunión?", // 76
    "¿Visitarías un observatorio astronómico para conocer en acción el funcionamiento de los aparatos?", // 77
    "¿Dirigirías el área de importación y exportación de una empresa?", // 78
    "¿Te cohíbes/inhibes -cortas- al entrar a un lugar nuevo con gente desconocida?", // 79
    "¿Te gratificaría el trabajar con niños?", // 80
    "¿Harías el diseño de un cartel o afiche para una campaña contra el sida?", // 81
    "¿Dirigirías un grupo de teatro independiente?", // 82
    "¿Enviarías tu curriculum a una empresa automotriz que solicita gerente para su área de producción?", // 83
    "¿Participarías en un grupo de defensa internacional dentro de alguna fuerza armada?", // 84
    "¿Te costearías tus estudios trabajando en una auditoría -revisión de las cuentas-?", // 85
    "¿Eres de los que defiendes causas perdidas?", // 86
    "¿Ante una emergencia epidémica participarías en una campaña brindando tu ayuda?", // 87
    "¿Sabrías responder que significa ADN o ARN?", // 88
    "¿Elegirías una carrera cuyo instrumento de trabajo fuere la utilización de un idioma extranjero?", // 89
    "¿Trabajar con objetos, máquinas, te resulta más gratificante que trabajar con personas?", // 90
    "¿Te resultaría gratificante ser asesor contable en una empresa reconocida?", // 91
    "¿Ante un llamado solidario, te ofrecerías para cuidar a un enfermo?", // 92
    "¿Te atrae investigar sobre los misterios del universo, por ejemplo los agujeros negros?", // 93
    "¿El trabajo individual te resulta más rápido y efectivo que el trabajo grupal?", // 94
    "¿Dedicarías parte de tu tiempo a ayudar a personas con carencias o necesitadas?", // 95
    "¿Cuando eliges tu ropa o decoras un ambiente, tienes en cuenta la combinación de los colores, las telas o el estilo de los muebles?", // 96
    "¿Te gustaría trabajar como profesional dirigiendo la construcción de una empresa hidroeléctrica?", // 97
    "¿Sabes qué es el PIB? Se trata de un concepto económico. ¿Te gusta este tipo de tema?", // 98
];
const mapeoAreasBachillerato = {
    'C': [1, 12, 53, 64, 71, 78, 85, 91, 98, 2, 15, 46, 51],
    'H': [9, 25, 34, 41, 56, 67, 74, 80, 89, 30, 63, 72, 86],
    'A': [3, 11, 21, 28, 36, 45, 50, 57, 81, 96, 22, 39, 82],
    'S': [8, 16, 23, 33, 44, 52, 62, 70, 87, 92, 95, 4, 29, 40, 69],
    'I': [6, 19, 27, 38, 47, 54, 60, 75, 83, 90, 97, 10, 26, 59, 94],
    'D': [5, 14, 24, 31, 37, 48, 58, 65, 73, 84, 13, 18, 43, 66],
    'E': [17, 32, 35, 42, 49, 61, 68, 77, 88, 93, 7, 55, 79]
};
const areasProfesionalesBachillerato = {
    'C': { titulo: 'C - Área Administrativa', profesiones: ['Organización', 'Persuasivo', 'Supervisión', 'Objetivo', 'Orden', 'Práctico', 'Tolerante', 'Análisis y síntesis', 'Colaboración', 'Cálculo', 'Ambicioso', 'Responsable'] },
    'H': { titulo: 'H - Área de Humanidades y Ciencias Sociales y Jurídicas', profesiones: ['Verbal', 'Responsable', 'Justo', 'Relación de hechos', 'Conciliador', 'Persuasivo', 'Lingüística', 'Sagaz', 'Imaginativo', 'Orden', 'Justicia'] },
    'A': { titulo: 'A - Área Artística', profesiones: ['Estético', 'Sensible', 'Armónico', 'Imaginativo', 'Manual', 'Creativo', 'Visual', 'Detallista', 'Innovador', 'Auditivo', 'Intuitivo'] },
    'S': { titulo: 'S - Área de Ciencias de la Salud', profesiones: ['Precisión', 'Organización', 'Asistir', 'Investigar', 'Precisión', 'Percepción', 'Análisis', 'Ayudar', 'Altruista', 'Solidario', 'Paciente', 'Comprensivo', 'Respetuoso', 'Persuasivo'] },
    'I': { titulo: 'I - Área de Enseñanzas Técnicas', profesiones: ['Cálculo', 'Preciso', 'Práctico', 'Crítico', 'Analítico', 'Rígido', 'Científico', 'Manual', 'Exactitud', 'Planificar', 'Justicia', 'Equidad', 'Colaboración', 'Espíritu de equipo', 'Liderazgo'] },
    'D': { titulo: 'D - Área de Defensa y Seguridad', profesiones: ['Arriesgado', 'Solidario', 'Valiente', 'Agresivo', 'Persuasivo'] },
    'E': { titulo: 'E - Área de Ciencias Experimentales', profesiones: ['Investigación', 'Orden', 'Organización', 'Análisis y Síntesis', 'Cálculo numérico', 'Clasificar', 'Metódico', 'Analítico', 'Observador', 'Introvertido', 'Paciente', 'Seguro'] }
};

// ==========================================================
// 3. DATOS EXAMEN UAM
// ==========================================================
const seccionVerbal = [
    { p: "De acuerdo con la relación de ANALOGÍA: DESESPERACIÓN – IMPRUDENCIA. Selecciona la relación semejante:", o: ["Distracción - accidente", "Cansancio - confusión", "Locura - malestar", "Rapidez – enojo"], c: "A" },
    { p: "MÚSICO es a ORQUESTA, como ACTOR a:", o: ["Obra de teatro", "Compañía teatral", "Función de teatro", "Foro de cine"], c: "B" },
    { p: "LEÓN es a SELVA, como PINGÜINO es a:", o: ["Desierto", "Sabana", "Tundra", "Bosque"], c: "C" },
    { p: "ARQUITECTO es a CASA, como POETA es a:", o: ["Amor", "Madrigal", "Declamación", "Música"], c: "B" },
    { p: "DIOS es a ESPÍRITU, como AMOR es a:", o: ["Esencia", "Mujer", "Silla", "Paladar"], c: "A" },
    { p: "Son conceptos cuyo significado es afín, pero su escritura y pronunciación es diferente:", o: ["Sinónimos", "Antónimos", "Homófonos", "Homónimos"], c: "A" },
    { p: "Son palabras cuya pronunciación es idéntica, pero su significado es diferente:", o: ["Sinónimos", "Antónimos", "Homófonos", "Homónimos"], c: "C" },
    { p: "SINÓNIMO de HIGIENE:", o: ["Transparencia", "Aseo", "Blancura", "Limpio"], c: "B" },
    { p: "SINÓNIMO de RENOMBRE:", o: ["Sabiduría", "Influencia", "Carisma", "Prestigio"], c: "D" },
    { p: "SINÓNIMO de HALLAZGO:", o: ["Negligencia", "Descuido", "Sorpresa", "Descubrimiento"], c: "D" },
    { p: "ANTÓNIMO de ANTIGUO:", o: ["Ancestral", "Nuevo", "Rezagado", "Pasado"], c: "B" },
    { p: "ANTÓNIMO de MOJADO:", o: ["Seco", "Empapado", "Escurriendo", "Destruido"], c: "A" },
    { p: "ANTÓNIMO de MAYORÍA:", o: ["Algunos", "Pocos", "Minoría", "Muchos"], c: "C" }
];
const seccionComprension = [
    { p: "La idea central del texto sobre cáncer de piel en Estados Unidos es:", o: ["El índice de cáncer de piel en Estados Unidos", "La prevención del cáncer de piel en Norteamérica", "El carácter dañino de los días soleados", "El cáncer y su proliferación en Norteamérica"], c: "B" },
    { p: "La tesis del texto sobre el tiempo cíclico es:", o: ["El miedo al futuro no es tal, ya que existe la posibilidad de un estado de resurrección", "Los ciclos temporales suceden de forma constante en nuestra vida", "La vida humana es cíclica y por ende supone un fin necesario para cada periodo", "La visión cíclica del tiempo permite afrontar el problema del cambio y la extinción"], c: "D" },
    { p: "Complete la oración: La radiación es el tratamiento ______ efectivo ______ el cáncer.", o: ["Más, que de", "Más, con", "Más, contra", "Menos, de"], c: "C" },
    { p: "Complete la oración: El suministro de agua potable funciona con electricidad ______, al suspender la energía eléctrica ______ se corta el agua.", o: ["Y, también", "Y, incluso", "En tanto, simultáneamente", "Ya que, también"], c: "D" }
];
const seccionMatematicas = [
    { p: "Juan tiene 54 monedas de 5 y 2 pesos. En total junta 180 pesos. ¿Cuántas monedas de cada denominación tiene?", o: ["24 monedas de $5.00 y 30 monedas de $2.00", "21 monedas de $5.00 y 33 monedas de $2.00", "18 monedas de $5.00 y 36 monedas de $2.00", "30 monedas de $5.00 y 15 monedas de $2.00"], c: "A" },
    { p: "Completa la sucesión: 32, 34, 36, 38, 40, __, __", o: ["42, 44", "42, 43", "43, 45", "43, 44"], c: "A" },
    { p: "Un automóvil recorre 200 km con 15 litros de gasolina. ¿Cuántos litros requerirá para 600 km?", o: ["30 litros", "50 litros", "60 litros", "45 litros"], c: "D" },
    { p: "Se lanza un dado al aire. ¿Cuál es la probabilidad de obtener el número 3?", o: ["1/2", "1/3", "1/4", "1/6"], c: "D" },
    { p: "¿Cuál es la mediana de los datos: 4, 6, 6, 7, 7, 7, 9, 10, 11, 11, 11, 11, 12?", o: ["7", "9", "10", "11"], c: "B" },
    { p: "El área de un triángulo rectángulo es 24 m². La altura excede en 2 m a la base. ¿Cuánto mide la altura?", o: ["5 m", "6 m", "8 m", "10 m"], c: "C" },
    { p: "Es el ángulo que tiene exactamente 90°:", o: ["Ángulo agudo", "Ángulo recto", "Ángulo llano", "Ángulo completo"], c: "B" },
    { p: "Julio puede duplicar una llave en 1 minuto. Arturo en 3 minutos. Si trabajan juntos, ¿qué tiempo les lleva duplicar 40 llaves?", o: ["30 minutos", "35 minutos", "45 minutos", "60 minutos"], c: "A" },
    { p: "En una empresa, la ganancia fue de $300 y $450 miles en los primeros dos meses (crecimiento lineal). Determina la ganancia al final del año.", o: ["$1,800,000", "$1,950,000", "$2,100,000", "$2,250,000"], c: "B" },
    { p: "En un torneo de básquetbol se juegan 10 partidos. ¿Cuántas maneras hay de ganar 6, empatar 2 y perder 2?", o: ["660", "800", "1,000", "1,260"], c: "D" },
    { p: "Un corredor recorre 3 km en 15 minutos (1/4 de hora). ¿Qué distancia recorrerá en 90 minutos?", o: ["15 km", "9 km", "18 km", "20 km"], c: "C" },
    { p: "De 200 alumnos, el 25% estudia francés, el 15% italiano y el resto inglés. ¿Cuántos estudian inglés?", o: ["120", "60", "160", "40"], c: "A" }
];
const seccionBiologia = [
    { p: "Las moléculas orgánicas más abundantes en las células (>50% en peso) son:", o: ["Lípidos", "Carbohidratos", "Ácidos nucleicos", "Proteínas"], c: "D" },
    { p: "En la primera generación (F1), Mendel encontró que el ______ de los individuos producían semillas amarillas (AA).", o: ["25%", "75%", "100%", "50%"], c: "C" },
    { p: "Estructura reproductiva característica de las angiospermas:", o: ["Semilla", "Hoja", "Tallo", "Flor"], c: "D" },
    { p: "En las células, el retículo endoplásmico liso realiza la:", o: ["Síntesis de lípidos", "Síntesis de proteínas", "Digestión celular", "Lisis celular"], c: "A" },
    { p: "La población del mundo es 6,800,000,000 personas. ¿Cuál es la notación científica correcta?", o: ["6.8 × 10⁸", "7 × 10⁹", "68 × 10⁸", "6.8 × 10⁹"], c: "D" },
    { p: "Un disco de 15 cm de radio gira a 45 rpm. ¿Cuántas vueltas da en 2 minutos?", o: ["90 vueltas", "70 vueltas", "60.9 vueltas", "47.12 vueltas"], c: "A" },
    { p: "La ______ ley de la termodinámica establece que no existe una máquina con una ______ del 100%.", o: ["Primera, energía", "Segunda, eficiencia", "Segunda, energía", "Primera, eficiencia"], c: "B" }
];
const seccionFisica = [
    { p: "¿Qué es la velocidad media de un objeto?", o: ["La distancia recorrida en un tiempo determinado", "El cambio de posición en un tiempo determinado", "El desplazamiento en un tiempo determinado", "La aceleración promedio"], c: "C" },
    { p: "Un objeto se mueve a velocidad constante. El movimiento es:", o: ["Rectilíneo uniformemente acelerado", "Rectilíneo uniforme", "Circular uniforme", "Ninguna de las anteriores"], c: "B" },
    { p: "Si un objeto tiene aceleración negativa, significa que:", o: ["Está en reposo", "Se mueve a velocidad constante", "Está desacelerando", "Está acelerando en dirección opuesta"], c: "C" },
    { p: "¿Cómo se calcula la aceleración promedio?", o: ["a = Δv / Δt", "a = v / t", "a = (v₀ + v_f) / t", "a = v_f / v₀"], c: "A" },
    { p: "¿Cuál es la segunda ley de Newton?", o: ["F = m·a", "F = m·v", "F = m·g", "F = v·t"], c: "A" },
    { p: "Sobre la fuerza de gravedad es cierto que:", o: ["Es directamente proporcional al cuadrado de la distancia", "Es inversamente proporcional al cuadrado de la distancia", "Es independiente de la masa de los objetos", "Aumenta cuando la masa disminuye"], c: "B" },
    { p: "Si un objeto está en equilibrio:", o: ["La suma de las fuerzas es cero", "Su velocidad debe ser cero", "Las fuerzas no se anulan", "Tiene aceleración constante"], c: "A" },
    { p: "La fricción es:", o: ["Una fuerza que se opone al movimiento de un objeto", "Una fuerza que acelera el movimiento", "La fuerza que mantiene al objeto en reposo", "Una fuerza que depende solo de la masa"], c: "A" },
    { p: "El trabajo realizado por una fuerza se define como:", o: ["W = F·v", "W = F·d·cos(θ)", "W = F·t", "W = F·m·a"], c: "B" },
    { p: "Unidad para medir el trabajo:", o: ["Julio (J)", "Newton (N)", "Metro (m)", "Kilogramo (kg)"], c: "A" },
    { p: "La energía cinética depende de:", o: ["Su masa y su velocidad", "La fuerza aplicada", "La distancia recorrida", "La temperatura"], c: "A" },
    { p: "Expresión de la energía potencial gravitatoria:", o: ["E_p = m·g·h", "E_p = ½ m v²", "E_p = F·d", "E_p = F/m"], c: "A" },
    { p: "La ley de conservación de la energía establece que:", o: ["La energía nunca se pierde, solo se transforma", "La energía se pierde como calor", "Solo se conserva en sistemas cerrados", "Se puede crear de la nada"], c: "A" },
    { p: "Aceleración centrípeta de un objeto en movimiento circular:", o: ["a_c = v² / r", "a_c = r² / v", "a_c = m / r", "a_c = r / v"], c: "A" },
    { p: "Ley que describe el movimiento de los planetas alrededor del Sol:", o: ["Ley de la gravitación universal", "Leyes de Kepler", "Ley de la inercia", "Ley de conservación de la energía"], c: "B" },
    { p: "Según Newton, la fuerza gravitacional entre dos cuerpos es proporcional a:", o: ["La masa de uno de ellos", "El cuadrado de la distancia", "El producto de sus masas", "La velocidad de los cuerpos"], c: "C" },
    { p: "¿Qué tipo de onda es el sonido?", o: ["Onda transversal", "Onda longitudinal", "Onda electromagnética", "Onda gravitacional"], c: "B" },
    { p: "La frecuencia de una onda es:", o: ["El número de ciclos por segundo", "La distancia entre dos puntos consecutivos", "La amplitud de la onda", "La velocidad de propagación"], c: "A" },
    { p: "Si la frecuencia aumenta, la longitud de onda:", o: ["Aumenta", "Disminuye", "Se mantiene constante", "Depende de la amplitud"], c: "B" },
    { p: "El fenómeno en el que el sonido se refleja en una superficie se llama:", o: ["Difracción", "Interferencia", "Reflexión", "Refracción"], c: "C" },
    { p: "La temperatura es una medida de:", o: ["La energía interna de un sistema", "La cantidad de calor", "La velocidad promedio de las partículas", "La masa de un objeto"], c: "C" },
    { p: "El primer principio de la termodinámica establece que:", o: ["La energía no se crea ni se destruye, solo se transforma", "La energía interna es constante", "El calor fluye de frío a caliente", "No existe la entropía"], c: "A" },
    { p: "La entropía es:", o: ["Una medida de la energía útil", "Una medida de desorganización o aleatoriedad", "Una medida de la temperatura", "Una medida del trabajo realizado"], c: "B" },
    { p: "En un proceso isotérmico, el calor transferido es:", o: ["Igual al trabajo realizado", "Igual a la variación de energía interna", "Ninguna de las anteriores", "La mitad del trabajo"], c: "A" },
    { p: "¿Cuál es la ley de Ohm?", o: ["V = I·R", "V = I/R", "P = I·V", "P = I²·R"], c: "A" },
    { p: "La resistencia de un conductor depende de:", o: ["Su longitud y área transversal", "La corriente que pasa", "La tensión aplicada", "Solo de la temperatura"], c: "A" },
    { p: "¿Qué tipo de material tiene alta resistividad?", o: ["Conductores", "Aislantes", "Semiconductores", "Superconductores"], c: "B" },
    { p: "En un campo magnético, las líneas de fuerza son:", o: ["Perpendiculares a superficies conductoras", "Circulares alrededor de la fuente", "Paralelas a corrientes eléctricas", "Radiantes del polo norte al sur"], c: "B" },
    { p: "La luz blanca se descompone en colores al atravesar un prisma debido a:", o: ["Refracción", "Reflexión", "Difracción", "Absorción"], c: "A" }
];
const seccionBiologiaAvanzada = [
    { p: "¿Qué tipo de lentes se usan para corregir la miopía?", o: ["Lentes convergentes", "Lentes divergentes", "Lentes cilíndricos", "Lentes convexos"], c: "B" },
    { p: "¿Cuál es la unidad básica de la vida?", o: ["Tejido", "Célula", "Órgano", "Molécula"], c: "B" },
    { p: "¿Qué orgánulo realiza la respiración celular?", o: ["Ribosomas", "Mitocondrias", "Cloroplastos", "Retículo endoplásmico"], c: "B" },
    { p: "¿En qué fase de la mitosis los cromosomas se alinean en el ecuador?", o: ["Profase", "Metafase", "Anafase", "Telofase"], c: "B" },
    { p: "Los nucleótidos del ADN están formados por:", o: ["Grupo fosfato, pentosa y base nitrogenada", "Grupo fosfato, glucosa y base nitrogenada", "Ribosa, aminoácidos y fosfato", "Ácido graso, fosfato y base nitrogenada"], c: "A" },
    { p: "Base nitrogenada exclusiva del ARN:", o: ["Adenina", "Timina", "Uracilo", "Guanina"], c: "C" },
    { p: "¿Quién es considerado el padre de la genética?", o: ["Charles Darwin", "Gregor Mendel", "Watson y Crick", "Louis Pasteur"], c: "B" },
    { p: "Si un gen es dominante, significa que:", o: ["Siempre se expresará en la descendencia", "Solo se expresa con el alelo recesivo", "Es menos común en la población", "Es igual de fuerte que el recesivo"], c: "A" },
    { p: "Proceso por el cual una especie cambia a lo largo del tiempo:", o: ["Fotosíntesis", "Evolución", "Reproducción", "Homeostasis"], c: "B" },
    { p: "La selección natural propone:", o: ["Herencia de caracteres adquiridos", "Supervivencia del más apto", "Mutación espontánea", "Cambio dirigido por el ambiente"], c: "B" },
    { p: "Los caracteres hereditarios están determinados por:", o: ["Proteínas", "ADN", "Carbohidratos", "Lípidos"], c: "B" },
    { p: "Tipo de tejido que transporta oxígeno en vertebrados:", o: ["Tejido nervioso", "Tejido muscular", "Tejido sanguíneo", "Tejido epitelial"], c: "C" },
    { p: "¿Qué glándula regula el metabolismo?", o: ["Páncreas", "Tiroides", "Hipófisis", "Suprarrenales"], c: "B" },
    { p: "Función principal del sistema nervioso:", o: ["Regular el metabolismo", "Coordinar respuestas del cuerpo", "Producir hormonas", "Transportar oxígeno"], c: "B" },
    { p: "Órgano donde ocurre la filtración de la sangre:", o: ["Pulmones", "Riñones", "Hígado", "Estómago"], c: "B" },
    { p: "El páncreas produce insulina cuya función es:", o: ["Regular la temperatura corporal", "Controlar el nivel de glucosa en sangre", "Facilitar la digestión de proteínas", "Regular la presión sanguínea"], c: "B" }
];
const seccionEcologia = [
    { p: "Organismos que producen su propio alimento ocupan el nivel trófico de:", o: ["Consumidores primarios", "Productores", "Descomponedores", "Consumidores secundarios"], c: "B" },
    { p: "Interacción en la que ambas especies se benefician:", o: ["Depredación", "Comensalismo", "Mutualismo", "Parasitismo"], c: "C" },
    { p: "Principal gas de efecto invernadero responsable del calentamiento global:", o: ["Oxígeno", "Metano", "Dióxido de carbono", "Nitrógeno"], c: "C" },
    { p: "Principal fuente de energía en los ecosistemas:", o: ["Viento", "Agua", "Sol", "Suelo"], c: "C" },
    { p: "Organismos que descomponen materia orgánica:", o: ["Productores", "Consumidores primarios", "Descomponedores", "Herbívoros"], c: "C" }
];
const seccionMicrobiologia = [
    { p: "Microorganismos considerados no vivos porque necesitan célula huésped:", o: ["Bacterias", "Hongos", "Virus", "Protozoarios"], c: "C" },
    { p: "Tipo de células con núcleo definido:", o: ["Procariotas", "Eucariotas", "Virus", "Priones"], c: "B" },
    { p: "Las vacunas ayudan al sistema inmunológico a:", o: ["Atacar células del cuerpo", "Producir antígenos", "Generar memoria inmunológica", "Eliminar glóbulos blancos"], c: "C" },
    { p: "Los antibióticos se usan para infecciones causadas por:", o: ["Virus", "Bacterias", "Hongos", "Protozoarios"], c: "B" },
    { p: "Técnica biotecnológica que copia fragmentos de ADN:", o: ["Transcripción", "Traducción", "PCR (Reacción en cadena de la polimerasa)", "Electroforesis"], c: "C" },
    { p: "Función principal de los ribosomas:", o: ["Síntesis de lípidos", "Síntesis de proteínas", "Producción de energía", "Replicación del ADN"], c: "B" },
    { p: "Proceso celular que divide el citoplasma después de la mitosis:", o: ["Citocinesis", "Meiosis", "Transcripción", "Traducción"], c: "A" },
    { p: "Estructura exclusiva de células vegetales:", o: ["Mitocondrias", "Cloroplastos", "Ribosomas", "Membrana plasmática"], c: "B" },
    { p: "Tipo de enlace que une aminoácidos en una proteína:", o: ["Enlace iónico", "Enlace peptídico", "Enlace disulfuro", "Enlace fosfodiéster"], c: "B" },
    { p: "Molécula principal de energía inmediata para funciones celulares:", o: ["ADN", "ARN", "ATP", "Glucosa"], c: "C" }
];

const preguntasUAM = [
    ...seccionVerbal,
    ...seccionComprension,
    ...seccionMatematicas,
    ...seccionBiologia,
    ...seccionFisica,
    ...seccionBiologiaAvanzada,
    ...seccionEcologia,
    ...seccionMicrobiologia
];
const totalPreguntasUAM = preguntasUAM.length;

// ==========================================================
// 4. DATOS EXAMEN COMIPEMS
// ==========================================================
const seccionFisicaComipems = [
    { p: "1. ¿QUÉ UNIDAD DE MEDIDA SE UTILIZA PARA LA INTENSIDAD DE CORRIENTE ELÉCTRICA?", o: ["V (VOLTIOS)", "A (AMPERIOS)", "W (VATIOS)", "J (JULIOS)"], c: "B" },
    { p: "2. ¿CÓMO SE DEFINE LA ACELERACIÓN?", o: ["EL CAMBIO EN LA VELOCIDAD POR UNIDAD DE TIEMPO", "LA DISTANCIA RECORRIDA POR UNIDAD DE TIEMPO", "LA FUERZA APLICADA SOBRE UN OBJETO", "LA CANTIDAD DE MOVIMIENTO DE UN OBJETO"], c: "A" },
    { p: "3. ¿QUÉ SUCEDE CON LA ENERGÍA POTENCIAL DE UN OBJETO SI SU ALTURA RESPECTO AL SUELO AUMENTA?", o: ["DISMINUYE", "AUMENTA", "PERMANECE CONSTANTE", "DEPENDE DEL TIPO DE OBJETO"], c: "B" },
    { p: "4. ¿QUÉ PRINCIPIO ESTABLECE QUE LA PRESIÓN DE UN FLUIDO EN REPOSO ES IGUAL EN TODAS DIRECCIONES?", o: ["PRINCIPIO DE PASCAL", "PRINCIPIO DE ARQUÍMEDES", "LEY DE BOYLE", "LEY DE COULOMB"], c: "A" },
    { p: "5. ¿CÓMO SE DEFINE LA ACELERACIÓN?", o: ["CAMBIO EN LA VELOCIDAD DIVIDIDO POR EL TIEMPO", "CAMBIO EN EL TIEMPO DIVIDIDO POR LA VELOCIDAD", "FUERZA SOBRE LA MASA", "DISTANCIA DIVIDIDA POR EL TIEMPO"], c: "A" },
    { p: "6. ¿QUÉ SUCEDE CUANDO UN RAYO DE LUZ PASA DE UN MEDIO MENOS DENSO A UNO MÁS DENSO?", o: ["LA LUZ SE REFLEJA COMPLETAMENTE", "LA LUZ SE REFRACTA HACIA LA NORMAL", "LA LUZ SE DISPERSA", "LA LUZ NO CAMBIA DE DIRECCIÓN"], c: "B" },
    { p: "7. SI UN OBJETO TIENE UNA MASA DE 5 KG Y EXPERIMENTA UNA ACELERACIÓN DE 2 M/S², ¿CUÁL ES LA FUERZA NETA QUE ACTÚA SOBRE ÉL?", o: ["3 N", "7 N", "10 N", "15 N"], c: "C" },
    { p: "8. ¿QUÉ TIPO DE ENERGÍA TIENE UN OBJETO EN MOVIMIENTO?", o: ["ENERGÍA POTENCIAL", "ENERGÍA CINÉTICA", "ENERGÍA INTERNA", "ENERGÍA NUCLEAR"], c: "B" },
    { p: "9. ¿QUÉ SUCEDE CON LA TEMPERATURA DE UN GAS CUANDO SU VOLUMEN AUMENTA, MANTENIENDO CONSTANTE LA PRESIÓN?", o: ["DISMINUYE", "AUMENTA", "PERMANECE IGUAL", "AUMENTA Y LUEGO DISMINUYE"], c: "B" },
    { p: "10. ¿QUÉ CARACTERÍSTICA TIENE UN CAMPO MAGNÉTICO CREADO POR UN IMÁN?", o: ["ES UNIFORME EN TODAS PARTES", "TIENE DOS POLOS, NORTE Y SUR", "SOLO TIENE UN POLO", "SOLO PUEDE SER CREADO POR CORRIENTE ELÉCTRICA"], c: "B" },
    { p: "11. ¿QUÉ PROPIEDAD DE LA LUZ DETERMINA EL COLOR QUE VEMOS?", o: ["LONGITUD DE ONDA", "VELOCIDAD", "AMPLITUD", "FRECUENCIA"], c: "A" },
    { p: "12. ¿QUÉ OCURRE CON LA ENERGÍA CINÉTICA DE UN OBJETO SI SU VELOCIDAD SE DUPLICA?", o: ["LA ENERGÍA CINÉTICA SE DUPLICA", "LA ENERGÍA CINÉTICA SE CUADRUPLICA", "LA ENERGÍA CINÉTICA SE REDUCE A LA MITAD", "LA ENERGÍA CINÉTICA PERMANECE IGUAL"], c: "B" },
    { p: "13. SI UN CUERPO SE MUEVE EN LÍNEA RECTA CON VELOCIDAD CONSTANTE, ¿QUÉ FUERZA NETA ACTÚA SOBRE ÉL?", o: ["FUERZA DE FRICCIÓN", "FUERZA GRAVITACIONAL", "NINGUNA FUERZA NETA", "FUERZA DE CONTACTO"], c: "C" },
    { p: "14. ¿QUÉ SUCEDE SI UN CIRCUITO ELÉCTRICO TIENE UNA RESISTENCIA MUY ALTA?", o: ["LA CORRIENTE AUMENTA", "LA CORRIENTE DISMINUYE", "LA RESISTENCIA DISMINUYE", "LA TENSIÓN AUMENTA"], c: "B" },
    { p: "15. ¿CUÁL ES LA UNIDAD DE MEDIDA DE LA ENERGÍA?", o: ["AMPERIO", "JULIO", "NEWTON", "VOLTIO"], c: "B" }
];
const seccionMatematicasComipems = [
    { p: "16. ¿CUÁL ES EL RESULTADO DE $5x-3(2x+4)$?", o: ["$-x-12$", "$-x+4$", "$x-12$", "$x+4$"], c: "A" },
    { p: "17. ¿CUÁNTO ES $\\frac{3}{4}+\\frac{5}{6}$ ?", o: ["$\\frac{19}{12}$", "$\\frac{8}{10}$", "$\\frac{15}{18}$", "$\\frac{10}{12}$"], c: "A" },
    { p: "18. RESUELVE LA ECUACIÓN: $2x+5=3x-7$", o: ["$x=12$", "$x=-12$", "$x=7$", "$x=-7$"], c: "A" },
    { p: "19. ¿CUÁL ES EL ÁREA DE UN TRIÁNGULO CON BASE DE 8 CM Y ALTURA DE 5 CM?", o: ["$20\\text{ CM}^2$", "$40\\text{ CM}^2$", "$30\\text{ CM}^2$", "$25\\text{ CM}^2$"], c: "A" },
    { p: "20. ¿CUÁL ES LA PENDIENTE DE LA RECTA $y=3x-4$?", o: ["-4", "3", "-3", "4"], c: "B" },
    { p: "21. ¿CUÁL ES EL RESULTADO DE $(-3)^{2}-2(-3)$?", o: ["3", "15", "9", "12"], c: "B" },
    { p: "22. SI UN NÚMERO ES DIVISIBLE ENTRE 3 Y ENTRE 4, ¿TAMBIÉN LO SERÁ ENTRE CUÁL DE LOS SIGUIENTES NÚMEROS?", o: ["6", "8", "12", "24"], c: "C" },
    { p: "23. ¿CUÁL ES EL VALOR DE \"X\" EN LA ECUACIÓN $\\frac{5x}{2}=10$ ?", o: ["4", "5", "2", "8"], c: "A" },
    { p: "24. ¿CUÁL ES LA EXPRESIÓN EQUIVALENTE A $(x+3)(x-3)$?", o: ["$x^{2}-6x+9$", "$x^{2}+9$", "$x^{2}-9$", "$x^{2}-3x$"], c: "C" },
    { p: "25. SI EL RADIO DE UN CÍRCULO ES 7 CM, ¿CUÁL ES SU PERÍMETRO? (USA $\\pi=3.14$)", o: ["$21.98\\text{ CM}$", "$43.96\\text{ CM}$", "$36.5\\text{ CM}$", "$22\\text{ CM}$"], c: "B" },
    { p: "26. ¿CUÁL ES EL VALOR DE X EN LA ECUACIÓN $x^{2}=49$?", o: ["$x=7$", "$x=-7$", "$x=\\pm7$", "$x=49$"], c: "C" },
    { p: "27. ¿CUÁNTO ES $2^{3}+3^{2}$?", o: ["17", "14", "19", "12"], c: "A" },
    { p: "28. UN AUTO VIAJA A $80\\text{ KM/H}$. ¿CUÁNTO RECORRERÁ EN 2 HORAS Y MEDIA?", o: ["$160\\text{ KM}$", "$180\\text{ KM}$", "$200\\text{ KM}$", "$220\\text{ KM}$"], c: "C" },
    { p: "29. ¿CUÁL DE LAS SIGUIENTES ECUACIONES REPRESENTA UNA PARÁBOLA?", o: ["$Y=3X+2$", "$Y=x^{2}+5x+6$", "$X+Y=10$", "$y=2x-4$"], c: "B" },
    { p: "30. SI UN ÁNGULO MIDE $120^{\\circ}$, ¿CUÁNTO MIDE SU ÁNGULO SUPLEMENTARIO?", o: ["$90^{\\circ}$", "$120^{\\circ}$", "$60^{\\circ}$", "$180^{\\circ}$"], c: "C" }
];
const seccionHabilidadVerbalComipems = [
    { p: "31. ¿CUÁL ES EL SINÓNIMO DE \"ALEGRÍA\"?", o: ["TRISTEZA", "FELICIDAD", "ENOJO", "MIEDO"], c: "B" },
    { p: "32. ¿CUÁL ES EL ANTÓNIMO DE \"OSCURO\"?", o: ["CLARO", "PEQUEÑO", "RÁPIDO", "LARGO"], c: "A" },
    { p: "33. ¿CÓMO SE LLAMA A UNA PERSONA QUE ESTUDIA EL COMPORTAMIENTO DE LOS SERES HUMANOS?", o: ["PSICÓLOGO", "MÉDICO", "BIÓLOGO", "MATEMÁTICO"], c: "A" },
    { p: "34. ¿QUÉ PALABRA COMPLETA CORRECTAMENTE LA SIGUIENTE FRASE? \"LA ____ DEL LIBRO ES INTERESANTE.\"", o: ["CARÁTULA", "TAPA", "HISTORIA", "PÁGINAS"], c: "C" },
    { p: "35. ELIGE LA PALABRA QUE ESTÁ ESCRITA CORRECTAMENTE:", o: ["CONOSIMIENTO", "CONOSIMIENTO", "CONOCIMIENTO", "CONOCIMENTO"], c: "C" },
    { p: "36. ¿CUÁL ES EL SIGNIFICADO DE \"BIZARRO\"?", o: ["EXTRAÑO", "VALIENTE", "TONTO", "FEROZ"], c: "B" },
    { p: "37. ¿QUÉ PALABRA SIGNIFICA LO OPUESTO A \"CAER\"?", o: ["ASCENDER", "DESCENDER", "RODAR", "CAÍDA"], c: "A" },
    { p: "38. ¿CÓMO SE LLAMA LA ACCIÓN DE QUITARLE ALGO A ALGUIEN SIN PERMISO?", o: ["PRESTAR", "ROBAR", "AYUDAR", "DONAR"], c: "B" },
    { p: "39. ¿CUÁL ES EL SINÓNIMO DE \"ANTIGUO\"?", o: ["NUEVO", "VIEJO", "MODERNO", "ACTUAL"], c: "B" },
    { p: "40. ¿QUÉ SIGNIFICA LA PALABRA \"RENOVACIÓN\"?", o: ["CAMBIO", "MANTENIMIENTO", "DESTRUCCIÓN", "CONSERVACIÓN"], c: "A" },
    { p: "41. ¿CUÁL ES EL SIGNIFICADO DE \"BENEVOLENTE\"?", o: ["MALVADO", "BONDADOSO", "CRUEL", "EGOISTA"], c: "B" },
    { p: "42. ¿CUÁL DE ESTAS PALABRAS TIENE UN SIGNIFICADO RELACIONADO CON \"LUZ\"?", o: ["OSCURO", "BRILLAR", "NUBLADO", "SOMBRÍO"], c: "B" },
    { p: "43. ¿QUÉ SIGNIFICA LA PALABRA \"DILEMA\"?", o: ["SOLUCIÓN", "CONFLICTO", "OPORTUNIDAD", "TRANQUILIDAD"], c: "B" },
    { p: "44. ELIGE EL ANTÓNIMO DE \"VALIENTE\":", o: ["TEMEROSO", "AUDAZ", "FUERTE", "DECIDIDO"], c: "A" },
    { p: "45. ¿CÓMO SE LLAMA LA ACCIÓN DE DECIR ALGO CON MUCHO CUIDADO O DE MANERA RESERVADA?", o: ["GRITAR", "SUSURRAR", "HABLAR", "LLAMAR"], c: "B" }
];
const seccionGeografiaComipems = [
    { p: "46. ¿Qué país es conocido por su sistema de canales artificiales?", o: ["Estados Unidos", "Egipto", "Panamá", "India"], c: "C" },
    { p: "47. ¿Qué continente es el hogar del desierto del Sahara?", o: ["América", "África", "Asia", "Oceanía"], c: "B" },
    { p: "48. ¿En qué país se encuentra la Torre Eiffel?", o: ["Italia", "Alemania", "Francia", "España"], c: "C" },
    { p: "49. ¿Qué océano se encuentra al este de África?", o: ["Atlántico", "Índico", "Pacífico", "Ártico"], c: "B" },
    { p: "50. ¿Cuál es la capital de Brasil?", o: ["Río de Janeiro", "São Paulo", "Brasília", "Buenos Aires"], c: "C" },
    { p: "51. ¿Qué es el ecuador?", o: ["Una línea que divide la Tierra en hemisferios norte y sur", "Una línea que divide la Tierra en hemisferios este y oeste", "Una línea de latitud", "Una línea de longitud"], c: "A" },
    { p: "52. ¿Cuál es el país más pequeño del mundo?", o: ["Mónaco", "Ciudad del Vaticano", "San Marino", "Liechtenstein"], c: "B" },
    { p: "53. ¿Qué es un paralelo?", o: ["Una línea que conecta los polos", "Una línea de longitud", "Una línea imaginaria que divide la Tierra de norte a sur", "Una línea imaginaria que indica la latitud"], c: "D" },
    { p: "54. ¿Cuál es el continente con el mayor número de habitantes?", o: ["África", "Europa", "Asia", "América"], c: "C" },
    { p: "55. ¿Cuál es el océano más pequeño?", o: ["Pacífico", "Índico", "Ártico", "Atlántico"], c: "C" },
    { p: "56. ¿Qué país es famoso por su arquitectura de pirámides?", o: ["Irak", "Egipto", "Grecia", "Italia"], c: "B" },
    { p: "57. ¿Qué continente tiene el mayor número de especies de animales?", o: ["Asia", "América", "África", "Australia"], c: "C" },
    { p: "58. ¿Qué país tiene la mayor extensión territorial en América del Sur?", o: ["Argentina", "Brasil", "Chile", "Perú"], c: "B" },
    { p: "59. ¿Qué sistema montañoso forma la frontera natural entre Francia y España?", o: ["Los Alpes", "Los Pirineos", "Los Andes", "La Cordillera Cantábrica"], c: "B" },
    { p: "60. ¿En qué continente se encuentra el desierto de Atacama?", o: ["África", "Asia", "América del Sur", "Oceanía"], c: "C" }
];
const seccionQuimicaComipems = [
    { p: "61. ¿Cuál es el símbolo químico del oxígeno?", o: ["O", "Ox", "$Ox_{2}$", "$O_{2}$"], c: "A" },
    { p: "62. ¿Cuántos elementos tiene la tabla periódica actualmente?", o: ["92", "102", "118", "150"], c: "C" },
    { p: "63. ¿Qué tipo de enlace hay en la molécula de agua?", o: ["lónico", "Covalente polar", "Metálico", "Van der Waals"], c: "B" },
    { p: "64. ¿Qué gas es más ligero que el aire?", o: ["Oxígeno", "Dióxido de carbono", "Helio", "Nitrógeno"], c: "C" },
    { p: "65. ¿Qué es un ácido según la teoría de Arrhenius?", o: ["Una sustancia que libera H+ en solución", "Una sustancia que libera OH-", "Un catalizador", "Un compuesto orgánico"], c: "A" },
    { p: "66. ¿Qué elemento es líquido a temperatura ambiente?", o: ["Mercurio", "Hierro", "Plomo", "Plata"], c: "A" },
    { p: "67. ¿Cuál es el pH del agua pura?", o: ["7", "1", "14", "0"], c: "A" },
    { p: "68. ¿Qué es una solución?", o: ["Una mezcla homogénea", "Una mezcla heterogénea", "Un compuesto", "Un elemento puro"], c: "A" },
    { p: "69. ¿Cuál de los siguientes elementos es un gas noble?", o: ["Cloro", "Helio", "Nitrógeno", "Oxígeno"], c: "B" },
    { p: "70. ¿Qué ocurre en una reacción de oxidación?", o: ["Se pierde oxígeno", "Se gana oxígeno", "Se forma agua", "Se libera hidrógeno"], c: "B" },
    { p: "71. ¿Cuál es la fórmula del cloruro de sodio (sal de mesa)?", o: ["NaCl", "NaOH", "$H_{2}O$", "$Na_{2}SO_{4}$"], c: "A" },
    { p: "72. ¿Qué es un ácido según la teoría de Lewis?", o: ["Una sustancia que dona electrones", "Una sustancia que acepta electrones", "Una sustancia que tiene pH mayor a 7", "Una sustancia que libera $H^+$"], c: "B" },
    { p: "73. ¿Cuál es el elemento más abundante en la corteza terrestre?", o: ["Oxígeno", "Silicio", "Carbono", "Aluminio"], c: "A" },
    { p: "74. ¿Qué es la ley de conservación de la masa?", o: ["La masa de los reactivos es igual a la de los productos", "La masa de los productos es mayor que la de los reactivos", "La masa se puede crear o destruir", "La masa depende del tipo de reacción"], c: "A" },
    { p: "75. ¿Qué es un isótopo?", o: ["Átomos del mismo elemento con diferente número de protones", "Átomos del mismo elemento con diferente número de neutrones", "Átomos de diferentes elementos", "Átomos con el mismo número de electrones"], c: "B" }
];
const seccionBiologiaComipems = [
    { p: "76. ¿Cuál es la unidad básica de la vida?", o: ["Tejido", "Órgano", "Célula", "Molécula"], c: "C" },
    { p: "77. ¿Qué orgánulo celular es responsable de la producción de energía?", o: ["Núcleo", "Mitocondria", "Ribosoma", "Aparato de Golgi"], c: "B" },
    { p: "78. ¿Qué tipo de reproducción requiere un solo progenitor?", o: ["Sexual", "Asexual", "Clonación", "Germinación"], c: "B" },
    { p: "79. ¿QUÉ molécula almacena la información genética?", o: ["ARN", "ADN", "Proteínas", "Lípidos"], c: "B" },
    { p: "80. ¿Cómo se llama el proceso mediante el cual las plantas producen su alimento?", o: ["Fotosíntesis", "Fermentación", "Respiración celular", "Osmosis"], c: "A" },
    { p: "81. ¿Qué tipo de sangre es el donante universal?", o: ["A+", "B-", "AB+", "O-"], c: "D" },
    { p: "82. ¿Cuál es el sistema encargado del transporte de oxígeno en el cuerpo humano?", o: ["Digestivo", "Circulatorio", "Excretor", "Nervioso"], c: "B" },
    { p: "83. ¿Dónde ocurre la digestión química de los alimentos?", o: ["En la boca", "En el estómago", "En el esófago", "En el hígado"], c: "B" },
    { p: "84. ¿Cuál es el principal órgano del sistema nervioso central?", o: ["Corazón", "Riñón", "Cerebro", "Pulmones"], c: "C" },
    { p: "85. ¿Qué tipo de célula posee núcleo definido?", o: ["Procariota", "Eucariota", "Virus", "Ninguna de las anteriores"], c: "B" },
    { p: "86. ¿Qué glándula produce la insulina?", o: ["Tiroides", "Hipotálamo", "Páncreas", "Glándulas suprarrenales"], c: "C" },
    { p: "87. ¿Cómo se llama la unidad funcional del riñón?", o: ["Glomérulo", "Nefrona", "Alvéolo", "Axón"], c: "B" },
    { p: "88. ¿Qué reino incluye a las bacterias?", o: ["Protista", "Monera", "Fungi", "Animalia"], c: "B" },
    { p: "89. ¿Qué gas es esencial para la respiración celular?", o: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Hidrógeno"], c: "A" },
    { p: "90. ¿Cuál de las siguientes estructuras forma parte del sistema inmunológico?", o: ["Estómago", "Linfocitos", "Pulmones", "Hígado"], c: "B" }
];
const preguntasPorSeccionComipems = {
    "FÍSICA": seccionFisicaComipems,
    "MATEMÁTICAS": seccionMatematicasComipems,
    "HABILIDAD VERBAL": seccionHabilidadVerbalComipems,
    "GEOGRAFÍA": seccionGeografiaComipems,
    "QUÍMICA": seccionQuimicaComipems,
    "BIOLOGÍA": seccionBiologiaComipems
};
const preguntasCOMIPEMS = [
    ...seccionFisicaComipems,
    ...seccionMatematicasComipems,
    ...seccionHabilidadVerbalComipems,
    ...seccionGeografiaComipems,
    ...seccionQuimicaComipems,
    ...seccionBiologiaComipems
];
const totalPreguntasCOMIPEMS = preguntasCOMIPEMS.length;

// ==========================================================
// 5. DATOS EXAMEN COMIPEMS SIMULACIÓN
// ==========================================================
const seccionHabilidadMatematicaComipems2 = [
    { p: "1. En una carrera, Juan da a Pedro una ventaja de 15 metros. Si Juan corre a una velocidad de 8 m/s y Pedro corre a 7 m/s. ¿A qué distancia del lugar de arranque de Pedro lo alcanzara Juan?", o: ["15m", "45m", "75m", "105m", "120m"], c: "D" },
    { p: "2. Un auto corre a velocidad promedio de 90 km/h durante 4 horas y media, y otro lo hace a 40 km/h durante 10 horas y cuarto.", o: ["Los dos recorren igual distancia", "El segundo recorre poco más que el primero", "El primero recorre poco más que el segundo", "El primero recorre mucho menos que el segundo", "El segundo recorre mucho menos que el primero"], c: "B" },
    { p: "3. El punto que representa al número 48/49 en la recta numérica queda entre los puntos:", o: ["P y Q", "Q y R", "R y S", "S y T", "T y U"], c: "C", imgs: ["COMIPEMS/PREGUNTA3.png"] },
    { p: "4. Si por efecto del desajuste económico lo que costaba 2,000 cuesta ahora 2,820, decimos que el porcentaje de aumento de:", o: ["820%", "410%", "41%", "82%", "8.2%"], c: "C" },
    { p: "5. ¿Cuántos litros hay en un metro cúbico?", o: ["1x10^0", "1x10^1", "1x10^2", "1x10^3", "1x10^4"], c: "D" },
    { p: "6. Si hay una relación directa entre cada valor de B y cada valor de A y cuando B=6, A=30 ¿cuánto valdrá A, si B vale 10?", o: ["2", "12", "24", "50", "100"], c: "A" },
    { p: "7. Escoja la opción que da continuidad a la serie 10, 6, 8, 13, 16, 12...", o: ["14, 10, 13, 8", "5, 10, 15, 12", "14, 19, 22, 18", "18, 24, 32, 40", "9, 11, 17, 8"], c: "C" },
    { p: "8. ¿Cuáles son los lados de un rectángulo cuya área es la mitad del área de un cuadrado de 100 cm de lado, y cuyo perímetro es igual al perímetro del cuadrado menos 100cm?", o: ["40 y 50 cm", "50 y 50 cm", "50 y 100 cm", "50 y 150 cm", "100 y 150 cm"], c: "C" },
    { p: "9. Si una cuerda AB de un círculo de radio r está situada a la distancia d del centro del círculo entonces:", o: ["La cuerda AB es menor que el diámetro", "Cualquier cuerda de longitud más cerca del centro del círculo", "Si d disminuye, AB disminuye", "La cuerda AB es mayor que el diámetro del círculo", "Si AB aumenta, d aumenta"], c: "A" },
    { p: "10. ¿En qué lugar de la recta numérica queda el punto que representa al número 16/12?", o: ["P y Q", "Q y R", "R y S", "S y T", "T y U"], c: "D", imgs: ["COMIPEMS/PREGUNTA10.png"] },
    { p: "11. 64 cubos, que miden 3 cm de arista cada uno forman un cubo mayor cuyo volumen es igual a:", o: ["64 cm3", "92 cm3", "256 cm3", "1,024 cm3", "1,728 cm3"], c: "E" },
    { p: "12. Si se toma un cuadrado de papel de 2 m de lado y se dobla horizontalmente en dos; al rectángulo que resulta se le dobla por la mitad; el resultado se vuelve a doblar en dos y se repite la operación otras tres veces (total 6 dobleces). ¿Qué se encontrará marcado al desplegar el papel?", o: ["16 rectángulos", "32 cuadrados", "32 rectángulos", "64 cuadrados", "64 rectángulos"], c: "D" },
    { p: "13. Si en la siguiente figura RO = 90 m, RT = 60 m y SO = 75 m. ¿cuál es la longitud de ST?", o: ["10 m", "30 m", "40 m", "45 m", "60 m"], c: "D", imgs: ["COMIPEMS/PREGUNTA13.png"] },
    { p: "14. Elija la opción qué contiene el número faltante en la tercera serie horizontal: [41, 7, 34], [44, 4, 11], [48, 8, ?]", o: ["8", "166", "56", "64", "256"], c: "C", imgs: ["COMIPEMS/PREGUNTA14.png"] },
    { p: "15. El valor de G varía en proportion directa con el de L; cuando G = 18, L = 6. ¿Cuánto será el valor de G si L = 14?", o: ["12", "20", "36", "48", "50"], c: "E" },
    { p: "16. El valor de R varía en proporción directa con el de T. Cuando R es 12 y T es 60, ¿cuál será el valor de R si T es 100?", o: ["12", "20", "36", "8", "50"], c: "B" }
];
const seccionHabilidadVerbalComipems2 = [
    { p: "17. ¿Cuál de las siguientes noticias dichas en el noticiero de la tarde puede ser verdad?", o: ["Que suicidaron a un comerciante", "Que no hacía ni frío ni calor pues estábamos a 0°C", "Que pondrán un robot en la superficie de Marte", "Que se sintetizó un antibiótico contra el virus Satán de las computadoras", "Que en la última manifestación en el Zócalo había más gente de la que cabía"], c: "E" },
    { p: "18. Escoja la opción ordenada de manera creciente: 1. NANO, 2. MEGA, 3. KILO, 4. DECI, 5. DECA", o: ["5, 4, 3, 1, 2", "2, 1, 5, 4, 3", "5, 4, 3, 2, 1", "1, 4, 5, 3, 2", "5, 4, 3, 1, 5"], c: "D" },
    { p: "19. Algunos mamíferos son animales herbívoros, ningún animal herbívoro come carne.", o: ["Algunos animales mamíferos no comen carne", "Ningún animal mamífero come carne", "Algunos animales mamíferos no son herbívoros", "Todo animal que come carne es mamífero", "Los animales herbívoros no son mamíferos"], c: "A" },
    { p: "20. Señale la opción que ordena mejor las siguientes palabras: CUEVA(1) JUNTO(2) LA(3) A(4) A(5) ALIMAÑA(6) SU(7) HALLO(8)", o: ["8, 4, 3, 6, 5, 7, 1, 2", "2, 1, 5, 4, 3", "5, 4, 3, 2, 1", "1, 4, 5, 3, 2", "5, 4, 3, 1, 5"], c: "E" },
    { p: "21. La hermana de la hija de la hermana de la madre de A es:", o: ["la prima hermana de A", "la prima segunda de A", "la tía de A", "la sobrina de A", "la hermana de A"], c: "A" },
    { p: "22. ¿Cuál es el significado del mensaje 1234567283972 si conocemos las claves: SOMBRERO = 82345632, OSMOSIS = 2832898 Y CHICO = 71972", o: ["hombre moroso", "ese oso hermoso", "el mico bombero", "hombre cósmico", "cómico místico"], c: "D" },
    { p: "23. Escoja la secuencia de los fragmentos que muestre mayor orden, lógica y elegancia: 1) Los seres vivientes 2) Cada día 3) Algunas especies 4) El hombre 5) Desde el amanecer", o: ["1, 2, 3, 4, 5", "2, 5, 1, 3, 4", "3, 5, 2, 4, 1", "4, 2, 1, 3, 5", "5, 1, 2, 4, 3"], c: "A" },
    { p: "24. Antónimo de decrecer.", o: ["Incrementar", "Fomentar", "Desarrollar", "Progresar", "Ampliar"], c: "A" },
    { p: "25. Señale la opción que describe mejor el orden de las siguientes frases: 1) Con una voz metálica 2) Vengo de Marte 3) Cuando abre la señora 4) Tocan a la puerta 5) ¿De parte de quién? 6) Se encuentra un marciano 7) De sintetizador", o: ["2, 1, 7, 3, 4, 6, 5", "4, 3, 6, 1, 7, 2, 5", "3, 2, 5, 1, 6, 4, 7", "3, 4, 5, 1, 6, 2, 7", "3, 6, 1, 5, 4, 1, 7"], c: "B" },
    { p: "26. Todos los gatos son felinos. Algunos felinos son salvajes. Luego,", o: ["Todos los gatos son salvajes", "Todos los felinos son salvajes", "Algunos animales son felinos", "algunos gatos son salvajes", "todos los salvajes son felinos"], c: "D" },
    { p: "27. Jalil es árabe y afirma que todos los árabes mienten. En consecuencia:", o: ["nunca miente", "siempre dice la verdad", "sólo dice la verdad cuando no miente", "dice la verdad si miente", "sólo dice mentiras cuando no dice la verdad"], c: "B" },
    { p: "28. PROMOVER - REDUCIR es lo mismo que", o: ["inducir - producir", "fomentar - limitar", "impulsar - auspiciar", "coordinar - controlar", "activar - ajustar"], c: "C" },
    { p: "29. La asistencia a las salas de cine ha disminuido actualmente debido a la publicidad generada ___ video clubes de cine caseros, dando origen ___ algunas salas cierren por falta de público.", o: ["para cuantos - solo a", "sólo por - en tanto", "por los - a que", "con los - de que", "en los - para que"], c: "C" },
    { p: "30. Marque el significado del siguiente diagrama (Círculo AMERICANOS dentro de círculo MEXICANOS):", o: ["algunos mexicanos no son americanos", "Ningún mexicano es americano", "Ningún americano es mexicano", "Todos los americanos son mexicanos", "Todos los mexicanos son americanos"], c: "D", imgs: ["COMIPEMS/PREGUNTA30.png"] },
    { p: "31. ¿Cuál de las siguientes afirmaciones puede considerarse como una opinión?", o: ["La música de Beethoven es más moderna que la de Hayden", "En la pintura de Picasso hay una época cubista", "Los brasileños son más alegres que los alemanes", "En la ciudad de Los Ángeles viven más mexicanos que en Tlaxcala", "El hierro es más duro que el aluminio"], c: "C" },
    { p: "32. Siguiendo el razonamiento: ladrillo-pared-habitación. Elige la opción que corresponde.", o: ["Electrón - protón - átomo", "Larva - pupa - crisálida", "Planeta - estrella - galaxia", "Átomo - molécula - compuesto", "Nebulosa - constelación - estrella"], c: "D" }
];
const seccionMatematicasComipems2 = [
    { p: "33. Una alberca que tiene 50 metros de largo, 20 metros de ancho y una profundidad de 2 metros va a ser llenada hasta 3/4 de su capacidad. El volumen de agua que se requiere es de:", o: ["2,000 m3", "1,750 m3", "1,650 m3", "1,500 m3", "1,250 m3"], c: "D" },
    { p: "34. Un ladrillo pesa 1 kilogramo, dentro del mismo material pero tres veces más ancho, tres veces más largo y tres veces más grueso ¿cuánto pesará?", o: ["3 Kg", "6 kg", "9 kg", "18 kg", "27 kg"], c: "E" },
    { p: "35. Pilar tiene tres lápices más que Mayra. El doble del número de lápices que tiene Mayra es igual al número de lápices que tiene Pilar. ¿Cuántos lápices tiene Mayra y cuántos tiene Pilar?", o: ["18, 47", "3, 6", "21, 24", "6, 3", "5, 3"], c: "B" },
    { p: "36. ¿Cuál es el resultado de elevar (3p^2q^4 - 6) al cuadrado?", o: ["3p4q8 - 6p2q4 + 9", "3pq8 - 12p2q2 + 16", "3pq8 - 18p2q2 + 36", "9p4q8 - 12p2q4 + 12", "9p4q8 - 36p2q4 + 36"], c: "E" },
    { p: "37. Escoja la opción en que la frase: 'Tres veces la mitad de a aumentada con el cuádruplo de b, todo ello al cubo' está escrita correctamente en notación matemática.", o: ["3(a/2 + 4b)^3", "(3a/2 + b/e)^3", "3(1/2a + b/4)^3", "[3(a/2 + b/4)]^3", "(3a/2 + 4b)^3"], c: "E" },
    { p: "38. Encuentra la distancia entre los puntos (2,7) y (4,2)", o: ["Raíz de 15", "4", "Raíz de 21", "5", "Raíz de 29"], c: "E" },
    { p: "39. Cuál de las siguientes expresiones tendrá por resultado 1 (uno)", o: ["32^3 - (31x32)", "32^2 - (32x33)", "32^2 - (31x33)", "32^2 - (31x31)", "32^2 - (33x33)"], c: "C" },
    { p: "40. 7/9 entre 7/4", o: ["9/4", "28/9", "4/9", "7/63", "9/63"], c: "C" },
    { p: "41. ¿Para qué valor de X tiene sentido la siguiente expresión? e^2x = e^3", o: ["x = 3/2", "x = 2/3", "x = 4/3", "x = 1/3", "x = 1/2"], c: "A" },
    { p: "42. Resolver el sistema de ecuaciones: 5a - 8b = 2b; b + a = 16", o: ["a=6, b=10", "a=-6, b=-10", "a=-6, b=10", "a=6, b=10", "a=10, b=6"], c: "E" },
    { p: "43. Si se tienen dos triángulos isósceles opuestos por el vértice, cuyo ángulo menor es de 50 grados, ¿de cuántos grados será cada uno de los ángulos restantes?", o: ["20°", "30°", "45°", "65°", "70°"], c: "D" },
    { p: "44. 17 mililitros pueden expresarse como:", o: ["17 l", "1.7 l", "0.17 l", "0.017 l", "0.0017 l"], c: "D" }
];
const seccionEspanolComipems2 = [
    { p: "45. Seleccione las palabras que completan correctamente el siguiente texto: 'He de tomar una decisión...'", o: ["dilema - difícil - problema", "asunto - cruel - método", "punto - cuestionante - método", "cuestionamiento - rudo - camino", "problema - fácil - dilema"], c: "E" },
    { p: "46. Seleccione la opción que proponga la secuencia más correcta para las siguientes frases: 1. Cuál es la vía... 2. Los mexicanos... 3. La ruta... 4. y el valle... 5. Por el camino... 6. Resulta difícil...", o: ["6,1,2,5,3,4", "1,5,3,4,2,6", "5,3,4,1,6,2", "6,3,4,5,1,2", "1,6,3,4,5,2"], c: "A" },
    { p: "47. Si tuviera que ordenar alfabéticamente las siguientes palabras. ¿cuál de ellas colocaría en cuarto lugar?", o: ["Producir", "propiciar", "Prolongar", "Progenitor", "Progenie"], c: "C" },
    { p: "48. Las palabras que sirven para completar o modificar el sustantivo son:", o: ["Adverbios", "Gerundios", "Adjetivos", "Sujetos", "Nexos"], c: "C" },
    { p: "49. El núcleo del sujeto siempre es una partícula:", o: ["verbal", "modificativa", "ad nominal", "atributiva", "sustantiva"], c: "E" },
    { p: "50. Si busca todas estas palabras por orden alfabético en el diccionario, ¿cuáles serían la primera y la última?", o: ["Trascender - trastornar", "Trascender - trasnochar", "Trasladar - trascender", "trashumante - trasladar", "Trasnochar - trasladar"], c: "A" },
    { p: "51. Selecciona la única opción que incluye un error:", o: ["Aún lo dudo", "En cambio, yo lo acepto", "Mas sin en cambio, lo sostengo", "No obstante, te lo dije", "Por el contrario, yo no lo creo"], c: "C" },
    { p: "52. ¿Cuál de las siguientes reglas de acentuación es incorrecta?", o: ["Agudas en vocal, n o s", "Graves que no terminen en vocal, n o s", "Todas las esdrújulas", "Vocal débil para romper diptongo", "Artículo para distinguirlo del pronombre"], c: "E" },
    { p: "53. Escoja la opción que ordena cronológicamente a los escritores: 1. Quevedo, 2. Goethe, 3. Rulfo, 4. Fray Luis de León, 5. López Velarde", o: ["2,3,1,4,5", "1,3,2,5,4", "3,2,1,5,4", "3,2,1,4,5", "4,1,2,5,3"], c: "E" },
    { p: "54. 'Puedo escribir los versos más tristes esta noche...' escrita por:", o: ["Jorge Luis Borges", "Pablo Neruda", "Antonio Machado", "Nicolás Guillén", "Octavio Paz"], c: "B" },
    { p: "55. ¿Cuáles de las siguientes palabras deben llevar la letra s en el espacio indicado? 1. Presen_ia, 2. Antonoma_ia, 3. Próte_is, 4. Mere_ía, 5. Membre_ía", o: ["2,3,5", "1,2,5", "2,4,5", "1,2,3", "1,3,2"], c: "A" },
    { p: "56. ¿Cuántas oraciones se encuentran en el siguiente párrafo de 'Martín Fierro'?", o: ["2", "4", "6", "7", "8"], c: "A" }
];
const seccionHistoriaComipems2 = [
    { p: "57. Acontecimiento que ocurrió entre 1939 y 1945 con Alemania, Inglaterra, EE.UU., URSS, Japón...", o: ["guerra de Vietnam", "guerra de 6 años", "guerra civil española", "primera guerra mundial", "segunda guerra mundial"], c: "E" },
    { p: "58. ¿Cuál es el nombre del primer presidente del Estado palestino?", o: ["Yitzak Rabin", "Simón Pérez", "Yasser Arafat", "Muamar Kadafi", "Saddam Hussein"], c: "C" },
    { p: "59. El discurso del método es obra de:", o: ["René Descartes", "Santo Tomás de Aquino", "Thomas Kuhn", "Francis Bacon", "Humberto Eco"], c: "A" },
    { p: "60. La aparición de Japón como potencia luego de ___ quiebra el dominio euro centrista.", o: ["la crisis de los misiles", "la guerra de Corea", "las batallas de Midway", "la protección de Manchú", "la guerra ruso-japonesa"], c: "E" },
    { p: "61. Seleccione la opción en que los inventos están ordenados cronológicamente.", o: ["escritura, imprenta, máquina de vapor, teléfono", "pólvora, papel, barómetro, teléfono", "termómetro, brújula, astrolabio, máquina de coser", "telescopio, radar, teléfono, láser", "fonógrafo, telégrafo, telescopio, máquina de coser"], c: "A" },
    { p: "62. Indique la secuencia histórica correcta de acontecimientos de la segunda mitad del siglo XX.", o: ["Golpe Chile, Vietnam, Sandinista", "Vietnam, Golpe Chile, Sandinista", "Vietnam, Sandinista, Golpe Chile", "Golpe Chile, Sandinista, Vietnam", "Sandinista, Golpe Chile, Vietnam"], c: "C" },
    { p: "63. El Tratado de Tlaltelolco fue promovido durante el período presidencial de:", o: ["Adolfo de la Huerta", "Lázaro Cárdenas", "Adolfo López Mateos", "Luis Echeverría", "Adolfo Ruíz Cortines"], c: "C" },
    { p: "64. Revolución del siglo XX que establece un sistema diferente al capitalismo.", o: ["Revolución rusa", "Revolución industrial", "Revolución francesa", "Revolución burguesa", "Revolución agrícola"], c: "A" },
    { p: "65. Se considera la cultura madre de meso-américa.", o: ["olmeca", "zapoteca", "teotihuacana", "maya", "azteca"], c: "A" },
    { p: "66. Ordena cronológicamente: 1. Ejecución Hidalgo, 2. Const. Apatzingán, 3. Alhóndiga, 4. Tratados de Córdoba, 5. Mina", o: ["3,1,2,5,4", "1,5,4,3,2", "3,1,5,4,2", "2,4,3,5,1", "1,3,2,5,4"], c: "E" },
    { p: "67. La Guerra de Reforma es la lucha entre:", o: ["Mexicanos y extranjeros", "Conservadores y liberales", "Liberales y radicales", "Conservadores y estadounidenses", "Liberales y estadounidenses"], c: "B" },
    { p: "68. Son propósitos del Plan de Guadalupe:", o: ["El desconocimiento de huelga", "La caída de Díaz", "La rendición de Zapata", "nombrar presidente a Carranza", "3 y 4"], c: "C" }
];
const seccionGeografiaComipems2 = [
    { p: "69. La teoría de Laplace es hoy en día la explicación más ___ sobre el origen del sistema solar.", o: ["variables - controvertida", "teorías - común", "dudas - críticas", "incógnitas - aceptada", "hipótesis - discutida"], c: "D" },
    { p: "70. El Everest se encuentra en la cordillera de los ___ en la parte de ___.", o: ["Cárpatos- Polonia", "Andes - Perú", "Alpes - Italia", "Himalaya - Nepal", "Himalaya - Tíbet"], c: "C" },
    { p: "71. Factor importante por el que compiten las plantas de la tundra y el desierto.", o: ["el suelo", "la luz", "los gases", "el agua", "el alimento"], c: "D" },
    { p: "72. La zona de México que se clasifica como 'Pacífico sur' comprende a:", o: ["Nayarit, Michoacán, Jalisco", "Oaxaca, Chiapas y Guerrero", "Campeche, Tabasco y Veracruz", "Sonora, Sinaloa, BC", "Jalisco, Michoacán y Colima"], c: "B" },
    { p: "73. La desembocadura del río ___ se fija como límite fronterizo de México con ___.", o: ["Grijalva - Belice", "Suchiate - Guatemala", "Tehuantepec - Guatemala", "Bravo - California", "Colorado - Texas"], c: "B" },
    { p: "74. ¿Cuál es el estado de la República que produce más Carbón?", o: ["Campeche", "Coahuila", "Colima", "Chiapas", "Chihuahua"], c: "E" },
    { p: "75. Ordena de mayor a menor extensión: 1 Quintana Roo, 2 Oaxaca, 3 Nuevo León, 4 Sonora, 5 Jalisco", o: ["1,4,2,5,3", "2,4,3,1,5", "3,2,4,5,1", "4,2,5,3,1", "5,1,4,3,2"], c: "D" },
    { p: "76. Escoja la opción que relaciona incorrectamente a un país con su capital.", o: ["Puerto Rico - San Juan", "Costa Rica- San José", "Colombia - Bogotá", "Brasil - Sao Paulo", "El Salvador - San Salvador"], c: "D" },
    { p: "77. Seleccione la única opción que menciona un grupo étnico americano.", o: ["Guaraníes", "Beduinos", "Kurdos", "Bantúes", "Melanesios"], c: "A" },
    { p: "78. Seleccione el grupo étnico que NO pertenece al continente americano.", o: ["Iroqueses", "Araucanos", "Tepehuanos", "Seris", "Kurdos"], c: "E" },
    { p: "79. Valores máximos de latitud y longitud.", o: ["100° y 150°", "65° y 120°", "180° y 180°", "90° y 180°", "120° y 180°"], c: "C" },
    { p: "80. El crecimiento de las grandes ciudades mexicanas se debe principalmente:", o: ["escasez mano obra", "centralización servicios", "fortalecimiento mano obra", "migración ciudad al campo", "cierre centros turísticos"], c: "B" }
];
const seccionFormacionCivicaComipems2 = [
    { p: "81. Existe una clara ___ frente a las naciones ricas. Por eso se originan conflictos en países subdesarrollados.", o: ["Independencia económica", "Ventaja étnico", "Dependencia económico política", "Ganancia desmesurada", "Discriminación racial"], c: "C" },
    { p: "82. La Vasectomía consiste en:", o: ["eliminación testículos", "impedir salida espermatozoides", "impedir eyaculación", "eliminar producción", "alterar función hormonal"], c: "B" },
    { p: "83. Actualmente la cámara de senadores está constituida por:", o: ["48 directa / 48 proporcional", "32 directa / 64 proporcional", "96 proporcional", "64 directa / 32 proporcional", "96 directa"], c: "D" },
    { p: "84. La supervisión del comercio internacional desde 1995 es objetivo de:", o: ["el GATT", "la OIP", "la OMC", "la CEE", "el FMI"], c: "A" },
    { p: "85. Tres de los cinco países que ocupan asientos permanentes en el Consejo de Seguridad ONU:", o: ["Suecia, Suiza y Francia", "EE.UU., Francia y Reino Unido", "Alemania, Japón e Italia", "EE.UU., Reino Unido, España", "Israel, China, Bélgica"], c: "B" },
    { p: "86. ¿Qué personaje visitó México en 2003 para persuadir sobre la invasión a Iraq?", o: ["Antonio Calvo Sotelo", "Felipe González", "José Ma. Aznar", "Juan Carlos de Borbón", "Adolfo Suárez"], c: "C" },
    { p: "87. Los textos únicos y gratuitos inician con:", o: ["Adolfo de la Huerta", "Manuel Ávila Camacho", "Adolfo Ruiz Cortines", "Miguel de la Madrid", "Adolfo López Mateos"], c: "E" },
    { p: "88. Interés actual por tierras en la Antártida:", o: ["telecomunicaciones", "reservas fauna", "explotar yacimientos minerales", "rastreo espacial", "bases militares"], c: "C" },
    { p: "89. Ciencia que estudia características de la población (edad, sexo, crecimiento...):", o: ["Estadística", "Geografía", "Demografía", "Sociología", "Antropología"], c: "C" },
    { p: "90. El artículo 3ero. De nuestra Constitución se refiere a:", o: ["prohibición esclavitud", "derecho reunión", "La educación", "El trabajo", "libertad creencias"], c: "C" },
    { p: "91. En la parte dogmática de la Constitución se establecen:", o: ["organización estado", "poderes federación", "garantías individuales", "organización municipios", "derechos campesinos"], c: "C" },
    { p: "92. ¿En qué caso la autoridad debe registrar un domicilio particular?", o: ["homicida en casa", "quieren registrar", "fiesta escandalosa", "orden de cateo", "vive un violador"], c: "D" }
];
const seccionBiologiaComipems2 = [
    { p: "93. Hablar de fecundación in vitro se refiere a:", o: ["especie diferente", "sin espermatozoides", "tubos de vidrio", "fuera de la madre e implantar", "huevo de dos óvulos"], c: "D" },
    { p: "94. Investigadores biónicos aplican patrones animales en aparatos. Ejemplo:", o: ["avión y turbina", "cemento y concreto", "oruga y trascabo", "nylon y plástico", "transistor y radar"], c: "C" },
    { p: "95. La fenilalanina en productos dietéticos:", o: ["induce grasa", "produce insomnio", "ocasiona trastornos/retraso mental", "baja calorías", "produce anemia"], c: "C" },
    { p: "96. ¿Cuál puede ser probada mediante un experimento controlado?", o: ["mes lunar 28 días", "cáncer piel por UV", "hongos reino Funji", "aves tienen escamas", "acuáticos mamíferos"], c: "B" },
    { p: "97. Las anfetaminas para la obesidad (opción incorrecta):", o: ["usar hasta bajar peso", "cualquier persona", "hiperactivas", "mujeres jóvenes", "periodos de un mes o menos"], c: "A" },
    { p: "98. La biología se relaciona para el comportamiento en ambiente natural con:", o: ["física, química, estadística", "física, astronomía, economía", "anatomía, fisiología, micología", "histología, embriología, etología", "química, estadística, psicología"], c: "C" },
    { p: "99. Relación donde un ser vive a expensas de otro causándole daño:", o: ["comensalismo", "saprofitismo", "inquilinismo", "parasitismo", "simbiosis"], c: "D" },
    { p: "100. ¿Por qué ya no está dulce un jugo fermentado?", o: ["microbios comen azúcar", "azúcar descompuesta", "calor destruyó azúcar", "reacción con ácidos", "Opción 4"], c: "E" },
    { p: "101. Molécula con núcleo de magnesio para fotosíntesis:", o: ["hemoglobina", "hemocianina", "caroteno", "clorofila", "xantofila"], c: "D" },
    { p: "102. Partes del oído excepto:", o: ["estribo", "estrógeno", "retina", "cóclea", "yunque"], c: "C" },
    { p: "103. Características sexuales secundarias femeninas reguladas por:", o: ["insulina", "estrógeno", "adrenalina", "progesterona", "testosterona"], c: "D" },
    { p: "104. La energía se almacena en el organismo como:", o: ["vitaminas y grasas", "músculo y grasa", "grasa y glucógeno", "vitaminas y carbohidratos", "proteínas"], c: "D" }
];
const seccionFisicaComipems2 = [
    { p: "105. El cero absoluto se encuentra a:", o: ["0°C", "-273°C", "-273°K", "273°C", "0°F"], c: "B" },
    { p: "106. Una pila voltaica está formada por:", o: ["electrodos, electrolito y celda", "cátodos, electrolito y voltímetro", "electrolitos, ánodo y celda", "ánodos, electrolito y amperímetro", "voltímetro y celda"], c: "A" },
    { p: "107. ¿Qué resistencia tiene una parrilla de 120-V que consume 25 A?", o: ["3,000", "120", "18.0", "6.0", "4.8"], c: "A" },
    { p: "108. ¿Cuánto trabajo se requiere para levantar a 2m una estatua de 550 kg?", o: ["0.06x10^8 J", "1.09x10^2 J", "11.06x10^3 J", "2.33x10^5 J", "1.08x10^4 J"], c: "E" },
    { p: "109. ¿Qué propiedad de la luz NO cambia al pasar de un medio a otro?", o: ["dirección", "frecuencia", "inclinación", "longitud onda", "velocidad"], c: "E" },
    { p: "110. Energía cinética de insecto de 0.002 kg a 0.4 m/s:", o: ["1.2x10^-4 J", "1.3x10^-2 J", "1.5x10^-3 J", "1.6x10^-4 J", "1.8x10^-2 J"], c: "D" },
    { p: "111. ¿Cómo colocar un libro para ejercer la mejor presión?", o: ["portada", "lomo", "canto", "vértices", "cualquier forma"], c: "A" },
    { p: "112. Onda longitudinal con frecuencia superior a 20,000Hz:", o: ["Zumbido", "ultrasonido", "infrasonido", "hipersonido", "hipoacusia"], c: "B" },
    { p: "113. Voltaje por corriente es medida de:", o: ["capacitancia", "inductancia", "resistencia", "potencia", "ninguna"], c: "D" },
    { p: "114. Si un cuerpo flota, su masa es igual a:", o: ["densidad / volumen desalojado", "densidad * volumen desalojado", "masa * volumen desalojado", "densidad * peso desalojado", "peso desalojado"], c: "B" },
    { p: "115. Efecto de percibir frecuencia mayor de fuente que se acerca:", o: ["joule", "kelvin", "Edison", "Doppler", "progresivo"], c: "D" },
    { p: "116. Relación velocidad luz y sonido al aumentar densidad:", o: ["ambos aumentan", "ambas disminuyen", "luz aumenta / sonido disminuye", "luz disminuye / sonido aumenta", "sin alteración"], c: "B" }
];
const seccionQuimicaComipems2 = [
    { p: "117. Compuestos que dan como resultado 2NaCl + CO2 + H2O:", o: ["Na2CO3 + HCl", "Na2CO3 + 2HCl", "Na2CO3 + HCl2", "Na2HCO3 + 2C", "Na2CO + 2HCl"], c: "B" },
    { p: "118. Enlace cuando un átomo aporta un orbital y un electrón:", o: ["iónico", "covalente coordinado", "covalente", "electrovalente", "metálico"], c: "A" },
    { p: "119. Lista ordenada según número o masa atómica:", o: ["Hidrógeno, litio, sodio, potasio", "Fósforo, oxigeno, cobre, platino", "Nitrógeno, carbono, cloro", "Flúor, cromo, aluminio", "Carbono, mercurio, magnesio"], c: "A" },
    { p: "120. La Valencia del fierro en FeSO4 es:", o: ["+1", "+2", "+3", "H", "+6"], c: "B" },
    { p: "121. Celda para transformar energía solar en eléctrica:", o: ["Voltaica", "Electrolíticas", "Fotovoltaicas", "Galvánicas", "Catódica"], c: "C" },
    { p: "122. pH de lluvia de 8 en Acapulco es:", o: ["Muy ácida", "Neutra", "Muy básica", "Moderadamente ácida", "Moderadamente básica"], c: "D" },
    { p: "123. ¿A qué se le llama licuefacción?", o: ["gaseoso a líquido", "sólido a gaseoso", "líquido a gaseoso", "sólido a gaseoso directo", "sólido a líquido"], c: "A" },
    { p: "124. Oxidación espontánea con metal, oxígeno y vapor de agua:", o: ["electro-deposición", "combustión", "explosión", "conducción", "corrosión"], c: "E" },
    { p: "125. Fórmula CH3-CH2-CH2-OH corresponde a:", o: ["etanol", "butanol", "eteno", "propanol", "propano"], c: "D" },
    { p: "126. Concentración de 3 moles de NaO3 en 2 litros:", o: ["6 molar", "1.5 molar", "3 molar", "0.66 molar", "5 molar"], c: "B" },
    { p: "127. Compuestos que permiten paso de corriente en agua:", o: ["iones", "Bases", "conductores", "electrolítos", "ácidos"], c: "D" },
    { p: "128. Sustancia gaseosa para combustión completa en motor:", o: ["O2", "H2", "CO", "CO2", "N2"], c: "A" }
];
const preguntasPorSeccionComipems2 = {
    "HABILIDAD MATEMATICA": seccionHabilidadMatematicaComipems2,
    "HABILIDAD VERBAL": seccionHabilidadVerbalComipems2,
    "MATEMATICAS": seccionMatematicasComipems2,
    "ESPAÑOL": seccionEspanolComipems2,
    "HISTORIA": seccionHistoriaComipems2,
    "GEOGRAFIA": seccionGeografiaComipems2,
    "FORMACION CIVICA": seccionFormacionCivicaComipems2,
    "BIOLOGIA": seccionBiologiaComipems2,
    "FISICA": seccionFisicaComipems2,
    "QUIMICA": seccionQuimicaComipems2
};
const preguntasCOMIPEMS2 = [
    ...seccionHabilidadMatematicaComipems2,
    ...seccionHabilidadVerbalComipems2,
    ...seccionMatematicasComipems2,
    ...seccionEspanolComipems2,
    ...seccionHistoriaComipems2,
    ...seccionGeografiaComipems2,
    ...seccionFormacionCivicaComipems2,
    ...seccionBiologiaComipems2,
    ...seccionFisicaComipems2,
    ...seccionQuimicaComipems2
];
const totalPreguntasCOMIPEMS2 = preguntasCOMIPEMS2.length;

// ==========================================================
// 6. DATOS EXAMEN IPN
// ==========================================================
const seccionMatematicasIPN = [
    {
        p: " Si al numerador de una fracción se le suman 5, la nueva fracción es 7/3. Si a la fracción original se le restan 5/8, el resultado es 1/24. ¿Cuál es la fracción que cumple con los enunciados anteriores?",
        o: ["1/3", "2/4", "2/3", "3/2"],
        c: "C"
    },
    {
        p: "En la liga de futbol mexicano tres jugadores fueron los maximos anotadores. Hugo anotó dos veces más que Luis, y Paco anotó el triple menos dos goles que Luis.¿cuántos anotó cada jugador si al final sumaron entre los tres 58 goles?",
        o: ["Luis: 8, Hugo: 16, Paco: 24", "Luis: 10, Hugo: 20, Paco: 28", "Luis: 12, Hugo: 24, Paco: 34", "Luis: 9, Hugo: 18, Paco: 31"],
        c: "B"
    },
    {
        p: "Simplificar lka expresion: 'La multiplicación de tres números diferentes dividido entre el doble del cubo de la multiplicación de los dos primeros'.",
        o: ["2z / (x²y²)", "z / (2x²y²)", "2x²y² / z", "x²z / 2y²"],
        c: "B"
    },
    {
        p: "Si el área de un rectángulo es A = 5x² + 8x - 4 y su ancho es x + 2, ¿cuál es la longitud del largo del rectangulo?",
        o: ["5x + 2", "5x - 2", "5x - 1", "5x + 1"],
        c: "B"
    },
    {
        p: "Relaciona los productos notables con su respectivo resultado: 1.(x²y-2z)², 2.(x²-3y²)², 3.(x²-2xy)², 4.(x²y+z)²",
        o: ["1D, 2A, 3C, 4B", "1D, 2C, 3A, 4B", "1C, 2B, 3D, 4A", "1C, 2D, 3B, 4A"],
        c: "C"
    },
    {
        p: "Se tiene un terreno cuyas medidas son las siguientes de acuerdo con la figura:", //FALTA IMAGEN
        img: "IPN_6.png",
        o: ["3870", "400", "20", "10"],
        c: "D"
    },
    {
        p: "Simplificar la expresión:", //FALTA 
        img: "IPN_7.png",
        o: ["2y⁸ / x", "x / 2y⁴", "8y⁴ / x⁵", "y⁸ / 8x"],
        c: "B"
    },
    {
        p: "Encontrar el valor de x si: x+y+z=5; x+y-z=3; x-y=2",
        o: ["-3", "-1", "1", "3"],
        c: "D"
    },
    {
        p: "Determinar la ecuación que corresponde a la siguiente grafica:", //FALTA IMAGEN 
        img: "IPN_9.png",
        o: ["x² + 3x", "x² - 3x", "x² + 3x - 2", "x² - 3x + 2"],
        c: "A"
    },
    {
        p: "Relacionar la funcion con la grafica que la representa:", //FALTA IMAGEN 
        img: "IPN_10.png",
        o: ["1B, 2C", "1B, 2A", "1D, 2C", "1D, 2A"],
        c: "A"
    },
    {
        p: "La gráfica de la función y = p√x - qx + 1 pasa por los puntos (4,-1) y (1,2). Determinar los valores de p y q.",
        o: ["p -3, q 2", "p -2, q 3", "p 2, q 3", "p 3, q 2"],
        c: "D"
    },
    {
        p: "¿Qué gráfica corresponde a la función f(x) = -2x + 2?", //FALTAN IMAGENES
        img: "IPN_12.png",
        o: ["Gráfica A ", "Gráfica B ", "Gráfica C ", "Gráfica D"],
        c: "B"
    },
    {
        p: "¿Cuál es el valor de x que satisface la ecuación: (7x + 3)/2 - (9x - 8)/4 = 6?",
        o: ["2", "17/2", "-2", "-17/2"],
        c: "A"
    },
    {
        p: "A continuacion se presenta una función representada de forma icónica , ¿cuál es el conjunto imagen de f(x)?", //FALTA IMAGEN
        img: "IPN_14.png",
        o: ["{1, 2, 3, 4, 5, a, b, c, d, f}", "{a, b, c, d, e, f, g}", "{1, 2, 3, 4, 5, e, g}", "{a, b, c, d, f}"],
        c: "D"
    },
    {
        p: "La expresión matemática que representa el costo de un libro, menos el cincuenta por ciento de descuento, menos cinco pesos es:",
        o: ["x + (0.5x - 5)", "x - (0.5x + 5)", "x - (50x - 5)", "x + (50x - 5)"],
        c: "B"
    },
    {
        p: "En la figura se muestra la gráfica de la función y = f(x), hallar su imagen.", //FALTA IAMGEN
        img: "IPN_16.png",
        o: ["(-2, 1/2) U [1/2, 2)", "(-2, 1/2) U (1/2, 2]", "[-2, 1/2) U (1/2, 2)", "[-2, 1/2] U (1/2, 2]"],
        c: "C"
    },
    {
        p: "Un vecino vende un terreno en Acapulco y menciona que el área total es 481 m². Indicar la representación matemática si se sabe que el largo del terreno es tres veces el frente menos dos metros.",
        o: ["3x² - 2 = 481", "(3x - 2)² = 481", "x(3x - 2) = 481", "(3x - 2x)² = 481"],
        c: "C"
    },
    {
        p: "Resolver la siguiente ecuación: ", // FALTA IMAGEN
        img: "IPN_18.png",
        o: ["3", "57", "-2", "-50"],
        c: "B"
    },
    {
        p: "Realizar el siguiente producto:", //FALTA IMAGEN 
        img: "IPN_19.png",
        o: ["x³ + 64", "x² - 64", "x + 64", "x - 64"],
        c: "D"
    },
    {
        p: "Identificar la ecuación que permite encontrar una de las dimensiones de un rectángulo cuyo área es de 40 m² y su perímetro mide 26 m.",
        o: ["y² + 13y + 40 = 0", "y² + 26y - 40 = 0", "y² - 13y + 40 = 0", "y² - 26y + 40 = 0"],
        c: "C"
    },
    {
        p: "Un árbol proyecta una sombra de ocho metros y al mismo tiempo un poste de luz de tres metros proyecta una sombra de dos metros. Encontrar la altura en metros del árbol suponiendo que tanto este, como el poste son verticales, que es la misma hora y sitios cercanos; considerando que los rayos del sol caen sobre el suelo formando angulos iguales.",
        o: ["3", "4", "12", "24"],
        c: "C"
    },
    {
        p: "En la figura, el ángulo AOB es 110°, el ángulo BOD es 40° y el ángulo COE es 50°. ¿Cuál es el valor del ángulo COD?",    //FALTA IMAGEN 
        img: "IPN_22.png",
        o: ["20°", "30°", "40°", "50°"],
        c: "A"
    },
    {
        p: "Calcular la cotangente del ángulo ABC, si el triángulo está formado por las coordenadas del plano cartesiano A(3,4), B(0,0) y C(3,0).",
        o: ["0.55", "0.75", "0.95", "1.25"],
        c: "B"
    },
    {
        p: "Identificar el tipo de triángulo en el cual coinciden la mediana, la altura y la mediatriz.",
        o: ["Rectángulo", "Equilátero", "Isósceles", "Escaleno"],
        c: "B"
    },
    {
        p: "Calcular'b' si a = 10m y c = 12m.", //FALTA IMAGEN
        img: "IPN_25.png",
        o: ["√264 m", "√44 m", "264 m", "44 m"],
        c: "B"
    },
    {
        p: "Ordenar de mayor a menor las siguientes rectas, tomando como referencia el valor de su pendiente: 1. y=x+2, 2. y=-x-2, 3. y=3x+2, 4. y=-3x-2",
        o: ["4, 3, 1, 2", "4, 2, 1, 3", "3, 1, 2, 4", "3, 4, 2, 1"],
        c: "C"
    },
    {
        p: "¿Qué relación hay entre el ángulo APB y el ángulo AOB si el segmento AB es el diámetro de la circunferencia?", // FALTA IMAGEN
        img: "IPN_27.png",
        o: ["Son proporcionales", "Tienen la misma medida", "APB mide el doble de AOB", "APB mide la mitad de AOB"],
        c: "D"
    },
    {
        p: "Calcular el área del polígono sombreado.", //FALTA IMAGEN
        img: "IPN_28.png",
        o: ["27 u²", "28 u²", "29 u²", "30 u²"],
        c: "A"
    },
    {
        p: "Al simplificar la expresión trigonométrica tan(x) + cot(x), se obtiene:",
        o: ["sen(x) + cos(x)", "sec(x) + csc(x)", "csc(x) sec(x)", "sen(x) cos(x)"],
        c: "C"
    },
    {
        p: "Relacionar la ecuación de la recta con la grafica que la representa", // FALTA IMAGEN
        img: "IPN_30.png",
        o: ["1A, 2B, 3C, 4D", "1A, 2C, 3D, 4B", "1C, 2B, 3A, 4D", "1C, 2A, 3D, 4B"],
        c: "A"
    },
    {
        p: "Calcular el perímetro del siguiente triángulo rectángulo :", //FALTA IMAGEN
        img: "IPN_31.png",
        o: ["5x / 2", "5x / 4", "(5 + √17)x / 2", "(5 + √15)x / 2"],
        c: "C"
    },
    {
        p: "Los valores de sen(45°), sen(30°) y tan(45°) respectivamente son:",
        o: ["√2/2, 1/2, √3", "√2/2, 1/2, 1", "√3/2, 1/2, 1", "√3/2, √3/2, 1"],
        c: "C"
    },
    {
        p: "Las bacterias se duplican cada 30 minutos. Si se parte de una bacteria, ¿cuántas habrá después de un día?",
        o: ["2^6", "2^12", "2", "2^48"],
        c: "D"
    },
    {
        p: "Relacionar el logaritmo con su simplificación:",  //FALTA IMAGEN
        img: "IPN_34.png",
        o: ["1B, 2C, 3A", "1B, 2A, 3C", "1C, 2B, 3A", "1C, 2A, 3B"],
        c: "B"
    },
    {
        p: "¿Cuál es el valor de x si 2^(x+1) = 16^(r-3)?",
        o: ["2", "3", "6", "5"],
        c: "B"
    },
    {
        p: "Obtener la regla que genera la siguiente sucesión:",   //FALTA IMAGEN
        img: "IPN_36.png",
        o: ["n + 3", "n - 6", "2n - 5", "3n - 10"],
        c: "D"
    },
    {
        p: "El siguiente elemento de la sucesión 1, 3, 7, 15, ... es:",
        o: ["28", "29", "30", "31"],
        c: "D"
    },
    {
        p: "Encontrar el siguiente número de la sucesión: -2, 4, -3, 9, -4, 16, -5, ...",
        o: ["-6", "25", "21", "23"],
        c: "B"
    },
    {
        p: "Elegir la opción que continúa la sucesión: 20, 22, 25, 30, 37, 48, ...",
        o: ["50", "60", "61", "65"],
        c: "C"
    },
    {
        p: "Ordenar los primeros 5 términos si el término general es:",   //FALTA IMAGEN 
        img: "IPN_40.png",
        o: ["3, 1, 2, 5, 4", "3, 5, 1, 4, 2", "2, 1, 3, 5, 4", "2, 4, 1, 5, 3"],
        c: "B"
    },
    {
        p: "Completa la siguiente sucesion: (3,5),(5,7),(___,___),(17,19),(29,31)...",
        o: ["7,9", "9,11", "11,13", "13,15"],
        c: "C"
    },
    {
        p: "Sean x y y dos numeros reales tales que 0<x<1<y, ordenar de menor a mayor las siguientes cantidades",
        img: "IPN_42.png",
        o: ["3,2,1,4", "3,1,2,4", "4,3,1,2", "4,2,3,1"],
        c: "B"
    },
    {
        p: "Elegir la figura que completa la siguiente serie:",
        img: "IPN_43.png",
        o: ["a", "b", "c", "d"],
        c: "B"
    },
    {
        p: "Identificar cual de las siguientes figuras representa 2 4/3",
        img: "IPN_44.png",
        o: ["a", "b", "c", "d"],
        c: "D"
    },
    {
        p: "Que figura completa la serie:",
        img: "IPN_45.png",
        o: ["a", "b", "c", "d"],
        c: "A"
    },
    {
        p: "Identificar la figura que continua la serie:",
        img: "IPN_46.png",
        o: ["a", "b", "c", "d"],
        c: "A"
    },
    {
        p: "Relacionar las series dadas con la figura que las continua",
        img: "IPN_47.png",
        o: ["1C,2A", "1C,2D", "1B,2D", "1B,2A"],
        c: "B"
    },
    {
        p: "Observando la serie dada,¿cuantos cuadrados sombreados tendria la figura conformada por 17 cuadros de cada lado?",
        img: "IPN_48.png",
        o: ["35", "34", "33", "32"],
        c: "D"
    },
    {
        p: "Una hoja cuadrada de papel se dobla diagonalmente dos veces y se hace un pequeño corte en la parte superior como se muestra en la figura, si se desdobla la hoja de papel el corte que se obtiene es:",
        img: "IPN_49.png",
        o: ["a", "b", "c", "d"],
        c: "A"
    },
    {
        p: "Identificar la figura que comienza la siguiente serie:",
        img: "IPN_50.png",
        o: ["a", "b", "c", "d"],
        c: "C"
    }
];
const seccionCienciasExperimentalesIPN = [
    {
        "p": "A los organismos que son capaces de sintetizar su propio alimento, se les conoce como:",
        "o": ["autótrofos", "heterótrofos", "autosuficiente", "independientes"],
        "c": "A"
    },
    {
        "p": "El tipo de materia que presenta funciones vitales es la:",
        "o": ["sintética", "abiótica", "biótica", "inerte"],
        "c": "C"
    },
    {
        "p": "La glucólisis es un ejemplo de:",
        "o": ["reproducción", "metabolismo", "excreción", "nutrición"],
        "c": "B"
    },
    {
        "p": "Relacionar el ecosistema con el tipo al que corresponde de acuerdo con su clasificación.",
        img: "IPN_54.png",
        "o": ["1A, 2A, 3B, 4B, 5C", "1B, 2B, 3A, 4A, 5C", "1A, 2B, 3C, 4C, 5B", "1B, 2C, 3A, 4A, 5B"],
        "c": "B"
    },
    {
        "p": "La molécula considerada como proveedora universal de energía para las funciones celulares es:",
        "o": ["el adenosín trifosfato (ATP)", "el ácido fosfórico", "la desoxirribosa", "la hemoglobina"],
        "c": "A"
    },
    {
        "p": "Ordenar los siguientes eslabones de una cadena alimenticia, empezando por el productor y terminando con el superdepredador: 1. Pasto, 2. Águila, 3. Conejo, 4. Serpiente",
        "o": ["2, 3, 4, 1", "2, 4, 3, 1", "1, 3, 2, 4", "1, 3, 4, 2"],
        "c": "D"
    },
    {
        "p": "Los compuestos químicos formados por cadenas de aminoácidos se denominan:",
        "o": ["lípidos", "sales", "proteínas", "carbohidratos"],
        "c": "C"
    },
    {
        "p": "Algunos organismos son llamados anaerobios __________, porque producen moléculas de alta energía llamadas ATP, tanto en presencia como en ausencia de oxígeno.",
        "o": ["estrictos", "precisos", "obligados", "facultativos"],
        "c": "D"
    },
    {
        "p": "Ordenar las estructuras del aparato reproductor femenino, en las que suceden las diferentes etapas del óvulo, desde su maduración hasta la menstruación: 1. Útero, 2. Vagina, 3. Ovario, 4. Fimbria, 5. Trompas de Falopio",
        "o": ["3, 4, 5, 1, 2", "1, 3, 2, 4, 5", "1, 2, 4, 5, 3", "3, 5, 4, 1, 2"],
        "c": "A"
    },
    {
        "p": "A los seres vivos que para formar sus tejidos toman como fuente de carbono al CO2, se les conoce como:",
        "o": ["autófagos", "autótrofos", "heterótrofos", "organótrofos"],
        "c": "B"
    },
    {
        "p": "Identificar qué sustancias en estado acuoso conducen la corriente eléctrica: 1. NaCl, 2. HCl, 3. CO2, 4. CaO, 5. AlCl3, 6. CH4",
        "o": ["1, 4, 6", "1, 2, 5", "3, 2, 6", "3, 4, 5"],
        "c": "B"
    },
    {
        "p": "Identificar a qué función química corresponde la siguiente fórmula condensada: R—NH2",
        "o": ["amida", "amina", "alcohol", "aldehído"],
        "c": "B"
    },
    {
        "p": "Calcular el número de moles presentes en 200g de NaOH en la siguiente reacción:",
        img: "IPN_63.png",
        "o": ["1", "2", "5", "10"],
        "c": "C"
    },
    {
        "p": "Si 3 moles de un compuesto presentan una masa de 60 g, entonces su peso molecular es de:",
        "o": ["20 g/mol", "40 g/mol", "80 g/mol", "180 g/mol"],
        "c": "A"
    },
    {
        "p": "El tipo de enlace entre los átomos determina las propiedades en las sustancias, por lo que si la atracción electrostática entre los átomos es _________ se forman _________ de elevado punto de fusión e insolubles en agua.",
        "o": ["débil - gases", "fuerte - gases", "débil - sólidos cristalinos", "fuerte - sólidos cristalinos"],
        "c": "D"
    },
    {
        "p": "Los hidruros resultan de la combinación del elemento cuyo número atómico es 1 con metales del grupo I y II de la tabla periódica. Son ejemplos de esta combinación:",
        "o": ["NaH, KH, CaH2", "Na2O, CaO, CuO", "NaOH, KOH, Zn(OH)2", "CuSO4, Sn(CO3)2, Fe2(SO4)3"],
        "c": "A"
    },
    {
        "p": "Relacionar la función química con su respectivo compuesto:",
        img: "IPN_67.png",
        "o": ["1C, 2B, 3E, 4F, 5A, 6D", "1C, 2B, 3D, 4E, 5A, 6F", "1F, 2C, 3E, 4B, 5D, 6A", "1F, 2E, 3C, 4D, 5B, 6A"],
        "c": "C"
    },
    {
        "p": "Para preparar 5 litros de solución de etanol en agua al 15% en volumen, ¿qué cantidad de etanol se requiere?",
        "o": ["500 ml", "600 ml", "0.75 L", "1.80 L"],
        "c": "C"
    },
    {
        "p": "Relacionar el tipo de enlace con su respectivo compuesto:",
        img: "IPN_69.png",
        "o": ["1B, 2A, 3C, 4D", "1B, 2C, 3D, 4A", "1D, 2C, 3A, 4B", "1D, 2A, 3C, 4B"],
        "c": "D"
    },
    {
        "p": "Los compuestos __________ forman redes cristalinas constituidas por iones de carga __________ unidos por fuerzas electrostáticas.",
        "o": ["iónicos - igual", "apolares - igual", "iónicos - opuesta", "apolares - opuesta"],
        "c": "C"
    },
    {
        "p": "Relacionar el tipo de hibridación con las características que presenta: 1. sp, 2. sp2, 3. sp3, 4. sp3d",
        img: "IPN_71.png",
        "o": ["1A, 2C, 3B, 4D", "1A, 2D, 3C, 4B", "1C, 2A, 3D, 4B", "1C, 2B, 3A, 4D"],
        "c": "A"
    },
    {
        "p": "Seleccionar la opción que contiene los coeficientes precisos, de la ecuación balanceada:",
        img: "IPN_72.png",
        "o": ["1, 1, 2, 2", "1, 2, 1, 2", "2, 3, 1, 2", "2, 2, 3, 1"],
        "c": "B"
    },
    {
        "p": "En las mismas condiciones de presión y temperatura, volúmenes iguales de diferentes gases tienen el mismo número de moléculas', este enunciado fue propuesto por:",
        "o": ["Avogadro", "Lavoisier", "Dalton", "Planck"],
        "c": "A"
    },
    {
        "p": "En el grupo ___ de la tabla periódica, se encuentran los elementos cuya configuración electrónica para el electrón diferencial es ns²np¹.",
        "o": ["IA", "IB", "IIIB", "IIIA"],
        "c": "D"
    },
    {
        "p": "Identificar cuál de las siguientes estructuras de Lewis es improbable.",
        img: "IPN_75.png",
        "o": ["a", "b", "c", "d"],
        "c": "A"
    },
    {
        "p": "La _________ de una sustancia representa la masa contenida en la unidad de volumen.",
        "o": ["densidad", "porosidad", "presión", "capilaridad"],
        "c": "A"
    },
    {
        "p": "Un foco tiene una resistencia de 240 Ω cuando se enciende. ¿Cuánta corriente fluye a través de él cuando opera a su voltaje nominal de 120 V?",
        "o": ["0.52 A", "0.50 A", "0.48 A", "0.46 A"],
        "c": "B"
    },
    {
        "p": "Dos resistencias de 6 Ω y 4 Ω se conectan en serie a una diferencia de potencial de 120 V. ¿Cuál es la intensidad de corriente que circula por ellas?",
        "o": ["12 A", "20 A", "30 A", "40 A"],
        "c": "A"
    },
    {
        "p": "Un resorte realiza 12 vibraciones en 40 s. Encontrar el periodo (T) y la frecuencia (f) de la vibración.",
        "o": ["T: 3.4, f: 0.28", "T: 3.3, f: 0.30", "T: 3.2, f: 0.32", "T: 3.1, f: 0.34"],
        "c": "B"
    },
    {
        "p": "El giro del electrón se llama:",
        "o": ["subnivel magnético", "subnivel", "orbital", "spin"],
        "c": "D"
    },
    {
        "p": "Una plancha eléctrica de 60 Ω se conecta en serie a un tostador eléctrico de 90 Ω con un voltaje de 120 V. ¿Cuál es la resistencia equivalente del circuito?",
        img: "IPN_81.png",
        "o": ["1.5 Ω", "15 Ω", "150 Ω", "1500 Ω"],
        "c": "C"
    },
    {
        "p": "Relacionar el concepto con el modelo matemático correspondiente:",
        img: "IPN_82.png",
        "o": ["1D, 2C, 3B, 4A", "1D, 2B, 3C, 4A", "1C, 2D, 3A, 4B", "1C, 2A, 3D, 4B"],
        "c": "A"
    },
    {
        "p": "Un cuerpo tiene una caída libre si desciende hacia la superficie de la tierra y no sufre ninguna _________ originada por el aire o cualquier otro fluido.",
        "o": ["pérdida", "velocidad", "resistencia", "aceleración"],
        "c": "C"
    },
    {
        "p": "Una lámpara de 2 W consume 60 Joules de energía. ¿Cuánto tiempo en segundos, se mantuvo encendida la lámpara?",
        "o": ["10", "15", "30", "35"],
        "c": "C"
    },
    {
        "p": "Es la fuerza que mantiene unidas a las moléculas de una sustancia.",
        "o": ["Adhesión", "Cohesión", "Dilatación", "Compresión"],
        "c": "B"
    },
    {
        "p": "De acuerdo con datos de los movimientos de un móvil, ordenar de forma decreciente las siguientes fuerzas, utilizando las aceleraciones y las masas mostradas en la tabla",
        img: "IPN_86.png",
        "o": ["3, 4, 2, 1", "3, 4, 1, 2", "4, 3, 2, 1", "4, 3, 1, 2"],
        "c": "A"
    },
    {
        "p": "Parte de la Física que estudia las relaciones entre el movimiento de los cuerpos y las causas que lo producen.",
        "o": ["Electrodinámica", "Dinámica", "Cinemática", "Termodinámica"],
        "c": "B"
    },
    {
        "p": "Relacionar la premisa para tiro parabólico con su correspondiente modelo matemático:",
        img: "IPN_88.png",
        "o": ["1C, 2B, 3D, 4A", "1C, 2D, 3B, 4A", "1B, 2A, 3C, 4D", "1B, 2C, 3A, 4D"],
        "c": "D"
    },
    {
        "p": "Calcular el trabajo en Joules que se realiza para subir un cuerpo de 20kg hasta una altura de 1.5m sobre el nivel del piso:",
        "o": ["300", "294", "30.0", "2.94"],
        "c": "B"
    },
    {
        "p": "Relacionar cada concepto con la expresion matematica que le corresponde",
        img: "IPN_90.png",
        "o": ["1A, 2D, 3B, 4C", "1A, 2B, 3D, 4C", "1D, 2C, 3A, 4B", "1D, 2A, 3C, 4B"],
        "c": "C"
    }

];
const seccionComprensionGramaticaIPN = [
    {
        "p": "LA DÉCADA WIKIPEDIA \n [1] En marzo de 2000, Jimbo Wales creó Nupedia, un proyecto de enciclopedia libre basado en un ambicioso y exhaustivo proceso de revisión por pares, diseñado para hacer sus artículos de una calidad comparable a la de las enciclopedias profesionales, gracias a la participación de eruditos (principalmente doctorandos y académicos), a los que se proponía colaborar de modo no remunerado. El proyecto tuvo el apoyo económico de la empresa Bomis, fundada por Wales y administrada por este junto con un compañero desde 1996, y la colaboración de Richard Stallman, quien propuso el cambio a la licencia pública general de GNU, desde la antigua Nupedia Open Content License. Larry Sanger, doctor en filosofía, que ya conocía anteriormente a Wales, al mantener con él discusiones filosóficas por internet, fue contratado por este y se convirtió en redactor jefe de Nupedia.\n\n[2] Debido al lento avance del proyecto, en 2001 se creó un wiki (UseMod) vinculado a Nupedia cuya finalidad inicial era agilizar la creación de artículos de forma paralela, antes de que estos pasaran al sistema de revisión por expertos. Existe cierta polémica entre los fundadores de Nupedia sobre quién propuso originalmente la idea de usar un wiki a Jimbo Wales, si Larry Sanger o bien una tercera persona, pero el caso es que el éxito de aquel “pequeño proyecto paralelo” (Wikipedia) acabó eclipsando a Nupedia, que dejó de funcionar en 2003.\n\n[3] El artículo UuU, creado el 16 de enero de 2001, es aceptado como el artículo actualmente existente más antiguo de Wikipedia. Apareció en la Wikipedia en inglés y así es como puede verse aquella primera edición, recurriendo al historial.\n\n[4] El proyecto Wikipedia se inició el 15 de enero de 2001. El UuU consistía en tres enlaces hacia sendos artículos sobre el Reino Unido, Estados Unidos y Uruguay. Larry Sanger pasó a colaborar con Wikipedia y trabajó activamente en la organización y directrices del proyecto, marchándose en 2002 por desacuerdos con Wales. Ese año, Wikipedia abarcaba 26 idiomas; en 2003, 46, y 161 a finales de 2004. Wikipedia y Nupedia coexistieron hasta la extinción de la segunda en 2003.\n\n[5] Sin embargo, la posibilidad de utilizar publicidad en Wikipedia provocó una reacción por parte de los contribuyentes de la Wikipedia en español, motivo que llevó a la creación de la Enciclopedia Libre Universal en español en febrero de 2002. Este episodio podría haber impulsado a su vez la determinación de no utilizar publicidad, la creación de la Fundación Wikimedia y el cambio al nuevo URL: wikipedia.org.\n\n[6] Se han iniciado varios proyectos de enciclopedia con formato wiki, en gran parte bajo una filosofía diferente de la apertura y el modelo editorial del “punto de vista neutral” desarrollado por Wikipedia. Por ejemplo, Wikinfo, uno de los portales web, no requiere un punto de vista neutral y permite la investigación original. También hubo nuevos proyectos inspirados en Wikipedia —como Citizendium, Scholarpedia, Conservapedia, y Knol de Google— donde algunos de los aspectos que son fundamentales en Wikipedia se abordan de manera diferenciada, como las políticas de revisión por pares, la investigación original, y la publicidad comercial.\n\n[7] El 20 de septiembre de 2004 Wikipedia alcanzó 1 millón de artículos en 100 idiomas. En 2007, la versión en inglés superó los 2 millones de artículos, convirtiéndose en la enciclopedia con mayor número de artículos de la historia y superando en ese aspecto a la Yongle Dadian de 1407, que sostuvo el récord durante varios siglos. Debido a su popularidad y sencillez, el Oxford English Dictionary ha considerado introducir el término wiki. Fragmento de Wikipedia (febrero 2011). 'La Década Wikipedia'. Lee 22, p. 20.\n Pregunta: La palabra políticas que aparece en el párrafo [6], es una palabra:",
        "o": ["grave", "aguda", "esdrújula", "sobresdrújula"],
        "c": "C"
    },
    {
        "p": "92. En el enunciado \"Existe cierta polémica entre los fundadores de Nupedia sobre quién propuso originalmente la idea de usar un wiki a Jimbo Wales\", la palabra quién lleva acento, ¿por qué?",
        "o": ["Es una sílaba átona", "Es un adjetivo demostrativo", "Señala un pronombre tónico", "Tiene acentuación diacrítica"],
        "c": "D"
    },
    {
        "p": "93. ¿Qué fue lo que le permitió a Nupedia diseñar artículos de gran calidad?",
        "o": ["La competencia con otras enciclopedias", "El apoyo económico recibido de una empresa", "El ser un proyecto grande e intensivo, sin precedencia", "La participación de académicos y aspirantes a doctorado"],
        "c": "D"
    },
    {
        "p": "Ordenar las siguientes ideas de acuerdo con la secuencia del texto.",
        img: "IPN_94.png",
        "o": ["1, 2, 4, 3", "1, 4, 2, 3", "3, 1, 2, 4", "3, 2, 4, 1"],
        "c": "C"
    },
    {
        "p": "El artículo UuU es ________ como el artículo actualmente existente más ________ de Wikipedia.",
        "o": ["reconocido - visto", "admitido - longevo", "justificado - moderno", "conocido - tradicional"],
        "c": "B"
    },
    {
        "p": "¿Qué desea indicar el autor con la expresión <<el modelo editorial del \"punto de vista neutral\">>, en el párrafo [6]?",
        "o": ["Debe prevalecer la investigación original", "La información presentada debe ser imparcial", "La revisión de los artículos debe ser exhaustiva", "La información debe corresponder a la visión de sus partidarios"],
        "c": "B"
    },
    {
        "p": "Por las características de la lectura anterior, ¿a qué tipo de texto pertenece?",
        "o": ["Narrativo", "Expositivo", "Descriptivo", "Argumentativo"],
        "c": "B"
    },
    {
        "p": "En el párrafo [6] aparece el siguiente enunciado: \"también hubo nuevos proyectos inspirados en Wikipedia —como Citizendium, Scholarpedia, Conservapedia, y Knol de Google—\" ¿Para qué se utilizan los guiones largos?",
        "o": ["Cambiar el tema", "Aclarar la información", "Hacer énfasis en las palabras", "Acotar información no prescindible"],
        "c": "D"
    },
    {
        "p": "El formato wiki ________ nuevos proyectos, en donde se ________ algunos aspectos fundamentales de Wikipedia.",
        "o": ["infundió - copian", "sugirió - retoman", "modificó - utilizan", "generó - modifican"],
        "c": "D"
    },
    {
        "p": "En el párrafo [5], la palabra sin embargo puede ser sustituida por:",
        "o": ["como", "pero", "además", "por lo tanto"],
        "c": "B"
    },
    {
        "p": "LA CORRUPCIÓN [1] El estudio del fenómeno de la corrupción suele ser enfocado desde dos perspectivas que dificultan su comprensión y condicionan su precisión conceptual. Una de ellas podría denominarse “perspectiva de la modernización”: la corrupción sería un fenómeno propio de regímenes políticos no evolucionados; es decir, cuanto mayor sea el grado de desarrollo o de modernización de una sociedad política, menor habrá de ser el grado de corrupción. La realidad cotidiana de los países altamente industrializados ha puesto de manifiesto la falsedad de esta tesis. La supuesta correlación entre mayor democracia y menor corrupción no es empíricamente sostenible. Resulta significativo que haya habido menos corrupción bajo Stalin que bajo los regímenes soviéticos o rusos subsiguientes y que las democracias occidentales abunden en ejemplos de corrupción gubernamental. [2] La segunda perspectiva es la “perspectiva de la moralidad”. A diferencia de la primera, es parcialmente verdadera, pero tiende a establecer una relación dudosa entre coacción y corrupción o bien a considerar que todos los casos de corrupción son moralmente reprochables. Por lo tanto, la perspectiva de la moralidad impide ver la diferencia que puede haber entre la violación a un sistema normativo positivo y a la de un sistema perverso con pretensiones de universalidad. No encuentro cuál podría ser la “culpabilidad” o la “vergüenza” de Oskar Schindler al sobornar a los jefes de un campo de concentración nazi y salvar así la vida de no pocos prisioneros judíos. [3] En consecuencia, el concepto de corrupción está lógicamente vinculado con el de sistema normativo dentro del cual se producen los actos denominados “corruptos”. Es preciso señalar que una actividad es llamada “corruptora” en relación con un “sistema normativo pertinente”. Los estudiosos llaman “sistema normativo pertinente” a todo conjunto de reglas que —en determinada organización social concreta— regulan la práctica social. En este sentido, puede hablarse, por ejemplo, de sistemas normativos religiosos, jurídicos, políticos, económicos, deportivos, etc. Lo anterior significa rechazar la concepción habitual según la cual el fenómeno de la corrupción es eminentemente político. Desde tal punto de vista, está permitido hablar de deportistas, directores de empresas o sacerdotes “corruptos” en el mismo sentido en que puede hablarse de gobernantes o diputados “corruptos”. Significa también abandonar la idea de que para hablar de corrupción hay que hacer necesariamente referencia a una persona que ocupa una posición oficial, es decir, a una autoridad o, lo que es lo mismo, a alguien que ejerce un poder. [4] Sin embargo, sería falso inferir de aquí la conclusión de que la importancia tradicional en la necesidad de la participación de una autoridad en los actos o actividades corruptos no contiene relaciones indirectas interesantes con el problema. Son, por lo menos, las dos que se expondrán a continuación. Por lo pronto, alguien es una autoridad cuando —entre otros rasgos— tiene la competencia para tomar decisiones; es por ello un “decisor”. Pero el carácter de decisor no tiene por qué estar limitado al ámbito político. Alguien puede ser decisor en virtud del papel social que desempeña o de la posición que ocupa dentro del sistema normativo pertinente, sin que ello implique por fuerza la potestad para dictar disposiciones jurídicamente obligatorias. En todo caso, conviene decir que en los actos de corrupción siempre interviene por lo menos un decisor. [5] En segundo lugar, el acto o actividad corruptora requiere, amén del decisor, la intervención de una o más personas, decisoras o no. Es un delito participativo en el que una de las partes intenta influir en el comportamiento de la otra mediante promesas, amenazas o prestaciones prohibidas por el sistema normativo pertinente. La corrupción es siempre una fuente adicional de ingresos o beneficios para quienes participan en ella. En el caso del agente corrupto, tales beneficios son casi siempre de índole económica, pero no queda excluida la posibilidad de que consistan en otro tipo de gratificaciones no directamente evaluables en dinero. Basta pensar en el otorgamiento de honores, premios u otro tipo de favores no obtenibles mediante el cumplimiento estricto de los deberes posicionales. Fragmento de Garzón, E. (octubre de 2004). “Acerca de la calificación moral de la corrupción. Tan solo una propuesta”, Isonomía. Revista de Teoría y Filosofía del Derecho, pp. 9-21. Pregunta: 101. ¿Cuál es la función de los guiones en la frase \"—en determinada organización social concreta—\", presentada en el párrafo [3]",
        "o": ["Aclarar las ideas", "Intercalar incisos", "Introducir diálogos", "Encabezar un listado"],
        "c": "A"
    },
    {
        "p": "En el texto se manejan las perspectivas de la ________ y ________ para el estudio de la corrupción.",
        "o": ["culpabilidad - la vergüenza", "moralidad - la modernización", "industrialización - del sistema normativo", "infracción participativa - del agente corruptor"],
        "c": "B"
    },
    {
        "p": "Ordenar las siguientes ideas de acuerdo con su aparición en el texto.\n1. En el ámbito social y político existen personas con autoridad para tomar decisiones.\n2. Desde la \"perspectiva de la moralidad\" se pueden considerar moralmente reprobables todos los actos de corrupción.\n3. La corrupción constituye un medio para la obtención de beneficios no solamente económicos.\n4. El entendimiento del fenómeno de la corrupción se ve obstaculizado por las dos perspectivas desde las que se enfoca.\n5. Los actos de corrupción se generan al interior del sistema normativo.",
        "o": ["3, 1, 2, 4, 5", "3, 2, 4, 5, 1", "4, 2, 5, 1, 3", "4, 3, 1, 5, 2"],
        "c": "C"
    },
    {
        "p": "Según el autor, la corrupción parece ser un fenómeno que:",
        "o": ["regula el conjunto de reglas de toda sociedad", "se produce solo en las esferas gubernamentales y políticas", "se presenta en ámbitos que no son exclusivamente políticos", "abunda más entre los deportistas y los directores de empresas"],
        "c": "C"
    },
    {
        "p": "Según el texto, la persona que toma decisiones es alguien que:",
        "o": ["ocupa una posición social prominente", "acepta las leyes de la competencia del sistema", "debe tener obligatoriamente un cargo en el gobierno", "no tiene competencia para participar en un intercambio corrupto"],
        "c": "A"
    },
    {
        "p": "El título más apropiado para este texto podría ser:",
        "o": ["Los peligros actuales de la corrupción", "Definición de la corrupción como delito", "Introducción al problema de la corrupción", "La modernización democrática y la corrupción"],
        "c": "C"
    },
    {
        "p": "El autor afirma que:",
        "o": ["hay solo dos perspectivas para estudiar el fenómeno de la corrupción", "no existe corrupción en los países más desarrollados democráticamente", "el desarrollo democrático de un país no constituye un obstáculo para la corrupción", "la corrupción sería un fenómeno propio de regímenes no evolucionados democráticamente"],
        "c": "C"
    },
    {
        "p": "En el párrafo [4], la palabra potestad podría ser sustituida por:",
        "o": ["benevolencia", "disposición", "imposición", "facultad"],
        "c": "D"
    },
    {
        "p": "Identificar la oración que tiene un sujeto morfológico.",
        "o": ["A diferencia de la primera, es parcialmente verdadera", "Las anteriores son solo algunas de las consideraciones preliminares", "El carácter de decisor no tiene por qué estar limitado al ámbito político", "En los actos de corrupción siempre interviene por lo menos un decisor"],
        "c": "A"
    },
    {
        "p": "En lo referente a la \"perspectiva moral\", el autor sostiene que la corrupción:",
        "o": ["es siempre un acto éticamente reprobable", "en ciertas condiciones, no constituye una acción inmoral", "produce culpabilidad o vergüenza en los que la practican", "es una violación a cualquier sistema establecido de normas"],
        "c": "B"
    }

];
const preguntasPorSeccionIPN = {
    "MATEMÁTICAS": seccionMatematicasIPN,
    "CIENCIAS EXPERIMENTALES": seccionCienciasExperimentalesIPN,
    "COMPRENSIÓN DE TEXTOS Y GRAMÁTICA DEL ESPAÑOL": seccionComprensionGramaticaIPN
};
const preguntasIPN = [
    ...seccionMatematicasIPN,
    ...seccionCienciasExperimentalesIPN,
    ...seccionComprensionGramaticaIPN
];
const totalPreguntasIPN = preguntasIPN.length;

// ==========================================================
// 7. DATOS EXAMEN UNAM MEDICINA
// ==========================================================
const seccionFisicaUnammedicina = [
    { p: "1. Un auto arranca con una aceleración constante de 1.8 m/s². La velocidad del auto seis segundos después de iniciar su movimiento es de:", o: ["0.9 m/s", "1.8 m/s", "3.2 m/s", "3.6 m/s"], c: "D" },
    { p: "2. Con base en el siguiente sistema de vectores, indica la magnitud del vector resultante en N.", o: ["√58.8", "√23.8", "√650", "√101.1"], c: "D", imgs: ["ExamMedicina/2.png"] },
    { p: "3. La siguiente figura ilustra el momento preciso en el que el bate golpea una pelota. ¿Cuál de las imágenes muestra los vectores que representan la Tercera Ley de Newton?", o: ["A", "B", "C", "D"], c: "A", imgs: ["ExamMedicina/3.png", "ExamMedicina/3-1.png", "ExamMedicina/3-2.png"] },
    { p: "4. La ecuación que permite calcular la energía cinética de una partícula de masa m y velocidad v es:", o: ["Ec = mv", "Ec = 2mv²", "Ec = mv² / 2", "Ec = 1/2 mv²"], c: "D", imgs: ["ExamMedicina/4.png"] },
    { p: "5. Un sistema está en equilibrio térmico cuando:", o: ["en un proceso su temperatura no varía", "su temperatura es igual a la de otro sistema con el que está en contacto térmico", "se calienta por medio de trabajo", "su presión y su masa permanecen constantes"], c: "B" },
    { p: "6. ¿Cuál es la densidad del oxígeno diatómico que está a una temperatura de 27 °C y a una atmósfera de presión?", o: ["0.08 kg/m³", "1.4 kg/m³", "0.6 kg/m³", "1.3 kg/m³"], c: "D", imgs: ["ExamMedicina/6.png"] },
    { p: "7. Calcula la frecuencia de una luz de color rojo con una velocidad de 300,000 km/s y una longitud de onda de 7×10⁻⁷ m.", o: ["2.33×10⁻¹⁵ Hz", "2.10×10² Hz", "4.76×10⁻³ Hz", "4.28×10¹⁴ Hz"], c: "D" },
    { p: "8. La interferencia de dos ondas mecánicas puede generar franjas claras y oscuras. Lo anterior se debe a la conservación de la:", o: ["polarización", "difracción", "energía", "longitud de onda"], c: "C" },
    { p: "9. Una carga +Q se encuentra en el centro de un círculo y sobre el perímetro, a una distancia R, están situadas 12 cargas +q uniformemente distribuidas. ¿Cuál es la fuerza neta que experimenta la carga +Q?", o: ["0 N", "3F N", "6F N", "12F N"], c: "A", imgs: ["ExamMedicina/9.png"] },
    { p: "10. Por un cable que tiene una resistencia eléctrica de 10 Ω, circula una corriente de 10 A. ¿Cuál es el voltaje en el cable?", o: ["100 V", "20 V", "10 V", "1 V"], c: "A" },
    { p: "11. De acuerdo a la imagen, la corriente que circula por el resistor de resistencia R/2 es:", o: ["V/2R", "2V/R", "V/3R", "3V/R"], c: "B", imgs: ["ExamMedicina/11.png"] },
    { p: "12. Determina la resistencia total del circuito que se representa en la imagen.", o: ["2.41 Ω", "4.4 Ω", "12 Ω", "19 Ω"], c: "B", imgs: ["ExamMedicina/12.png"] },
    { p: "13. Tres recipientes idénticos A, B y C contienen igual cantidad de diferentes líquidos con densidades dA > dB > dC. ¿Cómo es la presión en las bases de los recipientes?", o: ["PA = PB = PC", "PA > PB > PC", "PB > PA > PC", "PC > PB > PA"], c: "B", imgs: ["ExamMedicina/13.png"] },
    { p: "14. A través de una lente convergente de 30 cm de radio pasan rayos que forman una imagen a 20 cm de distancia. ¿Cuál es la distancia a la lente del objeto real?", o: ["30 cm", "16 cm", "8 cm", "60 cm"], c: "D" },
    { p: "15. Actualmente se concibe a la luz con un comportamiento dual, esto se refiere a que se le considera como:", o: ["partícula y onda", "energía y movimiento", "calor y difracción", "reflexión y refracción"], c: "A" },
    { p: "16. ¿En qué áreas recibió Madame Curie el premio Nobel?", o: ["Física y Biología", "Medicina y Química", "Química y Biología", "Física y Química"], c: "D" }
];
const seccionLiteraturaUnammedicina = [
    { p: "17. De acuerdo con su organización textual, las propiedades del texto deben presentar", o: ["una situación comunicativa en la que surge como una unidad de información con significado coherente, cuyas ideas tienen cohesión.", "un cuerpo de citas y referentes autorizados claramente documentados en el cual se apoye lo anterior, con el fin de dar verosimilitud a éste.", "una serie de ideas perfectamente establecidas cuya finalidad es informar a partir de su función referencial y apelativa.", "un contenido acorde al pensamiento del autor, en la que las ideas se presentan en función de la subjetividad del lector."], c: "A" },
    { p: "18. En el siguiente texto predomina la función referencial de la lengua porque:", o: ["transmite un mensaje en forma directa y clara", "intenta mantener despierta la atención del lector", "expresa la emotividad y sentimientos", "se dan los nombres y apellidos de los participantes"], c: "A", imgs: ["ExamMedicina/18.png"] },
    { p: "19. Representación teatral donde los personajes son marcados por la fatalidad y están determinados por el destino.", o: ["Sainete", "Entremés", "Tragedia", "Farsa"], c: "C" },
    { p: "20. Identifica el recurso poético presente en la siguiente expresión: La lluvia, como finísimas flechas afiladas, caía chorreando la vidriera.", o: ["Ironía", "Símil", "Metonimia", "Metáfora"], c: "B" },
    { p: "21. Género literario que es presentado en un escenario a través de diálogos.", o: ["Épico", "Dramático", "Lírico", "Narrativo"], c: "B" },
    { p: "22. Los autores que conforman una corriente literaria:", o: ["comparten características en cuanto a su forma de escribir y el interés por desarrollar temas similares, además, viven en una misma época", "heredan el estilo de quienes los precedieron, comparten una forma de escribir y abordan un género determinado, como la dramaturgia o la novela", "heredan el estilo de quienes los precedieron, comparten una forma de escribir y muestran interés por desarrollar temas similares", "abordan un género determinado, como la dramaturgia o la novela, comparten el interés por desarrollar temas similares y viven en una misma época"], c: "A" },
    { p: "23. ¿Qué características del Realismo están contenidas en el siguiente fragmento? El remedio del malestar social y de la lucha cada vez más encarnada entre pobres y ricos, ¿cuál es? La pobreza, la renuncia de los bienes materiales. El remedio de las injusticias que producen los viciosos en cuanto a los medios políticos, ¿cuál es? Pues el luchar con la injusticia, el entregarse a la maldad humana.", o: ["Los valores nacionales y la exaltación del sentimiento", "Los problemas de un sector de la población y el reflejo de la realidad", "La objetividad del autor y la evasión de la realidad", "La descripción de ambientes y el subjetivismo del autor"], c: "B" },
    { p: "24. Narración breve que da forma a las fantasías del ser humano.", o: ["Crónica", "Comedia", "Ensayo", "Cuento"], c: "D" },
    { p: "25. Narración que se caracteriza por desarrollar varias historias.", o: ["Leyenda", "Mito", "Novela", "Minificción"], c: "C" },
    { p: "26. ¿De qué tipo es la siguiente ficha? Agustín López Munguía, “No pegues tu chicle. Plaga contaminante”, ¿Cómo ves?, año 7, no. 81, Revista de divulgación de la Ciencia de la UNAM, pp. 10–14.", o: ["Bibliográfica", "Hemerográfica", "De cita textual", "De síntesis"], c: "B" }
];
const seccionQuimicaUnammedicina = [
    { p: "27. Selecciona la opción que representa sustancias que, químicamente, no pueden descomponerse en otras más simples.", o: ["Na(s), Cl2(g) y P4(s)", "O2(g), He(g) y CO(g)", "S8(s), N2(g) y SO2(g)", "CO(g), Na(s) y S8(g)"], c: "A", imgs: ["ExamMedicina/27.png"] },
    { p: "28. El átomo de oxígeno tiene ____ protones, ____ electrones y ____ neutrones. Considera: Z = 8, A = 16.", o: ["16, 16, 8", "8, 8, 8", "16, 8, 16", "8, 16, 16"], c: "B" },
    { p: "29. Propiedades químicas de los metales alcalinos.", o: ["Al oxidarse pierden dos electrones y no reaccionan con el agua", "Forman anhídridos y bases", "Son muy reactivos con el agua y al oxidarse pierden un electrón", "Son poco reactivos con el agua y al reducirse ganan un electrón"], c: "C" },
    { p: "30. Opción que representa a sustancias que en disolución acuosa liberan iones hidronio.", o: ["H2S, H2O y PH3", "NH3, CH4 y NaOH", "KOH, HCl y NH3", "HCl, H3PO4 y H2CO3"], c: "D", imgs: ["ExamMedicina/30.png"] },
    { p: "31. ¿Qué cantidad de HCl concentrado se necesita para preparar 250 mL de una disolución 1.4 M? Considera: HCl al 37% de pureza, d = 1.14 g/mL", o: ["34 mL", "30 mL", "14 mL", "12 mL"], c: "B", imgs: ["ExamMedicina/31.png"] },
    { p: "32. Los icebergs flotan en el océano debido a fuerzas", o: ["intramoleculares denominadas covalentes polares.", "intramoleculares denominadas puentes de hidrógeno.", "intermoleculares denominadas covalentes polares.", "intermoleculares denominadas puentes de hidrógeno."], c: "D" },
    { p: "33. En una disolución acuosa se determinó que [H+] < [OH-], por lo tanto, el valor de pH será", o: ["11", "5", "7", "2"], c: "A" },
    { p: "34. A partir de la siguiente ecuación química, se puede inferir que x es un C(s) + O2(g) → x", o: ["óxido básico.", "oxisal.", "hidróxido.", "óxido ácido."], c: "D", imgs: ["ExamMedicina/34.png"] },
    { p: "35. Biomoléculas que sirven de reserva energética en los organismos.", o: ["Aminoácidos.", "Lípidos.", "Vitaminas.", "Carbohidratos."], c: "B" },
    { p: "36. Las reacciones de combustión son _____ porque _____ energía calorífica.", o: ["exotérmicas — liberan", "exotérmicas — absorben", "endotérmicas — liberan", "endotérmicas — absorben"], c: "A" }
];
const seccionGeografiaUnammedicina = [
    { p: "37. Coordenada geográfica que permite ubicar un lugar al norte y sur del Ecuador.", o: ["Latitud.", "Altitud.", "Longitud.", "Nutación."], c: "A" },
    { p: "38. ¿Cuál es la latitud y longitud que corresponde a la ciudad de Caracas?", o: ["11° lat N — 67° long W", "65° lat S — 11° long E", "11° lat S — 65° long W", "67° lat N — 11° long W"], c: "A", imgs: ["ExamMedicina/38.png"] },
    { p: "39. Las corrientes de convección del _____ generan el desplazamiento de los continentes.", o: ["manto superior.", "manto inferior.", "núcleo externo.", "núcleo interno."], c: "A" },
    { p: "40. Al viajar de Chihuahua a Sinaloa, la cadena montañosa que se recorre, es la Sierra", o: ["Madre Occidental.", "De la Breña.", "Madre Oriental.", "Volcánica Transversal."], c: "A" },
    { p: "41. Las costas de los estados de _____ y _____ son afectadas por los ciclones tropicales que se forman en el mar de las Antillas.", o: ["Chiapas — Oaxaca", "Yucatán — Quintana Roo", "Campeche — Guerrero", "Tabasco — Nayarit"], c: "B" },
    { p: "42. La marea negra afecta principalmente a la vida en los", o: ["lagos.", "ríos.", "manantiales.", "océanos."], c: "D" },
    { p: "43. Son países que funcionan como puntos de acceso para que los migrantes que provienen del norte de África logren integrarse al territorio europeo.", o: ["España, Malta, Italia y Grecia.", "España, Francia, Alemania e Italia.", "Malta, Francia, Grecia y Portugal.", "Reino Unido, Croacia, Francia y Alemania."], c: "A" },
    { p: "44. La Unión Europea tiene como propósitos fundamentales la", o: ["libre circulación de mercancías, personas y políticas comunes.", "unificación de la moneda y la creación de un fideicomiso agrario.", "protección de los derechos de los trabajadores y un salario uniforme.", "explotación sin restricciones de los recursos del carbón y del petróleo."], c: "A" },
    { p: "45. Una de las causas principales de la desintegración de los estados — nación es", o: ["la pugna por la explotación de los recursos naturales.", "la aplicación de políticas neoliberales.", "el cambio drástico del sistema económico.", "el descontento social de las minorías étnicas y religiosas."], c: "D" },
    { p: "46. El tipo de industria que se ubica en la zona fronteriza del norte de México es la", o: ["metalúrgica.", "maquiladora.", "petroquímica.", "metalmecánica."], c: "B" }
];
const seccionMatematicasUnammedicina = [
    { p: "47. Una persona pesa 96 kg. Al ingresar a una clínica reductora de peso, comienza a bajar 1/32 del peso inicial cada semana. ¿Cuántos kg pesará al término de cada una de las primeras cuatro semanas del tratamiento?", o: ["Semana 1: 93; Semana 2: 90; Semana 3: 87; Semana 4: 84", "Semana 1: 96; Semana 2: 92; Semana 3: 88; Semana 4: 84", "Semana 1: 96; Semana 2: 90; Semana 3: 84; Semana 4: 78", "Semana 1: 93; Semana 2: 92; Semana 3: 91; Semana 4: 90"], c: "A" },
    { p: "48. Al simplificar la expresión algebraica −3x − [−2(4x − 3) − (9 − x)] se obtiene", o: ["6x + 3", "4x + 3", "10x + 3", "6x + 12"], c: "B" },
    { p: "49. Al desarrollar (x^2 − 3y)^3 se obtiene", o: ["A", "B", "C", "D "], c: "C", imgs: ["ExamMedicina/49.png", "ExamMedicina/49-1.png"] },
    { p: "50. Simplifica la siguiente fracción:", o: ["x − 5", "−x + 5", "−x + 8", "x − 8"], c: "B", imgs: ["ExamMedicina/50.png"] },
    { p: "51. La solución de la ecuación", o: ["x = 8", "x = 9", "x = 10", "x = 12"], c: "B", imgs: ["ExamMedicina/51.png"] },
    { p: "52. Las soluciones de la ecuación son", o: [" ", " ", " ", " "], c: "A", imgs: ["ExamMedicina/52.png"] },
    { p: "53. Al resolver −2x + 6 ≥ 16 ¿Cuál es el valor de x?", o: ["x < −5", "x ≥ 5", "x ≤ −5", "x > 5"], c: "C" },
    { p: "54. Soluciona el sistema de ecuaciones:", o: ["x = −2, y = 3, z = 5", "x = 2, y = 4, z = −5", "x = −2, y = 4, z = 5", "x = 2, y = 3, z = −5"], c: "C", imgs: ["ExamMedicina/54.png"] },
    { p: "55. Si S = {1, 2} y Q = {2, 3, 4}, ¿cuál es el rango de la función f: S → Q definida por f(x) = x + 1?", o: ["{2, 3}", "{1, 2, 3}", "{1, 3}", "{2, 3, 4}"], c: "A" },
    { p: "56. A cuanto equivale 45° en radianes.", o: ["π/4", "2π/3", "3π/4", "4π/3"], c: "A" },
    { p: "57. En un triángulo rectángulo, la hipotenusa mide 10 unidades y uno de sus ángulos es de 30°. ¿Cuántas unidades mide el lado opuesto al ángulo dado?", o: ["6", "10√3", "5", "5√3"], c: "C" },
    { p: "64. Dada la ecuación de la elipse x^2/100 + y^2/75 = 1 determina su excentricidad.", o: ["3/4", "2/3", "3/5", "1/2"], c: "D", imgs: ["ExamMedicina/64.png"] },
    { p: "65. ¿Cuál es la ecuación de la hipérbola centrada en el origen con lado recto 10 y vértice V (0, −9)?", o: ["9x² − 5y² = 405", "5y² − 9x² = 405", "9x² − 10y² = 90", "10x² − 9y² = 90"], c: "B" },
    { p: "66. La ecuación x² + 4xy + 4y² − 74x + 2y + 94 = 0 es una", o: ["circunferencia.", "parábola.", "elipse.", "hipérbola."], c: "B" },
    { p: "67. El límite de la función f(x) = 4 cuando x tiende a −2, es igual a", o: ["−2", "−4", "2", "4"], c: "D" },
    { p: "68. ¿Cuál de las siguientes expresiones corresponde para obtener la derivada f(x) = x^3 en el punto x = 3?", o: ["A", "B", "C", "D"], c: "A", imgs: ["ExamMedicina/68.png", "ExamMedicina/68-1.png"] },
    { p: "69. En la siguiente gráfica de la función f(x). ¿En qué intervalo la derivada de f es negativa?", o: ["(−2, 4)", "[2, 4)", "(2, 4]", "[−2, 4]"], c: "C", imgs: ["ExamMedicina/69.png"] }
];
const seccionEspañolUnammedicina = [
    { p: "86. Identifica el párrafo redactado correctamente.", o: ["Los campos magnéticos solar y terrestre interaccionan hasta que este último se deforma. Como cualquier ente en el universo, la Tierra responde de varias maneras ante el impacto de la actividad solar; en este caso lo hace mediante la actividad geomagnética (perturbaciones en el campo magnético terrestre).", "El campo magnético solar y terrestre se encuentran interaccionando hasta que este último (el campo magnético terrestre) termina deformándose. La Tierra, como cualquier ente en el universo, responde de varias maneras ante el impacto de la actividad solar; en este caso lo hace mediante perturbaciones en el campo magnético terrestre (es decir actividad geomagnética).", "Ante el impacto de la actividad solar (como cualquier ente en el universo), la Tierra responde de varias maneras; en este caso lo hace mediante la actividad geomagnética (perturbaciones en el campo magnético terrestre). Ello sucede porque los campos magnéticos solar y terrestre interaccionan hasta que el último se deforma.", "El campo magnético solar y el campo magnético terrestre interaccionan hasta que éste se deforma. Como cualquier ente en el universo, la Tierra responde de varias maneras ante el impacto de la actividad solar. Haciéndolo mediante la actividad geomagnética (esto es, perturbaciones que acontecen en el campo magnético terrestre)."], c: "C" },
    { p: "87. Selecciona la opción que complete correctamente la analogía. Comparar los brazos de una persona con _______ resulta pertinente para describir una técnica de natación.", o: ["Las alas de un sombrero", "Las tenazas de un cangrejo", "Las aspas de un molino", "Los motores de un aeroplano"], c: "C" },
    { p: "88. Sinónimo de AVATAR.", o: ["Destino.", "Cambio.", "Conflicto.", "Aficción."], c: "B" },
    { p: "89. Elige la opción con la ortografía correcta.", o: ["El rebaño avanza sin cesar y ellos comienzan a rezagarse.", "El rebaño avanza sin cezar y ellos comienzan a resagarse.", "El rebaño avanza sin cezar y ellos comienzan a rezagarse.", "El rebaño avanza sin cesar y ellos comienzan a resagarse."], c: "A" },
    { p: "90. Elige el enunciado que está acentuado correctamente.", o: ["Notó que aquel beso era de un extraño.", "La abeja se diferencia de la avispa por sus alas.", "La practica de física se canceló.", "El muchacho vivía cómo un salvaje en la soledad."], c: "A" }
];
const seccionHistoriaUnammedicina = [
    { p: "101. La formación de las Altas Culturas agrícolas en África y Asia, de los imperios griego y romano pertenecieron a la ________, mientras que la división por feudos, así como el renacimiento artístico, la formación de los Estados europeos y la colonización de América fueron característicos de la ________.", o: ["Edad Media — Edad Moderna", "Edad Antigua — Edad Moderna", "Edad Moderna — Edad Contemporánea", "Edad Antigua — Edad Contemporánea"], c: "B" },
    { p: "102. Representa uno de los principios básicos de la Ilustración.", o: ["La razón como instrumento para conocer el mundo.", "La organización del saber empírico y filosófico.", "La transición de las ideas científicas a la fe religiosa.", "El surgimiento del humanismo renacentista."], c: "A" },
    { p: "103. La principal demanda de las revoluciones de 1830 fue", o: ["La creación de estados nacionales regidos por constituciones.", "El surgimiento del pacto de la Santa Alianza.", "La independencia de las naciones de los Balcanes.", "El cumplimiento de los acuerdos del Congreso de Viena."], c: "A" },
    { p: "104. Selecciona los inventos científico—tecnológicos más importantes del siglo XIX.", o: ["Penicilina y aeroplano.", "Electricidad y telégrafo.", "Teléfono y televisión.", "Radar y bolígrafo."], c: "B" },
    { p: "105. Una consecuencia de la Primera Guerra Mundial fue la", o: ["Creación de la Organización de las Naciones Unidas.", "Formación de dos bloques: capitalista y socialista.", "Desintegración del Imperio austrohúngaro.", "Desintegración del bloque soviético."], c: "C" },
    { p: "106. La sobre emisión de créditos, el exceso en la oferta y la demanda de bienes de consumo y la caída de la bolsa de Nueva York fueron causas de la crisis de", o: ["1908.", "1929.", "1982.", "1985."], c: "B" },
    { p: "107. La Organización de Tratados Internacionales, la división de Alemania entre los países vencedores y la fundación de la Organización de las Naciones Unidas fueron consecuencias de la", o: ["Primera Guerra Mundial.", "Guerra de Israel.", "Segunda Guerra Mundial.", "Guerra Fría."], c: "C" },
    { p: "108. Uno de los rasgos que distinguen al bloque socialista del capitalista es", o: ["La falta de innovaciones tecnológicas.", "El intervencionismo en los asuntos del tercer mundo.", "La economía centralmente planificada a través de un sistema de partido único.", "La libre competencia de capitales."], c: "C" },
    { p: "109. ¿Qué país africano logró su independencia en 1951, después de haber estado bajo el yugo italiano, francés y británico?", o: ["Libia.", "Etiopía.", "Sudáfrica.", "Marruecos."], c: "A" },
    { p: "110. Los enormes presupuestos militares por la Guerra Fría y el predominio de Estados burocráticos con gasto excesivo fueron causas de la", o: ["Invasión a Medio Oriente.", "Caída del Bloque Soviético.", "Formación de la OTAN.", "Formación del Pacto de Varsovia."], c: "B" }
];
const seccionHistoriaMexicoUnammedicina = [
    { p: "111. Mientras que ______ participó en la conquista militar de México, ______ se ocupó de la conquista espiritual.", o: ["Juan de Zumárraga — Jerónimo de Aguilar", "Antonio de Mendoza — Toribio de Benavente", "Pedro de Alvarado — Bernardino de Sahagún", "Bartolomé de Olmedo — Cristóbal de Olid"], c: "A" },
    { p: "112. Durante la etapa de iniciación de la Independencia de la Nueva España, Miguel Hidalgo promulgó la ________, y José María Morelos la ________, durante la organización del movimiento armado.", o: ["Constitución de Apatzingán — abolición de la esclavitud", "Abolición de las castas — Constitución de Apatzingán", "Constitución de Apatzingán — abolición de las castas", "Abolición de la esclavitud — Constitución de Apatzingán"], c: "C" },
    { p: "113. Ordena cronológicamente los siguientes acontecimientos.", o: ["IV, I, III y II", "I, IV, II y III", "IV, III, I y II", "I, II, IV y III"], c: "C", imgs: ["ExamMedicina/113.png"] },
    { p: "114. Identifica una de las consecuencias de la promulgación de las Leyes de Reforma.", o: ["Promoción de las relaciones económicas con Europa.", "Límites de la extensión de la propiedad agraria.", "Retiro del fuero eclesiástico.", "Respaldo a los derechos de las comunidades campesinas."], c: "C" },
    { p: "115. La centralización del poder y la estructura oligárquica son características del gobierno de", o: ["Manuel González.", "Sebastián Lerdo de Tejada.", "Benito Juárez.", "Porfirio Díaz."], c: "D" },
    { p: "116. La promulgación de la Constitución de 1917, el asesinato de Emiliano Zapata y la fundación de la Confederación Regional Obrera Mexicana fueron sucesos ocurridos durante el gobierno de", o: ["Venustiano Carranza.", "Álvaro Obregón.", "Plutarco Elías Calles.", "Adolfo de la Huerta."], c: "A" },
    { p: "117. La existencia de un líder con ejército a su mando y bases de apoyo a nivel regional es una característica del ________; mientras que el ______ se distingue por el gobierno de una figura política electa a través de sufragio y con el apoyo de instituciones.", o: ["partidismo — populismo", "populismo — partidismo", "presidencialismo — caudillismo", "caudillismo — presidencialismo"], c: "D" },
    { p: "118. La inauguración de Bellas Artes y el reconocimiento de la Autonomía Universitaria ocurrieron durante el periodo conocido como", o: ["Unidad Nacional.", "Cardenismo.", "Desarrollo Estabilizador.", "Maximato."], c: "D" },
    { p: "119. La posición de México ante la Segunda Guerra Mundial fue", o: ["romper relaciones diplomáticas con los Aliados.", "no intervenir en ningún bando.", "vender petróleo a ambos contendientes.", "romper relaciones con las potencias del Eje."], c: "D" },
    { p: "120. La firma del Tratado de Libre Comercio de América del Norte y la reforma de los artículos 27, sobre la propiedad de la tierra, y 130 acerca de la personalidad jurídica de la Iglesia fueron acciones de", o: ["Ernesto Zedillo.", "Carlos Salinas de Gortari.", "Miguel de la Madrid.", "Vicente Fox Quesada."], c: "B" }
];
const preguntasPorSeccionUnammedicina = {
    "FISICA": seccionFisicaUnammedicina,
    "LITERATURA": seccionLiteraturaUnammedicina,
    "QUIMICA": seccionQuimicaUnammedicina,
    "GEOGRAFIA": seccionGeografiaUnammedicina,
    "MATEMATICAS": seccionMatematicasUnammedicina,
    "ESPAÑOL": seccionEspañolUnammedicina,
    "HISTORIA UNIVERSAL": seccionHistoriaUnammedicina,
    "HISTORIA DE MEXICO": seccionHistoriaMexicoUnammedicina
};
const preguntasUnamedicina = [
    ...seccionFisicaUnammedicina,
    ...seccionLiteraturaUnammedicina,
    ...seccionQuimicaUnammedicina,
    ...seccionGeografiaUnammedicina,
    ...seccionMatematicasUnammedicina,
    ...seccionEspañolUnammedicina,
    ...seccionHistoriaUnammedicina,
    ...seccionHistoriaMexicoUnammedicina
];
const totalPreguntasUnamMedicina = preguntasUnamedicina.length;

// ==========================================================
// 8. DATOS EXÁMENES CAMBRIDGE
// ==========================================================

// --- MOVERS ---
const seccionCompleteTheSentenceMovers = [
    { p: "Ben is playing football. He is wearing his...", o: ["shoes.", "boots.", "slippers"], c: "B" },
    { p: "Anna is drinking... ", o: ["milk", "banana", "sandwich"], c: "A" },
    { p: "There are some books... ", o: ["in the table", "on the table", "between the table"], c: "B" },
    { p: "My dad drives a... ", o: ["bike", "car", "train"], c: "B" },
    { p: "The children are at... ", o: ["the park", "the bed", "the shop"], c: "A" }
];
const seccionTrueAndFalseMovers = [
    {
        type: "reading",
        title: "Reading Comprehension: Sam's Life",
        text: "Sam is a 10-year-old boy. He lives near the mountains. Every morning, he goes to school by bike. His favorite subject is science. After school, he plays tennis with his friends. On weekends, he visits his grandparents; they have a lot of animals on their farm."
    },
    { p: "Sam lives near the mountains.", o: ["FALSE", "TRUE"], c: "B" },
    { p: "He goes to school by bike.", o: ["FALSE", "TRUE"], c: "B" },
    { p: "He likes science.", o: ["FALSE", "TRUE"], c: "B" }
];
const seccionDescribePictureMovers = [
    {
        type: "open_image",
        title: "Describe the Picture",
        img: "/Cambridge/DescribePictureMovers.jpg",
        subpreguntas: [
            {
                p: "What can you see in this picture?",
                bancoRespuestas: ["airport", "aeropuerto", "people", "luggage", "suitcases", "bags"]
            },
            {
                p: "Where are the people?",
                bancoRespuestas: ["at the airport", "in the airport", "airport", "aeropuerto"]
            },
            {
                p: "What are they doing?",
                bancoRespuestas: ["waiting", "getting their bags", "standing", "looking", "esperando"]
            }
        ]
    }
];
const preguntasPorSeccionMovers = {
    "PART 1: COMPLETE THE SENTENCE": seccionCompleteTheSentenceMovers,
    "PART 2: READING COMPREHENSION": seccionTrueAndFalseMovers,
    "PART 3: DESCRIBE THE PICTURE": seccionDescribePictureMovers
};

// --- STARTERS ---
const seccionTrueAndfalsePicturesStarters = [
    { img: "/Cambridge/PurpleDress.png", p: "This is a dress.", o: ["Correct", "Incorrect"], c: "A" },
    { img: "/Cambridge/puppy.png", p: "This is a spider", o: ["Correct", "Incorrect"], c: "B" },
    { img: "/Cambridge/Apple.png", p: "This is a potato.", o: ["Correct", "Incorrect"], c: "B" },
    { img: "/Cambridge/pencil.png", p: "This is a ruler", o: ["Correct", "Incorrect"], c: "B" },
    { img: "/Cambridge/Snake.png", p: "This is a snake.", o: ["Correct", "Incorrect"], c: "A" }
];
const seccionScrambledWordsStarters = [
    { type: "scrambled_word", scrambled: "a - l - b - l", img: "/Cambridge/Ball.png", instruction: "Write your answer here:", c: "ball" },
    { type: "scrambled_word", scrambled: "y - c - d - a - n", img: "/Cambridge/Candy.png", instruction: "Write your answer here:", c: "candy" },
    { type: "scrambled_word", scrambled: "d - b - r - i", img: "/Cambridge/Bird.png", instruction: "Write your answer here:", c: "bird" },
];
const preguntasPorSeccionStarters = {
    "PART 1: LOOK, READ AND CHOOSE YES OR NO": seccionTrueAndfalsePicturesStarters,
    "PART 2: LOOK AT THE PICTURES AND WRITE THE WORDS": seccionScrambledWordsStarters
};

// --- STARTERS & MOVERS ---
const seccionVocabularyStartersMovers = [
    {
        type: "image_options",
        p: "1. Vocabulary<br>Look and read. Select the correct box for the answers.",
        o: [
            { img: "Cambridge/Piña.jpg", text: "This is a potato." },
            { img: "Cambridge/Carrot.jpg", text: "This is a sausage." },
            { img: "Cambridge/Cocconut.jpg", text: "This is a coconut." }
        ],
        c: "C"
    }
];
const seccionWritingStartersMovers = [
    { type: "writing_example", title: "2. Writing", instruction: "Look at the pictures and write about them and related with the image. *", img: "Cambridge/Bread.png", exampleAnswer: "I would like some bread." },
    { type: "writing_input", p: "1. What would you like for your lunch, Grace?", img: "Cambridge/Fries.png", bancoRespuestas: ["fries", "chips", "french fries", "some fries", "i would like some fries", "i want some fries"] },
    { type: "writing_input", p: "2. What would you like for your lunch, Ben?", img: "Cambridge/Egg.png", bancoRespuestas: ["egg", "an egg", "some egg", "i would like an egg", "i want an egg"] }
];
const seccionPrepositionsStartersMovers = [
    {
        type: "reading",
        title: "3. Prepositions",
        text: `
            <p style="color: red; margin-bottom: 10px; font-size: 1.1rem;">* <span style="color: black;">Choose your answer from the Word bank and write it on the line.</span></p>
            <p style="color: var(--azul-fuerte); font-weight: bold; margin-bottom: 20px; font-size: 1.2rem;">
                a) next to &nbsp;&nbsp; b) between &nbsp;&nbsp; c) in front of &nbsp;&nbsp; d) in &nbsp;&nbsp; e) under
            </p>
            <div style="text-align: center; background: white; padding: 20px; border-radius: 8px; border: 1px solid #ddd;">
                <p style="color: purple; font-weight: bold; margin-bottom: 10px; text-align: left;">Example</p>
                <img src="Cambridge/BurgerBehind.png" style="max-width: 100%; height: auto;">
            </div>
        `
    },
    { p: "a) next to    b) between    c) in front of    d) in    e) under", img: "Cambridge/BURGERS.png", o: ["1. c &nbsp;&nbsp;&nbsp;&nbsp; 2. d &nbsp;&nbsp;&nbsp;&nbsp; 3. b &nbsp;&nbsp;&nbsp;&nbsp; 4. e &nbsp;&nbsp;&nbsp;&nbsp; 5. a", "1. e &nbsp;&nbsp;&nbsp;&nbsp; 2. b &nbsp;&nbsp;&nbsp;&nbsp; 3. a &nbsp;&nbsp;&nbsp;&nbsp; 4. f &nbsp;&nbsp;&nbsp;&nbsp; 5. c", "1. c &nbsp;&nbsp;&nbsp;&nbsp; 2. d &nbsp;&nbsp;&nbsp;&nbsp; 3. a &nbsp;&nbsp;&nbsp;&nbsp; 4. e &nbsp;&nbsp;&nbsp;&nbsp; 5. b"], c: "C" }
];
const seccionQuestionsStartersMovers = [
    { type: "writing_input", p: "4. Questions<br>What is your favorite food?<br>Use the vocabulary from the image in english.<br><br>eg. <em>My favorite fruit is pear.</em><br><br>Carrot, lemon, pineapple, coconut, watermelon, pear, banana, onion, cake, fish, eggs, burger, milk.", img: "Cambridge/Food.png", bancoRespuestas: ["carrot", "lemon", "pineapple", "coconut", "watermelon", "pear", "banana", "onion", "cake", "fish", "eggs", "burger", "milk"] }
];
const preguntasPorSeccionStartersMovers = {
    "1. VOCABULARY": seccionVocabularyStartersMovers,
    "2. WRITING": seccionWritingStartersMovers,
    "3. PREPOSITIONS": seccionPrepositionsStartersMovers,
    "4. QUESTIONS": seccionQuestionsStartersMovers
};

// --- MOVERS EXAM ---
const seccion1MoversExam = [
    { type: "image_options", p: "Where do you borrow a book?", o: [{ img: "Cambridge/School.jpg", text: "At school" }, { img: "Cambridge/Park.jpg", text: "At the park" }, { img: "Cambridge/Library.png", text: "At the library" }, { img: "Cambridge/Hospital.png", text: "At the hospital" }], c: "C" },
    { type: "image_options", p: "Which food is a fruit?", o: [{ img: "Cambridge/Breaad.jpg", text: "Bread" }, { img: "Cambridge/applee.png", text: "Apple" }, { img: "Cambridge/Cheese.png", text: "Cheese" }, { img: "Cambridge/Sausage.png", text: "Sausage" }], c: "B" },
    { type: "image_options", p: "Which animal can fly?", o: [{ img: "Cambridge/Dog.png", text: "Dog" }, { img: "Cambridge/Cow.jpg", text: "Cow" }, { img: "Cambridge/Fish.jpg", text: "Fish" }, { img: "Cambridge/Bird.jpg", text: "Bird" }], c: "D" },
    { type: "image_options", p: "What do you wear on your feet?", o: [{ img: "Cambridge/Shirt.jpg", text: "Shirt" }, { img: "Cambridge/Shoes.jpg", text: "Shoes" }, { img: "Cambridge/Hat.jpg", text: "Hat" }, { img: "Cambridge/Jacket.jpg", text: "Jacket" }], c: "B" },
    { type: "image_options", p: "What do you do in the morning?", o: [{ img: "Cambridge/Breakfast.png", text: "Have breakfast" }, { img: "Cambridge/Dinner.png", text: "Have dinner" }, { img: "Cambridge/Party.jpg", text: "Throw a party" }], c: "A" },
    { type: "image_options", p: "Which of these animals live on a farm?", o: [{ img: "Cambridge/Jellyfish.png", text: "Jellyfish" }, { img: "Cambridge/Cow.jpg", text: "Cow" }, { img: "Cambridge/Lion.png", text: "Lion" }, { img: "Cambridge/Fish.jpg", text: "Fish" }], c: "B" },
    { type: "image_options", p: "Which of these IS NOT a school item?", o: [{ img: "Cambridge/pencil.png", text: "Pencil" }, { img: "Cambridge/Eraser.jpg", text: "Eraser" }, { img: "Cambridge/Hairbrush.jpg", text: "Hairbrush" }, { img: "Cambridge/Marker.png", text: "Marker" }], c: "A" }
];
const seccion2MoversExam = [
    { p: "She_______playing football now.", o: ["Is", "Are", "Am", "Were"], c: "A" },
    { p: "He_______to school everyday.", o: ["is", "goes", "go", "going"], c: "B" },
    { p: "Yesterday, I______my homework.", o: ["Finished", "Finish", "Finale", "Fin"], c: "A" },
    { p: "______is your best friend?", o: ["When", "Why", "What", "Who"], c: "D" },
    { p: "What number is \"Twelve\"?", o: ["20", "12", "2", "13"], c: "B" },
    { p: "How do you say \"see\" in the past tense?", o: ["Seed", "Saw", "Sawn", "Watch"], c: "B" },
    { p: "______three apples on the table.", o: ["There is", "There be", "There are", "There was"], c: "C" }
];
const preguntasPorSeccionMoversExam = {
    "PART 1: VOCABULARY": seccion1MoversExam,
    "PART 2: GRAMMAR": seccion2MoversExam
};





// ==========================================================
// 9. DATOS EXAMEN CAMBRIDGE GENERAL (NUEVO)
// ==========================================================

const seccionReadingGeneral = [
    {
        type: "reading",
        title: "Reading Comprehension",
        text: "Sam squinted against the sun at the distant dust trail raked up by the car on its way up to the Big House. The horses kicked and flicked their tails at flies, not caring about their owner's first visit in ten months. Sam waited. Mr Carter didn't come out here unless he had to, which was just fine by Sam. The more he kept out of his boss's way, the longer he'd have a job.<br><br>Carter came by later while Sam was chopping wood. Carter lifted his hat as if he were waiting for an appointment with the town priest, and then removed it completely as if he were talking to his mother. He pulled out a pile of paper from his back pocket and held it out.<br><br>'Don't pick up your mail often, do you?'<br><br>Sam took it without a glance and dropped the envelopes onto the bench.<br><br>'Never,' he replied and waited for Carter to say why he was here. The fact it was Carter's house was no explanation and they both knew it. Carter twisted his hat round and round, licking his lips and clearing his throat.<br><br>'Nice work fixing those fences,' he said finally.<br><br>'I'll be back to the beginning soon,' Sam said. It wasn't a complaint. A fence that took a year to repair meant another year's work to the man who did it well.<br><br>'Don't you ever want to take a holiday?'<br><br>'And go where?' A holiday meant being back out in the real world, a place even people like Carter travelled to escape from. Sam's escape was his reality and he wasn't going back.<br><br>Mr Carter wiped the sweat from the back of his neck. The damp patches on his shirt drew together like shapes in an atlas. His skin was already turning ruddy in the June sun. Otherwise he had the indoor tan of a man that made money while other people did the work.<br><br>'I've brought my son with me on this trip. He's had some trouble at school.' Mr Carter's eyes flicked up, blinked rapidly and then shifted back to the hat occupying his hands. 'Not much trouble out here for a young boy.' He attempted a laugh but it came out like a dog's bark.<br><br>The two men looked towards the northern end of the property. It stretched as far as the eye could see. Even the fences were barely visible from where they stood. However bored and rebellious a teenage boy might get, it wasn't possible to escape on foot. Sam looked at the biggest of the horses, kicking at the ground with its heavy hooves. Could the boy ride? he wondered. There was a whole load of trouble a good rider could get into out here, miles away from anyone. But maybe there was even more trouble for someone who knew nothing about horses and wanted to get away from his father."
    },
    { p: "What is Sam's reaction to his letters?", o: ["Uninterested", "Surprised", "Afraid", "Curious"], c: "A" },
    { p: "Why does Sam not take holidays from work?", o: ["He can't afford it.", "He hasn't finished repairing the fences.", "He doesn't know where to choose.", "He feels safer on the farm."], c: "D" },
    { p: "What can we guess about Mr Carter?", o: ["He works hard.", "He's rich.", "He has tanned skin.", "He loves horses."], c: "B" },
    { p: "What does Sam think Carter's son might do during his stay at the farm?", o: ["He might do something dangerous while riding.", "He might leave on foot.", "He might break the fences.", "He might get into trouble with the neighbours."], c: "A" },
    { p: "How does Mr Carter feel while he's talking to Sam in this scene?", o: ["Angry", "Impatient", "Nervous", "Excited"], c: "C" },
    { p: "Why has Mr Carter come to his house?", o: ["Because he wants to give Sam his mail.", "Because he needs to check on the work on the fences.", "Because his son has had problems at school.", "Because his son needs a holiday."], c: "C" }
];

const seccionVocabGeneral = [
    { p: "There’s a lot of choice! What do you _________?", o: ["ordering", "recommend", "show", "advice"], c: "B" },
    { p: "We buy all our food at Maxi because they often have special__________.", o: ["targets", "promotions", "customs", "features"], c: "B" },
    { p: "This offer is for a limited _________ only, so you have to be quick.", o: ["discount", "sale", "order", "period"], c: "D" },
    { p: "Mario always keeps his promises. He’s very ________ .", o: ["reliable", "punctual", "ambitious", "sociable"], c: "A" },
    { p: "They say one third of the _________ will lose their jobs.", o: ["employment", "workforce", "casual", "qualifications"], c: "B" },
    { p: "Our company has a big ________ of the home market.", o: ["staff", "niche", "profit", "share"], c: "D" },
    { p: "It’s easy to ________ mistakes when you are in a foreign country!", o: ["work", "make", "think", "do"], c: "B" },
    { p: "Business was bad, and profits __________ to an all-time low.", o: ["fell", "rise", "felt", "rose"], c: "A" },
    { p: "Sarah ______ a lot of money in her new job.", o: ["wins", "gains", "deals", "earns"], c: "D" },
    { p: "Raul has ________ for the post of office manager in Budapest.", o: ["applied", "offered", "enquired", "informed"], c: "A" }
];





// ------------------------------------------Cambridge nuevos--------------------
const seccionWritingGeneral = [
    {
        type: "reading",
        title: "Writing: Request for time off",
        text: `<strong>Please review the text regarding an email to request time off. Then write a similar text with that structure (about 100-150 words) in the next screen.</strong><br><br>
        <div style="background:#f9f9f9; padding:15px; border-left:4px solid purple; font-size: 1rem; color: #333;">
        <strong>From:</strong> Stefan Bauer<br>
        <strong>To:</strong> Emma Louise Jensen<br>
        <strong>Subject:</strong> Request for time off<br><br>
        Dear Ms Jensen,<br><br>
        I'm writing to request some time off between Monday 18 February and Friday 8 March in order to work on my MBA dissertation, which is due for submission on 30 March.<br><br>
        I understand that the three weeks I am requesting exceeds my remaining annual leave by four days. I would like to ask if those four days may be taken in lieu of the extra working hours I put in during the two weekends of the Chicago International Management Conference last November.<br><br>
        I have spoken to Kristian Sander and Jasmine Riber, who have both agreed to cover for me during my absence. I would also distribute a playbook for my team members so that everyone is clear on the tasks they are in charge of and the deadlines they have to meet. During my leave, I would be fully reachable by phone and email to answer any questions or provide any assistance needed. I would also be happy to discuss any further plans to ensure my workload is covered.<br><br>
        I believe that the research I am doing and the resulting MBA will contribute greatly to my professional development, and my improved expertise and qualifications will in turn benefit the company.<br><br>
        Please let me know if you need any additional information. Thank you for your consideration of my request.<br><br>
        Best regards,<br>Stefan Bauer</div>`
    },
    {
        type: "writing_input",
        p: "Write your email requesting time off here (100-150 words):",
        img: "",
        minWords: 100,
        maxWords:150,
        // Evaluará correcta si el usuario usa alguna de estas palabras lógicas en su texto
        bancoRespuestas: ["dear", "regards", "request", "time off", "vacation", "absence", "leave"]
    }
];

const preguntasPorSeccionCambridgeGeneral = {
    "PART 1: READING COMPREHENSION": seccionReadingGeneral,
    "PART 2: VOCABULARY": seccionVocabGeneral,
    "PART 3: WRITING": seccionWritingGeneral
};







// ==========================================================
// 9. DATOS EXAMEN CAMBRIDGE KET (LECTURA Y LISTENING)
// ==========================================================

const seccion1Ket = [
    { img: "IMG_CAMBRIDGE/1.jpg", p: "Choose the correct sentence: *", o: ["A) This is a good place to play ball with your dog.", "B) This is a good place to walk the dog, but without the ball.", "C) You can't go here with your dog."], c: "C" },
    { img: "IMG_CAMBRIDGE/2.jpg", p: "Choose the correct sentence: *", o: ["A) You should try to be on time, but a little late is not a problem.", "B) Training has been delayed.", "C) You must be on time if you want to train."], c: "C" },
    { img: "IMG_CAMBRIDGE/3.jpg", p: "Choose the correct sentence: *", o: ["A) A little fire is acceptable if you take precautions.", "B) You cannot have any kind of fire here.", "C) Be careful, there is a risk of fires."], c: "B" },
    { img: "IMG_CAMBRIDGE/4.jpg", p: "Choose the correct sentence: *", o: ["A) Mum has gone to see a teacher.", "B) Mum wants to see Johnny's teacher.", "C) Mum spoke to Johnny's teacher today."], c: "A" },
    { img: "IMG_CAMBRIDGE/5.jpg", p: "Choose the correct sentence: *", o: ["A) Maggy wants to sell a new skateboard.", "B) Maggy wants to borrow a skateboard.", "C) Maggy wants to sell a skateboard which isn't new."], c: "C" },
    { img: "IMG_CAMBRIDGE/6.jpg", p: "Choose the correct sentence: *", o: ["A) Drivers must drive slowly for 100m.", "B) Drivers will have to stop in 100m.", "C) Drivers will need to reduce their speed in 100m."], c: "C" }
];

const seccion2Ket = [
    {
        type: "reading",
        title: "Listening Part 1",
        text: "You are given five pieces of audio and five questions which correspond to the audio. Each given question has three options A, B and C, and a set of images which correspond to each option.<br><br>Click on the button to choose the best option for each question.<br><br>Once all the questions have been answered, click on the check button."
    },
    { 
        audio: "AudiosCambridge/Parte1/Pregunta1.mp3", 
        img: "IMG_CAMBRIDGE/7.jpg",
        p: "1) - When is Geoff moving?",
        o: ["Opción 1", "Opción 2", "Opción 3"], 
        c: "A" 
    },
    { 
        audio: "AudiosCambridge/Parte1/Pregunta2.mp3",
        img: "IMG_CAMBRIDGE/8.jpg", 
        p: "- When should the speaker go for dinner?", 
        o: ["Opción 1", "Opción 2", "Opción 3"], 
        c: "A" 
    },
    { 
        audio: "AudiosCambridge/Parte1/Pregunta3.mp3",
        img: "IMG_CAMBRIDGE/9.jpg", 
        p: "- What was the weather like for the golf match?", 
        o: ["Opción 1", "Opción 2", "Opción 3"], 
        c: "B" 
    },
    { 
        audio: "AudiosCambridge/Parte1/Pregunta4.mp3",
        img: "IMG_CAMBRIDGE/10.jpg", 
        p: "- Where is Dick's book?", 
        o: ["Opción 1", "Opción 2", "Opción 3"], 
        c: "C" 
    },
    { 
        audio: "AudiosCambridge/Parte1/Pregunta5.mp3",
        img: "IMG_CAMBRIDGE/11.jpg", 
        p: "- What colour is Ray's T shirt?", 
        o: ["Opción 1", "Opción 2", "Opción 3"], 
        c: "A" 
    }
];

const seccion3Ket = [
    {
        type: "reading",
        title: "Listening Part 2",
        text: "You are given a piece of audio and some text with spaces. Use the information from the audio to complete the spaces by typing the words.<br><b>The pass mark for this exam is 70%, and you will hear the audio twice.</b><br><br><audio controls style='width:100%; margin-top:15px; border-radius: 8px;'><source src='AudiosCambridge/Parte2/Pregunta1.mp3' type='audio/mpeg'>Tu navegador no soporta el elemento de audio.</audio>"
    },
    
    { type: "writing_input", p: "BUYING A MOUNTAIN BIKE: *<br>The make of the bike is", bancoRespuestas: ["Harrison"] },
    { type: "writing_input", p: "With the discount, the customer saves *<br>_________<br>pounds.", bancoRespuestas: ["38 pounds", "thirty eight ponds", "38", "txhirty eight"] },
    { type: "writing_input", p: "The price will include a *", bancoRespuestas: ["helmet"] },
    { type: "writing_input", p: "The customer's name is *", bancoRespuestas: ["Rogers"] },
    { type: "writing_input", p: "Her telephone number is *", bancoRespuestas: ["6723159"] }
];

const preguntasPorSeccionCambridgeKet = {
    "READING: SIGNS AND NOTICES": seccion1Ket,
    "LISTENING PART 1": seccion2Ket,
    "LISTENING PART 2": seccion3Ket
};