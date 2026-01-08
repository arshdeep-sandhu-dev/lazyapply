import csv
def read_yob_file(file_path):
    """
    Reads a CSV file containing year of birth data and returns a list of dictionaries.
    
    Each dictionary
    contains
    Position Title,Date,Apply,Work Model,Location,Company,Company Size,Company Industry,Salary,Qualifications,H1b Sponsored,Is New Grad

    """
    yob_data = []
    with open(file_path, mode='r', newline='', encoding='utf-8-sig') as csvfile:
        reader = csv.DictReader(csvfile)
        d={}
        for row in reader:
            
            if "software" in row['Position Title'].lower():
                
                for key in row:
                    
                    if key == "Company Industry" or key == "Qualifications" or key == "H1b Sponsored":
                        continue

                        
                    d[key]= row[key]
                if not (d["Work Model"]=="Remote" \
                    or "tx" in d["Location"].lower() \
                        or "texas" in d["Location"].lower() \
                            or "austin" in d["Location"].lower() or "dallas" in d["Location"].lower() or "houston" in d["Location"].lower()):
                    
                    continue

                yob_data.append(d.copy())
                d.clear()
    return yob_data
# Example usage:
# yob_data = read_yob_file('yob_data.csv')
# print(yob_data)

if __name__ == "__main__":
    yob_data = read_yob_file('yoblist.csv')
    with open('names.csv', 'w', newline='', encoding="utf-8-sig") as csvfile:
        fieldnames = ["Position Title","Date","Apply","Work Model","Location","Company","Company Size","Salary","Is New Grad"]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        writer.writeheader()
        for row in yob_data:
            writer.writerow(row)


