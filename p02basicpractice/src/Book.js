import React from 'react'

const Book = (props) => {
    const{img,title,author,theme,price,inStock} = props.book;
  
  const clickHandler = (title) => {
    console.log(title);
    alert(`this book is: ${title}`);
  }
  
  
const imgOnMouseOver=(img)=>{
  console.log(img);
}

  return(
    <section className="book">
     <p><img src={img} alt=""  onMouseOver={()=>{imgOnMouseOver(img)}}/></p>
    <p>{title}</p>
    <p>{author}</p>
     <p>{theme}</p> 
     <p>{price}</p> 
     <p>{inStock}</p> 
    <button type="button" onClick={()=>{clickHandler(title)}}>Pop an alert</button>
    </section>
  )
}

export default Book
