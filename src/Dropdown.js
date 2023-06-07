import React, { useEffect, useState, useRef } from "react";

function Dropdown() {

    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if(!menuRef.current.contains(e.target)){
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
        }
        
    })

    return (
        <div className="Drop">
            <div className="menu-container" ref={menuRef}>
                <div className="menu-trigger" onClick={() => {setOpen(!open)}} >
                    <i className={`fa fa-star-o ${open? 'active' : 'inactive'}`} style={{ fontSize: 70 }}></i>
                </div>
            
                <div className={`drop-menu ${open? 'active' : 'inactive'}`}>
                    <ul>
                        <DropdownItem text={"BTS"}/>
                        <DropdownItem text={"TWICE"}/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

function DropdownItem(props) {
    return (
        <li className="dropdownItem">
            <p>{props.text}</p>    
        </li>
    )
}

export default Dropdown;