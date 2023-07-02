-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: sql12.freesqldatabase.com
-- Generation Time: Jun 18, 2023 at 07:29 PM
-- Server version: 5.5.62-0ubuntu0.14.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sql12626912`
--

-- --------------------------------------------------------

--
-- Table structure for table `coffee_list`
--

CREATE TABLE `coffee_list` (
  `id` int(11) NOT NULL,
  `ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `title` varchar(255) NOT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `isAvail` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `coffee_list`
--

INSERT INTO `coffee_list` (`id`, `ts`, `title`, `desc`, `isAvail`) VALUES
(1, '2023-06-18 13:54:56', 'Arabica', 'Arabica is one of the most widely consumed coffee varieties. It is known for its smooth and delicate flavor with hints of sweetness and acidity. Arabica beans are grown at higher altitudes and are often considered to be of higher quality.', 1),
(2, '2023-06-18 13:55:36', 'Robusta', 'Robusta coffee has a stronger and more robust flavor compared to Arabica. It has a higher caffeine content and is often used in espresso blends to provide a strong and bold taste. Robusta beans are typically easier to grow and are more resistant to diseas', 1),
(3, '2023-06-18 13:55:50', 'Colombian', 'Colombian coffee is highly regarded for its rich and well-balanced flavor. It is grown in the mountainous regions of Colombia and is known for its mild acidity, medium body, and fruity undertones.', 1),
(4, '2023-06-18 13:56:03', 'Ethiopian', ' Ethiopian coffee is famous for its complex and distinctive flavors. It is often described as having floral, fruity, and wine-like notes. Ethiopia is considered the birthplace of coffee, and it offers a wide range of coffee varieties with unique taste pro', 1),
(5, '2023-06-18 13:56:17', 'Brazilian', ' Brazil is the largest coffee producer in the world, and Brazilian coffee is known for its nutty and chocolatey flavor. It has a medium body and a low acidity level. Brazilian coffee is often used in espresso blends due to its smooth and mellow characteri', 1),
(6, '2023-06-18 13:56:30', 'Italian Espresso', 'Italian espresso is a dark roasted coffee that is finely ground and brewed under high pressure. It has a strong and intense flavor with a rich crema on top. Espresso is the foundation for many popular coffee beverages like cappuccinos, lattes, and macchia', 1),
(7, '2023-06-18 13:56:43', 'Decaf', 'Decaffeinated coffee is made by removing most of the caffeine from the coffee beans. It allows people to enjoy the taste of coffee without the stimulating effects of caffeine. Decaf coffee comes in various varieties, including decaf versions of Arabica, R', 1),
(35, '2023-06-18 17:28:48', 'Luwak', 'Luwak coffee, also known as civet coffee or kopi luwak, is a unique and highly sought-after type of coffee that is produced from the feces of the Asian palm civet, a small mammal native to Southeast Asia.', 1),
(36, '2023-06-18 17:40:43', 'Kintamani', 'Kintamani coffee refers to coffee produced in the Kintamani region of Bali, Indonesia. The Kintamani region is located in the highlands of Bali, nestled around the volcanic mountains of Mount Batur and Mount Agung. The unique geography, volcanic soil, and', 1),
(37, '2023-06-18 18:46:28', 'Turkish Coffee', 'Turkish coffee, also known as Türk kahvesi, is a traditional method of brewing and serving coffee that originated in the Ottoman Empire and is still popular in Turkey and various Middle Eastern and Balkan countries. It is known for its strong flavor, rich', 1),
(38, '2023-06-18 18:53:40', 'Germ Coffee', 'Turkish coffee, also known as Türk kahvesi, is a traditional method of brewing and serving coffee that originated in the Ottoman Empire and is still popular in Turkey and various Middle Eastern and Balkan countries. It is known for its strong flavor, rich', 1),
(39, '2023-06-18 19:03:03', 'Balkan coffee', 'Balkan coffee, also known as Bosnian coffee, Serbian coffee, or Macedonian coffee, is a traditional method of brewing and serving coffee in the Balkan region of Southeast Europe. It shares similarities with Turkish coffee, as both methods have been influe', 1),
(40, '2023-06-18 19:06:25', 'Americano', 'An Americano is a popular coffee beverage made by diluting espresso with hot water. It is believed to have originated during World War II when American soldiers stationed in Italy found espresso to be too strong and requested it to be diluted with water. ', 1),
(41, '2023-06-18 19:15:52', 'Korean Espresso Beverages', 'Korean Espresso Beverages: Like many other countries, South Korea offers a range of espresso-based beverages commonly found in coffee shops. Popular choices include Americano (espresso diluted with hot water), Café Latte (espresso with steamed milk), Capp', 1),
(42, '2023-06-18 19:17:24', 'KKoKorean Espresso Beverages', 'Korean Espresso Beverages: Like many other countries, South Korea offers a range of espresso-based beverages commonly found in coffee shops. Popular choices include Americano (espresso diluted with hot water), Café Latte (espresso with steamed milk), Capp', 1),
(43, '2023-06-18 19:18:22', 'KKoKorean Espresso Beverages', 'Korean Espresso Beverages: Like many other countries, South Korea offers a range of espresso-based beverages commonly found in coffee shops. Popular choices include Americano (espresso diluted with hot water), Café Latte (espresso with steamed milk), Capp', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `coffee_list`
--
ALTER TABLE `coffee_list`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `coffee_list`
--
ALTER TABLE `coffee_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
