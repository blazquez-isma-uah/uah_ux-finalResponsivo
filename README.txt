========================================
  TECHNEWS - PROYECTO WEB RESPONSIVO
  Manual de Despliegue
========================================

DESCRIPCIÓN
-----------
Sitio web responsivo de noticias tecnológicas desarrollado como prototipo
académico aplicando los principios de Responsive Web Design (RWD).

REQUISITOS
----------
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No se requiere servidor web
- No se requieren dependencias ni instalación

ESTRUCTURA DEL PROYECTO
-----------------------
proyecto-rwd/
├── index.html              # Página principal
├── noticia.html           # Página de noticia individual
├── css/
│   └── styles.css         # Hoja de estilos responsiva
├── images/                # Imágenes del sitio (SVG placeholder)
│   ├── logo.png
│   ├── noticia-principal.jpg
│   ├── noticia-2.jpg a noticia-7.jpg
│   └── noticia-ai-code.jpg
└── README.txt             # Este archivo

INSTRUCCIONES DE DESPLIEGUE
---------------------------

OPCIÓN 1 - Apertura directa (recomendada para testing local):
   1. Descomprimir el archivo TrabajoFinalUnidad2.zip
   2. Abrir el archivo "index.html" con cualquier navegador web
   3. La navegación entre páginas funcionará automáticamente

OPCIÓN 2 - Servidor local (opcional, para testing más realista):
   Con Python 3:
      python -m http.server 8000
   
   Con Python 2:
      python -m SimpleHTTPServer 8000
   
   Con Node.js (si tienes instalado):
      npx serve
   
   Luego abrir en el navegador: http://localhost:8000

OPCIÓN 3 - Servidor web (Apache, Nginx, etc.):
   1. Copiar todos los archivos al directorio público del servidor
   2. Acceder mediante la URL correspondiente

TESTING RESPONSIVO
------------------
Para probar el diseño responsivo:

1. Redimensionar manualmente la ventana del navegador
2. Usar DevTools del navegador:
   - Chrome/Edge: F12 → Toggle device toolbar (Ctrl+Shift+M)
   - Firefox: F12 → Responsive Design Mode (Ctrl+Shift+M)
3. Probar en dispositivos reales (móvil, tablet) si es posible

BREAKPOINTS IMPLEMENTADOS
-------------------------
- Móvil:    320px - 767px   (diseño base, Mobile First)
- Tablet:   768px - 1023px  (2 columnas)
- Desktop:  1024px+         (3 columnas, sidebar)
- XL:       1400px+         (contenedor expandido)

NAVEGADORES SOPORTADOS
----------------------
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Nota: El diseño usa CSS Grid y Flexbox modernos. Navegadores muy antiguos
(IE11 y anteriores) no están soportados.

NOTAS TÉCNICAS
--------------
- Imágenes: Se incluyen placeholders en formato SVG. Para producción,
  reemplazar con imágenes JPG/PNG reales manteniendo los nombres de archivo.
- CSS: Un único archivo styles.css sin preprocesadores
- HTML: Semántico, accesible y válido según estándares HTML5

RESOLUCIÓN DE PROBLEMAS
-----------------------
Si las imágenes no se muestran:
   - Verificar que la carpeta "images" está en la misma ubicación que index.html
   - Verificar que los nombres de archivo coinciden (mayúsculas/minúsculas)

Si los estilos no se aplican:
   - Verificar que la carpeta "css" existe
   - Verificar la ruta en el <link> del HTML
   - Limpiar caché del navegador (Ctrl+Shift+R o Cmd+Shift+R)

CONTACTO
--------
Proyecto académico - Desarrollo Ágil de Software para la Web
Asignatura: Experiencia de Usuario (UX) y Diseño Responsivo
Año: 2026
