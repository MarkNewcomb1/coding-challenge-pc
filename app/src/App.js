import React, { useState, useCallback, useEffect } from 'react';
import Table from './components/Table';
import './App.css';

// Your source folder isn't exposed to your webserver
// so what's being returned is a 404 or 
// other response which starts with XML opening tag <. It's
// for this reason your local sample json needs to be in the
// public folder.

function App() {

  const [data, setData] = useState([]);

  const fetchData = useCallback(() => {
    fetch('./example_rsu_query_response.json')
      .then(response => response.json())
      .then(results => {
        setData(results.body.rsus);
      })
  })

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Table 
      data={data}
      />
    </div>
  );
}

export default App;
