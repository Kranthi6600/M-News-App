import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


class App extends React.Component {

  pageSize = 10;

  render() {
    return <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/"
            element={<News key='general' pageSize={this.pageSize} category="general" country="us" />}>
          </Route>
          <Route exact path="/business"
            element={<News key='business' pageSize={this.pageSize} category="business" country="us" />}>
          </Route>
          <Route exact path="/entertainment"
            element={<News key='entertainment' pageSize={this.pageSize} category="entertainment" country="us" />}>
          </Route>
          <Route exact path="/health"
            element={<News key='health' pageSize={this.pageSize} category="health" country="us" />}>
          </Route>
          <Route exact path="/science"
            element={<News key='science' pageSize={this.pageSize} category="science" country="us" />}>
          </Route>
          <Route exact path="/sports"
            element={<News key='sports' pageSize={this.pageSize} category="sports" country="us" />}>
          </Route>
          <Route exact path="/technology"
            element={<News key='technology' pageSize={this.pageSize} category="technology" country="us" />}>
          </Route>
        </Routes>
      </Router>
    </div>;
  }
}

export default App;