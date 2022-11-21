import React from "react";

import InfiniteDropdown from "infinite-accordion";

const App = () => {
  return (
    <div>
      <InfiniteDropdown
        buttonContent={[
          <>Welcome to infinite dropdown</>,
          <>Learn More</>,
          <StyledButton />,
          <LearnMore />,
        ]}
        buttonStyle={[
          {},
          {},
          {},
          // { borderRadius: "30px", padding: "30px" },
          {
            backgroundColor: "yellow",
            borderRadius: "30px",
            padding: "30px",
            outline: "none",
            border: "none",
          },
        ]}
        dropdownContent={[
          <>
            <h1>
              Infinite Dropdown enables you to have dropdowns within dropdowns.
            </h1>
          </>,
          <>
            <p>
              You can, of course, have basically anything within these
              dropdowns, including text, images, buttons, etc.
            </p>
            <img
              src="https://via.placeholder.com/350x150"
              alt="Example Image"
            />
            <p>
              <button onClick={() => alert("Hello World")}>Click Me</button>
            </p>
          </>,
          <StyledElementExample />,
          <LearnMoreExplanation />,
        ]}
        // autoClose={true}
        // delay={10}
      />
    </div>
  );
};

function StyledButton() {
  return <>See Styling</>;
}
function StyledElementExample() {
  return (
    <div style={{ backgroundColor: "red", padding: "15px" }}>
      <h3>You can style your content however you like.</h3>
      <h5>You can even style the buttons</h5>
    </div>
  );
}

function LearnMore() {
  return <>Learn more about Infinite Accordion</>;
}

function LearnMoreExplanation() {
  return (
    <>
      <h2>Infinite Dropdown Customizability</h2>
      <h5>
        You can even customize the speed the dropdown comes down is also
        customizable.
      </h5>
      <h3>Dropdown Speed</h3>

      <p>
        Using <code>delay</code> you can increase or decrease the speed the
        dropdown opens and closes. The default is 0.64 seconds which to me feels
        exactly right.
      </p>
      <h3>Automatic Close</h3>
      <p>
        By making <code>autoClose=true</code> when you close a accordion, all
        the daughter accordion's will also be closed. This is turned off by
        default but can be turned on.
      </p>
    </>
  );
}

export default App;
