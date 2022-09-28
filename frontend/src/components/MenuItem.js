import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setItems } from '../redux/cart';

const MenuItem = (props) => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    function handleAddItem() {
        var items = [...cartItems];

        const findItem = items.find(item => item.name === props.name);
        if (findItem === undefined) {
          items.push({
            id: items.length + 1,
            name: props.name,
            quantity: 1,
            price: props.price,
            category: props.category
          });
        }
        else {
          findItem.quantity += 1;
        }
        dispatch(setItems(items));
      }


    return ( 

        <div className="col"> 
            <div className="card h-100 w-100" >
                <img src="./Placeholder.png" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                        <p className="fw-bold">${props.price}</p>
                        <button type="button" className="btn btn-secondary" onClick={handleAddItem}>Add to Cart</button>
                    </div>
            </div>
        </div>
    );
};
export default MenuItem;