import React, { useState, useRef, useEffect } from 'react'

export function ExampleComponent(props) {
  const [displayHeight, setDisplayHeight] = useState(0)
  const [dropdownListOpen, setDropdownListOpen] = useState([])
  const [dropdownListHeight, setDropdownListHeight] = useState([])
  const [currentDropdown, setCurrentDropdown] = useState(0)
  const delayTiming = props.delay ? props.delay : 0.64

  const divRef = useRef({})
  const divRef2 = useRef({})

  async function toggleDropdown2(id) {
    const newList = []
    // console.log(id)
    // console.log(dropdownListOpen[id])
    let additionalHeight = divRef2.current[id].scrollHeight

    if (dropdownListOpen[id] === false) {
      // opening it
      for (let index = 0; index < dropdownListOpen.length; index++) {
        const element = dropdownListOpen[index]
        if (index === id) {
          newList.push(true)
        } else {
          if (props.autoClose) {
            newList.push(false)
          } else {
            newList.push(element)
          }
        }
      }

      // console.log(dropdownListOpen)
      // for (
      //   let index = currentDropdown + 1;
      //   index < dropdownListOpen.length;
      //   index++
      // ) {
      //   console.log(index)
      //   const element = dropdownListOpen[index]
      //   console.log('abcdefg')
      //   console.log(element)
      //   if (element === true) {
      //     // if (element === false) {
      //     //   console.log('break')
      //     //   break
      //     // }
      //     console.log('here')
      //     console.log(element.scrollHeight)
      //     additionalHeight += element.scrollHeight
      //   }
      // }

      // if (props.autoClose === false) {
      //   console.log('dropdownListOpen')
      //   console.log(dropdownListOpen)
      //   for (
      //     let index = currentDropdown;
      //     index < dropdownListOpen.length;
      //     index++
      //   ) {
      //     console.log('a1')
      //     console.log('index', index)
      //     if (dropdownListOpen[index] === true) {
      //       additionalHeight += divRef2.current[index].scrollHeight
      //       console.log('b1')
      //     }
      //   }
      // }

      console.log(dropdownListOpen)
      console.log(id)
      console.log(dropdownListOpen.length)
      for (let index = id; index > dropdownListOpen.length; index++) {
        console.log(index)
        const element = dropdownListOpen[index]
        console.log('abcdefg')
        console.log(element)
        if (element === true) {
          // if (element === false) {
          //   console.log('break')
          //   break
          // }
          console.log('here')
          console.log(index)
          console.log(divRef2.current[index].scrollHeight)
          console.log(additionalHeight)
          additionalHeight += divRef2.current[index].scrollHeight
          console.log(additionalHeight)
        }
      }

      console.log('right here')

      setDisplayHeight(displayHeight + additionalHeight)
      setCurrentDropdown(currentDropdown + 1)

      console.log(newList)
    } else {
      let totalMinus = 0
      if (props.autoClose === false) {
        // console.log('False Auto Close')
        for (let index = 0; index < dropdownListOpen.length; index++) {
          const element = dropdownListOpen[index]
          if (index === id) {
            newList.push(false)
          } else {
            newList.push(element)
          }
        }
        for (let index = newList.length; index > id; index--) {
          // console.log(index - 1)
          // console.log(divRef2.current[index - 1].scrollHeight)
          if (dropdownListOpen[index - 1] === true) {
            totalMinus += divRef2.current[index - 1].scrollHeight
            // console.log(totalMinus)
          }
        }
        setDisplayHeight(displayHeight - totalMinus)
        // console.log(newList)
      } else {
        // console.log('closing it')
        for (let index = 0; index < dropdownListOpen.length; index++) {
          const element = dropdownListOpen[index]
          if (index >= id) {
            newList.push(false)
          } else {
            newList.push(element)
          }
        }
        for (let index = newList.length; index > id; index--) {
          // console.log(index - 1)
          // console.log(divRef2.current[index - 1].scrollHeight)
          if (dropdownListOpen[index - 1] === true) {
            totalMinus += divRef2.current[index - 1].scrollHeight
            console.log(totalMinus)
          }
        }
        setDisplayHeight(displayHeight - totalMinus)
        // console.log(newList)
      }
    }

    console.log('locating')

    setDropdownListOpen(newList)

    // console.log(dropdownListOpen)
    // console.log(id)
    // console.log(dropdownListOpen.length)
    // for (let index = id; index < dropdownListOpen.length; index++) {
    //   console.log(index)
    //   const element = dropdownListOpen[index]
    //   console.log('abcdefg')
    //   console.log(element)
    //   if (element === true) {
    //     // if (element === false) {
    //     //   console.log('break')
    //     //   break
    //     // }
    //     console.log('here')
    //     console.log(index)
    //     console.log(divRef2.current[index].scrollHeight)
    //     console.log(additionalHeight)
    //     additionalHeight += divRef2.current[index].scrollHeight
    //     console.log(additionalHeight)
    //   }
    // }

    // setDisplayHeight(displayHeight + additionalHeight)

    console.log(newList)
  }

  useEffect(() => {
    for (let index = 0; index < props.dropdownContent.length; index++) {
      console.log('debugging')
      setDropdownListOpen((prev) => [...prev, false])
      // setDropdownListHeight([
      //   ...dropdownListHeight,
      //   divRef2.current[index].scrollHeight
      // ])
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
