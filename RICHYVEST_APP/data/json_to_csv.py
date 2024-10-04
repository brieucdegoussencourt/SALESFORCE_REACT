import json
import csv

# Step 1: Load JSON data from file
with open('performance.json', 'r') as file:
    data = json.load(file)

# Step 2: Extract the data for the first key
performance_data = data["1"]

# Step 3: Write to CSV
csv_file = 'performance.csv'
with open(csv_file, 'w', newline='') as file:
    writer = csv.writer(file)
    
    # Write the header
    writer.writerow(['Date__c', 'Value__c'])
    
    # Write the data
    for date, value in performance_data.items():
        writer.writerow([date, value])