import { Checkbox } from "@mui/material";
import { useContext } from "react";
// import { ProfileComponent } from "./ProfilePage";
import { ProfileContext } from "../../contexts/ProfileContext";

export function ProfileContextComponent(props) {
    const contextValue = useContext(ProfileContext);
    return (
        <>
            <Checkbox disabled {...props} checked={contextValue.cccValue} />
        </>
    )
}

// const WithContext = function (Component) {
//     return (props) => {
//         const contextValue = useContext(ProfileContext);
//         return <Component {...props} cccValue={contextValue.cccValue} />
//     }
// }



// export default WithContext(ProfileContextComponent)

