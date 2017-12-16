import * as React from "react";
import Map from "./Map"
import {
    Link
} from 'react-router-dom'

import './TicketEdit.css'

class TicketEdit extends React.Component {
    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {}
    }

    componentDidMount() {
        fetch('https://boiling-taiga-24096.herokuapp.com/api/tickets').then(response => {
            return response.json()
        }).then(data => {
            this.setState({
                ticket: data[Math.floor(Math.random() * (data.length))]
            })
            console.log(this.state)
        })
    }

    onSubmit() {
        console.log("clicked" + this.state.ticket.id)
        fetch(`https://boiling-taiga-24096.herokuapp.com/tickets/${this.state.ticket.id}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `_token=&_method=PUT&category_id=&vehicle_class_id=&price=${this.state.price}&description=nj&point_of_departure_name=${this.state.start}&point_of_departure_latitude=&point_of_departure_longitude=&destination_name=${this.state.destination}&destination_latitude=&destination_longitude=`
        }).then(res => res)
            .then(res => console.log(res));
        
        fetch('https://boiling-taiga-24096.herokuapp.com/api/tickets').then(response => {
            return response.json()
        }).then(data => {
            this.setState({
                ticket: data[Math.floor(Math.random() * (data.length))]
            })
            console.log(this.state)
        })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    render() {
        if (this.state.ticket) {
            return (
                <div>
                    <section className="section">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-one-third">
                                    <img src={require('./img/template.jpg')} alt="Ticket" />
                                </div>
                                <div className="column is-half">
                                    <div className="card-content">
                                        <div className="media">
                                            <div className="media-content">
                                                <div className="field">
                                                    <label className="label">Von</label>
                                                    <div className="control">
                                                        <input className="input" type="text" name="start" onChange={this.handleInputChange} />
                                                    </div>
                                                </div>

                                                <div className="field">
                                                    <label className="label">Nach</label>
                                                    <div className="control">
                                                        <input className="input" type="text" name="destination" onChange={this.handleInputChange} />
                                                    </div>
                                                </div>
                                                <div className="field">
                                                    <label className="label">Preis</label>
                                                    <div className="control">
                                                        <input className="input" type="text" value={this.state.price} name="price" onChange={this.handleInputChange} />
                                                    </div>
                                                </div>
                                                <label className="label">Streckenübersicht</label>
                                                <Map
                                                    start={[8.68, 50.11]}
                                                    destination={[8.84, 49.89]}
                                                />
                                                <br />
                                                <hr />
                                                <br />
                                                <div className="control">
                                                    <Link to="/ticket-edit" className="button">
                                                        Überspringen
                                                    </Link>
                                                    &emsp;
                                                    <a className="button is-primary" onClick={this.onSubmit}>
                                                        Bestätigen
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="column">
                                    <h2>Verfügbare Wörter</h2>
                                    <ul className="ocr-tag-list">
                                        {JSON.parse(this.state.ticket.ocrText).map((word, index) => {
                                            if(word.length > 2) {
                                            return <li key={index}>
                                                <span className="tag is-medium">{word}</span>
                                            </li>
                                            }
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            )
        } else {
            return <a className="button is-loading">Loading</a>
        }

    }
}

export default TicketEdit;

