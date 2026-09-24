// Koordinat awal
let latitude = -8.172350;
let longitude = 113.700850;

// Membuat peta
let map = L.map('map').setView(
    [latitude, longitude],
    15
);

// Menambahkan OpenStreetMap
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; OpenStreetMap contributors'
    }
).addTo(map);

// Membuat marker
let marker = L.marker([
    latitude,
    longitude
]).addTo(map);

// Menampilkan koordinat
document.getElementById('latitude')
    .textContent = latitude;

document.getElementById('longitude')
    .textContent = longitude;

document.getElementById('status')
    .textContent = 'GPS Connected';