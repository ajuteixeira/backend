-- listar os bancos de dados -- 
SHOW DATABASES;

-- Criar um banco de dados --
CREATE DATABASE db_escola;

-- Selecionar o banco de dados --
USE db_escola;

-- Criar uma tabela --
CREATE TABLE tb_lab (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (30) NOT NULL,
    cor VARCHAR (20),
    capacidade INT
);

-- Listar as tabelas --
SHOW TABLES;

-- Detalhes da estrutura da tabela --
DESC tb_lab;