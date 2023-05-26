import Dashboard from "containers/Dashboard";
import Market from "containers/Market";
import ActiveBids from "containers/ActiveBids";
import MyPortfolio from "containers/MyPortfolio";
import Wallet from "containers/Wallet";
import Favourites from "containers/Favourites";
import History from "containers/History";
import Settings from "containers/Settings";
import { useRoutes } from "react-router-dom";

function App() {
  let element = useRoutes([
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/market", element: <Market /> },
    { path: "/active-bids", element: <ActiveBids /> },
    { path: "/my-portfolio", element: <MyPortfolio /> },
    { path: "/wallet", element: <Wallet /> },
    { path: "/favourites", element: <Favourites /> },
    { path: "/history", element: <History /> },
    { path: "/settings", element: <Settings /> },
  ]);

  return element;
}

export default App;
