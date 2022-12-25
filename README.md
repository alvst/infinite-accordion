# infinite-accordion

## Install

```bash
npm install --save infinite-accordion
```

## Usage

```jsx
import React, { Component } from "react";
import InfiniteDropdown from "infinite-accordion";

class Example extends Component {
  render() {
      <InfiniteDropdown
        buttonContent={[<DropdownButtonOne />, <button> Nested Button 2 Dropdown</button>, <Content />]}
        dropdownClass={[styles["dropdown-style"], styles["dropdown-style"]]}
        dropdownStyle={[{}, { backgroundColor: "aqua" }]}
        buttonStyle={[{ backgroundColor: "red", width: "100%" }]}
        buttonClass={[
          styles["pink-background"],
          {},
        ]}
        dropdownContent={[
          <div style={{ backgroundColor: "green" }}>
            <h1>Unlike other Dropdown Libraries, Infinite Accordion Dropdown allows you to have as many nested dropdowns as you want</h1>
            <h3>You can have multiple items (as long as they are properly wrapped).</h3>
          </div>,
          <NestedDropdown />,
          <NestedDropdown />,
          <div style={{ backgroundColor: "pink" }}>Third Nested Dropdown</div>,
        ]}
        // autoClose={true}
        // delay={10}
      />
      {/* <p>Testing</p> */}
    </div>
  }
}

function DropdownButtonOne(){
  return(
    <div style={{background: 'transparent',  border: '0px solid' }}>Styled button</div>
  )
}

function NestedDropdown(){
  return(
    <div style={{backgroundColor: 'green', padding: '15px', color: 'red'}}>
      <h2>Infinite Dropdown is fully customizable</h2>
    </div>
  )
}

function Content(){
  return(
    <>Some Nice Fun Content</>
  )
}

function DropdownContent2() {
  return (
    <div style={{ backgroundColor: "greenyellow", margin: "0px" }}>
      <p style={{ margin: "0px" }}>Dropdown 2</p>
    </div>
  );
}

```

## Future Features

There are a few features I'm considering adding like the ability to use a custom button for dropping down the content.

## License

MIT © [alvst](https://github.com/alvst)
