import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <p>{t("hi")}</p>
    </div>
  );
}

export default App;
