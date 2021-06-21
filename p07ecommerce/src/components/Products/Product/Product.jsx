import React from 'react';
import{Card, CardMedia, CardContent,CardActions,Typography,IconButton} from '@material-ui/core';
import{AddShoppingCart} from '@material-ui/icons';

import useStyles from './styles';

const Product = ({product, onAddtoCart}) => {
    const classes = useStyles();
    return (
        <div>
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
            <CardContent>
               <div className={classes.cardContent}>
                   <Typography gutterBottom variant = "h5">
                       {product.name}
                   </Typography>
                   <Typography gutterBottom variant = "h5">
                       {product.price.formatted_with_symbol}
                   </Typography>
               </div>
               <Typography dangerouslySetInnerHTML={{ __html:product.description }} variant="body2" color="textSecondary"></Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton  aria-label="Add to Card" onClick={()=>onAddtoCart(product.id,1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
        </div>
    )
}

export default Product
