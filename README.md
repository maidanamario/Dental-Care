# Dental Care — Odontología integral

Landing page estática e independiente para Dental Care. Presenta servicios odontológicos y permite consultar por turnos mediante WhatsApp.

## Tecnologías

- HTML5 para la estructura y el contenido.
- CSS3 para los estilos y el diseño responsive.
- JavaScript nativo para el menú móvil, el botón flotante, el año del pie y los enlaces de WhatsApp.

No utiliza frameworks, paquetes, procesos de compilación ni dependencias locales.

## Estructura

- `index.html`: contenido y estructura de la landing.
- `css/dental-care.css`: estilos, grillas y reglas responsive.
- `js/dental-care.js`: menú móvil y configuración de enlaces de WhatsApp.
- `assets/`: imágenes optimizadas para escritorio y móvil.

## Ejecutar localmente

Abrí `index.html` en un navegador o iniciá un servidor estático desde esta carpeta:

```powershell
python -m http.server 8000
```

Luego visitá <http://localhost:8000>.

## Recursos y configuración

El número y el mensaje precargado de WhatsApp se configuran al inicio de `js/dental-care.js`. La dirección, el teléfono, Instagram y el enlace de mapas están en `index.html`.

Las imágenes de `assets/` son ilustrativas y no corresponden al consultorio Dental Care. Antes de usar la landing como sitio oficial, reemplazalas únicamente por fotografías propias o autorizadas. El proyecto es independiente de LS-LandingStudio.
