import React from "react";

function Navbar(){
    return <nav className="nav">
<a href="/" className="site-title">Cover</a>
<ul>
<li className="active">
<a href="/Home" className="nav-link">Home</a>
</li>
<li className="inactive">
<a href="/Features" className="nav-link">Features</a>
</li>
<li className="inactive">
<a href="/Contact" className="nav-link">Contact</a>
</li>
</ul>

    </nav>
    
}

export default Navbar;