import * as React from "react";


class Explore extends React.Component {

    componentDidMount() {

    }


    render() {
        return (
            <div>
                <div className="field">
                    <label className="label">Start</label>
                    <div className="control">
                        <input className="input is-large" type="text" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Ziel</label>
                    <div className="control">
                        <input className="input is-large" type="text" />
                    </div>
                </div>
            </div>

        )
    }
}

export default Explore;

