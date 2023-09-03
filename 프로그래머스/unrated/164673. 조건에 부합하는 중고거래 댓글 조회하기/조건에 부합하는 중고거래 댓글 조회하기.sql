-- 코드를 입력하세요
SELECT 
ugb.title as TITLE,
ugb.board_id as BOARD_ID,
ugr.reply_id as REPLY_ID,
ugr.writer_id as WRITER_ID,
ugr.contents as CONTENTS,
DATE_FORMAT(ugr.created_date, '%Y-%m-%d') as CREATED_DATE
FROM used_goods_board as ugb 
JOIN used_goods_reply as ugr 
ON ugb.board_id = ugr.board_id
WHERE DATE(ugb.created_date) BETWEEN '2022-10-01' AND '2022-10-31'
ORDER BY ugr.created_date , ugb.title;
