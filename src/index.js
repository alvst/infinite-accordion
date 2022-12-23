import React, { useState, useRef, useEffect } from "react";

export default function InfiniteDropdown(props) {
  const [displayHeight, setDisplayHeight] = useState(0);
  const [dropdownListOpen, setDropdownListOpen] = useState([]);
  const delayTiming = props.delay ? props.delay : 0.64;

  const divRef = useRef({});
  const divRef2 = useRef({});

  function toggleDropdown6(id) {
    const newList = [];
    // console.log(props.autoClose);
    if (dropdownListOpen[id] === false) {
      for (let index = 0; index < dropdownListOpen.length; index++) {
        if (props.autoClose) {
          const element = dropdownListOpen[index];
          if (index === id) {
            newList.push(true);
          } else {
            // console.log("Not Hitting  Autoclose");
            newList.push(element);
          }
        } else {
          if (index <= id) {
            newList.push(true);
          } else {
            newList.push(false);
          }
        }
      }

      setDropdownListOpen(newList);
      // setCurrentDropdown(id);
      let additionalHeight = divRef2.current[id].scrollHeight;
      if (props.autoClose) {
        for (let index = id + 1; index < dropdownListOpen.length; index++) {
          const element = dropdownListOpen[index];
          if (element === true) {
            additionalHeight += divRef2.current[index].scrollHeight;
          } else {
            break;
          }
        }
      }
      setDisplayHeight(displayHeight + additionalHeight);
    } else {
      for (let index = 0; index < dropdownListOpen.length; index++) {
        const element = dropdownListOpen[index];
        if (index === id) {
          newList.push(false);
        } else {
          newList.push(element);
        }
      }
      let totalMinus = 0;
      // starting in that array, traverse through until there is one that is false and get the sum of those heights
      for (let index = id; index < dropdownListOpen.length; index++) {
        const element = dropdownListOpen[index];
        if (element === true) {
          totalMinus += divRef2.current[index].scrollHeight;
        } else {
          break;
        }
      }
      setDisplayHeight(displayHeight - totalMinus);
      setDropdownListOpen(newList);
    }
  }

  useEffect(() => {
    for (let index = 0; index < props.dropdownContent.length; index++) {
      setDropdownListOpen((prev) => [...prev, false]);
    }
  }, []);

  function Render() {
    const renderer = [];
    for (let i = 0; i < props.dropdownContent.length; i++) {
      renderer.push(
        <div
          key={i}
          style={props.dropdownStyle[i]}
          className={props.dropdownClass[i]}
        >
          <div ref={(ref) => (divRef2.current[i] = ref)}>
            {/* This style is a complete hack and I don't know why its required but removing it makes the div height calculated incorrectly. Feel free to try it yourself and if you know why this is the case, please fill a PR */}
            <div style={{ border: "1px transparent solid" }}>
              {props.dropdownContent[i]}
            </div>
            {i < props.dropdownContent.length - 1 ? (
              <button
                style={props.buttonStyle[i + 1]}
                className={props.buttonClass[i + 1]}
                ref={(ref) => (divRef.current[i] = ref)}
                onClick={() => toggleDropdown6(i + 1)}
              >
                {props.buttonContent[i + 1]}
              </button>
            ) : null}
          </div>
        </div>
      );
    }
    return renderer;
  }

  return (
    <div>
      <button
        style={({ cursor: "grab" }, props.buttonStyle[0])}
        className={props.buttonClass[0]}
        onClick={() => toggleDropdown6(0)}
      >
        {props.buttonContent[0]}
      </button>

      <div
        style={{
          maxHeight: `${displayHeight}px`,
          overflowY: "hidden",
          width: "100%",
          transition: `max-height ${delayTiming}s ease`,
        }}
      >
        <div style={{ border: "1px none solid" }}>{Render()}</div>
      </div>
    </div>
  );
}
