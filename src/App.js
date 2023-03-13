import React from 'react';
import Labs from './labs';
import HelloWorld from './labs/a6/hello-world';
import Tuiter from './tuiter';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import TodosthList from './screens/todosth/todosth-list';

/**
 * Function called App that returns some statement.
 * Note how the return statement is returning an HTML tag, not an HTML string.
 * This is possible because React.js uses a library called JSX or JavaScript XML.
 * JSX allows mixing and matching JavaScript and XML seamlessly and HTML is just
 * a particular flavor of XML. This syntax greatly simplifies integrating HTML
 * and JavaScript as if they were two sides of the same coin.
 * @returns HTML tag
 */
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/*" element={<Labs />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/tuiter/*" element={<Tuiter />} />

          <Route path="/todosth" element={<TodosthList />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
