import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Trade } from "./pages/Trade";
import { Finance } from "./pages/Finance";
import { Development } from "./pages/Development";
import { Support } from "./pages/Support";

import { AppContext } from "./context";

function App() {
  const [userAccount, setUserAccount] = useState(null);

  return (
    <AppContext.Provider value={{ userAccount, setUserAccount }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/nft" element={<Development />} />
          <Route path="/support" element={<Support />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
