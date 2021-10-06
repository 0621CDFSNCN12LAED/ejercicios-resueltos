USE movies_db;

SELECT * FROM genres;

INSERT INTO genres (name,ranking,active) VALUES ("Investigación",13,1);

UPDATE genres SET name="Investigación Científica" WHERE id=13;

DELETE FROM genres WHERE id=13;

SELECT name as Nombre from genres;


------------------------------------


SELECT * FROM movies ORDER BY rating DESC LIMIT 5;


SELECT first_name, last_name FROM actors LIMIT 10 OFFSET 30;


--- DESAFIO 4 PASO 3

SELECT title, release_date from movies
WHERE release_date BETWEEN "2004-01-01" AND "2008-12-31";

