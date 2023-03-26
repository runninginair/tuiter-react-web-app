import React from 'react';
import Labs from './labs';
import HelloWorld from './labs/a6/hello-world';
import Tuiter from './tuiter';
import { BrowserRouter, Link } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import TodosthList from './screens/todosth/todosth-list';
import TodosScreen from './screens/todos-screen';
import ProfileScreenDemo from './screens/profile-demo/profile-screen-demo';
import { Provider } from 'react-redux';
import store from './tuiter/data/store';
import HomScreenDemo from './screens/profile-demo/home-screen';
import CounterScreen from './screens/counter-screen';
import './App.css';

// For Mar 13 class modulers Redux 
// import ProfileScreen2 from "";

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
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">

          {/* <!-- Following four links are Course demo projects --> */}
          {/* <Link to="/home-demo"> HomeDemo </Link> |
          <Link to="/profile-demo"> ProfileDemo </Link> |
          <Link to="/counter-demo"> CounterDemo </Link> |
          <Link to="/todos-demo"> TodosDemo</Link> */}

          <Routes>
            <Route path="/*" element={<Labs />} />
            <Route path="/hello" element={<HelloWorld />} />
            <Route path="/tuiter/*" element={<Tuiter />} />

            <Route path="/todosth" element={<TodosthList />} />
            <Route path="/home-demo" element={<HomScreenDemo />} />
            <Route path="/profile-demo" element={<ProfileScreenDemo />} />
            <Route path="/counter-demo" element={<CounterScreen />} />
            <Route path="/todos-demo" element={<TodosScreen />} />

          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
