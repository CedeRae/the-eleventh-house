const createFoot = () => {
    let footer = document.querySelector('.footer');

    footer.innerHTML = `
    <div id="foot-logo">
        <img src="images/LogoMakr-0B8gIG.png">
        <h1>the eleventh house</h1>
    </div>  

    <div id="about">
        <p>About Company</p>
        <p> Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
        <br>
        <p>Support email: help@eleventh-house.com</p>
        <p>Telephone: (180) 000 0001</p>
        <br>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms and Services</a>
    </div>
    `
};

createFoot();