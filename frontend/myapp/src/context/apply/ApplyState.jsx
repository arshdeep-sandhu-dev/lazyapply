import { useState } from "react";
import ApplyContext from "./ApplyContext";
import { ApiClient } from "../../ApiCall/ApiClient";
export default function ApplyState({ children }) {

  const applications = useState([]);
  
  
  const handleDataFetch = async () => {
    try {
      const apiClient = new ApiClient();
      const data = await apiClient.GET(`getcsv`);
      const formattedData = handleDataFormat(data);
      return formattedData;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleDataFormat = (data) => {
    const temp = data.yob_data.map((item) => ({
      applicationName: item["Position Title"],
      date: item["Date"],
      apply: item["Apply"],
      workModel: item["Work Model"],
      location: item["Location"],
      company: item["Company"],
      companySize: item["Company Size"],
      salary: item["Salary"],
      newGrad: item["Is New Grad"],
    }));
    console.log("Formatted Data:", temp);
    return temp;
  };
  const value = {
    // Define any state or functions you want to provide to the context
    applications,
    handleDataFetch,
    handleDataFormat,
  };

  return (
    <ApplyContext.Provider value={value}>
      {children}
    </ApplyContext.Provider>
  );
}