import React from "react";
import StatusBar from "./statusBar";

const Editor = ({ value, handleChange }) => (
  <div className="editor">
    <StatusBar name={"Editor"} />
    <textarea id="editor" value={value} onChange={handleChange}></textarea>
  </div>
);

export default Editor;
