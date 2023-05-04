import React, { useState } from 'react';

function Navbar({ title, services }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <header style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          zIndex: 1,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span style={{ marginRight: "5px", fontSize: "22px", color: "black" }}>{title}</span>
        <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px" }}>
          <path fill="currentColor" d="M7.41,16.59L12,11l4.59,4.59L18,15l-6-6l-6,6L7.41,16.59z" />
        </svg>
      </div>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            padding: "5px 0",
            zIndex: 1,
            minWidth: "150px",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {services.map((service) => (
            <div key={service.title} style={{ padding: "5px 10px" }}>
              <a href={service.link} style={{ textDecoration: "none", color: "black" }}>
                {service.title}
              </a>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
