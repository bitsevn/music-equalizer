import React from "react";

export default class Slider extends React.Component {

	constructor(props) {
		super(props);
	}

	static propTypes = {
        marginTop: React.PropTypes.number,
        min: React.PropTypes.number,
        max: React.PropTypes.number,
        value: React.PropTypes.number,
        position: React.PropTypes.number.isRequired,
        callback: React.PropTypes.func
    }

    static defaultProps = {
        marginTop: 40,
        min: 0,
        max: 0,
        value: 0
    }

    onChange(e) {
    	if(this.props.callback) this.props.callback(e.target.value);
    }

    polish(number) {
    	if(number < 1000) return number;
    	return (number/1000) + 'K';
    }
	
	render() {
		const { marginTop, min, max, value } = this.props;
		return(
			<div className="row" style={{ marginTop }}>
				<div className="col-md-12">
					<div className="row">
						<div className="col-md-2">
							<span>{min}</span>
						</div>
						<div className="col-md-6">
							<input 
								type="range" 
								orient="vertical" 
								min={min} 
								max={max} 
								value={value}
								onChange={(e) => this.onChange(e)}>
							</input>
						</div>
						<div className="col-md-2">
							<span>{this.polish(max)}</span>
						</div>
						<div className="col-md-2">
							<span>[{this.polish(value)}]</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
