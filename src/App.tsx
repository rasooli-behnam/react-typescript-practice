import * as data from "./data.json";
import * as React from "react";
import Items from "./components/Items";
import { CssBaseline } from "@material-ui/core";

class App extends React.Component {
  public render() {
    return (
      <div>
        <CssBaseline />
        <Items items={data.items} />
      </div>
    );
  }
}

export default App;
