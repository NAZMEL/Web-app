import userIcon from "../../../assets/images/userIcon.png";
import UserIcon from "./UserIcon";

let UserIconContainer = (props) =>{
    let imgPath = props.imgPath != null ? props.imgPath : userIcon;

    return (
        <UserIcon imgPath={imgPath}/>
    )
}

export default UserIconContainer;