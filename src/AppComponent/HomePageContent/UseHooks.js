import React, {useState}from "react";

import TextPointer from "../../components/TextPointer";
import AppText from "../../components/AppText";
import FaethemHome from "../../assets/FaethemHomeContent.png";



export function useHooks() {
  const [departmentList, setDepartmentList] = useState([
    "Department strength",
    "Visualization 1",
    "Visualization 2",
    "Visualization 3"
  ]);
  const [employeesList, setEmployeesList] = useState([
    "Employees strength",
    "Visualization 1",
    "Visualization 2",
    "Visualization 3"
  ]);

  const displayDepartment = departmentList.map((item) =>
    <TextPointer 
      text={item} 
      color="White"
      onClick={() => alert(`${item}`)}
    />
  )

  const displayEmployees = employeesList.map((item) =>
  <TextPointer text={item} color="White"/>
  )

  const homePageDefault = () => {
    return(
        <span>
            <div className="homePageText">
                <AppText 
                    text="Welcome to Faethem"
                    fontSize="30px"
                    fontWeight="bold"
                />
                <AppText
                    text="Select a visualization to get started."
                    fontSize="20px"
                />
            </div>
                
            <img 
                src= {FaethemHome}
                className="homePageMainContentImage"
            />
        </span>
    )
}

  return {
    displayDepartment, 
    displayEmployees, 
    homePageDefault
  };
}


