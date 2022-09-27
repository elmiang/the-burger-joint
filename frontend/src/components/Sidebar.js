import React from "react";


const Sidebar = () => {
    return ( 
        <div className="container-fluid">
            <div id="sidebar" className="d-flex flex-column gap-2 gx-5 col-xl-2 pt-5 p-3 text-center list-group">
                <a className="list-group-item list-group-item-action" href="#section-1">Section 1</a>
                <a className="list-group-item list-group-item-action" href="#section-2">Section 2</a>
                <a className="list-group-item list-group-item-action" href="#section-3">Section 3</a>
            </div>
        </div>
    );
};
export default Sidebar;