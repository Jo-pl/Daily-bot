class SharedCommand {
	constructor(request) {
		switch (request.command.head) {
			case "language":
				this.changeLang(request.next());
				break;
			default:
				this.invalidCommand();
		}
	}

	changeLang(request) {
		//TODO
	}

}

module.exports = SharedCommand;
