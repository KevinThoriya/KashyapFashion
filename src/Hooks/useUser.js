import * as React from "react";
import { UserContext } from "./userProvider";


const useUser = () => React.useContext(UserContext);

export default useUser;
