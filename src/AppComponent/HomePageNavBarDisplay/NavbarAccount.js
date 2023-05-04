import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function NavbarAccount({ title, account }) {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth0();

  const handleClick = (item) => {
    if (item.title === "LogOut") {
      logout({ logoutParams: { returnTo: window.location.origin } });
    }
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
        onClick={() => setIsOpen(!isOpen)}
      >
        <span style={{ marginRight: "5px", fontSize: "22px", color: "black" }}>{title}</span>
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
        >
          {account.map((item, index) => (
            <div key={index} style={{ padding: "5px 10px" }}>
              <a href={item.link} style={{ textDecoration: "none", color: "black", cursor: "pointer" }} onClick={() => handleClick(item)}>
                {item.title}
              </a>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

export default NavbarAccount;
