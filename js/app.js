// ========================================
// API DATABASE
// ========================================

const apiUrl =
    'https://gestate-purr-aorta.ngrok-free.dev/gps-monitoring/api/latest.php';


// ========================================
// KOORDINAT AWAL
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
// JUMLAH TITIK
// ========================================

let pointCount = 0;


// ========================================
// MENGAMBIL DATA GPS
// ========================================

function ambilDataGPS() {

    fetch(apiUrl)

        .then(response => {

            if (!response.ok) {

                throw new Error(
                    'Server mengembalikan error: ' +
                    response.status
                );

            }

            return response.json();

        })

        .then(result => {

            console.log('Data dari server:', result);


            // ========================================
            // CEK DATA
            // ========================================

            if (
                result.status === 'success' &&
                result.data
            ) {

                tampilkanData(result.data);

            } else {

                document.getElementById('status')
                    .textContent = 'Belum ada data';

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


// ========================================
// MENAMPILKAN DATA GPS
// ========================================

function tampilkanData(data) {

    // ========================================
    // MENGAMBIL KOORDINAT
    // ========================================

    latitude = parseFloat(data.latitude);

    longitude = parseFloat(data.longitude);


    // ========================================
    // UPDATE MARKER
    // ========================================

    marker.setLatLng([
        latitude,
        longitude
    ]);


    // ========================================
    // MEMINDAHKAN POSISI PETA
    // ========================================

    map.setView([
        latitude,
        longitude
    ]);


    // ========================================
    // MENAMPILKAN KOORDINAT
    // ========================================

    document.getElementById('latitude')
        .textContent = latitude.toFixed(7);

    document.getElementById('longitude')
        .textContent = longitude.toFixed(7);


    // ========================================
    // STATUS
    // ========================================

    document.getElementById('status')
        .textContent = 'GPS Connected';


    // ========================================
    // WAKTU UPDATE
    // ========================================

    document.getElementById('last-update')
        .textContent = data.created_at;


    // ========================================
    // JUMLAH TITIK
    // ========================================

    pointCount++;

    document.getElementById('point-count')
        .textContent = pointCount;

}


// ========================================
// AMBIL DATA PERTAMA KALI
// ========================================

ambilDataGPS();


// ========================================
// UPDATE SETIAP 5 DETIK
// ========================================

setInterval(
    ambilDataGPS,
    5000
);


// ========================================
// TOMBOL HAPUS JEJAK
// ========================================

document.getElementById('clear-history')
    .addEventListener(
        'click',
        function () {

            pointCount = 0;

            document.getElementById('point-count')
                .textContent = '0';

        }
    );