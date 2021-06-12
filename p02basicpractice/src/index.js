import React from "react";
import ReactDom from "react-dom";
import './index.css';
import {books} from "./books";
import Book from "./Book";

function BookList(props) {
  return (
    <div>
       <section className='grid bookList cardset'>
       {books.map(e =>{       
       return(
         <Book key={e.id} book = {e} />
       )
       })}      
      </section>
    </div>
  );
}






ReactDom.render(<BookList />, document.getElementById("root"));
