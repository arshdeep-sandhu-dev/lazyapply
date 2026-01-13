import { useState } from "react";
import ApplyContext from "./ApplyContext";


export default function ApplyState({ children }) {

    const applications = useState([]);
    

    const value = {
    // Define any state or functions you want to provide to the context
    applications,
    };

  return (
    <ApplyContext.Provider value={value}>
      {children}
    </ApplyContext.Provider>
  );
}