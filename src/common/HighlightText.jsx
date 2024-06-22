import parse, { domToReact } from "html-react-parser";

const HighlightText = ( text, highlight ) => {
    debugger
  const highlightText = (text, highlight) => {
    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);

    return parts
      .map((part) => (regex.test(part) ? `<b >${part}</b>` : part))
      .join("");
  };
  if (text && highlight) {
    const parsedText = highlightText(text, highlight);

  return parse(parsedText);
  }
  return text
  
};

export default HighlightText;
