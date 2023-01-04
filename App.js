import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [servingUrl, setServingUrl] = useState('');
  const [authToken, setAuthToken] = useState('');
  const [sex, setSex] = useState('Male');
  const [smoker, setSmoker] = useState('Yes');
  const [region, setRegion] = useState('southeast');
  const [age, setAge] = useState(18);
  const [bmi, setBmi] = useState(10);
  const [children, setChildren] = useState(0);
  const [prediction, setPrediction] = useState(null);

  const handlePredictClick = async () => {
    const payload = {
      signatures: {
        inputs: [[{ data: `age,sex,bmi,children,smoker,region\n${age},${sex === 'Male' ? 1 : 0},${bmi},${children},${smoker === 'Yes' ? 1 : 0},${region === 'southeast' ? 2 : region === 'northwest' ? 3 : region === 'southwest' ? 1 : 0}` }]]
      },
      instances: [],
      token: authToken
    };
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
      <label htmlFor="region">Which region do you belong to?</label>
      <select id="region" value={region} onChange={e => setRegion(e.target.value)}>
        <option>southeast</option>
        <option>northwest</option>
        <option>southwest</option>
        <option>northeast</option>
      </select>
      <br />
      <label htmlFor="age">What is your age?</label>
      <input type="range" id="age" value={age} min={18} max={100} onChange={e => setAge(e.target.value)} />
      <br />
      <label htmlFor="bmi">What is your bmi?</label>
      <input type="range" id="bmi" value={bmi} min={10} max={60} onChange={e => setBmi(e.target.value)} />
      <br />
      <label htmlFor="children">Number of children</label>
      <input type="range" id="children" value={children} min={0} max={10} onChange={e => setChildren(e.target.value)} />
      <br />
      <button onClick={handlePredictClick}>Predict</button>
      {prediction ? <div>Prediction: {prediction}</div> : null}
    </div>
    ); 
} 
export default App;    
