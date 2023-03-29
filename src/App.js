import CartContainer from "./Components/CartContainer";
import Navbar from "./Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./Feature/Cart/CartSlice";
import { useEffect } from "react";
import Modal from "./Components/Modal";


function App() {
  const dispatch = useDispatch();
  const {cartItems} = useSelector((store)=> store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(()=>{
dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <div className="App">
      <main>
        {isOpen && <Modal />}
        <Navbar />
        <CartContainer />
      </main>
    </div>
  );
}

export default App;
