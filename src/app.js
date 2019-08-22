import React from "react";
import { observer } from "mobx-react";

@observer
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>Hello!</div>;
  }
}

export default App;
