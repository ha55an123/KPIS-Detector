// server.js
const express = require('express');
const app = express();

app.get('/api/production-data', (req, res) => {
  // Replace this with your actual API data
  const data = [
    { machineId: 1, productionCount: 10, operatorName: 'John Doe' },
    { machineId: 2, productionCount: 20, operatorName: 'Jane Doe' },
  ];
  res.json({ productionData: data });
});
