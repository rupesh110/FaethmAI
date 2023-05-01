import React from "react";

const AppIcon = ({ icon, className, width = "24px", height = "24px", color = "#000", backgroundColor = "transparent", borderRadius = "0" }) => {
  const Icon = icon; // Dynamically set the imported icon

  return (
    <div className={className} style={{ width: width, height: height, backgroundColor: backgroundColor, borderRadius: borderRadius, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Icon style={{ color: color, fontSize: "24px" }} />
    </div>
  );
};

export default AppIcon;
