import serial

# Open the serial connection
ser = serial.Serial('COM3', 9600, timeout=1)

# Send a command to the machine
ser.write(b'GET_PRODUCTION_COUNT')

# Read the response from the machine
response = ser.readline()

# Close the serial connection
ser.close()