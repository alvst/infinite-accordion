import React from "react";

import { ExampleComponent } from "infinite-accordion";

const App = () => {
  return (
    <div>
      <ExampleComponent
        buttonContent={[<Content />, <Content />, <Content />]}
        buttonStyle={[{ backgroundColor: "red", width: "100%" }]}
        dropdownContent={[
          <div style={{ backgroundColor: "green" }}>
            <p style={{ marginTop: "0px" }}>abc</p>
            <h1>this is a longer test</h1>
          </div>,
          <DropdownContent2 />,
          <DropdownContent2 />,
          <DropdownContent2 />,
          <DropdownContent2 />,
          <DropdownContent2 />,
          <div style={{ backgroundColor: "pink" }}>Testing</div>,
        ]}
        autoClose={true}
        // delay={10}
      />
      {/* <p>Testing</p> */}
    </div>
  );
};

function Content() {
  return <div>Button1</div>;
}
// function Testing() {
//   return <h1>Button2</h1>
// }

function DropdownContent2() {
  return (
    <div style={{ backgroundColor: "greenyellow", margin: "0px" }}>
      <p style={{ margin: "0px" }}>Dropdown 2</p>
    </div>
  );
}
// function DropdownContent3() {
//   return <h3>Dropdown 2</h3>
// }

export default App;
