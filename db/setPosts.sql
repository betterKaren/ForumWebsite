use forumData;
select * from Posts;

insert into Posts
values (1, 'yd2am', 'Yu', CURRENT_TIMESTAMP, 'test', 'test post', 0, 0, 0);

UPDATE Posts SET PostID = concat(UserID, PostTime);