<?php
require 'dbConnection.php';

// fetch the data of posts and return as JSON response
$id = $_GET['PostID'];

$sql = "SELECT * FROM Comments WHERE POSTID = '{$id}'";
$result = $conn->query($sql);
$comments = [];
$i = 0;

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $comments[$i]['PostID'] = $row['PostID'];
        $comments[$i]['CommentID'] = $row['CommentID'];
        $comments[$i]['UserID'] = $row['UserID'];
        $comments[$i]['UserName'] = $row['UserName'];
        $comments[$i]['CommentTime'] = $row['CommentTime'];
        $comments[$i]['CommentContent'] = $row['CommentContent'];
        $i++;
    }
    echo json_encode($comments);
} else {
    http_response_code(404);
    echo mysqli_error($conn);
}
