import React from 'react'
import Countdown from 'react-countdown-now';
import './styles.css'
import moment from 'moment'

const countdownRenderer = ({  total, days, hours, minutes, seconds, milliseconds, completed  }) => {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <div className="countdown-number">
                        {days}
                    </div>
                    <div className="countodwn-label">
                        jours
                    </div>
                </div>
                <div className="col">
                    <div className="countdown-number">
                        {hours}
                    </div>
                    <div className="countodwn-label">
                        heures
                    </div>
                </div>
                <div className="col">
                    <div className="countdown-number">
                        {minutes}
                    </div>
                    <div className="countodwn-label">
                        minutes
                    </div>
                </div>
                <div className="col">
                    <div className="countdown-number">
                        {seconds}
                    </div>
                    <div className="countodwn-label">
                        seconds
                    </div>
                </div>
            </div>
        </div>
    );
};

class HomeHeader extends React.Component {
    render() {
        const nextEvent = this.props.nextEvent;
        if (nextEvent) {
            console.log(moment(nextEvent.fieldEditionStartDate.date).format('MMM d YY'));
            console.log(nextEvent.fieldEditionStartDate.date);
            console.log(new Date(nextEvent.fieldEditionStartDate.date));
        }
        return (
            <div id="home-header" className="background">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col">
                            { nextEvent ? (
                                <div>
                                    <div className="subtitle">
                                        Prochain événement
                                    </div>
                                    <div className="title">
                                        { nextEvent.title }
                                    </div>
                                    <Countdown date={ new Date(nextEvent.fieldEditionStartDate.date).getTime() } renderer={countdownRenderer} className="countdown" />
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeHeader