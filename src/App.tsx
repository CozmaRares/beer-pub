import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Error from "./routes/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
