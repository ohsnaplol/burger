CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN,
    date TIMESTAMP,
    PRIMARY KEY(id)
);