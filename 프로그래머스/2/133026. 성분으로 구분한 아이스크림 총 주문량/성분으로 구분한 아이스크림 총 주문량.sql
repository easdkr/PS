-- 코드를 입력하세요
SELECT ingredient_type, SUM(total_order) AS total_order 
FROM first_half AS fh 
JOIN icecream_info AS ii ON fh.flavor = ii.flavor 
GROUP BY ii.ingredient_type
ORDER BY total_order ASC