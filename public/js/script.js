mapboxgl.accessToken = 'YOUR_TOKEN';
let map;
let currentPage = 1;
const resultsPerPage = 5;
let allData = []; // Variable para almacenar todos los datos acumulados
const suggestionsCache = {}; // Cache para almacenar las sugerencias fijas

function initMap() {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.5, 40],
        zoom: 9
    });
}

function fetchData(params, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/api/data?${new URLSearchParams(params)}`, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log(data); // Añade esto para verificar los datos
            callback(data);
        }
    };
    xhr.send();
}

// Inicializar el mapa con los datos proporcionados
function updateMap(data) {
    if (data.length === 0) return;

    // Calcular el centro de los resultados
    const bounds = new mapboxgl.LngLatBounds();
    data.forEach(location => {
        const lngLat = [location.lon, location.lat];
        bounds.extend(lngLat);

        new mapboxgl.Marker()
            .setLngLat(lngLat)
            .setPopup(new mapboxgl.Popup().setHTML(`<p>${location.display_name}</p>`))
            .addTo(map);
    });

    // Ajustar la vista del mapa para mostrar todos los marcadores
    map.fitBounds(bounds, { padding: 50 });
}

function updateTable(data) {
    allData = allData.concat(data); // Acumular los nuevos datos
    const resultsDiv = document.getElementById('results');
    let table = resultsDiv.querySelector('table');
    let body;

    if (!table) {
        table = document.createElement('table');
        const header = table.createTHead();
        const headerRow = header.insertRow(0);
        const headers = ['Name', 'Latitude', 'Longitude'];

        headers.forEach((headerText, index) => {
            const cell = headerRow.insertCell(index);
            cell.innerText = headerText;
        });

        body = table.createTBody();
        table.appendChild(body);
        resultsDiv.appendChild(table);
    } else {
        body = table.querySelector('tbody');
    }

    // Limpiar el cuerpo de la tabla antes de agregar nuevos datos
    body.innerHTML = '';

    const start = (currentPage - 1) * resultsPerPage;
    const end = start + resultsPerPage;
    const paginatedData = allData.slice(start, end);

    paginatedData.forEach(location => {
        const row = body.insertRow();
        row.insertCell(0).innerText = location.display_name;
        row.insertCell(1).innerText = location.lat;
        row.insertCell(2).innerText = location.lon;
    });

    // Limpiar los controles de paginación antes de agregar nuevos
    const paginationDiv = document.getElementById('pagination');
    if (paginationDiv) {
        paginationDiv.remove();
    }

    // Add pagination controls
    const newPaginationDiv = document.createElement('div');
    newPaginationDiv.id = 'pagination';
    const totalPages = Math.ceil(allData.length / resultsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerText = i;
        pageButton.onclick = () => {
            currentPage = i;
            updateTable([]);
        };
        newPaginationDiv.appendChild(pageButton);
    }

    resultsDiv.appendChild(newPaginationDiv);
}

function performQuery() {
    const param1 = document.getElementById('param1').value;
    const param2 = document.getElementById('param2').value;
    const param3 = document.getElementById('param3').value;

    const params = { param1, param2, param3 };
    fetchData(params, (data) => {
        console.log(data); // Añade esto para verificar los datos
        updateMap(data);
        updateTable(data);
    });
}

function updateSuggestions(param) {
    const input = document.getElementById(param).value;
    const suggestionsDiv = document.getElementById(`${param}-suggestions`);

    if (input.length < 3) {
        suggestionsDiv.innerHTML = '';
        return;
    }

    if (!suggestionsCache[param]) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://nominatim.openstreetmap.org/search?format=json&q=${param}&addressdetails=1&limit=50`, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const suggestions = JSON.parse(xhr.responseText);
                suggestionsCache[param] = suggestions.map(suggestion => suggestion.display_name);
                filterSuggestions(param, input);
            }
        };
        xhr.send();
    } else {
        filterSuggestions(param, input);
    }
}

function filterSuggestions(param, input) {
    const suggestionsDiv = document.getElementById(`${param}-suggestions`);
    const filteredSuggestions = suggestionsCache[param].filter(suggestion => suggestion.toLowerCase().includes(input.toLowerCase()));

    suggestionsDiv.innerHTML = '';
    filteredSuggestions.forEach(suggestion => {
        const p = document.createElement('p');
        p.innerText = suggestion;
        p.onclick = () => {
            document.getElementById(param).value = suggestion;
            suggestionsDiv.innerHTML = '';
        };
        suggestionsDiv.appendChild(p);
    });
}

// Llama a initMap cuando la página se haya cargado
window.onload = initMap;
