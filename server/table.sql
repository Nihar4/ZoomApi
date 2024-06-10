-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 09 juin 2024 à 12:26
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `school`
--

-- --------------------------------------------------------

--
-- Structure de la table `admine`
--

CREATE TABLE `admine` (
  `ADMIN_ID` int(11) NOT NULL,
  `JOB` varchar(20) DEFAULT NULL,
  `ADMINE_NAME` varchar(50) DEFAULT NULL,
  `ADMINE_PHONE` varchar(20) DEFAULT NULL,
  `ADMINE_EMAIL` varchar(50) DEFAULT NULL,
  `ADMINE_PASSWORD` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `admine`
--

INSERT INTO `admine` (`ADMIN_ID`, `JOB`, `ADMINE_NAME`, `ADMINE_PHONE`, `ADMINE_EMAIL`, `ADMINE_PASSWORD`) VALUES
(1, 'teacher', 'KARIMAZ3DODA', '0600000000', 'KARIMAZ3DODA@GMAIL.COM', 'ZA3DODA123'),
(12, 'admine', 'aaqq', '0681568201', 'abdelaaziz.belharcha@googl.co', '1111'),
(13, 'admine', 'si aziz', '0600000000', 'a@GMAIL.COM', '1111'),
(14, 'teacher', 'abdelaaziz belhaarch', '0681568201', 'a@GMAIL.COM', '1111'),
(15, 'admine', 'abdelaaziz', '0681568201', 'a@GMAIL.COM', '1111');

-- --------------------------------------------------------

--
-- Structure de la table `associatedwith`
--

CREATE TABLE `associatedwith` (
  `CLASS_ID` int(11) NOT NULL,
  `STUDENT_ID` int(11) NOT NULL,
  `NOTE` double NOT NULL,
  `NOTE1` double NOT NULL,
  `NOTE2` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `associatedwith`
--

INSERT INTO `associatedwith` (`CLASS_ID`, `STUDENT_ID`, `NOTE`, `NOTE1`, `NOTE2`) VALUES
(1, 5, 15, 12, 10),
(1, 6, 20, 18, 15),
(2, 5, 0, 0, 0),
(2, 20, 0, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `chose_qcm`
--

CREATE TABLE `chose_qcm` (
  `ID_SEGGECTION` int(11) NOT NULL,
  `STUDENT_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `class`
--

CREATE TABLE `class` (
  `CLASS_ID` int(11) NOT NULL,
  `ADMIN_ID` int(11) NOT NULL,
  `CLASS_NAME` varchar(20) DEFAULT NULL,
  `YEAROFPASS` int(20) DEFAULT NULL,
  `SEMESTER` int(11) DEFAULT NULL,
  `student_suport` int(11) NOT NULL,
  `timining` varchar(50) NOT NULL,
  `taming_coure` varchar(30) NOT NULL,
  `living` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `class`
--

INSERT INTO `class` (`CLASS_ID`, `ADMIN_ID`, `CLASS_NAME`, `YEAROFPASS`, `SEMESTER`, `student_suport`, `timining`, `taming_coure`, `living`) VALUES
(1, 13, 'begener 3.1 ', 2024, 1, 20, '1/4/2020', 'manday /tusday 8:40 to 10:00', 1),
(2, 1, 'begener 2.1', 2024, 3, 10, '1/4/2024 ', 'manday /tusday 8:30 to10:30', 1),
(3, 1, 'begener 2 .2', 2024, 3, 10, '1/4/2024 ', 'manday /tusday 8:30 to10:00 ', 1),
(4, 13, 'intermidia 3.1 ', 2024, 1, 20, '1/4/2020', 'manday /tusday 8:40 to 10:00', 1);

-- --------------------------------------------------------

--
-- Structure de la table `course`
--

CREATE TABLE `course` (
  `COURSE_ID` int(11) NOT NULL,
  `COURSE_NAME` varchar(50) DEFAULT NULL,
  `COURSE_LINK` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `meet`
--

CREATE TABLE `meet` (
  `ID_METING` int(11) NOT NULL,
  `CLASS_ID` int(11) NOT NULL,
  `START_TIME_MEET` datetime DEFAULT NULL,
  `END_TIME_MEET` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `qcm`
--

CREATE TABLE `qcm` (
  `ID_QCM` int(11) NOT NULL,
  `CLASS_ID` int(11) NOT NULL,
  `TITLE_QCM` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `qcm`
--

INSERT INTO `qcm` (`ID_QCM`, `CLASS_ID`, `TITLE_QCM`) VALUES
(1, 2, 'QCM N 1'),
(5, 3, 'AWRRRR'),
(6, 1, 'ASI AZIZ CV'),
(10, 2, 'aaa'),
(11, 4, 'ds');

-- --------------------------------------------------------

--
-- Structure de la table `question`
--

CREATE TABLE `question` (
  `ID_QCM_QUESTION` int(11) NOT NULL,
  `ID_QCM` int(11) NOT NULL,
  `QCM_QUESTION` varchar(200) DEFAULT NULL,
  `choseNumber` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `question`
--

INSERT INTO `question` (`ID_QCM_QUESTION`, `ID_QCM`, `QCM_QUESTION`, `choseNumber`) VALUES
(1, 1, 'who is the best player ?', 2),
(2, 1, 'aziz is best player ?', 1),
(3, 1, 'aziz is best ammarr ?', 1),
(8, 1, 'qqqqqqqq', 1),
(9, 1, 'ammar hmar', 1),
(10, 1, 'aziz bogos', 2),
(11, 1, 'aziz bogos', 2);

-- --------------------------------------------------------

--
-- Structure de la table `seggection`
--

CREATE TABLE `seggection` (
  `ID_SEGGECTION` int(11) NOT NULL,
  `ID_QCM_QUESTION` int(11) NOT NULL,
  `SEGGECTION` varchar(100) DEFAULT NULL,
  `SEGGECTION_TYPE` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `seggection`
--

INSERT INTO `seggection` (`ID_SEGGECTION`, `ID_QCM_QUESTION`, `SEGGECTION`, `SEGGECTION_TYPE`) VALUES
(1, 1, 'messi', 1),
(2, 1, 'messi', 0),
(3, 1, 'messi', 1),
(4, 1, 'messi', 0),
(5, 2, 'yes', 1),
(6, 2, 'non', 0),
(7, 3, 'non', 0),
(8, 3, 'non', 0),
(9, 8, 'qqqqqq', 1),
(10, 8, 'eeeeeeeeee', 2),
(11, 9, 'yes', 1),
(12, 9, 'yes', 1),
(13, 10, 'no', 1),
(14, 10, 'nooooo', 2),
(15, 11, 'no', 1),
(16, 11, 'nooooo', 2);

-- --------------------------------------------------------

--
-- Structure de la table `student`
--

CREATE TABLE `student` (
  `STUDENT_ID` int(11) NOT NULL,
  `STUDENT_NAME` varchar(50) NOT NULL,
  `STUDENT_MAIL` varchar(50) DEFAULT NULL,
  `STUDENT_PHONE` varchar(20) DEFAULT NULL,
  `STUDENT_PASSWORD` varchar(50) DEFAULT NULL,
  `STUDENT_ADDRESS` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `student`
--

INSERT INTO `student` (`STUDENT_ID`, `STUDENT_NAME`, `STUDENT_MAIL`, `STUDENT_PHONE`, `STUDENT_PASSWORD`, `STUDENT_ADDRESS`) VALUES
(5, 'abdelaaziz belhaarch', 'abdelaaziz.belharcha@googl.com', '0681568201', '1111', 'babdokala'),
(6, 'adil', 'aziz@gmail.ma', '065000', 'AZIZZIZE', 'babdokala'),
(20, 'sbniii', 'aziz@gmail.ma', '065000', 'AZIZZIZE', 'babdokala'),
(21, 'abdelaaziz belhaarch', 'a@GMAIL.COM', '0681568201', '1111', 'babdokala');

-- --------------------------------------------------------

--
-- Structure de la table `studies`
--

CREATE TABLE `studies` (
  `COURSE_ID` int(11) NOT NULL,
  `STUDENT_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `teaches`
--

CREATE TABLE `teaches` (
  `CLASS_ID` int(11) NOT NULL,
  `COURSE_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admine`
--
ALTER TABLE `admine`
  ADD PRIMARY KEY (`ADMIN_ID`);

--
-- Index pour la table `associatedwith`
--
ALTER TABLE `associatedwith`
  ADD PRIMARY KEY (`CLASS_ID`,`STUDENT_ID`),
  ADD KEY `FK_ASSOCIAT_ASSOCIATE_STUDENT` (`STUDENT_ID`);

--
-- Index pour la table `chose_qcm`
--
ALTER TABLE `chose_qcm`
  ADD PRIMARY KEY (`ID_SEGGECTION`,`STUDENT_ID`),
  ADD KEY `FK_CHOSE_QCM2` (`STUDENT_ID`);

--
-- Index pour la table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`CLASS_ID`),
  ADD KEY `FK_CLASS_MANAGES_ADMINE` (`ADMIN_ID`);

--
-- Index pour la table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`COURSE_ID`);

--
-- Index pour la table `meet`
--
ALTER TABLE `meet`
  ADD PRIMARY KEY (`ID_METING`),
  ADD KEY `FK_CLASSMEETING` (`CLASS_ID`);

--
-- Index pour la table `qcm`
--
ALTER TABLE `qcm`
  ADD PRIMARY KEY (`ID_QCM`),
  ADD KEY `FK_DO` (`CLASS_ID`);

--
-- Index pour la table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`ID_QCM_QUESTION`),
  ADD KEY `FK_BELONG` (`ID_QCM`);

--
-- Index pour la table `seggection`
--
ALTER TABLE `seggection`
  ADD PRIMARY KEY (`ID_SEGGECTION`),
  ADD KEY `FK_PROVIDE` (`ID_QCM_QUESTION`);

--
-- Index pour la table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`STUDENT_ID`);

--
-- Index pour la table `studies`
--
ALTER TABLE `studies`
  ADD PRIMARY KEY (`COURSE_ID`,`STUDENT_ID`),
  ADD KEY `FK_STUDIES_STUDIES_STUDENT` (`STUDENT_ID`);

--
-- Index pour la table `teaches`
--
ALTER TABLE `teaches`
  ADD PRIMARY KEY (`CLASS_ID`,`COURSE_ID`),
  ADD KEY `FK_TEACHES_TEACHES_COURSE` (`COURSE_ID`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `admine`
--
ALTER TABLE `admine`
  MODIFY `ADMIN_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `class`
--
ALTER TABLE `class`
  MODIFY `CLASS_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `course`
--
ALTER TABLE `course`
  MODIFY `COURSE_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `qcm`
--
ALTER TABLE `qcm`
  MODIFY `ID_QCM` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `question`
--
ALTER TABLE `question`
  MODIFY `ID_QCM_QUESTION` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `seggection`
--
ALTER TABLE `seggection`
  MODIFY `ID_SEGGECTION` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `student`
--
ALTER TABLE `student`
  MODIFY `STUDENT_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `associatedwith`
--
ALTER TABLE `associatedwith`
  ADD CONSTRAINT `FK_ASSOCIAT_ASSOCIATE_CLASS` FOREIGN KEY (`CLASS_ID`) REFERENCES `class` (`CLASS_ID`),
  ADD CONSTRAINT `FK_ASSOCIAT_ASSOCIATE_STUDENT` FOREIGN KEY (`STUDENT_ID`) REFERENCES `student` (`STUDENT_ID`);

--
-- Contraintes pour la table `chose_qcm`
--
ALTER TABLE `chose_qcm`
  ADD CONSTRAINT `FK_CHOSE_QCM` FOREIGN KEY (`ID_SEGGECTION`) REFERENCES `seggection` (`ID_SEGGECTION`),
  ADD CONSTRAINT `FK_CHOSE_QCM2` FOREIGN KEY (`STUDENT_ID`) REFERENCES `student` (`STUDENT_ID`);

--
-- Contraintes pour la table `class`
--
ALTER TABLE `class`
  ADD CONSTRAINT `FK_CLASS_MANAGES_ADMINE` FOREIGN KEY (`ADMIN_ID`) REFERENCES `admine` (`ADMIN_ID`);

--
-- Contraintes pour la table `meet`
--
ALTER TABLE `meet`
  ADD CONSTRAINT `FK_CLASSMEETING` FOREIGN KEY (`CLASS_ID`) REFERENCES `class` (`CLASS_ID`);

--
-- Contraintes pour la table `qcm`
--
ALTER TABLE `qcm`
  ADD CONSTRAINT `FK_DO` FOREIGN KEY (`CLASS_ID`) REFERENCES `class` (`CLASS_ID`);

--
-- Contraintes pour la table `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `FK_BELONG` FOREIGN KEY (`ID_QCM`) REFERENCES `qcm` (`ID_QCM`);

--
-- Contraintes pour la table `seggection`
--
ALTER TABLE `seggection`
  ADD CONSTRAINT `FK_PROVIDE` FOREIGN KEY (`ID_QCM_QUESTION`) REFERENCES `question` (`ID_QCM_QUESTION`);

--
-- Contraintes pour la table `studies`
--
ALTER TABLE `studies`
  ADD CONSTRAINT `FK_STUDIES_STUDIES2_COURSE` FOREIGN KEY (`COURSE_ID`) REFERENCES `course` (`COURSE_ID`),
  ADD CONSTRAINT `FK_STUDIES_STUDIES_STUDENT` FOREIGN KEY (`STUDENT_ID`) REFERENCES `student` (`STUDENT_ID`);

--
-- Contraintes pour la table `teaches`
--
ALTER TABLE `teaches`
  ADD CONSTRAINT `FK_TEACHES_TEACHES2_CLASS` FOREIGN KEY (`CLASS_ID`) REFERENCES `class` (`CLASS_ID`),
  ADD CONSTRAINT `FK_TEACHES_TEACHES_COURSE` FOREIGN KEY (`COURSE_ID`) REFERENCES `course` (`COURSE_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;