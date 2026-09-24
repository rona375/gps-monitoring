// ========================================
// KOORDINAT DUMMY
// ========================================

let latitude = -8.157817;
let longitude = 113.723092;


// ========================================
// MEMBUAT PETA
// ========================================

let map = L.map('map').setView(
    [latitude, longitude],
    15
);


// ========================================
// OPENSTREETMAP
// ========================================

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; OpenStreetMap contributors'
    }
).addTo(map);


// ========================================
// MARKER
// ========================================

let marker = L.marker([
    latitude,
    longitude
]).addTo(map);


// ========================================
// MENAMPILKAN DATA DUMMY
// ========================================

document.getElementById('latitude')
    .textContent = latitude.toFixed(7);

document.getElementById('longitude')
    .textContent = longitude.toFixed(7);

document.getElementById('status')
    .textContent = 'GPS Connected';


// ========================================
// UPDATE TERAKHIR
// SEMENTARA DUMMY
// ========================================

document.getElementById('last-update')
    .textContent = 'Data Dummy';


// ========================================
// REAL-TIME DATABASE
// AKAN DIGUNAKAN NANTI
// ========================================

/*

function ambilDataGPS() {

    fetch('api/latest.php')

        .then(response => response.json())

        .then(result => {

            if (
                result.status === 'success' &&
                result.data
            ) {

                tampilkanData(result.data);

            }

        })

        .catch(error => {

            console.error(
                'Gagal mengambil data GPS:',
                error
            );

            document.getElementById('status')
                .textContent = 'Tidak terhubung';

        });

}


// Update setiap 5 detik

ambilDataGPS();

setInterval(
    ambilDataGPS,
    5000
);

*/


// ========================================
// TOMBOL HAPUS JEJAK
// ========================================

document.getElementById('clear-history')
    .addEventListener(
        'click',
        function () {

            document.getElementById('point-count')
                .textContent = '0';

        }
    );