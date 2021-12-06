import React, { useState } from "react";
import UsersManagementModule from "./modules/users-management/UsersManagementModule";
import CheckersModule from "./modules/checkers/CheckersModule";
import Loading from "./components/loading/Loading";
import Navbar from "./components/navbar/Navbar";
import "./styles.css";

const App = () => {
  const [pick, setPick] = useState();

  if (pick === true) {
    return (
      <div className="App">
        <Navbar setPick={setPick} />
        <UsersManagementModule />
      </div>
    );
  } else if (pick === false) {
    return (
      <div className="App">
        <Navbar setPick={setPick} />
        <CheckersModule />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Navbar setPick={setPick} />
      </div>
    );
  }
  // return (
  //   <div className="App">
  //     {/* <PickModule setPick={setPick} /> */}
  //     {/* <Loading /> */}
  //     {/* <UsersManagementModule /> */}
  //     {/* <CheckersModule /> */}
  //   </div>
  // );
};

export default App;
