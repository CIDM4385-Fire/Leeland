function ApplicationWindow() {
	var MasterView = require('ui/common/MasterView'),
		DetailView = require('ui/common/DetailView');
	var self = Ti.UI.createWindow({
		title:'Products',
		exitOnClose:true,
		navBarHidden:false,
		backgroundColor:'#ffffff'
	});
	var masterView = MasterView();
	self.add(masterView);
	masterView.addEventListener('itemSelected', function(e) {
		var detailView = DetailView();
		var detailContainerWindow = Ti.UI.createWindow({
			title:'Product Details',
			navBarHidden:false,
			backgroundColor:'#ffffff'
		});
		detailContainerWindow.add(detailView);
		detailView.fireEvent('itemSelected',e);
		detailContainerWindow.open();
	});
	return self;
};
module.exports = ApplicationWindow;