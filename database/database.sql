CREATE DATABASE healthyEcologic_db;
USE healthyEcologic_db;

CREATE TABLE products(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(180),
    description VARCHAR(255),
    price DECIMAL(10),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE products;