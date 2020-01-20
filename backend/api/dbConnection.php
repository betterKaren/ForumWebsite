<?php
// add response headers and the allowed methods
header("Access-Control-Allow-Origin: *");           // allow PHP server to accept request from Angular server
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// credentials will be used to connect database
$host = 'localhost:3306';
$username = "root";
$password = "neversaydieB961025";
$dbname = 'forumData';

$conn = new mysqli($host, $username, $password, $dbname);

// test
if ($conn->connect_error) {
    die("Database Connection Failed: " . $conn->connect_error);
}
//else
//  echo "Database Connected!!";

