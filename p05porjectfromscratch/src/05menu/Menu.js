import React from 'react';

const Menu = ({items}) => {
  return <div className="section-center">
    {items.map (i=>{
      const {id,title,img,desc,price}=i;
      return <main key={id} className="menu-item">
        <img src={img} alt={title} className='photo' />
        <div className="item-info">
          <header>
            <h4>{title}</h4>
            <h4 className="price">{price}</h4>
            </header>
            <p className="item-text">{desc}</p>
        </div>
      </main>
    })}
  </div>
};

export default Menu;
