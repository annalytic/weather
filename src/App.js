import React, { Component } from 'react';
import './App.css';

import Weather from './components/Weather';

class App extends Component {
  state = {
    data: '',
    input: '',
    found: true
  }

  fetchData(search) {
    const url = `https://api.apixu.com/v1/current.json?key=2b5a0fb89f0d45029a5203614182911&q=${search}`;
    fetch(url)
      .then(res => {
        if (res.ok) {
          console.log('200');
          this.setState({ data: '', found: true });
          return res.json();
        } else {
          this.setState({ data: '', found: false });
          console.log('not 200');
          return;
        }
      })
      .then(data => {
        this.setState({ data });
        console.log(data);
      })
      .catch(error => console.error(error));
  }

  handleInput = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchData(this.state.input);
  }

  render() {
    const { data, input, found } = this.state;
    let weather;

    if (data) {
      weather = <Weather {...data} />;
      console.log('weather');
    }

    if (!found) {
      weather = <p>Not found. Try a new search.</p>
      console.log('not found');
    }

    return (
      <div className="App">
        <form
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            placeholder="Search for city, country etc."
            value={input}
            onChange={this.handleInput}
          />
          <button type="submit">Search</button>
        </form>

       {weather}
      </div>
    );
  }
}

export default App;
