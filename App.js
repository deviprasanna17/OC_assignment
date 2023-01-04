import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
    return (
    <div className="App">
      <h1>Predict insurance charges</h1>
      <h2>Calculating the insurance charges that could be charged by an insurer based on a person's attributes</h2>
      <label htmlFor="serving-url">Dkube serving URL</label>
      <input id="serving-url" value={servingUrl} onChange={e => setServingUrl(e.target.value)} />
      <br />
      <label htmlFor="auth-token">Dkube user auth token</label>
      <input id="auth-token" value={authToken} onChange={e => setAuthToken(e.target.value)} />
      <br />
      <label htmlFor="sex">Select Sex</label>
      <select id="sex" value={sex} onChange={e => setSex(e.target.value)}>
        <option>Male</option>
        <option>Female</option>
      </select>
      <br />
      <label htmlFor="smoker">Are you a smoker</label>
      <select id="smoker" value={smoker} onChange={e => setSmoker(e.target.value)}>
        <option>Yes</option>
        <option>No</option>
      </select>
      <br />
    </div>
    ); 
} 
export default App;    