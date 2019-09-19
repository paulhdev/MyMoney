import React from "react";

import Rest from "./rest";

const baseURL = "https://mymoney-phdev.firebaseio.com/";

const { useGet } = Rest(baseURL);

function App() {
  const data = useGet("meses");

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <h5 className="navbar-brand">MyMoney</h5>
        </div>
      </nav>
      <h2>Adicionar mês</h2>
      <select>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
      </select>
      <select>
        <option value="01">01</option>
        <option value="02">02</option>
      </select>
      <button>Adicionar Mês</button>

      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}

export default App;
