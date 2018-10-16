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
        const apiUrl = "https://backoffice.gamers-assembly.net/graphql?query={%20nodeQuery(filter:%20{conditions:%20[{field:%20%22type%22,%20value:%20[%22edition%22],%20operator:%20EQUAL},%20{field:%20%22status%22,%20value:%20[%221%22]}]},sort:[{field:%22field_edition_start_date%22%20direction:%20ASC}])%20{%20entities%20{%20...%20on%20NodeEdition%20{%20title%20fieldEditionUrl%20fieldEditionStartDate%20{%20value%20}%20fieldEditionEndDate%20{%20value%20}%20fieldEditionPlace%20fieldEditionImage{crop:derivative(style:CROP_2_1_288X144){%20url%20}}%20}%20}%20}%20}";
  
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
