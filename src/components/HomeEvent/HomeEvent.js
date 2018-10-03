import React from 'react'
import EventCard from '../EventCard/EventCard.js'
import './styles.css'


class HomeEvent extends React.Component {
    render() {
        const events = this.props.events;
        return (
            <div id="home-event">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="title">
                                Évènements à venir
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {events.map(function(event, index) {
                            return (
                                <EventCard key={index} event={ event } />
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeEvent