import React, { useRef, useState } from "react";

export default function App() {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState("");

  const inputRef = useRef();

  const handleSubmit = () => {
    if (job.length === 0) {
      return alert("Please enter something!");
    }
    setJobs((prev) => [...prev, job]);
    setJob("");
    inputRef.current.focus();
  };

  const handleDelete = (index) => {
    const newJobs = [...jobs];
    newJobs.splice(index, 1);
    setJobs(newJobs);
  };

  const handleUpdate = (index) => {
    
  };


  return (
    <div style={{ padding: 32 }}>
      <input
        ref={inputRef}
        className="enter-value"
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => {
          return (
            <li key={index}>
              {job} <button onClick={handleUpdate()} >Update</button> <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
