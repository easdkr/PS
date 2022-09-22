문제\
[중복 제거하기](https://school.programmers.co.kr/learn/courses/30/lessons/59408)

해답\
[mysql](mysql.sql) [oracle](oracle.sql)

풀이\

DISTINCT 로 NAME 컬럼의 중복을 제거한 다음 COUNT 함수를 써서 해결할 수 있다.  
NAME 컬럼의 값이 NULL인 데이터는 제외해야하므로 WHERE 절에 NULL 이 아닌 데이터만 조회할 수 있는 조건을 준다
