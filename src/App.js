import React, { useState } from "react";
import "./App.scss";
import Editor from "./components/editor";
import Preview from "./components/preview";
import { defaultText } from "./utils/default-text";
import "./utils/logo.png";
function App() {
  let [editorText, setEditorText] = useState(defaultText);
  return (
    <div className="container">
      <Editor
        value={editorText}
        handleChange={(e) => setEditorText(e.target.value)}
      />
      <Preview editorText={editorText} />
    </div>
  );
}

export default App;
