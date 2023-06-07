import { useEffect, useState } from "react";

function Dropdown() {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        let handler = () => {
            setOpen(false);
        }
        document.addEventListener("mousedown", handler);
    })

    return (
        <div className="Drop">
            <div className="menu-container">
                <div onClick={() => {setOpen(!open)}} className="menu-trigger">
                    <i className={`fa fa-star-o ${open? 'active' : 'inactive'}`} style={{ fontSize: 70 }}></i>
                </div>
            </div>

            <div className={`drop-menu ${open? 'active' : 'inactive'}`}>
                <ul>
                    <DropdownItem text={"BTS"}/>
                    <DropdownItem text={"TWICE"}/>
                </ul>
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