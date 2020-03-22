<?php
// add response headers and the allowed methods
header("Access-Control-Allow-Origin: *");           // allow PHP server to accept request from Angular server
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Credentials: true');

error_reporting(E_ALL);

// credentials will be used to connect database
$host = 'localhost:3306';
$username = "root";
$password = "*";
$dbname = 'forumData';

$conn = new mysqli($host, $username, $password, $dbname);

// test
if ($conn->connect_error) {
    echo("Database Connection Failed: " . $conn->connect_error);
}
//else
// echo "Database Connected!!";

