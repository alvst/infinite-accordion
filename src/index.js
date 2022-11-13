import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react'

export function ExampleComponent(props) {
  const [displayHeight, setDisplayHeight] = useState(0)
  const [dropdownListOpen, setDropdownListOpen] = useState([])
  const [dropdownListHeight, setDropdownListHeight] = useState([])
  const [currentDropdown, setCurrentDropdown] = useState(0)
  const [settingsDropDownState, setSettingsDropDownState] = useState(false)
  const delayTiming = props.delay ? props.delay : 0.64

  const divRef = useRef({})
  const divRef2 = useRef({})

  async function toggleFileSettings() {
    setSettingsDropDownState(!settingsDropDownState)

    // setCurrentDropdown(currentDropdown + 1);

    if (props.autoClose === true) {
      setDisplayHeight(
        settingsDropDownState ? 0 : divRef2.current[0].scrollHeight
      )
    } else {
      setDisplayHeight(
        settingsDropDownState ? 0 : divRef2.current[0].scrollHeight
      )
    }
    console.log(
      'divRef2.current[' + currentDropdown + ']',
      divRef2.current[currentDropdown].scrollHeight
    )
    // console.log(currentDropdown)

    console.log('THis is what should be priting')
  }

  async function toggleDropdown(id) {
    const newList = []

    console.log('abc')
    console.log('currentDropdown ', currentDropdown)
    console.log('id ', id)

    console.log(divRef2.current[id + 1].scrollHeight)

    if (currentDropdown === id) {
      setDisplayHeight(displayHeight + divRef2.current[id + 1].scrollHeight)
      setCurrentDropdown(currentDropdown + 1)
      for (let index = 0; index < dropdownListOpen.length; index++) {
        const element = dropdownListOpen[index]
        if (index === id) {
          newList.push(true)
        } else {
          newList.push(element)
        }
      }
      setDropdownListOpen(newList)
    } else {
      if (props.autoClose === true) {
        // setSettingsDropDownState(!settingsDropDownState);
        setSettingsDropDownState(false)
        setDisplayHeight(0)
      } else {
        let height = 0
        for (let index = 0; index < id + 1; index++) {
          height += divRef2.current[index].scrollHeight
        }
        setDisplayHeight(height)
      }

      setCurrentDropdown(id)
    }
  }

  async function toggleDropdown2(id) {
    const newList = []
    console.log(id)
    console.log(dropdownListOpen[id])
    if (dropdownListOpen[id] === false) {
      // opening it
      for (let index = 0; index < dropdownListOpen.length; index++) {
        const element = dropdownListOpen[index]
        if (index === id) {
          newList.push(true)
        } else {
          newList.push(element)
        }
      }

      setDisplayHeight(displayHeight + divRef2.current[id].scrollHeight)
      setCurrentDropdown(currentDropdown + 1)

      console.log(newList)
    } else {
      console.log('closing it')
      for (let index = 0; index < dropdownListOpen.length; index++) {
        const element = dropdownListOpen[index]
        if (index >= id) {
          newList.push(false)
        } else {
          newList.push(element)
        }
      }
      let totalMinus = 0
      for (let index = newList.length; index > id; index--) {
        console.log(index - 1)
        console.log(divRef2.current[index - 1].scrollHeight)
        if (dropdownListOpen[index - 1] === true) {
          totalMinus += divRef2.current[index - 1].scrollHeight
          console.log(totalMinus)
        }
      }
      setDisplayHeight(displayHeight - totalMinus)
      console.log(newList)
    }
    setDropdownListOpen(newList)
  }

  useEffect(() => {
    for (let index = 0; index < props.dropdownContent.length; index++) {
      console.log('debugging')
      setDropdownListOpen((prev) => [...prev, false])
      setDropdownListHeight([
        ...dropdownListHeight,
        divRef2.current[index].scrollHeight
      ])
    }
  }, [])

  function Render() {
    const renderer = []
    for (let i = 0; i < props.dropdownContent.length; i++) {
      renderer.push(
        <div key={i}>
          <div ref={(ref) => (divRef2.current[i] = ref)}>
            {/* This style is a complete hack and I don't know why its required but removing it makes the div height calculated incorrectly. Feel free to try it yourself and if you know why this is the case, please fill a PR */}
            <div style={{ border: '1px transparent solid' }}>
              {props.dropdownContent[i]}
            </div>
            {i < props.dropdownContent.length - 1 ? (
              <button
                style={props.buttonStyle[i]}
                ref={(ref) => (divRef.current[i] = ref)}
                onClick={() => toggleDropdown2(i + 1)}
              >
                {props.buttonContent[i]}
              </button>
            ) : null}
          </div>
        </div>
      )
    }
    return renderer
  }

  return (
    <div>
      <button style={props.buttonStyle[0]} onClick={() => toggleDropdown2(0)}>
        {props.buttonContent[0]}
      </button>

      <div
        style={{
          maxHeight: `${displayHeight}px`,
          overflowY: 'hidden',
          width: '100%',
          transition: `max-height ${delayTiming}s ease`
        }}
      >
        <div style={{ border: '1px transparent solid' }}>{Render()}</div>
      </div>
    </div>
  )
}
