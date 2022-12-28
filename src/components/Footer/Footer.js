import React, { useContext } from "react";
import "./Footer.css";

import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Avatar } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  rootBox: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
    
  },
  footerNav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(0),

    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: 'auto',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
     
    }
  },
  footerLink: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    }
  },
}));




function Footer(props) {
  const shortname = (name) => {
    if (name.length > 10) {
      return name.split(" ")[0];
    } else {
      return name;
    }
  };

  const { theme } = useContext(ThemeContext);


  const classes = useStyles();

  const content = {
    'brand': { image: 'https://images.pexels.com/photos/14921244/pexels-photo-14921244.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load', width: 110 },
    'copy': '© 2022 ❤️ Ahmadi Family.',
   
    'link3': 'Made With ❤️ By '+ shortname(headerData.name),
    ...props.content
  };

  let brand;

  if (content.brand.image) {
    brand =  <Avatar   src={ content.brand.image }/>;
  } else {
    brand = content.brand.text || '';
  }

  return (

    <footer  style={{ backgroundColor: theme.secondary }}>
      <Container maxWidth="lg" >
        <Box py={6} display="flex" flexWrap="wrap" alignItems="center" className={classes.rootBox}>
          <Link href="#" color="inherit" underline="none">
            {brand}
          </Link>
          <Box component="nav" className={classes.footerNav}>
            <Typography variant="body1" style={{ color: theme.tertiary }} className={classes.footerLink}>{content['link3']}</Typography>
          </Box>
          <Typography  style={{ color: theme.primary, margin: "0 0.5rem -1rem 0.5rem" }} >{content['copy']}</Typography>
        </Box>
      </Container>
    </footer>

  );
}

export default Footer;
