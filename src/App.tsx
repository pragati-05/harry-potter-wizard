import React, { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";
import Input from "./components/Input";
import Button from "./components/Button";
import Loader from "./components/Loader";
import Dropdown from "./components/Dropdown";

export interface IElixirs {
  id: string;
  name: string;
  manufacturer: string;
  difficulty: string;
  ingredients: {
    id: string;
    name: string;
  }[];
  inventors: {
    id: string;
    firstName: string;
    lastName: string;
  }[];
  effect: string;
  sideEffects: string;
  characteristics: string;
}

interface IParams {
  Name?: string;
  Ingredient?: string;
  Difficulty?: string;
  InventorFullName?: string;
  Manufacturer?: string;
}

function App() {
  const [data, setData] = useState([]);
  const [params, setParams] = useState<IParams | null>(null);
  const [showLoader, setShowLoader] = useState(false);
  const difficultyOptions = ["Unknown", "Advanced", "Moderate", "Begineer", "OrdinaryWizardingLevel", "OneOfAKind"]

  const fetchElixirsList = async (parameters: IParams | null) => {
    setShowLoader(true);
    const queryParameters = new URLSearchParams({
      ...parameters,
    });
    const res = await fetch(
      `https://wizard-world-api.herokuapp.com/Elixirs${
        queryParameters ? `?${queryParameters}` : ""
      }`
    );
    if (res) {
      const list = await res.json();
      setShowLoader(false);
      if (list && !!list.length) {
        setData(list);
      } else {
        setData([]);
      }
    }
  };

  const resetFilters = () => {
    setData([]);
    setParams(null);
    fetchElixirsList(null);
  };

  const applyFilters = () => {
    fetchElixirsList(params);
  };

  useEffect(() => {
    fetchElixirsList(params);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h2>Elixirs List</h2>
        <div className="filters-container">
          <Input
            name="name"
            value={params?.Name ?? ""}
            label="Name"
            onChange={(text) => {
              setParams({
                ...params,
                Name: text,
              });
            }}
          />
          <Dropdown
            name="difficulty"
            options={difficultyOptions}
            value={params?.Difficulty ?? ""}
            label="Difficulty"
            onChange={(text) => {
              setParams({
                ...params,
                Difficulty: text,
              });
            }}
          />
          <Input
            name="ingredient"
            value={params?.Ingredient ?? ""}
            label="Ingredient"
            onChange={(text) => {
              setParams({
                ...params,
                Ingredient: text,
              });
            }}
          />
          <Input
            name="inventor_full_name"
            value={params?.InventorFullName ?? ""}
            label="Inventor Full Name"
            onChange={(text) => {
              setParams({
                ...params,
                InventorFullName: text,
              });
            }}
          />
          <Input
            name="manufacturer"
            value={params?.Manufacturer ?? ""}
            label="Manufacturer"
            onChange={(text) => {
              setParams({
                ...params,
                Manufacturer: text,
              });
            }}
          />
          <Button label="Apply" onClick={applyFilters} />
          <Button label="Reset" onClick={resetFilters} />
        </div>
        <Table data={data} />
        {showLoader && <Loader />}
      </div>
    </div>
  );
}

export default App;
