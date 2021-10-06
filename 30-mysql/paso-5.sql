-- Para el siguiente desafío nos piden que 
-- obtengamos el título de todas las series y el total
-- de temporadas que tiene cada una de ellas.

-- series, seasons

SELECT first_name FROM actors
WHERE LENGTH(first_name) > 6
ORDER BY first_name;

SELECT series.title, count(seasons.title)
FROM series
INNER JOIN seasons ON series.id = seasons.serie_id
GROUP BY series.title;


SELECT genres.name, count(movies.title) as total
FROM genres
LEFT JOIN movies ON movies.genre_id = genres.id
GROUP BY genres.name
HAVING total < 3;