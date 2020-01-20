<?php
require 'dbConnection.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

//if(isset($postdata) && !empty($postdata)){
  // extract the data
$request = json_decode($postdata);

//  // validate
//  if(trim($request->number) === '' || (float)$request->amount < 0)
//    return http_response_code(400);

$userid = mysqli_real_escape_string($conn, trim($request->UserID));
$username = mysqli_real_escape_string($conn, trim($request->UserName));
$title = mysqli_real_escape_string($conn, trim($request->Title));
$content = mysqli_real_escape_string($conn, trim($request->Content));
$timestamp = date('Y-m-d H:i:s');
$id = $userid . $timestamp;

$sql = "INSERT INTO Posts(PostID, UserID, UserName, PostTime, Title, Content, LikeNo, DislikeNo, CommentNo)
            VALUES ('{$id}', '{$userid}', '{$username}', '{$timestamp}', '{$title}', '{$content}', 0, 0, 0)";

  if($conn->query($sql) == TRUE) {
//    http_response_code(201);
//    $post = [
//      'UserID' => $userid,
//      'UserName' => $username,
//      'Title' => $title,
//      'Content' => $content
//      ];
//    echo json_encode($post);
//      echo "posted!";
  }
  else {
//    http_response_code(422);
      echo $conn->error;
  }

