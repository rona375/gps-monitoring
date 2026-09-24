<?php

include "koneksi.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $latitude = $_POST["latitude"];
    $longitude = $_POST["longitude"];

    $sql = "INSERT INTO gps_data (latitude, longitude)
            VALUES ('$latitude', '$longitude')";

    if ($conn->query($sql) === TRUE) {

        echo json_encode([
            "status" => "success",
            "message" => "Data GPS berhasil disimpan"
        ]);

    } else {

        echo json_encode([
            "status" => "error",
            "message" => "Data GPS gagal disimpan"
        ]);
    }

} else {

    echo json_encode([
        "status" => "error",
        "message" => "Method harus POST"
    ]);
}

$conn->close();

?>