import "./App.scss";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <p>{t("hi")}</p>
      <Outlet />
    </div>
  );
}

export default App;
