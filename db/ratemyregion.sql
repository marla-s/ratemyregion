-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 07, 2018 at 04:47 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ratemyregion`
--
CREATE DATABASE IF NOT EXISTS `ratemyregion` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `ratemyregion`;

-- --------------------------------------------------------

--
-- Table structure for table `rmrform`
--

CREATE TABLE `rmrform` (
  `frmid` int(11) NOT NULL,
  `frmname` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rmrform`
--

INSERT INTO `rmrform` (`frmid`, `frmname`) VALUES
(1, 'Regional Readiness Tool'),
(2, 'Access Assessment Tool');

-- --------------------------------------------------------

--
-- Table structure for table `rmrqstnoptions`
--

CREATE TABLE `rmrqstnoptions` (
  `id` int(11) NOT NULL,
  `options` varchar(1000) NOT NULL,
  `qstnsId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rmrqstnoptions`
--

INSERT INTO `rmrqstnoptions` (`id`, `options`, `qstnsId`) VALUES
(1, 'Never ', 1),
(2, 'Sometimes', 1),
(3, 'Often', 1),
(4, 'Usually', 1),
(5, 'Always', 1),
(11, 'Never\r\n', 2),
(12, 'Sometimes\r\n', 2),
(13, 'Often\r\n', 2),
(14, 'Usually\r\n', 2),
(15, 'Always\r\n', 2),
(16, 'Never\r\n', 3),
(17, 'Sometimes\r\n', 3),
(18, 'Often\r\n', 3),
(19, 'Usually\r\n', 3),
(20, 'Always\r\n', 3),
(21, 'Never\r\n', 4),
(22, 'Sometimes\r\n', 4),
(23, 'Often\r\n', 4),
(24, 'Usually\r\n', 4),
(25, 'Always\r\n', 4),
(26, 'Never\r\n', 5),
(27, 'Sometimes\r\n', 5),
(28, 'Often\r\n', 5),
(29, 'Usually\r\n', 5),
(30, 'Always\r\n', 5),
(31, 'Never\r\n', 11),
(32, 'Sometimes\r\n', 11),
(33, 'Often\r\n', 11),
(34, 'Usually\r\n', 11),
(35, 'Always\r\n', 11),
(36, 'Never\r\n', 12),
(37, 'Sometimes\r\n', 12),
(38, 'Often\r\n', 12),
(39, 'Usually\r\n', 12),
(40, 'Always\r\n', 12),
(41, 'Never\r\n', 13),
(42, 'Sometimes\r\n', 13),
(43, 'Often\r\n', 13),
(44, 'Usually\r\n', 13),
(45, 'Always\r\n', 13),
(46, 'Never\r\n', 14),
(47, 'Sometimes\r\n', 14),
(48, 'Often\r\n', 14),
(49, 'Usually\r\n', 14),
(50, 'Always\r\n', 14),
(51, 'Never\r\n', 15),
(52, 'Sometimes\r\n', 15),
(53, 'Often\r\n', 15),
(54, 'Usually\r\n', 15),
(55, 'Always\r\n', 15),
(56, 'Never\r\n', 16),
(57, 'Sometimes\r\n', 16),
(58, 'Often\r\n', 16),
(59, 'Usually\r\n', 16),
(60, 'Always\r\n', 16),
(61, 'Never\r\n', 17),
(62, 'Sometimes\r\n', 17),
(63, 'Often\r\n', 17),
(64, 'Usually\r\n', 17),
(65, 'Always\r\n', 17),
(66, 'Never\r\n', 18),
(67, 'Sometimes\r\n', 18),
(68, 'Often\r\n', 18),
(69, 'Usually\r\n', 18),
(70, 'Always\r\n', 18),
(71, 'Never\r\n', 19),
(72, 'Sometimes\r\n', 19),
(73, 'Often\r\n', 19),
(74, 'Usually\r\n', 19),
(75, 'Always\r\n', 19),
(76, 'Never\r\n', 20),
(77, 'Sometimes\r\n', 20),
(78, 'Often\r\n', 20),
(79, 'Usually\r\n', 20),
(80, 'Always\r\n', 20),
(81, 'Never\r\n', 21),
(82, 'Sometimes\r\n', 21),
(83, 'Often\r\n', 21),
(84, 'Usually\r\n', 21),
(85, 'Always\r\n', 21),
(86, 'Never\r\n', 22),
(87, 'Sometimes\r\n', 22),
(88, 'Often\r\n', 22),
(89, 'Usually\r\n', 22),
(90, 'Always\r\n', 22),
(91, 'Never\r\n', 23),
(92, 'Sometimes\r\n', 23),
(93, 'Often\r\n', 23),
(94, 'Usually\r\n', 23),
(95, 'Always\r\n', 23);

-- --------------------------------------------------------

--
-- Table structure for table `rmrqstns`
--

CREATE TABLE `rmrqstns` (
  `id` int(11) NOT NULL,
  `qstns` varchar(20000) NOT NULL,
  `qstnstypeid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rmrqstns`
--

INSERT INTO `rmrqstns` (`id`, `qstns`, `qstnstypeid`) VALUES
(1, 'The region views high-growth, entrepreneurial businesses as the key to its long-term success', 1),
(2, 'The local culture celebrates entrepreneurial success and does not punish failure', 1),
(3, 'Successful entrepreneurs play leadership roles in local economic development programs and policy-making bodies', 1),
(4, 'Economic development \"grow your own\" strategies are as important and well funded as traditional \"attraction\" and \"retention\" programs', 2),
(5, 'There is close coordination between organizations responsible for \"grow your own,\" \"attraction,\" and \"retention\" programs', 2),
(11, 'Business retention programs also seek to help business \"spin out\" new ventures and \"reinvent\" themselves to meet changing market needs.\r\n', 2),
(12, 'There are easily accessible entrepreneurship training and mentoring programs led by the public sector, the private sector, or both.\r\n', 3),
(13, 'There are affordable and domain/cluster-specific professional services available for early-stage, growth-oriented ventures (patent attorneys, CPAs, consultants, etc.).\r\n', 3),
(14, 'There are formal and informal networks that entrepreneurs can readily join to meet like-minded people and access services.\r\n', 3),
(15, 'The region has a history of seeking and allocating local resources (taxes, bonds, special assessments) to support balanced economic development strategies.\r\n', 4),
(16, 'There are objective processes in place to support balanced economic development programs and measure their success over the long-term.\r\n', 4),
(17, 'There is open and sophisticated understanding of economic development strategies in the local media and among \"informal\" decision-makers and influencers.\r\n', 4),
(18, 'The region and culture is open to ideas that originate outside the boundaries of the local municipalities.\r\n', 5),
(19, 'The region\'s R&D organizations (universities, government labs, commercial R&D) are open to working with local businesses to commercialize new technologies and have effective processes in place to do so.\r\n', 5),
(20, 'Major local businesses are open to working with new ventures to test and evaluate new products and services (local \"Market Pull\").\r\n', 5),
(21, 'The region has a high-quality airport and/or high-speed train service with regular connections to key financial and technology centers.\r\n', 12),
(22, 'The region has world-class connectivity (bandwidth, telecom) and ubiquitous wireless coverage.\r\n', 12),
(23, 'The region has an effective and functioning highway system, and a public transportation system, that connects local universities, business centers, and other technology and financial assets.\r\n', 12);

-- --------------------------------------------------------

--
-- Table structure for table `rmrqstntype`
--

CREATE TABLE `rmrqstntype` (
  `id` int(11) NOT NULL,
  `qstntype` varchar(200) NOT NULL,
  `qstnfrmid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rmrqstntype`
--

INSERT INTO `rmrqstntype` (`id`, `qstntype`, `qstnfrmid`) VALUES
(1, 'Openness to Entrepreneurship\r\n', 1),
(2, 'Balanced Economic Development Strategies\r\n', 1),
(3, 'Robust Entrepreneurship Programs\r\n', 1),
(4, 'Prudent Investment Processes\r\n', 1),
(5, 'An Expansive View\r\n', 1),
(12, 'Infrastructure', 1),
(13, 'Training, Mentoring, & Hands-on Support', 2),
(14, 'Professional Advice and Counsel', 2),
(15, 'Training, Mentoring, & Hands-on Support', 2),
(16, 'Professional Advice and Counsel', 2);

-- --------------------------------------------------------

--
-- Table structure for table `rmrusers`
--

CREATE TABLE `rmrusers` (
  `id` int(11) NOT NULL,
  `fname` varchar(20) DEFAULT NULL,
  `lname` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rmrform`
--
ALTER TABLE `rmrform`
  ADD PRIMARY KEY (`frmid`);

--
-- Indexes for table `rmrqstnoptions`
--
ALTER TABLE `rmrqstnoptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `optionsq_fk` (`qstnsId`);

--
-- Indexes for table `rmrqstns`
--
ALTER TABLE `rmrqstns`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rmrqstnstype_fk` (`qstnstypeid`);

--
-- Indexes for table `rmrqstntype`
--
ALTER TABLE `rmrqstntype`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rmrqform_fk` (`qstnfrmid`);

--
-- Indexes for table `rmrusers`
--
ALTER TABLE `rmrusers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `rmrform`
--
ALTER TABLE `rmrform`
  MODIFY `frmid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `rmrqstnoptions`
--
ALTER TABLE `rmrqstnoptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;
--
-- AUTO_INCREMENT for table `rmrqstns`
--
ALTER TABLE `rmrqstns`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `rmrqstntype`
--
ALTER TABLE `rmrqstntype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `rmrqstnoptions`
--
ALTER TABLE `rmrqstnoptions`
  ADD CONSTRAINT `optionsq_fk` FOREIGN KEY (`qstnsId`) REFERENCES `rmrqstns` (`id`);

--
-- Constraints for table `rmrqstns`
--
ALTER TABLE `rmrqstns`
  ADD CONSTRAINT `rmrqstnstype_fk` FOREIGN KEY (`qstnstypeid`) REFERENCES `rmrqstntype` (`id`);

--
-- Constraints for table `rmrqstntype`
--
ALTER TABLE `rmrqstntype`
  ADD CONSTRAINT `rmrqform_fk` FOREIGN KEY (`qstnfrmid`) REFERENCES `rmrform` (`frmid`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
