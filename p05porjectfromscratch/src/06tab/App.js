import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
 const [loading, setLoading]=useState(true);
 const[jobs,setJobs]=useState([]);
 const[value,setValue]=useState(0);

 const fetchData = async ()=>{
   setLoading(true);
   const response = await fetch(url);
   const newJobs = await response.json();
   setJobs(newJobs);
   setLoading(false);
 }

useEffect(()=>{
  fetchData();
},[])




if (loading) {
  return <section className="section loading"> <h2>loading</h2></section>
}else{
  //need to ensure loading is finished, otherwise below disctructure code will throw errors
  const {company,dates,duties,title}=jobs[value];
  return <section className="section">
    <div className="title">
      <h2>experience</h2>
      <div className="underline"></div>
    </div>
    <div className="jobs-center">
      <div className="btn-container">
        {jobs.map((job,index)=>(
          <div key={job.id}>
            <button onClick={()=>setValue(index)} className={`job-btn ${index===value&&'active-btn'}`}>{job.company}</button>
          </div>
        ))}
      </div>


      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((duty,index)=>(
          <div key={index} className="job-desc">
          <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
          <p>{duty}</p>
          </div>
        ))}
      </article>
    </div>
  </section>
}

  
}

export default App
