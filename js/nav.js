const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="search">
        <input type="text" class="search-box" placeholder="Search product by name...">
        <button class="search-button">Search</button>
    </div>

    <div class="header">
        <div class="logo">
            <img id="logo-img" src="images/LogoMakr-0h38RJ.png" alt="hippie sun/moon astrology logo">
            <h1 id="title">eleventh house</h1>
        </div>
        <div class="icons">
            <a id="user" href="#"><i class="fa fa-user-circle-o"></i></i></a>
            <a id="cart" href="#"><i class="fa fa-shopping-bag"></i></a>
        </div>
    </div>

    <div class="nav-list">
    <input type="checkbox" id="check">
    <label for="check">
        <i id="down" class="fa fa-angle-down"></i>
        <i id="up" class="fa fa-angle-up"></i>
    </label>
    <ul>
        <li><a href="index.html">Our picks</a></li>
        <li><a href="#">Tops</a></li>
        <li><a href="#">Pants</a></li>
        <li><a href="#">Skirts</a></li>
        <li><a href="#">Accessories</a></li>
    </ul>
    </div>
    `
};

createNav();