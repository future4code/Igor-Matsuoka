# EXERCÍCIOS RELAÇÕES SQL <h1>

## EX 1

a) Foreign key é um campo no de uma tabela que se refere a uma primary key de outra tabela.

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
a) A query seleciona todos os dados que aparecem nas duas tabelas, nesse caso ele seleciona o parametro movie_id da tabela Rating e compara com cada um dos dados da tabela Movie.

b) SELECT m.id as movie_id, r.rate as rating FROM Movies m
INNER JOIN Rating r ON m.id = r.movie_id;

