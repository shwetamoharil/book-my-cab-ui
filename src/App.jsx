import React, { useEffect } from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';

// import { useTranslation } from "react-i18next";

function App() {
  // const { t } = useTranslation();

  // useEffect(() => {
  //   login();
  // }, []);
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
