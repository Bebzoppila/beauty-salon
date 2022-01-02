
import { FC } from "react";
import HeaderIcon from "./headerIcon";
import { HeaderIconProps } from "./headerIcon"
type HeaderIconsProps = {
    headerIcons: HeaderIconProps[]
}

const HeaderIcons:FC<HeaderIconsProps> = ({headerIcons}) => {

    return(
        <div className="header__icons">
            {
                headerIcons.map(iconItem => <HeaderIcon img={iconItem.img} to={iconItem.to} />)
            }
        </div>
    )
}

export default HeaderIcons