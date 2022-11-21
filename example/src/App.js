import React from "react";

import InfiniteDropdown from "infinite-accordion";

const App = () => {
  return (
    <div>
      <InfiniteDropdown
        buttonContent={[
          <DropdownButtonOne />,
          <> Nested Button 2 Dropdown</>,
          <>
            No need to use a button element, it's already nested, all you need
            to do is style it.
          </>,
          // <Content />,
        ]}
        buttonStyle={[
          { backgroundColor: "red", width: "100%" },
          {},
          { borderRadius: "30px", padding: "30px" },
          { backgroundColor: "pink" },
          { backgroundColor: "yellow" },
        ]}
        dropdownContent={[
          <div style={{ backgroundColor: "green" }}>
            <h1>
              Unlike other Dropdown Libraries, Infinite Accordion Dropdown
              allows you to have as many nested dropdowns as you want
            </h1>
            <h3>
              You can have multiple items (as long as they are properly
              wrapped).
            </h3>
          </div>,
          <NestedDropdown />,
          <div style={{ backgroundColor: "pink" }}>
            <p>
              You can customize the speed of the dropdown by passing a delay
              prop.
            </p>
            <p>the default speed is 0.64 seconds.</p>
          </div>,
          <>
            Or, if you want to close all child elements, when you click a
            button, enable autoclose.
          </>,
        ]}
        // autoClose={true}
        // delay={10}
      />
    </div>
  );
};

function NestedDropdown() {
  return (
    <div style={{ backgroundColor: "purple", padding: "15px", color: "red" }}>
      <h2>Infinite Dropdown is fully customizable</h2>
    </div>
  );
}

function DropdownButtonOne() {
  return <>Button 1</>;
}

function DropdownButtonTwo() {
  return (
    <div style={{ background: "transparent", border: "0px solid" }}>
      Styled button
    </div>
  );
}

function DropdownContent2() {
  return (
    <div style={{ backgroundColor: "greenyellow", margin: "0px" }}>
      <p style={{ margin: "0px" }}>Dropdown 2</p>
    </div>
  );
}

export default App;
