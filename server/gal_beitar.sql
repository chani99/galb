-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 10, 2018 at 06:26 PM
-- Server version: 10.1.22-MariaDB
-- PHP Version: 7.1.4

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
-- Table structure for table `ad_order`
--

CREATE TABLE `ad_order` (
  `id` int(11) NOT NULL,
  `date` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `fname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `lname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `phone` int(15) NOT NULL,
  `location` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `content` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `remarks` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `size` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `shows` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `images_folder` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `ad_order`
--

INSERT INTO `ad_order` (`id`, `date`, `fname`, `lname`, `email`, `phone`, `location`, `content`, `remarks`, `size`, `shows`, `images_folder`) VALUES
(35, 'Sun Jul 15 2018 14:44:22 GMT+0300 (שעון קיץ ירושלי', 'dfdsf', 'fdsdfs', 'cc2@gmail.com', 3443224, 'עמוד שער', 'nhtu', 'undefined', 'עמוד שלם', 'עיתון: שבוע טוב = 1 מופעים.\r\n', 'undefined'),
(36, 'Mon Jul 16 2018 12:42:47 GMT+0300 (שעון קיץ ירושלי', 'גכדגכד', 'גכדגכד', 'dd@g.com', 2255555, 'עמוד שער', '+כגכדגכ', 'undefined', 'דבל', 'עיתון: אמצע השבוע = 1 מופעים.\r\nעיתון: שבוע טוב = 1 מופעים.\r\nעיתון: אמצע השבוע = 1 מופעים.\r\nעיתון: שב', 'undefined'),
(37, 'Mon Jul 16 2018 12:45:09 GMT+0300 (שעון קיץ ירושלי', 'כגגכ', 'גככגגכ', 'ff@gmail.com', 232323, 'מיקום רגיל (ללא תוספ', '232323', 'undefined', 'עמוד שלם', 'עיתון: שבוע טוב = 1 מופעים.\r\nעיתון: שבוע טוב = 1 מופעים.\r\n', 'undefined'),
(38, 'Mon Jul 16 2018 13:35:53 GMT+0300 (שעון קיץ ירושלי', 'dfsdfsdf', 'fddfsdfs', 'ff@gmail.com', 343434, 'מיקום רגיל (ללא תוספ', 'fddfdfsdf', 'undefined', 'דבל', 'עיתון: שבוע טוב = 1 מופעים.\r\n', '1531737353518'),
(39, 'Mon Jul 16 2018 13:58:30 GMT+0300 (שעון קיץ ירושלי', 'fsdfdfs', 'dfafd', 'cf@gmail.com', 43434, 'מיקום רגיל (ללא תוספ', 'dfsdf', 'undefined', 'דבל', 'עיתון: שבוע טוב = 1 מופעים.\r\nעיתון: שבוע טוב = 1 מופעים.\r\n', '1531738710813'),
(40, 'Mon Jul 16 2018 14:06:56 GMT+0300 (שעון קיץ ירושלי', 'גכגדכ', 'גדגכדגכד', 'ff@gmail.com', 433434, 'מיקום רגיל (ללא תוספ', 'גכגכד', 'undefined', 'עמוד שלם', 'עיתון: שבוע טוב = 1 מופעים.\r\nעיתון: שבוע טוב = 1 מופעים.\r\n', '1531739216448'),
(41, 'Mon Jul 16 2018 14:38:08 GMT+0300 (שעון קיץ ירושלי', 'dfffd', 'dfsdfs', 'ff@Gmail.com', 3333, 'מיקום רגיל (ללא תוספ', 'dsffdsdfs', 'undefined', 'עמוד שלם', 'עיתון: שבוע טוב = 1 מופעים.\r\n', 'undefined'),
(42, 'Mon Jul 16 2018 14:45:43 GMT+0300 (שעון קיץ ירושלי', 'גגכד', 'גדכגכד', '33@gmail.com', 232323, 'עמוד שער', 'dffsfsdג', 'undefined', 'עמוד שלם', 'עיתון: שבוע טוב = 1 מופעים.\r\n', '1531741543711'),
(43, 'Mon Jul 16 2018 14:59:37 GMT+0300 (שעון קיץ ירושלי', 'גכגכ', 'גכגכד', '22@gmail.com', 232323, 'עמוד שער', 'כגד', 'undefined', 'עמוד שלם', 'עיתון: שבוע טוב = 1 מופעים.\r\nעיתון: שבוע טוב = 1 מופעים.\r\n', '1531742377952'),
(44, 'Mon Jul 16 2018 15:20:12 GMT+0300 (שעון קיץ ירושלי', '23', '12', '33@gmail.com', 222, 'מיקום רגיל (ללא תוספ', 'dffdsfds', 'undefined', 'דבל', 'עיתון: שבוע טוב = 1 מופעים.\r\n', '1531743508192'),
(45, 'Mon Jul 16 2018 15:49:34 GMT+0300 (שעון קיץ ירושלי', 'sdsads', 'dasadsdas', 'ff@gmail.com', 233232, 'עמוד גב', 'fdsdfdf', 'undefined', 'דבל', 'עיתון: שבוע טוב = 1 מופעים.\r\n', '1531745363164'),
(46, 'Mon Jul 16 2018 15:51:45 GMT+0300 (שעון קיץ ירושלי', 'dffd', 'dfdsdfs', 'cc@gmail.com', 323223, 'מיקום רגיל (ללא תוספ', 'fddfs', 'undefined', 'עמוד שלם', 'עיתון: שבוע טוב = 1 מופעים.\r\nעיתון: שבוע טוב = 1 מופעים.\r\n', '1531745492616'),
(47, 'Mon Jul 16 2018 16:22:49 GMT+0300 (שעון קיץ ירושלי', 'fddfs', 'dfdfs', 'dd!@gmail.com', 3432, 'עמוד שער', 'dffd', 'undefined', 'עמוד שלם', 'עיתון: שבוע טוב = 1 מופעים.\r\n', '1531747369596'),
(48, 'Tue Jul 17 2018 09:30:51 GMT+0300 (שעון קיץ ירושלי', '323', '22', 'ff@gmail.com', 121212, 'מיקום רגיל (ללא תוספ', 'fddf', 'undefined', 'דבל', 'עיתון: שבוע טוב = 1 מופעים.\r\n', '1531809051913'),
(49, 'Tue Jul 17 2018 09:34:20 GMT+0300 (שעון קיץ ירושלי', 'e4', 'fdfd', 'ff@Gmail.com', 1111, 'מיקום רגיל (ללא תוספ', 'dsasad', 'undefined', 'עמוד שלם', 'עיתון: לעניין = 1 מופעים.\r\nעיתון: מידע לכל = 1 מופעים.\r\n', '1531809178839'),
(50, 'Tue Jul 17 2018 09:35:50 GMT+0300 (שעון קיץ ירושלי', 'dfs', 'fdsdf', '3223@gmail.com', 111, 'מיקום רגיל (ללא תוספ', 'fddfsfdds', 'undefined', 'עמוד שלם', 'עיתון: שבוע טוב = 1 מופעים.\r\n', '1531809323727'),
(51, 'Tue Jul 17 2018 09:44:16 GMT+0300 (שעון קיץ ירושלי', '1כדג', '1111', 'ff@gmail.com', 14234, 'עמוד שער', 'כגדכגד', 'undefined', 'דבל', 'עיתון: שבוע טוב = 1 מופעים.\r\n', '1531809826938'),
(52, 'Tue Jul 17 2018 09:49:01 GMT+0300 (שעון קיץ ירושלי', 'fds', 'dsffds', 'fdfassdf@gmail.com', 223, 'עמוד שער', 'fdsdfs', 'undefined', 'עמוד שלם', 'עיתון: מידע לכל = 1 מופעים.\r\n', '1531810137656'),
(53, 'Tue Jul 17 2018 10:21:01 GMT+0300 (שעון קיץ ירושלי', '3434', '3434', 'ff@gmailcom', 54545454, 'עמוד שער', 'כגכגד', 'undefined', 'עמוד שלם', 'עיתון: שבוע טוב = 1 מופעים.\r\n', '1531811816779'),
(54, 'Tue Jul 17 2018 10:24:33 GMT+0300 (שעון קיץ ירושלי', 'dsadsa', 'dsdas34', 'gg@gmailcom', 433434, 'עמוד גב', 'dsadas', 'undefined', 'עמוד שלם', 'עיתון: שבוע טוב = 1 מופעים.\r\n', '1531812271637'),
(55, 'Tue Jul 17 2018 10:33:23 GMT+0300 (שעון קיץ ירושלי', '12112', 'כגשדכ', 'ff@gmail.com', 434343, 'עמוד שער', 'כגדכגד', 'undefined', 'עמוד שלם', 'עיתון: שבוע טוב = 1 מופעים.\r\n', '1531812803550'),
(56, 'Tue Jul 17 2018 10:46:38 GMT+0300 (שעון קיץ ירושלי', 'fdsfd', 'fdsdfsfd', 'ff@gmailc.om', 3434, 'מיקום רגיל (ללא תוספ', 'fds', 'undefined', 'עמוד שלם', 'עיתון: לעניין = 1 מופעים.\r\nעיתון: שבוע טוב = 1 מופעים.\r\n', '1531813598750'),
(57, 'Tue Jul 17 2018 10:53:10 GMT+0300 (שעון קיץ ירושלי', 'כגכג', 'כדשגכ', 'gg@gmail.com', 23323, 'מיקום רגיל (ללא תוספ', 'גשדדגשד', 'undefined', 'עמוד שלם', 'עיתון: אמצע השבוע = 1 מופעים.\r\nעיתון: שבוע טוב = 1 מופעים.\r\n', 'undefined'),
(58, 'Tue Jul 17 2018 10:53:46 GMT+0300 (שעון קיץ ירושלי', 'rerewrew', 'rerew', 'gg@gmail.com', 34433434, 'מיקום רגיל (ללא תוספ', 'fdsfd', 'undefined', 'דבל', 'עיתון: שבוע טוב = 1 מופעים.\r\n', '1531814026326'),
(59, 'Tue Jul 17 2018 11:02:43 GMT+0300 (שעון קיץ ירושלי', 'עעכעכ', 'רשכגד', 'cc@hg.com', 111, 'מיקום רגיל (ללא תוספ', 'כגדכגד', 'undefined', 'עמוד שלם', 'עיתון: שבוע טוב = 1 מופעים.\r\n', '1531814563816'),
(60, 'Tue Jul 17 2018 11:04:21 GMT+0300 (שעון קיץ ירושלי', 'rerew', 'rewrew', 'cc@gmail.com', 434334, 'מיקום רגיל (ללא תוספ', 'fdds', 'undefined', 'דבל', 'עיתון: שבוע טוב = 1 מופעים.\r\n', '1531814661610'),
(61, 'Tue Jul 17 2018 11:10:47 GMT+0300 (שעון קיץ ירושלי', 'rerew', 'rewrew', 'cc@gmail.com', 434334, 'מיקום רגיל (ללא תוספ', 'fdds', 'undefined', 'דבל', 'עיתון: שבוע טוב = 1 מופעים.\r\n', '1531815047601'),
(62, 'Tue Jul 17 2018 13:39:20 GMT+0300 (שעון קיץ ירושלי', 'fddfs', 'dfsfds', 'gg@gmail.com', 211111, 'עמוד שער', 'dfsdfs', 'undefined', 'עמוד שלם', 'עיתון: שבוע טוב = 1 מופעים.\r\n', '1531823987195'),
(63, 'Tue Jul 17 2018 13:41:54 GMT+0300 (שעון קיץ ירושלי', 'fddfs', 'dfsfds', 'gg@gmail.com', 211111, 'עמוד שער', 'dfsdfs', 'undefined', 'עמוד שלם', 'עיתון: שבוע טוב = 1 מופעים.\r\n', '1531824143869'),
(64, 'Tue Jul 17 2018 13:57:05 GMT+0300 (שעון קיץ ירושלי', 'אילה', 'רבר', 'aa@ga.com', 5802232, 'מיקום רגיל (ללא תוספ', 'אילה הקופה', 'אכלה בננה', 'עמוד שלם', 'עיתון: שבוע טוב = 1 מופעים.\r\n', '1531825040592'),
(66, 'Tue Jul 17 2018 14:06:32 GMT+0300 (שעון קיץ ירושלי', 'אילה', 'אברהמי', 'gg@ff.co', 5802232, 'דבל אמצע', 'אמא יודעת לעשותך את האתרים הכית טובים', 'לעשות את זה מהממם', 'דבל', 'עיתון: שבוע טוב = 2 מופעים.\r\n', '1531825606900'),
(0, 'Wed Oct 10 2018 14:29:59 GMT+0300 (שעון קיץ ירושלי', 'כככ', 'ררקרק', 'click0548450396@gmail.com', 4444, 'מיקום רגיל (ללא תוספ', 'מיאו מיאו', 'האו האו', 'עמוד שלם', 'עיתון: לעניין = 1 מופעים.\r\n', '1539171011849'),
(0, 'Wed Oct 10 2018 16:24:56 GMT+0300 (שעון קיץ ירושלי', 'כגכג', 'כגכגכג', 'click0548450396@gmail.com', 4343443, 'עמוד שער', 'חני', 'בנני', 'עמוד שלם', 'עיתון: לעניין = 1 מופעים.\r\nעיתון: מידע לכל = 1 מופעים.\r\n', '1539177900575');

-- --------------------------------------------------------

--
-- Table structure for table `bb`
--

CREATE TABLE `bb` (
  `id` int(10) NOT NULL,
  `date` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `hebrew_date` varchar(25) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `bb`
--

INSERT INTO `bb` (`id`, `date`, `hebrew_date`) VALUES
(400, '2018-07-29', 'י\"ז באב תשע\"ח'),
(401, '2018-08-05', 'כ\"ד באב תשע\"ח');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `fname` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `lname` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `phone` int(20) NOT NULL,
  `date` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `content` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `fname`, `lname`, `phone`, `date`, `email`, `content`) VALUES
(1, 'חני', 'אברהמי', 5802232, 'Thu Jun 21 2018 13:45:44 GMT+0300 (שעון קיץ ירושלים)', 'chani2580@gmail.com', 'יאללה כבר'),
(2, 'יוכי', 'הרצל', 5806642, 'Thu Jun 21 2018 14:45:44 GMT+0300 (שעון קיץ ירושלים)', 'yh@gmail.com', 'בתאבון יוכי'),
(3, 'חני', 'אברהמי', 5802232, 'Thu Jun 21 2018 14:03:23 GMT+0300 (שעון קיץ ירושלים)', 'chani2580@gmail.com', 'test 1'),
(4, 'צביקה', 'לינצר', 5802232, 'Thu Jun 21 2018 14:06:02 GMT+0300 (שעון קיץ ירושלים)', 'chani2580@gmail.com', 'test3'),
(5, 'חני', 'אברהמי', 5802232, 'Sun Jun 24 2018 10:51:25 GMT+0300 (שעון קיץ ירושלים)', 'chani2580@gmail.com', 'מיאו מיאו'),
(6, 'חני', 'אברהמי', 5802232, 'Sun Jun 24 2018 10:58:40 GMT+0300 (שעון קיץ ירושלים)', 'chani2580@gmail.com', 'מיאו מיאו'),
(7, 'חני', 'אברהמי', 5802232, 'Sun Jun 24 2018 11:07:27 GMT+0300 (שעון קיץ ירושלים)', 'chani2580@gmail.com', 'נסיון שליחת צור קשר 2'),
(8, 'חני', 'אברהמי', 5802232, 'Sun Jun 24 2018 11:13:46 GMT+0300 (שעון קיץ ירושלים)', 'chani2580@gmail.com', 'נסיון שליחת צור קשר 3'),
(9, 'חני', 'אברהמי', 5802232, 'Sun Jun 24 2018 11:23:34 GMT+0300 (שעון קיץ ירושלים)', 'chani2580@gmail.com', 'נסיון שליחת צור קשר 4'),
(10, 'חני', 'אברהמי', 5802232, 'Sun Jun 24 2018 11:26:38 GMT+0300 (שעון קיץ ירושלים)', 'brachi@gmail.com', 'נא לחזור אלי בקשר למודעה שאני רוצהלפרסם בלה בלה'),
(11, 'אילה', 'אברהמי', 5802232, 'Tue Jul 17 2018 14:10:10 GMT+0300 (שעון קיץ ירושלים)', 'chani545454@gmail.com', 'אם אפשר לשלוח לי לאישור'),
(12, 'היי', 'ביי', 548450396, 'Tue Aug 07 2018 10:17:46 GMT+0300 (שעון קיץ ירושלים)', 'chani@gmail.com', 'רוצה לפרסם בעיתון שלכם מיאו'),
(13, 'חני', 'אברהמי', 2147483647, 'Tue Aug 07 2018 10:18:25 GMT+0300 (שעון קיץ ירושלים)', 'brachi@gmail.com', 'מגוגל כרום'),
(14, 'חני', 'אברהמי', 2147483647, 'Tue Aug 07 2018 10:21:26 GMT+0300 (שעון קיץ ירושלים)', 'galb.vip@gmail.com', 'מיאו'),
(0, '‫קליק', 'גרפיקה‬‎', 975555, 'Wed Oct 10 2018 14:23:57 GMT+0300 (שעון קיץ ירושלים)', 'click0548450396@gmail.com', 'כגשדכגכגד כשדג'),
(0, '‫קליק', 'גרפיקה‬‎', 555555, 'Wed Oct 10 2018 14:27:50 GMT+0300 (שעון קיץ ירושלים)', 'click0548450396@gmail.com', 'עכעכגעכ עכגעכ');

-- --------------------------------------------------------

--
-- Table structure for table `emtza`
--

CREATE TABLE `emtza` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `hebrew_date` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `number_of_pages` int(3) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `emtza`
--

INSERT INTO `emtza` (`id`, `date`, `hebrew_date`, `number_of_pages`) VALUES
(1051, '2018-01-02', 'ט\"ו בטבת תשע\"ח', 144),
(1052, '2018-01-09', 'כ\"ב טבת תשע\"ח', 128);

-- --------------------------------------------------------

--
-- Table structure for table `lainyan`
--

CREATE TABLE `lainyan` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `hebrew_date` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `number_of_pages` int(3) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `lainyan`
--

INSERT INTO `lainyan` (`id`, `date`, `hebrew_date`, `number_of_pages`) VALUES
(879, '2018-01-07', 'כ\' בטבת תשע\"ח', 128),
(880, '2018-01-14', 'כ\"ז בטבת תשע\"ח', 144);

-- --------------------------------------------------------

--
-- Table structure for table `lainyan_bb`
--

CREATE TABLE `lainyan_bb` (
  `id` int(5) NOT NULL,
  `date` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `hebrew_date` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `number_of_pages` int(3) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `lainyan_bb`
--

INSERT INTO `lainyan_bb` (`id`, `date`, `hebrew_date`, `number_of_pages`) VALUES
(408, '2018-10-13', 'כ\"ט תשרי תשע\"ט', 96),
(409, '19-10-2018', 'ו\' חשוון תשע\"ט', 112);

-- --------------------------------------------------------

--
-- Table structure for table `meida`
--

CREATE TABLE `meida` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `hebrew_date` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `number_of_pages` int(3) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `meida`
--

INSERT INTO `meida` (`id`, `date`, `hebrew_date`, `number_of_pages`) VALUES
(1202, '2018-01-01', 'י\"ד בטבת תשע\"ח', 96),
(1203, '2018-01-08', 'כ\"א בטבת תשע\"ח', 96);

-- --------------------------------------------------------

--
-- Table structure for table `shavua`
--

CREATE TABLE `shavua` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `hebrew_date` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `number_of_pages` int(3) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `shavua`
--

INSERT INTO `shavua` (`id`, `date`, `hebrew_date`, `number_of_pages`) VALUES
(814, '2017-12-30', 'י\"ב טבת תשע\"ח', 25),
(815, '2018-01-06', 'י\"ט טבת תשע\"ח', 96),
(816, '2018-01-13', 'כ\"ו טבת תשע\"ח', 24);

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
