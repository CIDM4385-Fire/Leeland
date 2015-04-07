function DetailView() {
	var self = Ti.UI.createView({
		backgroundColor:'e3e3e3'
	});

	var lbl = Ti.UI.createLabel({
		text:'PROJECT MENU',
		height:'auto',
		width:'auto',
		color:'#000'
	});
	self.add(lbl);

	self.addEventListener('itemSelected', function(e) {
		lbl.text = 'Information for '+ e.name+ ' goes here';
	});

	return self;
};

module.exports = DetailView;
