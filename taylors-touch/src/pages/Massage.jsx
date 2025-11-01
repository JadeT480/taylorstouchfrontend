import { useEffect, useState } from "react";
import MassageList from "../components/MassageList/MassageList";

function Massages() {
  const [massages, setMassages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE}/massages`).then((res) => {
      if (!res.ok) throw new Error("Failed to fetch massages");
      return res.json();
    }).then((data) => {
      setMassages(data);
      setLoading(false);
    }).catch((err) => {
      console.error("fetch error:", err);
      setError(err.message);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading list of available massages...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Selection of Available Massages</h2>
      {massages.length === 0 ? (
          <p>No massages found.</p>
        ) : (
          <MassageList massages={massages} />
        )}
    </div>
  );
}

export default Massages;