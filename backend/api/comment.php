<?php
require 'dbConnection.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    // extract the data
    $request = json_decode($postdata);

    $userid = mysqli_real_escape_string($conn, trim($request->UserID));
    $username = mysqli_real_escape_string($conn, trim($request->UserName));
    $comment = mysqli_real_escape_string($conn, trim($request->CommentContent));
    $timestamp = date('Y-m-d H:i:s');
    $id = $userid . $timestamp;

    // validate
    if (trim($request->userid) === null || trim($request->title) === null)
        return http_response_code(404);

    $sql = "INSERT INTO Posts(PostID, CommentID, UserID, CommentTime, CommentContent)
            VALUES ('{}', '{$id}', '{$userid}', '{$timestamp}', '{$comment}')";

    if ($conn->query($sql) == TRUE) {
        http_response_code(200);
//    $post = [
//      'UserID' => $userid,
//      'UserName' => $username,
//      'Title' => $title,
//      'Content' => $content
//      ];
//    echo json_encode($post);
//    } else {
//    http_response_code(422);
    }
}

