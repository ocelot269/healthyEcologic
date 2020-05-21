create database healthyEcologic_db;
USE healthyEcologic_db;

 CREATE TABLE products(
    id_product INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_provider INT(11) NOT NULL,
    name_product VARCHAR(50)NOT NULL,
    product_description VARCHAR(100)NOT NULL,
    units INT(7) NOT NULL, 
    price DECIMAL(10,2) NOT NULL,
    kilos DECIMAL(8,2)NOT NULL,
    image VARCHAR(4294967295)NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_provider) REFERENCES users(id_user)
);

CREATE TABLE users(
    id_user INT(11)NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(16) NOT NULL,
    user_type VARCHAR(16) NOT NULL,
    user_surnames VARCHAR(30) NOT NULL,
    user_email VARCHAR(70) NOT NULL,
    user_description VARCHAR(255) NOT NULL,
    user_gender VARCHAR(6)NOT NULL,
    password VARCHAR(255)NOT NULL
);

CREATE TABLE orders(
    id_order INT(11)NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_user INT(11) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    discount INT(3)NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_user) REFERENCES users(id_user)
);

CREATE TABLE ordersDetails(
	id_orderDetails INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	id_product INT(11)NOT NULL,
	id_order INT(11)NOT NULL,
    id_user INT(11)NOT NULL,
    units INT(11)NOT NULL,
    kilos INT(11)NOT NULL,
    price DECIMAL(10,2)NOT NULL,
	FOREIGN KEY (id_user) REFERENCES users(id_user),
	FOREIGN KEY (id_product) REFERENCES products(id_product),
	FOREIGN KEY (id_order) REFERENCES orders(id_order)
);
