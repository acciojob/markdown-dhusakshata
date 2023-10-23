<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React from 'react';
import './App.css';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreview from './components/MarkdownPreview';

function App() {
  return (
    <div className="app">
      <MarkdownEditor />
      <MarkdownPreview />
    </div>
  );
}

export default App;
