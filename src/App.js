import {Routes,Route} from "react-router-dom"
import Admin from "./Admin";
import Featured from "./Component/Featured";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";
import New from "./Component/New";
import NoMatch from "./Component/NoMatch";
import Order from "./Component/Order";
import OrderSummary from "./Component/OrderSummary";
import Product from "./Component/Product";
import UserDetails from "./UserDetails";
import Users from "./Users";
import React from 'react'
const LazyAbout =  React.lazy(() => import("./Component/About"))
function App() {

  return (
    <div className="App">
      <NavBar />
      <Order />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={
        <React.Suspense fallback="Loading...">
        <LazyAbout />
        </React.Suspense>
        } />
        <Route path="product" element={<Product />}>
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="user" element={<Users />}>
        <Route path=":userID" element={<UserDetails />} />
        <Route path="admin" element={<Admin />} />
        </Route>

        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
