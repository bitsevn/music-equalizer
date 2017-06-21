import React from "react";
import EqualizerSelector from "./EqualizerSelector";
import MusicEqualizer from "./MusicEqualizer";

const items = [
	{ key:"Rock", value:"Rock", frequency: { f1: 20, f2: 155, f3: 400, f4: 2000, f5: 10000 } },
	{ key:"Pop", value:"Pop", frequency: { f1: 30, f2: 165, f3: 800, f4: 3500, f5: 7000 } },
	{ key:"Jazz", value:"Jazz", frequency: { f1: 50, f2: 200, f3: 790, f4: 5000, f5: 8000 } },
	{ key:"Classical", value:"Classical", frequency: { f1: 40, f2: 320, f3: 400, f4: 1000, f5: 12000 } }
];

const frequencyBands = [
	{ min: 0, max: 60 },
	{ min: 0, max: 310 },
	{ min: 0, max: 1000 },
	{ min: 0, max: 6000 },
	{ min: 0, max: 16000 }
];

export default class MusicEqualizerContainer extends React.Component {

	constructor() {
		super();
		this.state = { currentFrequency: { f1: 0, f2: 0, f3: 0, f4: 0, f5: 0 }, selectedPreset: null, mode: null };
	}

	onFrequencyChange(value, position) {
		let currentFrequency = Object.assign({}, this.state.currentFrequency);
		if(!currentFrequency) {
			currentFrequency = { f1: 0, f2: 0, f3: 0, f4: 0, f5: 0 };
		} 
		currentFrequency['f'+position] = parseInt(value);
		this.setState({currentFrequency, mode: 'random'});
	}

	onEqualizerChange(preset) {
		this.setState({currentFrequency: Object.assign({}, preset.frequency), selectedPreset: preset.key, mode: 'preset'});
	}

	render() {
		const { currentFrequency, selectedPreset, mode } = this.state;
		return(
			<div className="row" style={{ marginTop: 50 }}>
				<div className="col-md-6">
					<MusicEqualizer frequencyBands={frequencyBands} frequency={ currentFrequency } onFrequencyChange={(val, pos) => this.onFrequencyChange(val, pos)} />
				</div>
				<div className="col-md-6">
					<EqualizerSelector 
						title="Preset" 
						selectedKey={ mode === 'preset' ? selectedPreset : null } 
						items={items} 
						callback={(item) => this.onEqualizerChange(item) }/>
				</div>
            </div>
		);
	}
}