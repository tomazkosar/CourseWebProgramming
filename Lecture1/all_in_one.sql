create database notes_schema;

CREATE TABLE notes_schema.user  ( 
  user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  name VARCHAR(255) DEFAULT '',
  username VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL 
);

CREATE TABLE notes_schema.note_item  ( 
  item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  name VARCHAR(255) DEFAULT ''
);

CREATE TABLE notes_schema.note_category ( 
  category_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  name VARCHAR(255) DEFAULT '' 
);


CREATE TABLE notes_schema.note ( 
  task_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  user_id INT NOT NULL , 
  category_id INT NOT NULL , 
  item_id INT NOT NULL , 
  FOREIGN KEY (user_id) REFERENCES notes_schema.user(user_id),
  FOREIGN KEY (category_id) REFERENCES notes_schema.note_category(category_id),
  FOREIGN KEY (item_id) REFERENCES notes_schema.note_item(item_id)
);

ALTER TABLE notes_schema.note 
  ADD COLUMN done TINYINT DEFAULT '0' AFTER item_id;


INSERT INTO notes_schema.user (name, username, password) VALUES ('Tomaz', 'tomazk', SHA1('12345678'));
INSERT INTO notes_schema.user (name, username, password) VALUES ('Sandi', 'sandim', SHA1('87654321'));
INSERT INTO notes_schema.user (name, username, password) VALUES ('Mario', 'marioc', SHA1('11111111'));


INSERT INTO notes_schema.note_item (name) VALUES ('Pedagoske obremenitve');
INSERT INTO notes_schema.note_item (name) VALUES ('Vpis ocen zagovorov vaj DSMJ');
INSERT INTO notes_schema.note_item (name) VALUES ('Priprava nalog za tekmovanje Pisek');
INSERT INTO notes_schema.note_item (name) VALUES ('Kupi pnevmatike');
INSERT INTO notes_schema.note_item (name) VALUES ('Vadi MAT z Ajdo za test');
INSERT INTO notes_schema.note_item (name) VALUES ('Priprava prosojnic Kotlin');


INSERT INTO notes_schema.note_category (name) VALUES ('Sluzba');
INSERT INTO notes_schema.note_category (name) VALUES ('Doma');
INSERT INTO notes_schema.note_category (name) VALUES ('Nakup');


INSERT INTO notes_schema.note (user_id, category_id, item_id, done) VALUES ('1', '1', '1', '0');
INSERT INTO notes_schema.note (user_id, category_id, item_id, done) VALUES ('1', '1', '2', '0');
INSERT INTO notes_schema.note (user_id, category_id, item_id, done) VALUES ('2', '1', '3', '1');
INSERT INTO notes_schema.note (user_id, category_id, item_id, done) VALUES ('1', '2', '4', '0');
INSERT INTO notes_schema.note (user_id, category_id, item_id, done) VALUES ('1', '2', '5', '0');
INSERT INTO notes_schema.note (user_id, category_id, item_id, done) VALUES ('1', '1', '6', '0');