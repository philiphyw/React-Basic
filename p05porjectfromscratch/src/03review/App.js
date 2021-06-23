import React from 'react';
import Review from './Review';
import {FaGithubSquare} from 'react-icons/fa';
import './index.css';


function App() {
  return <main>
    <section className="container">
      <div className="title">
        <h2>our reviews <FaGithubSquare /></h2>
        <div className="underline"></div>
      </div>
    </section>
    <Review />
    </main>;
}

export default App;
