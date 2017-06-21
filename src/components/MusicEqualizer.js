import React from "react";
import Slider from "./Slider";

export default class MusicEqualizer extends React.Component {
	
	constructor(props) {
		super(props);
	}

	static propTypes = {
        frequencyBands: React.PropTypes.array.isRequired,
        frequency: React.PropTypes.object,
        onFrequencyChange: React.PropTypes.func.isRequired
    }

    static defaultProps = {
        frequency: null
    }

    onSliderChange(value, position) {
    	if(this.props.onFrequencyChange) this.props.onFrequencyChange(value, position);
    }

	render() {
		const frequency = this.props.frequency;
		return(
			<div>
				<div className="row">
				<div className="col-md-12">
					<div className="row">
						<div className="col-md-2">
							<span>-12 db</span>
						</div>
						<div className="col-md-8">
							<span></span>
						</div>
						<div className="col-md-2">
							<span>+12 db</span>
						</div>
					</div>
				</div>
			</div>
				{
					this.props.frequencyBands.map((fb, idx) => {
						let value = frequency ? frequency['f'+(idx+1)] : null;
						return(
							<Slider key={idx} position={(idx+1)} min={fb.min} max={fb.max} value={value} callback={(val) => this.onSliderChange(val, idx+1)}/>
						)
					})
				}
			</div>
		);
	}
}
