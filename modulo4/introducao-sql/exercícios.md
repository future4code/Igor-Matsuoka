# Exercícios Introdução SQL <h1>
USE `carver-igor-eiiji-avelar-matsuoka`;

CREATE TABLE Actors (
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR (255) NOT NULL,
	salary FLOAT NOT NULL,
	birth_date DATE NOT NULL,
	gender VARCHAR(6) NOT NULL
);

### EX. 1
a)
* VARCHAR: O VARCHAR recebe uma string e você pode  determinar o espaço e o número de caracteres em disco necessário para armazenamento. Colunas do tipo VARCHAR(n) ocupam 1 byte por caractere informado no registro.
* NOT NULL: Obrigatóriamente deve ser passado um valor diferente de nulo
* DATE: O valor será uma data
* Primary Key: Cada primary key terá um valor único e também não pode ser nulo. Ex: id.

b)
* <b>SHOW DATABASES</b> mostra a grid de databeses. <b>Show tables</b> mostra as tabelas contidas no database.

c)
* o comando <b>DESCRIBE</b> Actors traz na tela de resultados a descrição da tabela informada, como o nome dos campos, seus tipos, se aceitam nulo e quais são os campos chave.

### EX. 2
a)
* O erro 

b)
* Aparece o erro de chave primária duplicada

c)
* Contagem de colunas informadas não equivale ao que foi estabelecido na primeira linha do comando

d)
* Apresenta o erro de que o campo name não tem um valor default. Nome = null

e)
* Apresenta o erro de tipo no campo data, deve ser uma string no formato "YYYY-MM-DD".

### EX. 3
a, b)
* #### SELECT id, name from Actor WHERE gender = "female";
* #### SELECT salary from Actors WHERE name = "Tony Ramos";

c)
* Retorna uma tabela com todos os campos null

d)
* #### SELECT id, name, salary from Actors WHERE salary <= 500000;

e)
* Criamos a tabela com o campo name e não com o campo nome.

### EX.4
a) A query vai encontrar atores que comecem com a letra a e ganhem um salario maior que R$ 300.000,00
* #### SELECT id, name from Actors WHERE name LIKE "A%" OR name LIKE "J%" AND salary > 300000;

b) 
* #### SELECT id, name from Actors WHERE name NOT LIKE "A%" OR name LIKE "J%" AND salary > 350000;

c)
* #### SELECT id, name from Actors WHERE name LIKE "%G%" OR name LIKE "%g%";

d) 
* #### SELECT * FROM Actors WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;


