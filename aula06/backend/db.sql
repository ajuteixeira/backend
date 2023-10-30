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

---

CREATE TABLE tb_aluno (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (30) NOT NULL,
    cpf CHAR (11) NOT NULL,
    email VARCHAR (30) NOT NULL,
    turma VARCHAR (4) NOT NULL
);

INSERT INTO tb_aluno (nome, cpf, email, turma)
VALUES('Juliana', '12345678911', 'juliana@email.com', 'fs17');

INSERT INTO tb_aluno (nome, cpf, email, turma)
VALUES ('Maria', '98765432101', 'maria@email.com', 'fs15');

INSERT INTO tb_aluno (nome, cpf, email, turma)
VALUES ('Gustavo', '11111111111', 'gustavo@email.com', 'fs19');