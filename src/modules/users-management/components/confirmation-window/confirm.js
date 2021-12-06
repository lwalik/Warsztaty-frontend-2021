import React from "react";
import { useUsersFeatureProvider } from "../../providers/UsersFeatureProvider";

import "./confirm.css";

const Confirm = () => {
  const { isUserLoading, user, fetchUser } = useUsersFeatureProvider();
  const { isClicked, setClicked } = useUsersFeatureProvider();

  return (
    <div className="confirm-window">
      {/* {isClicked && ( */}
      {/* <> */}
      <p className="confirm-text">Are you sure?</p>
      <button className="delete-button">
        <span>DELETE</span>
      </button>
      <button className="back-button">
        <span>Close</span>
      </button>
      {/* </> */}
      {/* )} */}
    </div>
  );
};

export default Confirm;
