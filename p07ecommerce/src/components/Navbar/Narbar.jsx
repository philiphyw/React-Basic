import React from 'react';
import { AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography } from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import logo from '../../assets/pngwing.com.png';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';

const Narbar = ({cart}) => {
 const classes = useStyles();   
 const location = useLocation();


    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                        Red Meow Shoes
                    </Typography>
                    <div className={classes.grow}/>
                    {location.pathname==="/" && 
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={cart.total_items} color="secondary">
                                <ShoppingCart cart={cart}/>
                            </Badge>
                        </IconButton>
                    </div>}
                </Toolbar>
            </AppBar>

        </>
    )
}

export default Narbar