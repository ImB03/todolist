import React, { useState } from "react";

export default function App() {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState("");

  const handleSubmit = () => {
    setJobs((prev) => [...prev, job]);
    setJob("");
  };

  const handleDelete = (index) => {
    const newJobs = [...jobs];
    newJobs.splice(index, 1);
    setJobs(newJobs);
    
  };
  return (
    <div style={{ padding: 32 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => {
          return (
            
              <li key={index}>{job} <button value={index} onClick={()=>handleDelete(index)}>Delete</button></li>
              
            
          );
        })}
      </ul>
    </div>
  );
}
