import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product.jsx';
import useStyles from './styles';



 const Products =({products,onAddtoCart})=>{
     const classes = useStyles();
return(
    <main className={classes.content}>
        <div className={classes.toolbar}></div>
        <Grid container justify="center" spacing={4}>
            {products.map((p) =>{
                return <>
                    <Grid item key={p.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={p} onAddtoCart={onAddtoCart}/>
                    </Grid>
                </>
            })}
        </Grid>
    </main>
)}


export default Products;