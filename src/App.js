import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import ProfilePage from "./scenes/profile";
import DataTable from "./scenes/inventory";
import AddNewProduct from "./scenes/inventory/addNewProduct";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              {/* <Route path="/profile" element={} /> */}
              <Route path="profile" element={<ProfilePage />} />
              <Route path="view-product" element={<DataTable />} />
              <Route path="add-new-product" element={<AddNewProduct />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
// import React from 'react';
// import './App.css';
// import Navbar from './adminComponents/Sidebar';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import Profile from './pages/Profile';
// import Products from './pages/Products';

// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path='/' exact component={Dashboard} />
//           <Route path='/reports' component={Profile} />
//           <Route path='/products' component={Products} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;