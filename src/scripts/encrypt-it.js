/*
 * Starter file
 */
(function () {
  ("use strict");

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log("Window loaded!");

    // assign event to button Encrypt-it
    const encryptBtn = document.getElementById("encrypt-it");
    encryptBtn.onclick = () => {
      encryptIt();
    };
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  /**
   * Encrypt function:
   * cipher the text by 'n'
   */
  async function encryptIt() {
    // resulting string/text
    let textResult = "";
    let textSize = "12pt";

    // Get element by id
    let text = await document.getElementById("input-text").value;
    let cipher = await document.getElementById("cipher-type").value;
    const paragraph = await document.getElementById("result");
    const allCaps = await document.getElementById("all-caps").checked;
    const fontSize = await document.getElementsByName("text-size");

    // set text to lower case
    text = text.toLowerCase();

    // cipher the text by n
    if (cipher === "random") {
      const n = Math.floor(Math.random() * 100) % 26;
      textResult = await shiftCipher(text, n);
    } else {
      textResult = await shiftCipher(text, 1);
    }

    // text size
    for (let i = 0; i < fontSize.length; i++) {
      if (fontSize[i].checked) {
        textSize = fontSize[i].value;
        break;
      }
    }

    // Set font size
    paragraph.style.fontSize = textSize;

    // return result:
    if (allCaps) {
      paragraph.textContent = textResult.toUpperCase();
    } else {
      paragraph.textContent = textResult;
    }
  }

  /**
   *  shift text by n.
   */
  function shiftCipher(text, n) {
    // last character after shift by 'n':
    const z = "z";
    const lastChar = z.charCodeAt(0) - n;
    // console.log("last char: " + lastChar);

    // the outcome string after shifting
    let str = "";

    // Temporal variable
    let tempCCode = 0;

    // for each letter
    for (let i = 0; i < text.length; i++) {
      // get Character Code and store in variable
      tempCCode = text.charCodeAt(i);

      // if the character code is greater than 'z' or less than 'a'
      // concatenate the character to the string
      if (tempCCode < "a" || tempCCode > "z") {
        str += text.charAt(i);
      }
      // Else if char-code is greater than the last acceptable character,
      // mod it and add char code of 'a' to it.
      else if (tempCCode > lastChar) {
        const a = "a";
        str += String.fromCharCode(
          a.charCodeAt(0) - 1 + (tempCCode % lastChar)
        );
      }
      // else shift the character code by n
      else {
        str += String.fromCharCode(tempCCode + n);
      }
    }

    return str;
  }
})();
