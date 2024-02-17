import { createContext, useState } from "react";

const UserProgresContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgresContextProvider({ children }) {
  const [userProgres, setUserProgres] = useState("");

  function showCart() {
    setUserProgres("cart");
  }

  function hideCart() {
    setUserProgres("");
  }

  function showCheckout() {
    setUserProgres("checkout");
  }

  function hideCheckout() {
    setUserProgres("");
  }

  const userProgresContext = {
    progress: userProgres,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgresContext.Provider value={userProgresContext}>
      {children}
    </UserProgresContext.Provider>
  );
}

export default UserProgresContext;
