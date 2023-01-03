import { Checkbox } from "@mui/material";
import { useContext } from "react";
// import { ProfileComponent } from "./ProfilePage";


function ProfileComponent(props) {
    return (
        <>
            <Checkbox checked={props.cccValue} />
        </>
    )
}

const WithContext = function (Component) {
    return (props) => {
        const contextValue = useContext(ProfileContext);
        return <Component {...props} cccValue={contextValue.cccValue} />
    }
}



export default WithContext(ProfileComponent)

