import { createContext, useReducer } from "react";

export const ProductsContext = createContext();

export const productsReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        products: action.payload,
      };
    case "CREATE_PRODUCT":
      return {
        products: [...state.products, action.payload],
      };
    case "DELETE_PRODUCT":
      return {
        products: state.products.filter(
          (p) => p.Dish_id !== action.payload.Dish_id
        ),
      };
    case "EDIT_PRODUCT":
      return {
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, {
    products: null,
  });

  return (
    <ProductsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};
