#from typing import Union, Optional
import uvicorn
from fastapi import FastAPI, Query, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from yob_scraper import read_yob_file, save_to_file
import csv
#from pydantic import BaseModel

#app = FastAPI(docs_url=None, openapi_url=None)
app = FastAPI()
router = APIRouter(prefix="/api")

filePath = "./newgrad-jobs.csv"
regexedFilePath = "./filtered-newgrad-jobs.csv"
@router.get("/")
def read_root():
    return {"Hello": "World"}
@router.get("/updatecsv")
def update_csv():
    try:
        save_to_file(filePath)
    except Exception as e:
        return {"message": "Error updating CSV file: " + str(e)}
    return {"message": "updated CSV file successfully"}
@router.get("/getcsv")
def get_csv(
    locationRegex: str = Query("", description="Location filter"),
    nameRegex: str = Query("", description="Name filter"),
):

    try :
        
        yob_data = read_yob_file(filePath, locationRegex,nameRegex)
        with open(regexedFilePath, 'w', newline='', encoding="utf-8-sig") as csvfile:
            fieldnames = ["Position Title","Date","Apply","Work Model","Location","Company","Company Size","Salary","Is New Grad"]
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

            writer.writeheader()
            for row in yob_data:
                writer.writerow(row)
    except Exception as e:
        return {"message": "Error creating CSV file: " + str(e)}
    
    return {"message": "Created filtered csv with " + str(len(yob_data)) + " rows", "yob_data": yob_data}

app.include_router(router)

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,        # or ["*"] for quick dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Example usage:
# yob_data = read_yob_file('yob_data.csv')
# print(yob_data)

    


if __name__ == "__main__":
    save_to_file(filePath)
    uvicorn.run(app, host="127.0.0.1", port=8000)
