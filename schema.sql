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
  helpfulYes int(3) not null,
  helpfulNo int(3) not null,
  PRIMARY KEY (id)
);

insert into reviews (rating, recommend, size, width, comfort, quality, opinion, review, nickname, date, helpfulYes, helpfulNo) values (5, true, 4, 5, 5, 5, 'THREE STRIPE LIFE', 'Always wanted a pair of superstars. Glad I could finally get some and they’re absolutely awesome', 'RYJ2K', '2020-08-07', 100, 15);