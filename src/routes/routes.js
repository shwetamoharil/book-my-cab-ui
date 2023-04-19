import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Login from "../components/Login/Login";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* children routes specify here will be render inside <App/> component */}
      <Route index element={<Login />} />
    </Route>
  )
);
