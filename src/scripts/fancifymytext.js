//----------  make the text bigger!  ----------
const handleBigger = () => {
  //   alert("Hello, World!");
  document.getElementById("textArea").style.fontSize = "24px";
};

//---------- Add a '-Moo' at the end of each sentence(.), ------
//           and transform the text to Uppercase.
const handleMoo = async () => {
  // get text from Text-area by id
  const textArea = await document.getElementById("textArea");
  let str = textArea.value;

  // split each sentences by period(.)
  let sentence = str.split(".");

  // add a '-Moo ' after each sentence
  str = sentence.join("-Moo ");
  ``;
  // set the new value of text-area
  textArea.value = str;

  // convert to uppercase
  textArea.style.textTransform = "uppercase";
};

//--------------- Fancyfy my text ---------------
async function changeFontStyle() {
  // get Text-area by id
  const textArea = document.getElementById("textArea");

  // Check if FancyShmancy is checked
  const isFancyChecked = await document.getElementById("fancyShmancy").checked;

  // If FancyShmancy is checked:
  // change the style to bold, blue, and underlined.
  if (isFancyChecked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  }
  // Else, turn the text back to normal.
  else {
    // get text area values:
    let str = textArea.value;

    // split sentences by '-Moo'
    let sentence = str.split("-Moo");

    // join sentences by period(.)
    str = sentence.join(". ");

    // Set the text-area new value
    textArea.value = str.trim();

    // take out all decoration and styles
    textArea.style = "none";
  }
}
