 import { useState } from "react";
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  { Header }  from './components/Header';
import { ProductList } from './components/ProductList';

import "./App.css"  




function App() {
  const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

  return (

<Router>
  <div>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />
            <ProductList
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
            />
          </>
        }
      />
    </Routes>
  </div>
</Router>
    

  );
};

export default App;