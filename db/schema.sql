CREATE DATABASE cocktails_db;

USE cocktails_db;

CREATE TABLE cocktails (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (255) NOT NULL,
    drunken BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

