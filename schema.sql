DROP DATABASE IF EXISTS adidas;

CREATE DATABASE adidas;

USE adidas;

CREATE TABLE reviews (
  id int not null auto_increment,
  rating int(1) not null,
  recommend Boolean not null,
  size int(1) not null,
  width int(1) not null,
  comfort int(1) not null,
  quality int(1) not null,
  opinion varchar(100),
  review varchar(255) not null,
  nickname varchar(20) not null,
  date Date,
  helpful Boolean,
  PRIMARY KEY (id)
);

CREATE TABLE average (
  id int not null,
  avgRatings decimal(1, 1) not null,
  five int(10),
  four int(10),
  three int(10),
  two int(10),
  one int(10),
  percentRecommend int(5),
  avgSize decimal(1, 1) not null,
  avgWidth decimal(1, 1) not null,
  avgComfort decimal(1, 1) not null,
  avgQuality decimal(1, 1) not null,
  PRIMARY KEY (id)
);

insert into reviews (rating, recommend, size, width, comfort, quality, opinion, review, nickname, date) values (5, true, 4, 5, 5, 5, 'THREE STRIPE LIFE', 'Always wanted a pair of superstars. Glad I could finally get some and they’re absolutely awesome', 'RYJ2K', '2020-08-07');