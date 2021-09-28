import authGoogle from "../../../utils/autoGoogle";

import { setName } from "./index";
export const authUser = () => {
  return (dispatch: any) => {
    authGoogle()
      .then((result) => {
        const displayName = result.user.displayName;
        if (displayName) {
          dispatch(setName(displayName));
        }
      })
      .catch((err) => console.log(err));
  };
};
