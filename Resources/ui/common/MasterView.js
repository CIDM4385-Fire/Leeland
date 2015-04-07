function MasterView() {
	var self = Ti.UI.createView({
		backgroundColor:'white'
	});
	var tableData = [
		{title:'Project 1', hasChild:true, color: '#000'},
		{title:'Project 2', hasChild:true, color: '#000'},
		{title:'Project 3', hasChild:true, color: '#000'},
		{title:'Project 4', hasChild:true, color: '#000'},
		{title:'Project 5', hasChild:true, color: '#000'},
		{title:'Project 6', hasChild:true, color: '#000'}
	];
	var table = Ti.UI.createTableView({
		data:tableData
	});
	self.add(table);
	table.addEventListener('click', function(e) {
		self.fireEvent('itemSelected', {
			name:e.rowData.title
		});
	});

	return self;
};
module.exports = MasterView;