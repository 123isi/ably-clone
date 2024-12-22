import React from "react";
import "./cssfile/header.css"; 

import bag from  "./assets/bag1.svg";
function Header() {
    return (
        <header className="header">
            <button>하나만 사도 무료배송</button>
            <img src={bag} alt="bag" class='bag1'/>
        </header>
    );
}

export default Header; 
