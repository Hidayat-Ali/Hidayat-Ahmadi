import React, { useContext } from "react";
import "./Footer.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";

function Footer() {
  const shortname = (name) => {
    if (name.length > 10) {
      return name.split(" ")[0];
    } else {
      return name;
    }
  };

  const { theme } = useContext(ThemeContext);

  return (
    <section style={{ backgroundColor:theme.primary }} className="mb-5  container-fluid">
      <div className="row" >
        <div className="col-4" style={{ color: "white" }}>

        </div>
        
      </div>
      
      <div className=" row footer"
        style={{ backgroundColor: theme.secondary }}
      >
        <div className="col-12">
        <p style={{ color: theme.tertiary }}>
          Made with
          <span
            style={{ color: theme.primary, margin: "0 0.5rem -1rem 0.5rem" }}
          >
            ❤ &copy; 2022
          </span>
          by {shortname(headerData.name)}

          <span className="h2" style={{ color: theme.primary }}>
          {" "}
          🤗🤗🤗Ahmadi family🤗🤗🤗
        </span>
        </p>
      
        </div>
       
      </div>
    </section>
  );
}

export default Footer;
