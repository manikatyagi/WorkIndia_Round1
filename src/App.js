import React from 'react';
import './App.css';

// The provided JSON data
const data = {
    "data": [{
			"id": 1,
			"name": "Candidate 1",
			"last_updated_at": "10 minutes ago",
			"location": "HSR Layout",
			"gender": "Male",
			"status": "Applied"
		},
		{
			"id": 2,
			"name": "Candidate 2",
			"last_updated_at": "15 minutes ago",
			"location": "HSR Layout",
			"gender": "Male",
			"status": "Applied"
		},
		{
			"id": 3,
			"name": "Candidate 3",
			"last_updated_at": "2022/05/04",
			"location": "Koramangala",
			"gender": "Female",
			"status": "Accepted"
		},
		{
			"id": 4,
			"name": "Candidate 4",
			"last_updated_at": "2022/04/10",
			"location": "HSR Layout",
			"gender": "Male",
			"status": "Rejected"
		},
		{
			"id": 5,
			"name": "Candidate 5",
			"last_updated_at": "12 minutes ago",
			"location": "HSR Layout",
			"gender": "Male",
			"status": "Accepted"
		},
		{
			"id": 6,
			"name": "Candidate 6",
			"last_updated_at": "30 minutes ago",
			"location": "HSR Layout",
			"gender": "Male",
			"status": "Accepted"
		},
		{
			"id": 7,
			"name": "Candidate 7",
			"last_updated_at": "2 minutes ago",
			"location": "HSR Layout",
			"gender": "Male",
			"status": "Rejected"
		},

  ]
};
function App() {
  return (
    <div className="App">
      <div className="column">
        <div className="column-header">
          <h2>Applied</h2>
        </div>
        {data.data.map(candidate => {
          if (candidate.status === "Applied") {
            return (
              <div className="box" key={candidate.id}>
                <div className="box-title">{candidate.name}</div>
                <div className="box-content">
                  <span className="bullet-box"></span> {candidate.last_updated_at}<br />
                  <span className="bullet-box"></span> {candidate.location}<br />
                  <span className="bullet-box"></span> {candidate.gender}<br />
                 
                </div>
              </div>
            );
          }
          return null; // Return null for candidates with other statuses
        })}
      </div>
      <div className="column">
        <div className="column-header">
          <h2>Accepted</h2>
        </div>
        {data.data.map(candidate => {
          if (candidate.status === "Accepted") {
            return (
              <div className="box" key={candidate.id}>
                <div className="box-title">{candidate.name}</div>
                <div className="box-content">
                  <span className="bullet-box"></span> {candidate.last_updated_at}<br />
                  <span className="bullet-box"></span> {candidate.location}<br />
                  <span className="bullet-box"></span> {candidate.gender}<br />
                
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="column">
        <div className="column-header">
          <h2>Rejected</h2>
        </div>
        {data.data.map(candidate => {
          if (candidate.status === "Rejected") {
            return (
              <div className="box" key={candidate.id}>
                <div className="box-title">{candidate.name}</div>
                <div className="box-content">
                  <span className="bullet-box"></span> {candidate.last_updated_at}<br />
                  <span className="bullet-box"></span> {candidate.location}<br />
                  <span className="bullet-box"></span> {candidate.gender}<br />
                 
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;