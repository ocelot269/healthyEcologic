CREATE DATABASE healthyEcologic_db;
USE healthyEcologic_db;

CREATE TABLE products(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(180)NOT NULL,
    description VARCHAR(255)NOT NULL,
    unidades INT(7) NOT NULL,
    price DECIMAL(10) NOT NULL,
    kilos DECIMAL(8)NOT NULL,
    image VARCHAR(200)NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
