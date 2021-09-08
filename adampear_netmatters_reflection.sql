-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 08, 2021 at 10:58 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `adampear_netmatters_reflection`
--

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `id` int(11) NOT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `profile_image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id`, `full_name`, `profile_image`) VALUES
(1, 'Netmatters Ltd', '/img/news/author_images/Netmatters%20Ltd.png'),
(2, 'Adam Greer', '/img/news/author_images/Adam%20Greer.jpg'),
(3, 'Bethany Shakespeare', '/img/news/author_images/Bethany%20Shakespeare.jpg'),
(4, 'Elliott Peacock', '/img/news/author_images/Elliott%20Peacock.jpg'),
(5, 'James Gulliver', '/img/news/author_images/James%20Gulliver.jpg'),
(6, 'Joe Trower', '/img/news/author_images/Joe%20Trower.jpg'),
(7, 'Lewie Carton', '/img/news/author_images/Lewie%20Carton.jpg'),
(8, 'Lydia Whitney', '/img/news/author_images/Lydia%20Whitney.jpg'),
(9, 'Mark Reilly', '/img/news/author_images/Mark%20Reilly.jpg'),
(10, 'Rob George', '/img/news/author_images/Rob%20George.jpg'),
(11, 'Simon Wright', '/img/news/author_images/Simon%20Wright.jpg'),
(12, 'Tessa Dempsey', '/img/news/author_images/Tessa%20Dempsey.jpg'),
(13, 'Tom Lancaster', '/img/news/author_images/Tom%20Lancaster.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `category_name`) VALUES
(1, 'case studies'),
(2, 'portfolio'),
(3, 'guides'),
(4, 'news'),
(5, 'insights'),
(6, 'careers'),
(7, 'environmental');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `newsletter_check` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `email`, `name`, `phone_number`, `subject`, `message`, `newsletter_check`) VALUES
(1, 'adam.pearson94@gmail.com', 'Adam Pearson', '07402203156', 'Am I your first email?', 'First email message test. Blah de blah de blah. Oh ho ho. Ah ha ha. AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH boop', 1),
(2, 'bobblestop@bibcop.com', 'Bob Buckley', '09362457645', 'Hey BOB here with another message from our sponsors', 'Are you tired of dining alone? Need a friend to accompany you? Your problems are solved with RENT-A-PAL rentals incorporated. Duckduckgo us to find out more.', 1),
(3, 'adam.pearson94@gmail.com', 'Adam Pearson', '07402203156', 'Testing Form', 'Test', 1),
(4, 'adam.pearson94@gmail.com', 'Adam Pearson', '07402203156', 'Hello, this is a test email', 'Does this message work? Has the database been restored after your total hard drive failure? If so, congratulations! Panic over!', 1);

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `heading` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `news_image` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `author_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `heading`, `description`, `news_image`, `date`, `category_id`, `author_id`) VALUES
(1, 'Web Project Manager', 'Salary Range 20k- 28k - DOE + Bonus Hours 40 hours per week, Monday - Friday Location Wymondham, Nor...', '/img/news/news_images/web-project-manager-xbT9.jpg', '2021-08-19 00:00:00', 6, 13),
(2, 'Why is 3CX a great business phone system?', 'Over the past 18 months, we’ve all gotten used to online video meetings, working from home, and find...', '/img/news/news_images/why-is-3cx-pZ6u.jpg', '2021-08-10 00:00:00', 5, 1),
(3, 'Jamie Sutherland is promoted to Commercial He...', 'Here at Netmatters, we are continuing to grow and develop our business, and our people. We are proud...', '/img/news/news_images/jamie-sutherland-is-hqaP.jpg', '2021-08-10 00:00:00', 4, 1),
(4, 'Don\'t Neglect the Cyber Security Basics', 'As you may have seen earlier in the year, Ireland’s Health Service Executive (HSE) had to shut down...', '/img/news/news_images/dont-neglect-the-t2lB.jpg', '2021-08-09 00:00:00', 4, 1),
(5, 'July 2021 Notables', 'Every month we celebrate the most notable of employees here at Netmatters. Each department head is a...', '/img/news/news_images/july-2021-notables-XUwV.jpg', '2021-08-05 00:00:00', 4, 1),
(6, 'Receptionist', 'Salary Range £19,000 Hours 40 hours per week, Monday - Friday Location Wymondham, Norfolk What We Ar...', '/img/news/news_images/receptionist-Lxft.jpg', '2021-08-03 00:00:00', 6, 3),
(7, 'Happy 50th Birthday Mark!', 'We’re celebrating the 50th birthday of one of our valued members of the team here at Netmatters, our...', '/img/news/news_images/happy-50th-birthday-cERw.jpg', '2021-08-02 00:00:00', 4, 1),
(8, 'Happy 25th Birthday Ashley!', 'At Netmatters we like to recognise notable life events and make all staff feel part of a team. This...', '/img/news/news_images/happy-25th-birthday-dxPB.jpg', '2021-08-02 00:00:00', 4, 1),
(9, '3rd Line Support Technician', 'Salary Range Salary - Dependent on Experience Hours 40 hours per week, Monday - Friday Location Camb...', '/img/news/news_images/3rd-line-support-dDTu.jpg', '2021-07-29 00:00:00', 6, 10),
(10, '2nd Line Support Technician', 'Salary Range £24k-£30k + Bonuses + Pension Hours 40 hours per week, Monday - Friday Location Wymondh...', '/img/news/news_images/2nd-line-support-eTYH.jpg', '2021-07-28 00:00:00', 6, 10),
(11, 'Business Development / Account Manager', 'Salary Range £25k+ per annum + Bonus + Benefits Hours 40 hours per week, Monday – Friday Location Wy...', '/img/news/news_images/business-development-pAAs.jpg', '2021-07-22 00:00:00', 6, 4),
(12, 'Why Shopify Is The Right Ecommerce Platform f...', 'Shopify is an all-in-one eCommerce platform to start, run and grow a business. It currently powers o...', '/img/news/news_images/why-shopify-is-vewi.jpg', '2021-07-20 00:00:00', 5, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author_id` (`author_id`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `news`
--
ALTER TABLE `news`
  ADD CONSTRAINT `news_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`),
  ADD CONSTRAINT `news_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
