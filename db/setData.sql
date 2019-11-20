use forumData;
-- put data into Posts
-- select * from Posts;
-- insert into Posts
-- values (1, 'yd2am', 'Yu', CURRENT_TIMESTAMP, 'test', 'test post', 0, 0, 0);
-- UPDATE Posts SET PostID = concat(UserID, PostTime);

-- put data into Comments
-- select * from Comments;
-- insert into Comments
-- values ('yd2am2019-11-14 15:09:47', 1, 'yd2am', CURRENT_TIMESTAMP, 'test comment');
-- UPDATE Comments SET CommentID = concat(UserID, CommentTime);

-- put data into Votes: vote = 1: like, vote = -1: dislike
-- select * from Votes;
-- insert into Votes
-- values ('yd2am2019-11-14 15:09:47', 'yd2am', 1);

-- get number of comments
update Posts
set Posts.CommentNo = (select count(CommentID) from Comments)
where PostID = Posts.PostID;

-- get number of likes
update Posts
set Posts.LikeNo = (select count(*) from Votes
where Vote = 1)
where PostID = Posts.PostID;

-- get number of dislikes
update Posts
set Posts.DislikeNo = (select count(*) from Votes
where Vote = -1)
where PostID = Posts.PostID;

