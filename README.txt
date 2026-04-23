# README - Strat Exams Platform
# Plataforma: Stratford Lernen Academy
# URL: https://stratfordexams.com/

================================================================================
1. DESCRIPCIÓN DEL PROYECTO
================================================================================
Strat Exams es una plataforma web integral diseñada para la aplicación de exámenes 
vocacionales, simuladores de admisión universitaria (UNAM, IPN, UAM, COMIPEMS) 
y certificaciones oficiales de Cambridge (Movers, Starters, KET, FCE).

La plataforma funciona bajo un modelo "One-Page" (una sola página), permitiendo 
una navegación fluida mediante anclas y una transición dinámica entre el 
registro de datos y la ejecución de las pruebas.

================================================================================
2. CARACTERÍSTICAS PRINCIPALES
================================================================================
- EMBUDO DE CAPTURA DE LEADS: Formulario de registro obligatorio con validación 
  estricta de datos (teléfono de 10 dígitos, formato de correo real, límites 
  de edad y promedio) para generar una base de datos segmentada de prospectos.

- MOTOR UNIVERSAL DE EXÁMENES: Un sistema de JavaScript capaz de renderizar 
  múltiples tipos de reactivos:
  * Opción múltiple (Texto e imágenes).
  * Preguntas abiertas con banco de respuestas.
  * Scrambled words (Palabras desordenadas).
  * Secciones de Reading con textos largos.
  * Writing tasks con contador de palabras (validación de 100-150 palabras).

- SOPORTE MULTIMEDIA:
  * Integración de audio (MP3) con controles nativos para pruebas de Listening.
  * Renderizado de fórmulas matemáticas mediante MathJax.
  * Imágenes de apoyo para reactivos visuales.

- RESULTADOS DINÁMICOS: Calificación automática inmediata con desglose detallado 
  de aciertos, porcentaje global y revisión manual para secciones de escritura.

================================================================================
3. ESTRUCTURA DE ARCHIVOS
================================================================================
/ (Directorio Raíz)
│
├── index.html          # Estructura principal y contenedores de los tests.
├── style.css           # Estilos visuales, cuadrículas de tarjetas y diseño responsivo.
├── script.js           # Lógica del motor universal, validaciones y navegación.
├── datosExamenes.js    # Base de datos con todas las preguntas y respuestas.
│
├── AudiosCambridge/    # Archivos MP3 para secciones de Listening.
├── IMG_CAMBRIDGE/      # Imágenes para reactivos de KET, FCE y niveles infantiles.
├── IMG_IPN/            # Gráficos y figuras para el simulador de IPN.
├── ExamMedicina/       # Imágenes específicas para el simulador UNAM Medicina.
└── COMIPEMS/           # Gráficos para los simuladores de nivel bachillerato.

================================================================================
4. REQUERIMIENTOS TÉCNICOS
================================================================================
- Navegador moderno (Chrome, Edge, Firefox, Safari).
- Conexión a Internet para la carga de librerías externas (MathJax y Polyfill).
- Soporte para reproducción de audio HTML5.

================================================================================
5. INSTALACIÓN Y USO
================================================================================
1. Clonar o descargar el repositorio en un servidor local o hosting.
2. Asegurarse de mantener la estructura de carpetas de imágenes y audios.
3. Abrir index.html para visualizar la plataforma.
4. Para actualizaciones de preguntas, modificar exclusivamente el archivo 
   datosExamenes.js siguiendo la estructura de objetos JSON predefinida.

================================================================================
6. CRÉDITOS Y CONTACTO
================================================================================
Desarrollado para: Stratford Lernen Academy
Contacto: stratfordlernenacademy@gmail.com
WhatsApp: +52 5610976482

© 2025 Strat Exams. Todos los derechos reservados.
"Aprender te conecta con el mundo 🌍"
================================================================================