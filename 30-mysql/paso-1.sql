/*
Utilizando la base de datos de películas queremos conocer
los títulos y el nombre del género de todas las 
series de la base de datos.
*/

-- Tablas series, genres
SELECT series.title, genres.name FROM 
series LEFT JOIN genres ON genres.id = series.genre_id;


-- Por otro, necesitamos listar los
-- títulos de los episodios junto con el 
-- nombre y apellido de los actores que trabajan en cada
-- uno de ellos.

SELECT series.title as Serie, episodes.title, actors.first_name, actors.last_name 
FROM episodes
INNER JOIN seasons ON episodes.season_id = seasons.id
INNER JOIN series ON seasons.serie_id = series.id
INNER JOIN actor_episode ON episodes.id = actor_episode.episode_id
INNER JOIN actors ON actors.id = actor_episode.actor_id;


