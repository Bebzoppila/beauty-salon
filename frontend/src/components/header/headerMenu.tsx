import { FC } from "react"
import { Link } from "react-router-dom";
type headerMenuItem = {
    to: string,
    text: string,

}

type headerMenuProps = {
    menuItems: headerMenuItem[]
}

const HeaderMenu:FC<headerMenuProps> = ({menuItems}) => {

    return (
        <ul className="menu">
              {menuItems.map((menuItem) => (
                <li className="menu__item">
                  <Link className="menu__item-link" to={menuItem.to}>{menuItem.text}</Link>
                </li>
              ))}
            </ul>
    )
}

export default HeaderMenu