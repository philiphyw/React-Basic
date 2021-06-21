import React from 'react'
import { Container,Typography,Button,Grid } from '@material-ui/core';
import useStyles from "./styles";
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = ({cart, handleUpdateCartQty,handleRemoveFromCart,handleEmptyCart}) => {
const classes = useStyles();
const isEmpty = !cart.line_items;

const EmptyCart =()=>{
 return   <Typography variant = "subtitle1">No items in the cart, <Link to="/" className={classes.link}>start adding some!</Link></Typography>
}

const FilledCart =()=>{
    return (
        <>
        <Grid container spacing ={3}>
            {cart.line_items.map(item =>{
               return( <Grid item xs={12} sm={4} key={item.id}>
                    <CartItem item={item} handleUpdateCartQty ={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart}/>
                </Grid>
               )
            })}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant="h4">
                Subtotal:{cart.subtotal.formatted_with_symbol}
            </Typography>
            <div>
                <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={()=>handleEmptyCart()}>Empty Cart</Button>
                <Button component={Link} to="/checkout" className={classes.emptyButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
            </div>
        </div>
        </>
    )
}

    return (
        <div>
            <Container>
                <div className={classes.toolbar}></div>
                <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
                {isEmpty?<EmptyCart />:<FilledCart />}
            </Container>
        </div>
    )
}

export default Cart
