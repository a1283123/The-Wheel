<?php
require __DIR__ . "./__connect_db.php";
$per_page = 10;

header("Content-Type: application/json");
// if (isset($_POST["type"])) {
//     $type = $_POST["type"];
// }

// if (isset($_POST["search"])) {
//     $sear = $_POST["search"];
//     $search = "%" . $_POST["search"] . "%";
// }

// $result = [
//     "success" => false,
//     "page" => 0,
//     "perPage" => $per_page,
//     "totalRows" => 0,
//     "totalPages" => 0,
//     "data" => [],
//     "type" => "",
//     "search" => ""
// ];


$page = isset($_GET["page"]) ? intval($_GET["page"]) : 1;
$result["page"] = $page;


$t_sql = "SELECT COUNT(*) FROM `test` ORDER BY `sid` DESC";

$t_stmt = $pdo->query($t_sql);
$t_rows = $t_stmt->fetch(PDO::FETCH_NUM);
$result["totalRows"] = $t_rows[0];
if ($t_rows[0] == 0) {
    $result = [
        "success" => false,
        "page" => 0,
        "perPage" => $per_page,
        "totalRows" => 0,
        "totalPages" => 0,
        "data" => [],
    ];
    echo json_encode($result);
    exit;
}
$t_pages = ceil($t_rows[0] / $per_page);

$result["totalPages"] = $t_pages;
if ($page > $t_pages) {
    $page = $t_pages;
}
if ($page < 1) {
    $page = 1;
}


$sql = sprintf("SELECT * FROM `test` WHERE `disable` = 0 ORDER BY `sid` DESC LIMIT %s, %s", ($page - 1) * $per_page, $per_page);


$stmt = $pdo->query($sql);
$result["data"] = $stmt->fetchAll(PDO::FETCH_ASSOC);
$result["success"] = true;



echo json_encode($result, JSON_UNESCAPED_UNICODE);
