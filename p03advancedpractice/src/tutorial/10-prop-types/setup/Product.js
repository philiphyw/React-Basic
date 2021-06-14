import React from 'react';
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({image,name,price}) => {
const url = image && image.url //check if image and image url are both existed 
  return <>
  <div className='product'> 
  <img src={url ||defaultImage} alt="" />
  <h4>{name || 'default product'}</h4>
  <p>{price || 99.99}</p>

  {/* <img src={url ||Product.defaultProps.image.url} alt="" />
  <h4>{name || Product.defaultProps.name}</h4>
  <p>{price || Product.defaultProps.price}</p> */}

  </div>
  </>
};
//define propTypes to check if any properties are missing, show result in console
Product.propTypes ={
  image:PropTypes.object.isRequired,
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
}

//setup default props to avoid error msg when a property is missing
Product.defaultProps = {
  name:'default name',
  price:99.99,
  image:defaultImage
}
export default Product;
