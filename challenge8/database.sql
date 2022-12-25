create database itcp;
connect itcp;
create table persons(id INTEGER NOT NULL,name VARCHAR(255));
INSERT INTO persons(id,name) VALUES (1,"yacine");
INSERT INTO persons(id,name) VALUES (2,"tarek");
ALTER TABLE persons ADD moy FLOAT;
UPDATE persons SET moy=10 WHERE id=1;