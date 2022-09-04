import React from "react";
import MenuItem from "../components/MenuItem";
import Sidebar from "../components/Sidebar";

const Menu = () => {
    return ( 
        
        <div class="container-fluid ">
            <div class="row">
            <Sidebar/>
                <div class="col-2 bg-dark"></div>
                {/* Menu */}
                <div data-bs-spy="scroll" data-bs-target="#sidebar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="col py-5 p-5 scrollspy-example rounded-2" tabindex="0">
                    
                    {/* Menu: Section 1*/}
                    <h3 id="section-1" class="p-2 text-white">Section 1</h3>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <MenuItem/>
                        <MenuItem/>
                        <MenuItem/>
                        <MenuItem/>
                        <MenuItem/>
                        <MenuItem/>
        
                    </div>
                    {/* End of Section 1 */}


                    {/* Menu: Section 2*/}
                    <h3 id="section-2" class="p-3 text-white">Section 2</h3>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <MenuItem/>
                        <MenuItem/>
                        <MenuItem/>
                        <MenuItem/>
                        <MenuItem/>
                        <MenuItem/>
                    </div>
                    {/* End of Section 2 */}

                    {/* Menu: Section 3*/}
                    <h3 id="section-3" class="p-3 text-white">Section 3</h3>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <MenuItem/>
                        <MenuItem/>
                        <MenuItem/>
                        <MenuItem/>
                        <MenuItem/>
                        <MenuItem/>
                    </div>
                     {/* End of Section 3 */}

                     
                </div>
               
            </div>
        </div>
    );
};



export default Menu;