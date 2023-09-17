import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calculator from "./components/calculator";

import Currencies from "./components/currencies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Calculator />,
  },
  { path: "/currencies", element: <Currencies /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
