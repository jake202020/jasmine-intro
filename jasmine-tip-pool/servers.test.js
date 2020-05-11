describe('Servers test (with setup and tear-down)', function() {
	beforeEach(function() {
		// initialization logic
		serverNameInput.value = 'Alice';
	});

	it('should add a new server to allServers on submitServerInfo()', function() {
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers['server' + serverId].serverName).toEqual('Alice');
	});

	it('should not add a new server to allServers on submitServerInfo() with empty input', function() {
		serverNameInput.value = '';
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(0);
	});

	it('should add new server to #serverTable on updateServerTable()', function() {
		submitServerInfo();
		updateServerTable();

		let serverTd = document.querySelectorAll('#serverTable tbody tr td');

		expect(serverTd.length).toEqual(2);
		expect(serverTd[0].innerText).toEqual('Alice');
		expect(serverTd[1].innerText).toEqual('$0.00');
	});

	afterEach(function() {
		// teardown logic
		serverID = 0;
		serverTbody.innerHTML = '';
		allServers = {};
	});
});
