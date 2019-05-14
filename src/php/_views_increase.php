<?php

require __DIR__ . "./__connect_db.php";


$result = [
    "success" => false,
    "errorCode" => 0,
    "errorMsg" => "",
    "post" => [],
    "data" => []
];


$sid = $_POST["sid"];
$views = intval($_POST["views"]);
echo $sid;
echo $views;






if (isset($_POST["sid"])) {
    $sql = "UPDATE `test` SET `views`=? WHERE `sid`=$sid";
    try {
        $stmt = $pdo->prepare($sql);

        $stmt->execute([
            $views

        ]);
        if ($stmt->rowCount() == 1) {
            $rsql = sprintf("SELECT `views` FROM `test` WHERE `sid`=$sid");
            $stmt = $pdo->query($rsql);
            $result["data"] = $stmt->fetch(PDO::FETCH_ASSOC);
            $result["success"] = true;
        } else {
            $result["success"] = false;
            $result["errorCode"] = 402;
        }
    } catch (PDOException $ex) {
        $result["success"] = false;
        $result["errorCode"] = 403;
        $result["errorMsg"] = "Email duplicated";
    }
}

echo json_encode($result, JSON_UNESCAPED_UNICODE);
#header("location: listtest.php");
