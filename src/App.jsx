import axios from "axios";
import { useState, useEffect } from "react";
import { ListRecipes } from "./components/ListRecipes";


function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateData = async () => {
      setLoading(true);
      const { data } = await axios.get("http://localhost:3332/recipes", {
        params: { limit: 10 },
      });

      setRecipes(data.items);
      setLoading(false);
    };

    updateData();
  }, []);

  return (
    <ListRecipes recipes={recipes} loading={loading} />
  );
}

export default App;
