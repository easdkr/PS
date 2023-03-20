-- 코드를 입력하세요
SELECT ain.animal_id, ain.name FROM animal_ins AS ain JOIN animal_outs AS aout ON ain.animal_id = aout.animal_id WHERE ain.datetime > aout.datetime ORDER BY ain.datetime