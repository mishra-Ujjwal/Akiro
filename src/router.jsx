import { createHashRouter } from "react-router-dom";
import App from "./App";
import StudySyncDashboard from "./pages/StudySyncDashboard";
import ChoosePath from "./components/ChoosePath";
import CollegeLearningDashboard from "./components/College";

const router = createHashRouter([
  { path: "/", element: <App /> },
  { path: "class-9", element: <StudySyncDashboard /> },
  { path: "class-10", element: <StudySyncDashboard /> },
  { path: "class-11", element: <StudySyncDashboard /> },
  { path: "class-12", element: <StudySyncDashboard /> },
  { path: "JEE", element: <StudySyncDashboard /> },
  { path: "NEET", element: <StudySyncDashboard /> },
  { path: "B.Tech/College", element: <CollegeLearningDashboard /> },
  { path: "choose-path", element: <ChoosePath /> },
]);

export default router;
