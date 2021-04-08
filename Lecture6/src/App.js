    import React, {Component} from 'react';
    
    import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
    import Items from './components/items';
    import ItemsAlt from './components/items-alt';
    import Home from './components/home';
    import About from './components/about';

    class App extends Component {
      state = {
        items: []
      }

      render () {
        return (
          <Router>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/items">Items (with class)</Link>
                </li>
                <li>
                  <Link to="/items-alt">Items (with function)</Link>
                </li>
              </ul>

            <hr />

            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/items">
                <Items items={this.state.items}/>
              </Route>
              <Route path="/items-alt">
                <ItemsAlt items={this.state.items}/>
              </Route>
              <Route path="*" component={Home}/>
            </Switch>
          </div>
        </Router>          
        );
      }      

      componentDidMount() {
        fetch('http://localhost:3000/items')
        .then(res => res.json())
        .then((data) => {
          this.setState({ items: data  })
        })
        .catch(console.log)
      }      

    }

    export default App;
