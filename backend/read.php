<?php
require 'dbConnection.php';

// fetch the data of posts and return as JSON response
$sql = "SELECT * FROM Posts";
$result = $conn->query($sql);
$posts = [];
$i = 0;

if($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
  // TODO: change parameters in posts?
    $posts[$i]['UserName'] = $row['UserName'];
    $posts[$i]['Title'] = $row['Title'];
    $posts[$i]['Content'] = $row['Content'];
    $posts[$i]['PostTime']    = $row['PostTime'];
    $posts[$i]['LikeNo']    = $row['LikeNo'];
    $posts[$i]['DislikeNo']    = $row['DislikeNo'];
    $posts[$i]['CommentNo']    = $row['CommentNo'];
    $i++;
  }
  echo json_encode($posts, true);
}
else{
  http_response_code(404);
}