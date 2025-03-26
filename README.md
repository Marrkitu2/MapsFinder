# MapsFinder

MapsFinder es una aplicación web interactiva diseñada para facilitar la búsqueda y visualización de ubicaciones geográficas utilizando la API de Mapbox y OpenStreetMap. Esta herramienta permite a los usuarios buscar pueblos, comunidades autónomas y países, mostrando los resultados en un mapa interactivo y en una tabla con paginación.

## Características principales

- **Búsqueda avanzada**: Los usuarios pueden buscar ubicaciones específicas ingresando datos como el nombre del pueblo, comunidad autónoma o país.
- **Mapa interactivo**: Los resultados de la búsqueda se muestran en un mapa interactivo proporcionado por Mapbox, con marcadores y popups que detallan la información de cada ubicación.
- **Sugerencias inteligentes**: A medida que el usuario escribe en los campos de búsqueda, la aplicación ofrece sugerencias basadas en datos de OpenStreetMap.
- **Resultados tabulares**: Los resultados de la búsqueda también se presentan en una tabla con paginación, lo que facilita la navegación por grandes conjuntos de datos.
- **Interfaz amigable**: La aplicación cuenta con un diseño moderno y responsivo, optimizado para una experiencia de usuario fluida.
- **Servidor backend**: Un servidor Express.js maneja las solicitudes de búsqueda y se comunica con la API de OpenStreetMap para obtener los datos.

## Tecnologías utilizadas

- **Frontend**:
  - HTML5, CSS3 y JavaScript para la estructura, estilos y funcionalidad de la aplicación.
  - [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/) para la visualización del mapa interactivo.
  - [OpenStreetMap Nominatim API](https://nominatim.org/) para obtener sugerencias de ubicaciones.

- **Backend**:
  - [Express.js](https://expressjs.com/) para manejar las solicitudes HTTP.
  - [Axios](https://axios-http.com/) para realizar solicitudes a la API de OpenStreetMap.

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
├── server/
│   └── server.js             # Servidor backend con Express.js
└── README.md                 # Documentación del proyecto
```

## Cómo usar la aplicación

### Requisitos previos

- Node.js y npm instalados en tu máquina.
- Una clave de acceso válida para la API de Mapbox. Reemplaza `'YOUR_TOKEN'` en el archivo `script.js` con tu clave de acceso.

### Instalación y configuración

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/MapsFinder-main.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd MapsFinder-main
   ```
3. Instala las dependencias del servidor:
   ```bash
   npm install
   ```
4. Configura tu clave de Mapbox en el archivo `public/js/script.js`:
   ```javascript
   mapboxgl.accessToken = 'YOUR_TOKEN';
   ```
5. Inicia el servidor:
   ```bash
   node server/server.js
   ```
6. Abre tu navegador y accede a la aplicación en [http://localhost:3000](http://localhost:3000).

## API del servidor

El servidor backend utiliza Express.js para manejar las solicitudes. A continuación, se describe el endpoint principal:

### `GET /api/data`

Este endpoint realiza una búsqueda en la API de OpenStreetMap Nominatim y devuelve los resultados en formato JSON.

#### Parámetros de consulta:

- `param1`: Nombre del pueblo (opcional).
- `param2`: Nombre de la comunidad autónoma (opcional).
- `param3`: Nombre del país (opcional).

#### Ejemplo de solicitud:

```bash
GET /api/data?param1=Madrid&param2=Comunidad%20de%20Madrid&param3=España
```

#### Respuesta:

```json
[
  {
    "display_name": "Madrid, Comunidad de Madrid, España",
    "lat": "40.416775",
    "lon": "-3.703790"
  },
  ...
]
```

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

Si tienes preguntas o sugerencias, no dudes en ponerte en contacto conmigo.

¡Gracias por usar MapsFinder!
