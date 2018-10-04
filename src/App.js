import React, { Component } from 'react';
import './App.css';
import  Header from './components/Header/Header.js';
import  HomeHeader from './components/HomeHeader/HomeHeader.js';
import  HomeEvent from './components/HomeEvent/HomeEvent.js';
import  Footer from './components/Footer/Footer.js';
import  Loading from './components/Loading/Loading.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            events: []
        };
    }

    componentDidMount() {
        const apiUrl = "https://backoffice.gamers-assembly.net/graphql?query=%7B%20nodeQuery(filter:%20%7Bconditions:%20[%7Bfield:%20%22type%22,%20value:%20[%22edition%22],%20operator:%20EQUAL%7D,%20%7Bfield:%20%22status%22,%20value:%20[%221%22]%7D]%7D)%20%7B%20entities%20%7B%20...%20on%20NodeEdition%20%7B%20title%20fieldEditionUrl%20fieldEditionStartDate%20%7B%20value%20%7D%20fieldEditionEndDate%20%7B%20value%20%7D%20fieldEditionPlace%20fieldEditionImage%7B%20url%20%7D%20%7D%20%7D%20%7D%20%7D";

        fetch(apiUrl)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    events: result.data.nodeQuery.entities
                });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                    isLoaded: false,
                    error
                });
            }
        )
    }

  render() {
    const { error, isLoaded, events } = this.state;
    var nextEvent = null;
    if (events.length > 0) {
        nextEvent = events[0];
    }

    return (
      <div className="App">
        <Header />
        <HomeHeader nextEvent={ nextEvent } />
        <HomeEvent events={ events } />
        <Footer />
        <Loading isLoaded={ isLoaded } />
      </div>
    );
  }
}

export default App;
