use forumData;

create table Posts (
	PostID varchar(255) primary key,
    UserID varchar(255) NOT NULL,
    UserName varchar(255),
    PostTime timestamp NOT NULL,
    Title varchar(255) NOT NULL,
    Content varchar(255),
    LikeNo int,
    DislikeNo int,
    CommentNo int
);

create table Comments (
	PostID varchar(255),
	foreign key(PostID) references Posts(PostID),
    CommentID varchar(255) primary key,
    UserID varchar(255) NOT NULL,
    CommentTime timestamp NOT NULL,
    CommentContent varchar(255)
);

create table Votes (
	PostID varchar(255),
	foreign key(PostID) references Posts(PostID),
    UserID varchar(255) NOT NULL,
    Vote int
);
