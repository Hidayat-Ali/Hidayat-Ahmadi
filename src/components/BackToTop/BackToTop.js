import React, { useState, useContext } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { makeStyles } from "@material-ui/core/styles";
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { ThemeContext } from "../../contexts/ThemeContext";
import "./BackToTop.css";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  const { theme,changeTheme,isDark } = useContext(ThemeContext);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  const useStyles = makeStyles((t) => ({
    icon: {
      fontSize: "3rem",
      color: theme.tertiary,
    },
    drawerIcon: {
      fontSize: '1.6rem',
      color: theme.tertiary,
      [t.breakpoints.down('sm')]: {
          fontSize: '1.385rem',
      },
    }
  }));

  const classes = useStyles();

  return (
    <div>
      <div
        style={{ display: visible ? "inline" : "none" }}
        className="backToTop"
      >
        <button onClick={scrollToTop} aria-label="Back to top">
          <IoIosArrowDropupCircle className={classes.icon} />
        </button>
      </div>
      <div
        style={{ display: visible ? "inline" : "none" }}
        className="DarkToLight"
      >
        <button>
        <div className={classes.drawerItem} onClick={changeTheme}>
          {isDark ? (
            <BsFillSunFill className={classes.drawerIcon} />
          ) : (
            <BsFillMoonFill className={classes.drawerIcon} />
          )}
        
        </div>
        </button>
       
      </div>
    </div>
  );
}

export default BackToTop;
