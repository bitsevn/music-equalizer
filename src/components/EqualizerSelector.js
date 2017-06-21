import React from "react";

export default class EqualizerSelector extends React.Component {
	
	constructor() {
		super();
	}

	select(item) {
		if(item.key == this.props.selectedKey) return;// Do not load if same item is selected
		if(this.props.callback) this.props.callback(item);// if a callback is provided; extra feature
	}

	render() {
		let headerCnt = 1;
		let selectedItem = null;
		const selectedKey = this.props.selectedKey;
		let items = this.props.items.map((item) => {
			if(selectedKey && item.key == selectedKey) selectedItem = item;
			return (<li key={ item.header ? ("dropdown-header-" + headerCnt++) : item.key} className={ (selectedKey && item.key == selectedKey) ? "active" : "" }>
					   		<a href="javascript:void(0);" onClick={ () => { this.select(item); } }> 
					   			{ item.value } 
					   		</a>
					</li>);
		});
		return(
			<div className="dropdown">
				<button className="btn btn-mini btn-success dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
				    { selectedItem ? selectedItem.value: this.props.title }
				    <span className="caret"></span>
				</button>
				<ul className="dropdown-menu">
					{ items }
				</ul>
			</div>
		);
	}
}
