import React from 'react' 
import "./Header.css";
import Menslife from './Component/Menslifestyle'


function Header() {
  return (
    <div className="header_comp">
      <div className="top_bar">
        <div> 
          <ul>
            <li>Search</li>
            <li>Menu</li>
          </ul>
        </div>
        <div>LOGO</div>
        <div>
          <ul>
            <li>User</li>
            <li>heart</li>
            <li>cart</li>
          </ul>
        </div>
      </div>
    <Menslife />
    
    </div>
  );
}

export default Header;
