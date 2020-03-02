<?php
require 'dbConnection.php';

$id = file_get_contents("php://input");
$sql = "UPDATE Posts SET DislikeNo = DislikeNo+1 WHERE PostID = '{$id}'";

if ($conn->query($sql) == TRUE) {
    http_response_code(200);
}