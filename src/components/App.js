import React from "react";
import Search from "../containers/Search";
import Repos from "../containers/Repos";

const App = () => (
  <div>
    <Search user="facebook" />
    <Repos />
  </div>
);

export default App;
