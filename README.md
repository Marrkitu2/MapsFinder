# MapsFinder

MapsFinder es una aplicación web interactiva diseñada para facilitar la búsqueda y visualización de ubicaciones geográficas utilizando la API de Mapbox y OpenStreetMap. Esta herramienta permite a los usuarios buscar pueblos, comunidades autónomas y países, mostrando los resultados en un mapa interactivo y en una tabla con paginación.

## Características principales

- **Búsqueda avanzada**: Los usuarios pueden buscar ubicaciones específicas ingresando datos como el nombre del pueblo, comunidad autónoma o país.
- **Mapa interactivo**: Los resultados de la búsqueda se muestran en un mapa interactivo proporcionado por Mapbox, con marcadores y popups que detallan la información de cada ubicación.
- **Sugerencias inteligentes**: A medida que el usuario escribe en los campos de búsqueda, la aplicación ofrece sugerencias basadas en datos de OpenStreetMap.
- **Resultados tabulares**: Los resultados de la búsqueda también se presentan en una tabla con paginación, lo que facilita la navegación por grandes conjuntos de datos.
- **Interfaz amigable**: La aplicación cuenta con un diseño moderno y responsivo, optimizado para una experiencia de usuario fluida.

## Tecnologías utilizadas

- **Frontend**:
  - HTML5, CSS3 y JavaScript para la estructura, estilos y funcionalidad de la aplicación.
  - [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/) para la visualización del mapa interactivo.
  - [OpenStreetMap Nominatim API](https://nominatim.org/) para obtener sugerencias de ubicaciones.

- **Backend**:
  - La aplicación utiliza una API personalizada para procesar las solicitudes de búsqueda y devolver los datos relevantes.

## Estructura del proyecto

La estructura principal del proyecto es la siguiente:

```
MapsFinder-main/
├── index.html                # Archivo principal de la aplicación
├── public/
│   ├── css/
│   │   └── style.css         # Estilos personalizados de la aplicación
│   └── js/
│       └── script.js         # Lógica de la aplicación en JavaScript
└── README.md                 # Documentación del proyecto
```

## Cómo usar la aplicación

1. **Abrir la aplicación**: Accede al archivo `index.html` en tu navegador o despliega la aplicación en un servidor web.
2. **Ingresar datos de búsqueda**: Completa uno o más campos de búsqueda (Pueblo, Comunidad Autónoma, País).
3. **Ver resultados**:
   - Los resultados se mostrarán en el mapa con marcadores interactivos.
   - También se generará una tabla con los resultados, incluyendo opciones de paginación.
4. **Explorar sugerencias**: Mientras escribes en los campos de búsqueda, aparecerán sugerencias que puedes seleccionar para agilizar la búsqueda.

## Requisitos previos

- Una clave de acceso válida para la API de Mapbox. Reemplaza `'YOUR_TOKEN'` en el archivo `script.js` con tu clave de acceso.
- Un servidor local o entorno de desarrollo para ejecutar la aplicación si deseas probar funcionalidades avanzadas.

## Instalación y configuración

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/MapsFinder-main.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd MapsFinder-main
   ```
3. Configura tu clave de Mapbox en el archivo `public/js/script.js`:
   ```javascript
   mapboxgl.accessToken = 'YOUR_TOKEN';
   ```
4. Abre el archivo `index.html` en tu navegador o utiliza un servidor local para ejecutar la aplicación.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad o corrección:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Añadida nueva funcionalidad"
   ```
4. Envía tus cambios al repositorio remoto:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un pull request en GitHub.

## Licencia

Este proyecto está bajo la licencia MIT.

## Contacto

Si tienes preguntas o sugerencias, no dudes en ponerte en contacto conmigo

¡Gracias por usar MapsFinder!
