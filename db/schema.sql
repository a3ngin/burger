CREATE DATABASE cat_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	triedYet BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
