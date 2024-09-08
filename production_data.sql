
CREATE TABLE production_data (
  id INT AUTO_INCREMENT,
  machine_id INT,
  production_count INT,
  operator_name VARCHAR(50),
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);