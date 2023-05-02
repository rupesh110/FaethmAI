import React, { useState } from "react";
import AppText from "../components/AppText";
import HomePageUpperContent from "./HomePageNavBarDisplay/HomePageUpperContent";
import { useHooks } from "./HomePageContent/UseHooks";
import TextPointer from "../components/TextPointer";

export default function HomePage() {
  const {
    departmentList,
    displayDepartment,
    displayEmployees,
    homePageDefault,
  } = useHooks();

  const [isDefault, setIsDefault] = useState(true);
  const [selectedValue, setSelectedValue] = useState(null);



  const handleTextClick = (value) => {
    setSelectedValue(value);
    setIsDefault(!isDefault);
  };

  const departmentStrength = () => {
    return (
      <div>
        <TextPointer text={selectedValue} />
      </div>
    );
  };

  return (
    <div className="homePageContainer">
      {/* have divided the page into 3 sections
      1. upper navbar - <HomePageUpperContent />
      2. left navbar 
      3. main content*/}

      {/* This one is the upper navbar  */}
      <HomePageUpperContent />
      <hr></hr>
      {/* This one includes the left navbar and the main content */}
      <div className="homePageMainContentSplit">
        {/* This is the left navbar */}
        <div className="homePageLeftNavbar">
          <AppText
            text="Visualizations"
            fontSize="35px"
            fontWeight="bold"
            color="White"
          />
          <TextPointer
            text="Departments"
            fontSize="20px"
            fontWeight="bold"
            color="White"
            onClick={() => handleTextClick("Departments")}
          />
          {displayDepartment}
          <TextPointer
            text="Employees"
            fontSize="20px"
            fontWeight="bold"
            color="White"
            onClick={() => setIsDefault(!isDefault)}
          />
          {displayEmployees}
        </div>

        {/* This one is the main content */}
        <div className="homePageMainContent">
          {isDefault ? homePageDefault() : departmentStrength()}
        </div>
      </div>
    </div>
  );
}
