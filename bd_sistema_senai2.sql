-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 01-Nov-2024 às 21:30
-- Versão do servidor: 5.7.11
-- PHP Version: 7.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bd_sistema_senai2`
--
CREATE DATABASE IF NOT EXISTS `bd_sistema_senai2` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `bd_sistema_senai2`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_inventarios`
--

CREATE TABLE `tb_inventarios` (
  `codigo` int(11) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `setor` varchar(100) NOT NULL,
  `categoria` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tb_inventarios`
--

INSERT INTO `tb_inventarios` (`codigo`, `descricao`, `setor`, `categoria`) VALUES
(16, 'Mesa 2', 'NEP', 'Móveis'),
(17, 'Impressora Multifucional', 'Suporte', 'Equipamentos Eletrônicos'),
(21, 'Telefone', 'Atendimento', 'Equipamentos de Comunicação'),
(22, 'Armário', 'Administrativo', 'Móveis'),
(23, 'Mouse', 'Suporte', 'Periféricos de Computador'),
(24, 'Lâmpada', 'Atendimento', 'Iluminação'),
(25, 'Quadro Branco', 'Administrativo', 'Material de Escritório'),
(26, 'Impressora Multifuncional', 'Atendimento', 'Informática'),
(28, 'Cadeira', 'NAD', 'Móveis'),
(29, 'Notebook', 'NEP', 'Computadores'),
(31, 'Notebook', 'NEP', 'Computadores'),
(32, 'Notebook', 'NEP', 'Eletronicos');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_usuarios`
--

CREATE TABLE `tb_usuarios` (
  `id_usuario` int(11) NOT NULL,
  `username` varchar(15) NOT NULL,
  `password` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tb_usuarios`
--

INSERT INTO `tb_usuarios` (`id_usuario`, `username`, `password`) VALUES
(1, 'admin', '1234');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_inventarios`
--
ALTER TABLE `tb_inventarios`
  ADD PRIMARY KEY (`codigo`);

--
-- Indexes for table `tb_usuarios`
--
ALTER TABLE `tb_usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_inventarios`
--
ALTER TABLE `tb_inventarios`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
--
-- AUTO_INCREMENT for table `tb_usuarios`
--
ALTER TABLE `tb_usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
