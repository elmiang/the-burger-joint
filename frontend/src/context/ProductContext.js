import { createContext, useReducer } from "react";

export const ProductsContext = createContext();

// Returns how to render the product managment page after the user has manipulated the data
export const productsReducer = (state, action) => {
  switch (action.type) {
    // renders the products
    case "SET_PRODUCTS":
      return {
        products: action.payload,
      };
    // renders the new product and then the rest of the products
    case "CREATE_PRODUCT":
      return {
        products: [action.payload, ...state.products],
      };
    // renders the products filtering out the deleted product
    case "DELETE_PRODUCT":
      return {
        products: state.products.filter(
          (p) => p.Dish_id !== action.payload.Dish_id
        ),
      };
    // renders the edited product and the rest of the products while filtering out the original product
    case "EDIT_PRODUCT":
      return {
        products: [
          action.payload,
          ...state.products.filter(
            (p) => p.Dish_id.toString() !== action.payload.Dish_id
          ),
        ],
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
