import React from 'react';

const Header=()=>{
    return <div className="header-box">
        <div className="header-box--logo">
            <h2>Shoppie</h2>
        </div>
        <div className="header-box--nav">
            <nav>
                <a href="#">Mobile</a>
                <a href="#">Laptop</a>
                <a href="#">Books</a>
                <a href="#">Sale</a>
            </nav>
        </div>
        <div className="header-box--user">
            <div className="header-login">Login</div>
        </div>
    </div>
}

export default Header;
