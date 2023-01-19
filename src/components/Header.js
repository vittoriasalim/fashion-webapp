
import '../index.css';


function Header() {

    
  return (

    <header class="l-header" id="header">
        <nav class="nav bd-container">
            <a href="#" class="nav__logo">Violetta's Mode</a>

            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item"><a href="/" class="nav__link active-link">Home</a></li>
                    <li class="nav__item"><a href="/shop" class="nav__link">About</a></li>
                    <li class="nav__item"><a href="/about" class="nav__link">Services</a></li>
                    <li class="nav__item"><a href="/contact" class="nav__link">Contact us</a></li>
                    <li><i class='bx bx-moon change-theme' id="theme-button"></i></li>
                </ul>
            </div>
            <div class="nav__toggle" id="nav-toggle">
                <i class='bx bx-menu'></i>
            </div>
        </nav>
    </header>


  );
}

export default Header;
