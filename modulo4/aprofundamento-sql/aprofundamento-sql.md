# Exercícios aprofundamento SQL<h1>

### EX.1
##### a) 
Esse comando iria retirar a coluna salary da tabela.
##### b) 
Muda o nome da coluna "gender" para "sex" e altera seu varchar para 6
##### c) 
Mantém o nome da coluna "gender" e altera seu varchar para 255
##### d) 
Deve-se apenas alterar o 255 do exercício "c" para 100

### EX.2
##### a) 
UPDATE atores
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10",
    gender = "male"
WHERE id = "003";
##### b)
 UPDATE atores SET name = "JULIANA PÃES" WHERE id = "Juliana Paes";

 ##### c)
 UPDATE atores
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

### EX.3
##### a)
DELETE FROM atores where id = "Fernanda Montenegro";
##### b)
DELETE FROM atores where gender="male" and salary > 1000000;

### EX.4
##### a)
SELECT MAX(salary) FROM atores;
##### b)
SELECT MIN(salary) FROM atores WHERE gender="female";
##### c)
SELECT COUNT(*) FROM atores WHERE gender="female";
##### d)
SELECT SUM(salary) FROM atores;

### EX.5
##### a) 
Essa query trouxe a quantidade de atores e atrizes separadas por grupos "male" e "female"
##### b)
SELECT id,name FROM atores ORDER BY name ASC;
##### c)
SELECT * FROM atores ORDER BY salary ASC;
##### d)
SELECT * FROM atores ORDER BY salary DESC LIMIT 3;
##### e)
SELECT AVG(salary), gender FROM atores GROUP BY gender;

### EX.6
##### a)
ALTER TABLE Movies ADD playing_limit_date DATE;
##### b)
ALTER TABLE Movies CHANGE avaliation rating FLOAT;
##### c)
UPDATE Movies
SET
	playing_limit_date = "2022-08-31"
WHERE id = "003"
UPDATE Movies
SET
	playing_limit_date = "2020-05-31"
WHERE id = "001"
##### d)
DELETE FROM Movies WHERE id = "001";
* O comando para atualizar foi aceito sem erros porém na lista não ocorreu nenhuma alteração.