import React from "react";
import MusicEqualizerContainer from "./MusicEqualizerContainer"

export default class TescoApp extends React.Component {

	constructor() {
		super();
		this.state = {};
	}

	render() {
		return(
			<div>
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <a href="/" className="navbar-brand">Music Player Equalizer by Tesco</a>
                        </div>
                    </div>
                </nav>
                <div className="container app-body">
                    <MusicEqualizerContainer/>
                </div>
            </div>
		);
	}
}