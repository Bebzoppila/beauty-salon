import { Link } from "react-router-dom";
import HeaderMenu from "./headerMenu";
import HeaderIcon from "./headerIcon";
import HeaderIcons from "./headerIcons";
const Header = () => {
  const headerMenu = [
    { to: "/", text: "Услуги и цены" },
    { to: "/", text: "Галерея" },
    { to: "/", text: "3D тур" },
    { to: "/", text: "Продукция" },
    { to: "/", text: "Отзывы" },
    { to: "/", text: "Статьи" },
    { to: "/", text: "Контакты" },
  ];
  const headerIcons = [
    { to: "/", img: "/images/headerIcons/instagram.png" },
    { to: "/", img: "/images/headerIcons/telegram.png" },
    { to: "/", img: "/images/headerIcons/whatsapp.png" },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <Link to="/">
              <img src="/images/logo.png" alt="Логотип" />
            </Link>
          </div>
          <div className="header__menu">
            <HeaderMenu menuItems={headerMenu}></HeaderMenu>
          </div>
          <HeaderIcon img="/images/headerIcons/card.png" to="/" />
          <div className="header__phone phone">
            <span className="phone-text">Контакты</span>
            <a className="phone__link" href="tel:323123123">
              +7 (499) 490-04-13
            </a>
          </div>
          <HeaderIcons headerIcons={headerIcons} />
        </div>
      </div>
    </header>
  );
};

export default Header;
