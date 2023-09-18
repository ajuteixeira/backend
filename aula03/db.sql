-- Selecionar banco de dados -- 
USE db_escola;

-- Listar todas as tabelas -- 
SHOW TABLES;

-- Criar uma tabela --
CREATE TABLE IF NOT EXISTS tb_aluno (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (30) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone CHAR(11) NOT NULL,
    data_nascimento DATE NOT NULL
);

-- Criar uma tabela --
CREATE TABLE IF NOT EXISTS tb_professor (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (30) NOT NULL,
    email VARCHAR (100) NOT NULL,
    telefone CHAR (11) NOT NULL,
    linkedin VARCHAR (100),
    novato BOOLEAN DEFAULT 1
);

-- Excluir uma tabela --
DROP TABLE tb_nome;

-- Alterar uma tabela --
ALTER TABLE tb_professor DROP COLUMN data_nascimento;
ALTER TABLE tb_professor ADD COLUMN formacao VARCHAR (20);

-- Comandos para consumir os dados --

-- Para inserir dados em uma tabela --
INSERT INTO tb_lab (nome, cor, capacidade)
VALUES             ('Jeff', 'Amarelo', '25');

---

INSERT INTO tb_aluno (nome, email, telefone, data_nascimento)
VALUES             
    ('Juliana Teixeira', 'juliana@gmail.com', '85999997070', '1998-01-03'),
    ('Gustavo Silva', 'gustavo@gmail.com', '85988887070', '1996-09-02'),
    ('Maria Lima', 'maria@gmail.com', '85977777070', '1975-10-03'),
    ('Armin Arlert', 'mimi@gmail.com', '8596666070', '2005-02-28'),
    ('Mikasa Ackerman', 'mikasa@gmail.com', '8595555070', '1994-05-22'),
    ('Eren Yeager', 'eren1999@bol.com', '8594444070', '1999-04-05'),
    ('Levi Ackerman', 'leviackermantop92@yahoo.com', '8593333070', '1992-01-29');

-- Para buscar "todos os dados de todos os labs"
SELECT * FROM tb_lab;

-- Para buscar "apenas alguns dados de todos os labs"
SELECT nome, capacidade FROM tb_lab;

-- Para buscar "todos os dados de labs específicos"
SELECT * FROM tb_lab WHERE capacidade=20;

-- Para buscar "dados específicos de labs específicos"
SELECT nome FROM tb_lab WHERE capacidade=20;

SELECT nome FROM tb_aluno
WHERE data_nascimento >= '1998-01-01'
AND data_nascimento <= '2002-01-01';

-- Para atualizar algo da tabela --
UPDATE tb_lab SET nome='Ada' WHERE id=2;

-- Para deletar algo da tabela --
DELETE FROM tb_aluno WHERE id=3;
