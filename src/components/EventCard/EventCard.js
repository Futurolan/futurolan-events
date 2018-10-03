import React from 'react'
import Moment from 'react-moment';
import Countdown from 'react-countdown-now';
import defaultBackground from './background.jpg';
import './styles.css'

// Set the locale for every react-moment instance to French.
Moment.globalLocale = 'fr';

const countdownRenderer = ({  total, days, hours, minutes, seconds, milliseconds, completed  }) => {
    return (
        <div>{days} jours {hours} heures {minutes} minutes {seconds} seconds</div>      
    );
};

class EventCard extends React.Component {
    render() {
        const event = this.props.event;
        return (
            <div className="event-card col-md-4 col-sm-6 col-xs-12">
                <div className="card text-left">
                    <a href={event.fieldEditionUrl} target="_blank" className="card-link">&nbsp;</a>
                    {/*<div className="card-header">Header</div>*/}
                    { event.fieldEditionImage ? (
                        <img className="card-img-top" src={ event.fieldEditionImage } alt={ event.title } />
                    ) : (
                        <img className="card-img-top" src={ defaultBackground } alt={ event.title } />
                    )}
                    <div className="card-body">
                        <h5 className="card-title txt-ellipsis">
                            { event.title }
                        </h5>
                        <p className="card-text txt-ellipsis">
                            <Moment format="DD MMM" date={new Date(event.fieldEditionStartDate.date)} /> - <Moment format="DD MMM YYYY" date={new Date(event.fieldEditionEndDate.date)} />
                        </p>
                        <p className="card-text txt-ellipsis">
                            { event.fieldEditionPlace }&nbsp;
                        </p>
                        {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            <Countdown date={ new Date(event.fieldEditionStartDate.date).getTime() } renderer={countdownRenderer} className="countdown" />
                        </small>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventCard