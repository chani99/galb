-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 10, 2018 at 11:41 AM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gal_beitar`
--

-- --------------------------------------------------------

--
-- Table structure for table `emtza`
--

CREATE TABLE `emtza` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `hebrew_date` varchar(25) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `emtza`
--

INSERT INTO `emtza` (`id`, `date`, `hebrew_date`) VALUES
(1051, '2018-01-02', 'ט\"ו בטבת תשע\"ח'),
(1052, '2018-01-09', 'כ\"ב טבת תשע\"ח');

-- --------------------------------------------------------

--
-- Table structure for table `lainyan`
--

CREATE TABLE `lainyan` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `hebrew_date` varchar(25) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `lainyan`
--

INSERT INTO `lainyan` (`id`, `date`, `hebrew_date`) VALUES
(879, '2018-01-07', 'כ\' בטבת תשע\"ח'),
(880, '2018-01-14', 'כ\"ז בטבת תשע\"ח');

-- --------------------------------------------------------

--
-- Table structure for table `meida`
--

CREATE TABLE `meida` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `hebrew_date` varchar(25) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `meida`
--

INSERT INTO `meida` (`id`, `date`, `hebrew_date`) VALUES
(1202, '2018-01-01', 'י\"ד בטבת תשע\"ח'),
(1203, '2018-01-08', 'כ\"א בטבת תשע\"ח');

-- --------------------------------------------------------

--
-- Table structure for table `shavua`
--

CREATE TABLE `shavua` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `hebrew_date` varchar(25) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `shavua`
--

INSERT INTO `shavua` (`id`, `date`, `hebrew_date`) VALUES
(814, '2017-12-30', 'י\"ב טבת תשע\"ח'),
(815, '2018-01-06', 'י\"ט טבת תשע\"ח'),
(816, '2018-01-13', 'כ\"ו טבת תשע\"ח');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `emtza`
--
ALTER TABLE `emtza`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lainyan`
--
ALTER TABLE `lainyan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `meida`
--
ALTER TABLE `meida`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shavua`
--
ALTER TABLE `shavua`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `emtza`
--
ALTER TABLE `emtza`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1053;
--
-- AUTO_INCREMENT for table `lainyan`
--
ALTER TABLE `lainyan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=881;
--
-- AUTO_INCREMENT for table `meida`
--
ALTER TABLE `meida`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1204;
--
-- AUTO_INCREMENT for table `shavua`
--
ALTER TABLE `shavua`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=817;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
