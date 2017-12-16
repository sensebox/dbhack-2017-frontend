import * as React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import TicketEdit from "./TicketEdit"
import Explore from "./Explore"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <section className="hero is-fullheight">
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <Link to="/" className="navbar-item">
                    <img src={require('./img/ticket.png')} alt="Logo" />
                  </Link>
                  <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div id="navbarMenuHeroA" className="navbar-menu">
                  <div className="navbar-end">
                    <Link to="/explore" className="navbar-item">
                      Explore <span role="img" aria-label="explore">🔭</span>
                    </Link>
                    <div className="navbar-item has-dropdown is-hoverable">
                      <a className="navbar-link">
                        Fritz
                      </a>

                      <div className="navbar-dropdown">
                        <div className="navbar-item">
                          <progress className="progress is-primary" value="75" max="100">75 Tickets</progress>
                        </div>
                        <hr className="navbar-divider"/>
                        <a className="navbar-item">
                          Logout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className="hero-body">
            <Route exact path="/" component={Home} />
            <Route path="/ticket-edit" component={TicketEdit} />
            <Route path="/explore" component={Explore} />
          </div>
        </section>
      </Router>
    );
  }
}

const Home = () => (
  <div className="container">
    <h1 className="title">
      Editiere historische Zugtickets
      </h1>
    <h2 className="subtitle">
      Es warten <b>1683</b> Tickets darauf editiert zu werden!
      </h2>
    <Link to="/ticket-edit" className="button is-primary">
      Los gehts!
    </Link>
  </div>
)



export default App;
