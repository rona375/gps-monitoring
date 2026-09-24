<?php

include "koneksi.php";

$sql = "SELECT * FROM gps_data
        ORDER BY id DESC
        LIMIT 1";

$result = $conn->query($sql);

if ($result->num_rows > 0) {

    $data = $result->fetch_assoc();

    echo json_encode([
        "status" => "success",
        "data" => $data
    ]);

} else {

    echo json_encode([
        "status" => "error",
        "message" => "Belum ada data GPS"
    ]);
}

$conn->close();

?>