import { FC } from "react";
import { Link } from "react-router-dom";
export type HeaderIconProps = {
    img: string,
    to: string
}

const HeaderIcon:FC<HeaderIconProps> = ({img}) => {
  return (
    <div className="header__icon">
      <Link className="header__icon-link" to="/">
        <img className="header__icon-img" src={img} alt="Корзинка" />
      </Link>
    </div>
  );
};

export default HeaderIcon;
