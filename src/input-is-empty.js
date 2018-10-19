class InputIsEmpty {
	constructor(element, options = {event: 'change'}) {
		Object.assign(this, {element, options});

		this.element.addEventListener(this.options.event, this._processing.bind(this));
		
		this._processing();
	}

	get isEmpty() {
		return this.element.value.length === 0;
	}

	set _status(status) {
		this.element.dataset.isEmpty = status;
	}

	_processing() {
		this._status = this.isEmpty;
	}
}

export default InputIsEmpty;