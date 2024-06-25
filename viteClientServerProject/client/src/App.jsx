// client/src/App.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [models, setModels] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/models")
      .then((response) => setModels(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Models</h1>
      <ul>
        {models.map((model) => (
          <li key={model.id}>{model.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
