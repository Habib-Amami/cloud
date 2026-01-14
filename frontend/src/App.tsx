import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";
  
    fetch(`${API_URL}/api/message`)
      .then(res => res.json())
      .then(data => {
        setMessage(data.message);
        setLoading(false);
      })
      .catch(() => {
        setMessage("Error loading message");
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>3-Tier App</h1>
      {loading ? <p>Loading...</p> : <p>{message}</p>}
    </div>
  );
}

export default App;
