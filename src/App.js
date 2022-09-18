import React, { useState } from "react";

export default function App() {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState("");

  const handleSubmit = () => {
    setJobs((prev) => [...prev, job]);
    setJob("");
  };
  return (
    <div style={{ padding: 32 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => {
          return <li key={index}>{job}</li>;
        })}
      </ul>
    </div>
  );
}
