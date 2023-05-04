import React, { useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";

import FaethemLogo from "../../assets/FaethemAI-logo.svg";
import Navbar from "./Navbar";
import NavbarAccount from "./NavbarAccount";

export default function HomePageUpperContent() {
  const [selectedOption, setSelectedOption] = useState(null);

  const { logout } = useAuth0();

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
    alert(`Selected: ${event.target.value}`);
  };

  const services = [
    {
      title: "Service 1",
      link: "https://www.faethm.ai/#Solutions",
    },
    {
      title: "Service 2",
      link: "https://react.dev/reference/react-dom/components/textarea#props",
    },
    {
      title: "Service 3",
      link: "https://www.example.com/service3",
    },
  ];


  const products = [
    {
      title: "Labour Market Insights",
      link: "https://www.faethm.ai/products/labour-market-insights",
    },
    {
      title: "Strategic Workforce Planning",
      link: "https://www.faethm.ai/products/strategic-workforce-planning",
    },
    {
      title: "Technology Impact",
      link: "https://www.faethm.ai/products/technology-impact",
    },
    {
        title: "Future Capabilities",
        link: "https://www.faethm.ai/products/future-capabilities",
    },
  ];
  
  const resources = [
    {
      title: "Customer Success Stories",
      link: "hhttps://www.faethm.ai/customer-success-stories",
    },
    {
      title: "Insights Blog",
      link: "https://www.faethm.ai/blog",
    },
    {
      title: "Product FactSheets",
      link: "https://www.faethm.ai/product-factsheets",
    },
    {
        title: "Research and Reports",
        link: "https://www.faethm.ai/research-and-reports",
    },
    {
        title: "Videos",
        link: "https://www.faethm.ai/videos",
    }
  ];

  const company = [
    {
        title: "About Us",
        link: "https://www.faethm.ai/about-us",
    },
    {
        title: "In the News",
        link: "https://www.faethm.ai/news",
    },
    {
        title: "Platform Status",
        link: "https://status.faethm.ai/",
    }

  ]


  const account = [
    {
      title: "Profile",
      link: "https://www.faethm.ai/#Solutions",
    },
    {
      title: "LogOut",
      onClick: () => {
        logout({ logoutParams: { returnTo: window.location.origin } });
      },
    },
  ];
  

  return (
    <div className="homePageUpperNavbar">
      <div className="homePageLogo">
        <img src={FaethemLogo} alt="Faethem Logo" className="faethem-logo-home" />
      </div>

      <div className="homePageUpperTextContainer">
        {/* need to add dropdown icon */}
        {/* Planning to implement using AppIcon */}

        <ul className="homePageListNavbar">
          <div className="dropdownTextDisplay">
            <Navbar title="Products" services={products} />
          </div>

          <div className="dropdownTextDisplay">
            <Navbar title="Resources" services={resources} />
          </div>
          <div className="dropdownTextDisplay">
            <Navbar title="Company" services={company} />
          </div>
        </ul>
      </div>

      <div className="homePageUpperTextAccount">
        <div className="dropdownTextDisplay">
          <NavbarAccount title="Account" account={account} />
        </div>
      </div>
    </div>
  );
}
