import logo from './logo.svg';
import './App.css';
import Home from "./components/home/Home";
import ErrorPage from "./components/errorpage/ErrorPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/rootlayout/RootLayout";
import Cart from './components/cart/Cart';
function App() {

  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />

        },{
          path: "/cart",
          element: <Cart />

        }, ]
      }
    ]);
  return (
    <div className="App">
      <RouterProvider router={routerObj} />
     
    </div>
  );
}

export default App;
