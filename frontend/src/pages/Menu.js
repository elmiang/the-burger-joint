import React, { useState, useEffect } from "react";
import MenuItem from "../components/MenuItem";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/SearchBar";
import axios from "axios";
import { current } from "@reduxjs/toolkit";

const baseurl = process.env.REACT_APP_BACKEND_API_URL;  
const { search } = window.location;
const query = new URLSearchParams(search).get('s');
console.log(process.env);
//Filter dishes based on query
const filterDishes = (dishes, query) => {
    if (!query) {
        return dishes;
    }

    return dishes.filter((dishes) => {
        const dishName = dishes.DishName.toLowerCase();
        return dishName.includes(query);
    })
}

    const Menu = () => {
    const [dishes, setDishes] = useState([]);
    let mounted = true;
    
    useEffect(() => {
      const fetchDishes = async () => {
        try {
            const response = await axios.get(`${baseurl}/api/menu/`);
            if (mounted) {
                setDishes(response.data)
            }
        } catch (err) {
            console.log(err);
        }
      }

      fetchDishes();
    }, []);

    const [searchQuery, setSearchQuery] = useState(query || '');
    //filteredDishes used to search as you type.
    const filteredDishes = filterDishes(dishes, searchQuery);


    //Seperating "dishes" array into three categories
    const burger = filteredDishes.filter(obj => {
        return obj.Category === 'Burger';
      })

    const drink = filteredDishes.filter(obj => {
        return obj.Category === 'Drink';
      })

    const sides = filteredDishes.filter(obj => {
        return obj.Category === 'Sides';
      })

    //States for Category Buttons
    const [showBurger, setShowBurger] = useState(true);
    const [showDrink, setShowDrink] = useState(true);
    const [showSides, setShowSides] = useState(true);

    return ( 
        <div className="container-fluid ">
            <div className="row">
            <Sidebar/>
                <div className="col-2 bg-dark"></div>
                {/* Menu */}
                <div data-bs-spy="scroll" data-bs-target="#sidebar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="col py-5 p-5 scrollspy-example rounded-2" tabIndex="0">
                    <div className="btn-group" role="group">
                    <label className="text-light p-2 fs-4">Categories</label>

                    <div className="btn-group" role="group">
                        <button onClick={()=>setShowBurger(!showBurger)} type="checkbox" className="btn btn-outline-light me-2" data-bs-toggle="button">Burgers</button>
                        <button onClick={()=>setShowDrink(!showDrink)} type="checkbox" className="btn btn-outline-light me-2" data-bs-toggle="button">Drinks</button>
                        <button onClick={()=>setShowSides(!showSides)} type="checkbox" className="btn btn-outline-light me-2" data-bs-toggle="button">Sides</button>
                    </div>
                    
                    <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                    </div>
                        
                    {/* Menu: Burgers */}
                    {showBurger?<div>
                        {burger.length > 0 &&
                            <h3 id="section-1" className="p-2 text-white">Burgers </h3>
                        }

                        <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            
                            //For every burger, retrieve name, description, price, url, category and ingredients and pass in into MenuItem as props
                            filteredDishes.filter(obj => obj.Category.includes('Burger')).map((item, index) => 
                                <div key={item.Dish_id} data-testid={`menu-item-${index}`}>
                                    <MenuItem item_id={item.Dish_id} name={item.DishName} description={item.Description} price={item.Price} url={item.imageURL} category={item.Category} ingredients={item.ingredients}/>
                                </div>
                            )
                        }
                        </div>
                    </div>:null}
                    {/* End of Section 1 */}


                    {/* Menu: Drinks */}

                    {showDrink?<div>
                        {drink.length > 0 &&
                            <h3 id="section-2" className="p-3 text-white">Drinks</h3>
                        }
                        <div className="row row-cols-1 row-cols-md-3 g-4">

                        {
                            //For every drink, retrieve name, description, price, url, category and ingredients and pass in into MenuItem as props
                            filteredDishes.filter(obj => obj.Category.includes('Drink')).map((item) => 
                                <div key={item._id}>  
                                    <MenuItem item_id={item.Dish_id} name={item.DishName} description={item.Description} price={item.Price} url={item.imageURL} category={item.Category} ingredients={item.ingredients}/>
                                </div>
                            )
                        }

                        </div>
                    </div>:null}
                    {/* End of Section 2 */}

                    {/* Menu: Sides */}
                    {showSides?<div>
                        {sides.length > 0 &&
                            <h3 id="section-3" className="p-3 text-white">Sides</h3>
                        }
                        <div className="row row-cols-1 row-cols-md-3 g-4">

                        {
                            //For every sides, retrieve name, description, price, url, category and ingredients and pass in into MenuItem as props
                            filteredDishes.filter(obj => obj.Category.includes('Sides')).map((item) => 
                                <div key={item._id}>
                                <MenuItem item_id={item.Dish_id} name={item.DishName} description={item.Description} price={item.Price} category={item.Category} url={item.imageURL}/>
                                </div>
                            )
                        }
                        
                        </div>
                    </div>:null}
                     {/* End of Section 3 */}

                     
                </div>
               
            </div>
        </div>
    );
};



export default Menu;