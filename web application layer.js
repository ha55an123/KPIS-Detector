import React, { useState, useEffect } from 'react';

function App() {
  const [productionData, setProductionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/production-data'); // Adjust this URL based on your API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (Array.isArray(data.productionData)) {
          setProductionData(data.productionData);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!productionData.length) {
    return <div>No production data available</div>;
  }

  return (
    <div>
      <h1>Production Data</h1>
      <ul>
        {productionData.map((data, index) => (
          <li key={index}>
            Machine ID: {data.machineId}, Production Count: {data.productionCount}, Operator Name: {data.operatorName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
