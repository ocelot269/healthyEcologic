CREATE DATABASE healthyEcologic_db;
USE healthyEcologic_db;

CREATE TABLE products(
    id_product INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_provider INT(11) NOT NULL,
    name_product VARCHAR(180)NOT NULL,
    product_description VARCHAR(255)NOT NULL,
    units INT(7) NOT NULL, 
    price DECIMAL(10) NOT NULL,
    kilos DECIMAL(8)NOT NULL,
    image VARCHAR(200)NOT NULL,
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
    user_gender VARCHAR(6)NOT NULL
);

