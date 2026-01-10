import csv
from typing import Union, Optional
import uvicorn

from fastapi import FastAPI, Query
from pydantic import BaseModel

#app = FastAPI(docs_url=None, openapi_url=None)
app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}
@app.get("/getcsv")
def get_csv(
    locationRegex: str = Query("", description="Location filter"),
    nameRegex: str = Query("", description="Name filter"),
):
    print("Generating CSV file...")
    print("Location Regex:", locationRegex)
    print("Name Regex:", nameRegex)
    try :
        yob_data = read_yob_file('./test/newgrad-jobs.csv', locationRegex,nameRegex)
        with open('names.csv', 'w', newline='', encoding="utf-8-sig") as csvfile:
            fieldnames = ["Position Title","Date","Apply","Work Model","Location","Company","Company Size","Salary","Is New Grad"]
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

            writer.writeheader()
            for row in yob_data:
                writer.writerow(row)
    except Exception as e:
        return {"message": "Error creating CSV file: " + str(e)}
    
    return {"message": "CSV file created successfully."}



def read_yob_file(file_path, locationRegex, nameRegex):
    """
    Reads a CSV file containing year of birth data and returns a list of dictionaries.
    
    Each dictionary
    contains
    Position Title,Date,Apply,Work Model,Location,Company,Company Size,Company Industry,Salary,Qualifications,H1b Sponsored,Is New Grad

    """
    yob_data = []
    if locationRegex:
        locationRegex = locationRegex.split(',')
    if nameRegex:
        nameRegex = nameRegex.split(',')
    with open(file_path, mode='r', newline='', encoding='utf-8-sig') as csvfile:
        reader = csv.DictReader(csvfile)
        
        for row in reader:
            
            
                
            exclude_keys = {"Company Industry", "Qualifications", "H1b Sponsored"}
            d = {k: v for k, v in row.items() if k not in exclude_keys}
            includeRowName = not nameRegex or any(name.strip().lower() in d["Position Title"].lower() for name in nameRegex)
            includeRowLocation = not locationRegex or any(loc.strip().lower() in d["Location"].lower() for loc in locationRegex)
            if (not includeRowLocation and d["Work Model"] != "Remote"):
                continue
            if (nameRegex and not includeRowName):
                continue
                
            yob_data.append(d.copy())
            d.clear()
    return yob_data
# Example usage:
# yob_data = read_yob_file('yob_data.csv')
# print(yob_data)

    


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
