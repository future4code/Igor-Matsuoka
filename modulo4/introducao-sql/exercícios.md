# Exercícios Introdução SQL <h1>

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

### EX.5
#### CREATE TABLE Movies (
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR (255) NOT NULL,
	sinopse TEXT NOT NULL,
	date DATE NOT NULL,
	avaliation FLOAT NOT NULL
);

#### INSERT INTO Movies (id, name, sinopse, date, avaliation) VALUES
##### (001, "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006/01/06", 7),
##### (002, "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012/12/27", 10),
##### (003, "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017/11/02", 8);
#### INSERT INTO Movies (id, name, sinopse, date, avaliation) VALUES
##### (004, "Meu Nome Não É Johnny", "João Guilherme Estrella é um jovem da classe média que se torna o rei do tráfico de drogas da zona sul do Rio de Janeiro. O rapaz inteligente e adorado pelos pais passa a ser investigado pela polícia e enfrenta a dura realidade de um criminoso.", "2008/01/04", 9);

### EX.6
a)
* #### SELECT id, name, avaliation from Movies WHERE id = 3;

b) 
* #### SELECT * FROM Movies WHERE name = "Doce de mãe";

c)
* #### SELECT id, name, sinopse FROM Movies WHERE avaliation > 7;

### EX.7
a)
* #### SELECT name from Movies WHERE name LIKE "%vida%";
b)
* #### SELECT * FROM Movies WHERE name LIKE "%eu%" OR sinopse LIKE "%dois%";
c)
* #### SELECT * FROM Movies WHERE date < "2022-01-31";
d)
* #### SELECT * FROM Movies WHERE date < "2022-01-31" AND (name LIKE "%do%" OR sinopse LIKE "%eu%") AND avaliation > 7;



