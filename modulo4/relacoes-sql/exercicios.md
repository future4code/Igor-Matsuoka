# EXERCÍCIOS RELAÇÕES SQL <h1>

## EX 1

a) Foreign key é um campo de uma tabela que se refere a uma primary key de outra tabela.

b) OK

c) Ocorre um erro pois a foreign key não encontra o id da outra tabela.

d) OK

e) Não é possível excluir o filme, ele fala que não pode excluir uma "linha pai".

## EX 2

a) Esta tabela refere-se ao fato de que para o elenco do filme, o actor_id será igual ao id da tabela atores. Já o movie_id será igual ao id da tabela Movies

b) OK

c) Ocorre o mesmo erro do exercício 1c

d) Não é possível excluir o ator, ele fala que não pode excluir uma "linha pai".

## EX 3
a) A query seleciona todos os dados que aparecem nas duas tabelas, nesse caso ela seleciona o parametro movie_id da tabela Rating e compara com cada um dos ids da tabela Movie, depois junta as duas tabelas a partir do parametro Movie.id e do parametro Rating.movie_id. No final ela junta as duas tabelas onde Movie.id = Rating.movie_id, eles estarão na mesma linha da tabela.

b) SELECT m.id as movie_id, r.rate as rating FROM Movies m
INNER JOIN Rating r ON m.id = r.movie_id;

## EX 4
a) SELECT name, movie_id, Rating.rate, comment FROM Movies LEFT JOIN Rating ON Movies.id = Rating.movie_id;

b) SELECT Movies.id, Movies.name, actor_id FROM Movies RIGHT JOIN MovieCast ON Movies.id = MovieCast.movie_id;

c) SELECT AVG(Rating.rate), Movies.id, Movies.name FROM Rating RIGHT JOIN Movies ON Movies.id=Rating.movie_id GROUP BY Movies.id;

## EX 5
a) Existe a necessidade de dois joins pois iremos fazer duas ligações onde uma tabela é de junção e as outras duas são idependentes.

b) SELECT Movies.id, Movies.name, atores.name FROM Movies LEFT JOIN MovieCast ON Movies.id=MovieCast.movie_id JOIN atores ON atores.id = MovieCast.movie_id;

c) Aparece que houve um erro de sintaxe na query, após corrigido ele retorna uma tabela com os ids e nomes do filme seguidos dos ids dos atores e seus nomes.

d) SELECT 
	m.id as movie_id, 
    m.name, 
    a.id as actor_id, 
    a.name, 
    r.rate, 
    r.comment 
FROM Movies m
LEFT JOIN Rating r on r.movie_id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN atores a ON a.id = mc.actor_id;

## EX 6
a) Essa é uma relação N:M onde um filme pode ter vários oscars e 1 oscar vários filmes se considerarmos os vários anos de cerimonia. Se considerassemos apenas 1 ano, seria 1:N.

b) 

CREATE TABLE Oscar (
		movie_id VARCHAR(255),
		oscar_name VARCHAR(255) NOT NULL,
		oscar_date DATE NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

INSERT INTO Oscar (movie_id, oscar_name, oscar_date)  
VALUES (
    "002",
	"Melhor Filme",
    "2021-01-22"
);
INSERT INTO Oscar (movie_id, oscar_name, oscar_date)  
VALUES (
    "002",
	"Melhor Trilha sonora",
    "2021-01-22"
);

INSERT INTO Oscar (movie_id, oscar_name, oscar_date)  
VALUES (
	"003",
	"Melhor Roteiro",
    "2021-01-22"
);
INSERT INTO Oscar (movie_id, oscar_name, oscar_date)      
VALUES (
	"003",
	"Melhores Efeitos especiais",
    "2021-01-22"
);
INSERT INTO Oscar (movie_id, oscar_name, oscar_date)    
VALUES (
    "002",
	"Melhor Filme",
    "2022-01-22"
);
DESCRIBE Oscar;

SELECT Movies.id, Movies.name, Oscar.movie_id, Oscar.oscar_name, Oscar.oscar_date FROM Movies LEFT JOIN Oscar ON Movies.id=movie_id;
