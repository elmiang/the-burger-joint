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
            var item = {
                id: items.length + 1, 
                name: props.name, quantity: 1, 
                price: props.price, 
                category: props.category
            };

            if (props.ingredients !== undefined) {
                item.ingredients = props.ingredients;
            }
            items.push(item);
        }
        else {
          findItem.quantity += 1;
        }
        dispatch(setItems(items));
      }

    return ( 

        <div class="col"> 
            <div class="card" >
                <div className="card-image">
                    <img src={props.url} class="card-img-top" alt="..."></img>
                </div>
                    <div class="card-body">
                        <h5 class="card-title">{props.name}</h5>
                        <p class="card-text">{props.description}</p>
                        <p class="fw-bold">${props.price}</p>
                        <button type="button" class="btn btn-secondary" onClick={handleAddItem}>Add to Cart</button>
                    </div>
            </div>
        </div>
    );
};
export default MenuItem;