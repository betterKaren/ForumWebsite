select * from Posts
where str_to_date(PostData, '%Y-%m-%d')
BETWEEN str_to_date('2019-11-01', '%Y-%m-%d') AND str_to_date('2019-11-30', '%Y-%m-%d')
ORDER BY (LikeNo)