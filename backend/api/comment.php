<?php
require 'dbConnection.php';

// Get the posted data.
$postdata = file_get_contents("php://input");
// echo(json_decode($postdata));

if (isset($postdata) && !empty($postdata)) {
    // extract the data
    $request = json_decode($postdata);
    $postid = mysqli_real_escape_string($conn, trim($request->PostID));
    $userid = mysqli_real_escape_string($conn, trim($request->UserID));
    $username = mysqli_real_escape_string($conn, trim($request->UserName));
    $content = mysqli_real_escape_string($conn, trim($request->CommentContent));
    $timestamp = date('Y-m-d H:i:s');
    $id = $userid . $timestamp;

    // validate
    if (trim($userid) === null || trim($postid) === null || trim($id) === null)
        return http_response_code(404);

    $sql = "INSERT INTO Comments(PostID, CommentID, UserID, UserName, CommentTime, CommentContent)
            VALUES ('{$postid}', '{$id}', '{$userid}', '{$username}', '{$timestamp}', '{$content}')";

    $updateSql = "UPDATE Posts SET CommentNo = (SELECT count(CommentID) FROM Comments 
            WHERE Comments.PostID = Posts.PostID GROUP BY PostID)";
    $updateSql2 = "UPDATE Posts SET CommentNo = 0 WHERE Posts.CommentNo is NULL";

    if ($conn->query($sql) == TRUE) {
        http_response_code(200);

        $comment = [
            'PostID' => $postid,
            'UserID' => $userid,
            'UserName' => $username,
            'Content' => $content,
            'CommentID' => $id
        ];
        echo json_encode($comment);

        if($conn->query($updateSql) && $conn->query($updateSql2) == TRUE) {
            http_response_code(200);
//            echo ("CommentNo updated!");
        }
        else
            http_response_code(400);
    }
    else {
        http_response_code(400);
    }
}

