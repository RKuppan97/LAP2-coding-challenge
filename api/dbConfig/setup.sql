DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
  id serial PRIMARY KEY,
  title varchar(120) NOT NULL,
  name varchar(30) NOT NULL,
  body varchar(255) NOT NULL,
);
