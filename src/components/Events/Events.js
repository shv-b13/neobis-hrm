import React, {Component} from 'react';

import './Events.css';

class Events extends Component {

    render() {
        return (
            <div className="events">
                <div className="events_content">

                    <div className="events_title">
                        <h1 className="events_h1">Ближайшие события</h1>
                        <div className="events_circle"></div>
                    </div>
                    <div className="events_info">
                        <div className="events_block">
                            <div className="events_data">
                                <p className="events_day">
                                    25 февраля
                                </p>
                                <p className="events_time">
                                    14:00
                                </p>
                            </div>
                            <p className="events_theme">
                                Машинное обучение: метод Прайса
                            </p>
                            <p className="events_place">
                                АУЦА, CH
                            </p>
                        </div>
                        <div className="events_block">
                            <div className="events_data">
                                <p className="events_day">
                                    25 февраля
                                </p>
                                <p className="events_time">
                                    14:00
                                </p>
                            </div>
                            <p className="events_theme">
                                Машинное обучение: метод Прайса
                            </p>
                            <p className="events_place">
                                АУЦА, CH
                            </p>
                        </div>
                        <div className="events_block">
                            <div className="events_data">
                                <p className="events_day">
                                    25 февраля
                                </p>
                                <p className="events_time">
                                    14:00
                                </p>
                            </div>
                            <p className="events_theme">
                                Машинное обучение: метод Прайса
                            </p>
                            <p className="events_place">
                                АУЦА, CH
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Events;