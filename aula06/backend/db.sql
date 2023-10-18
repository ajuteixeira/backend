CREATE DATABASE db_aula06;

USE db_aula06;

CREATE TABLE tb_disciplina (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (30) NOT NULL,
    carga_horaria INT(2) NOT NULL
);

INSERT INTO tb_disciplina (nome, carga_horaria)
VALUES('ExpressJS', '20');

INSERT INTO tb_disciplina (nome, carga_horaria)
VALUES ('Banco de Dados', '16');

INSERT INTO tb_disciplina (nome, carga_horaria)
VALUES ('NodeJS', '12');