    import React, {Component} from 'react';
    import Items from './components/items';
    
    class App extends Component {
      state = {
        items: []
      }

      render () {
        return (
              <Items items={this.state.items} />
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
