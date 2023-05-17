USE DOCKERIZED;

CREATE TABLE
    users(
        id INT AUTO_INCREMENT,
        firstName VARCHAR(50) NOT NULL,
        lastName VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL,
        password VARCHAR(50) NOT NULL,
        image VARCHAR(50) DEFAULT '' NOT NULL,
        pdf blob(65535) DEFAULT '' NOT NULL,
        PRIMARY KEY(id)
    );