import Cart from "./components/Cart.jsx";
import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";
import { UserProgresContextProvider } from "./store/UserProgresContext.jsx";

function App() {
  return (
    <UserProgresContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
      </CartContextProvider>
    </UserProgresContextProvider>
  );
}

export default App;
