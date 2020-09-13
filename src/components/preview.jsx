import React from "react";
import { parse } from "marked";
import DOMPurify from "dompurify";
import StatusBar from "./statusBar";
const Preview = ({ editorText }) => {
  let options = { breaks: true };
  let markup = editorText ? DOMPurify.sanitize(parse(editorText, options)) : "";
  return (
    <div className="preview">
      <StatusBar name={"Previewer"} />
      <div
        className="previewer"
        id="preview"
        dangerouslySetInnerHTML={{
          __html: markup,
        }}
      >
        {/* {editorText ? DOMPurify.sanitize(parse(editorText)) : ""} */}
      </div>
    </div>
  );
};
export default Preview;
