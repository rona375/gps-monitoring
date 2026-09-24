<?php

$host = "localhost";
$user = "root";
$password = "";
$database = "gps_monitoring";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Koneksi database gagal: " . $conn->connect_error);
}

echo "Koneksi database berhasil!";

?>