DROP DATABASE IF EXISTS biblioteca;

CREATE DATABASE biblioteca CHARSET = UTF8 COLLATE utf8_general_ci;

USE biblioteca;

CREATE TABLE
    livro (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        titulo VARCHAR(255) NOT NULL,
        autor VARCHAR(255) NOT NULL,
        data_emprestado DATE NOT NULL,
        data_devolucao DATE NOT NULL,
        nome_cliente VARCHAR(255) NOT NULL
    );

INSERT INTO
    livro
VALUES
    (
        DEFAULT,
        "Se eu fosse voce",
        "Michael",
        "2023-02-25",
        "2023-03-10",
        "Gustavo"
    ),
    (
        DEFAULT,
        "Anjos da noite",
        "Jorge",
        "2023-02-25",
        "2023-03-10",
        "Rafael"
    );