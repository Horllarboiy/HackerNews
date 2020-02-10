import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Layout from './components/Layout';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios('https://api.hnpwa.com/v0/news/1.json');
      setData(result.data)
      console.log(result);
      
    }
    fetchData()

  }, []);

  return (
    <Layout>
      <ul className="main">
        {data.map(item =>
          <li className="main_list" key={item.id}>
            <a className="main_link" href={item.url}>{item.title}</a>
          </li>
        )}
      </ul>
    </Layout>
  )
}

export default App
