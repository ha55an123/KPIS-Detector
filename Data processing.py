import mysql.connector

# Connect to the MySQL database
cnx = mysql.connector.connect(
    user='your_username',
    password='your_password',
    host='127.0.0.1',
    database='production_db'
)

# Create a cursor object
cursor = cnx.cursor()

# Process the production data
production_data = {'machine_id': 1, 'production_count': 100, 'operator_name': 'John Doe'}

# Insert the production data into the database
query = "INSERT INTO production_data (machine_id, production_count, operator_name) VALUES (%(machine_id)s, %(production_count)s, %(operator_name)s)"
cursor.execute(query, production_data)

# Commit the changes
cnx.commit()

# Close the cursor and connection
cursor.close()
cnx.close()
