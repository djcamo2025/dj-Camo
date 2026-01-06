<?php
$data = json_decode(file_get_contents("php://input"), true);

$line = $data["time"] . "," .
        $data["ip"] . "," .
        $data["city"] . "," .
        $data["country"] . "," .
        $data["page"] . "\n";

file_put_contents("visits.csv", $line, FILE_APPEND);
?>