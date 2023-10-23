//<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React from 'react';
import './styles/App.css';
import MarkdownEditor from './MarkdownEditor';
import MarkdownPreview from './MarkdownPreview';

function App() {
  return (
    <div className="app">
      <MarkdownEditor />
      <MarkdownPreview />
    </div>
  );
}

export default App;
