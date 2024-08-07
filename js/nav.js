const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="search">
        <input type="text" class="search-box" placeholder="Search product like 'tops'">
        <button class="search-button">Search</button>
    </div>

    <div class="header">
        <ul>
            <li><i class="fa fa-home"></i><a href="index.html">Home</a></li>
            <li><i class="fa fa-sun-o"></i><a href="404.html">Gypsy</a></li>
            <li><i class="fa fa-moon-o"></i><a href="404.html">Bohemia</a></li>
            <li><i class="fa fa-diamond"></i><a href="404.html">Jewelry</a></li>
            <li><i class="fa fa-shopping-bag"></i><a href="404.html">Cart</a></li>
        </ul>
        
    </div>
    `
};

createNav();