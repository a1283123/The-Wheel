<?php
require __DIR__ . "./__connect_db.php";

$sid = $_POST["sid"];

header("Content-Type: application/json");

$sql = sprintf("SELECT * FROM `test` WHERE `sid`=$sid");


$stmt = $pdo->query($sql);
$result["data"] = $stmt->fetchAll(PDO::FETCH_ASSOC);
$result["success"] = true;



echo json_encode($result, JSON_UNESCAPED_UNICODE);
