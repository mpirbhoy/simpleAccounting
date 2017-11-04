function main () {
	loadTopData();
	setEventListeners();
}

function setEventListeners() {
	// $("td").click(function(e) {
	// 	e.preventDefault();
	// 	toggleViewLevel();
	// });
}

function goToDetailRow(rownum) {

}

function toggleViewLevel() {
	var display = $("#topTable").css("display");
	if (display != "none") {
		$("#topTable").css("display", "none");
		$("#detailTable").css("display", "inline");
	} else {
		$("#topTable").css("display", "inline");
		$("#detailTable").css("display", "none");
	}
}

function loadTopData() {
	const fs = require("fs");

	// Synchronous read
	var data = fs.readFileSync('data/top.txt').toString();
	var rows = data.split("\n");

	//Generate Top Account Header
	var topTr = $("<tr>");
	var headerData = rows[0].split(";,");
	for (var i = 0; i < headerData.length; i++) {
		var th = $("<th>", {text: headerData[i]});
		topTr.append(th);
	}
	$("#topHeadRow").append(topTr);

	//Generate Top Filter
	var topFilterTr = $("<tr>");
	for (var i = 0; i < headerData.length; i++) {
		var th = $("<th>");
		th.append($("<input>"));
		topFilterTr.append(th);
	}
	$("#topFilter").append(topFilterTr);

	for (var j = 1; j < rows.length; j++) {
		let tr = $("<tr>");
		$("#accountRows").append(tr);
		let rowData = rows[j].split(";,");
		tr.click(function(e) {
			e.preventDefault();
			loadAccountData(rowData[0]);
		});
		for (var i = 0; i < headerData.length; i++) {
			var td = $("<td>", {text: rowData[i]});
			tr.append(td);
		}
		
	}

}

function loadAccountData(accountNum) {
	toggleViewLevel(); 

	const fs = require("fs");

	// Synchronous read
	var data = fs.readFileSync('data/accounts/' + accountNum + '.txt').toString();
	var rows = data.split("\n");
	alert(data);

	//Generate Account Header
	var accountTr = $("<tr>");
	var headerData = rows[0].split(";,");
	for (var i = 0; i < headerData.length; i++) {
		var th = $("<th>", {text: headerData[i]});
		accountTr.append(th);
	}
	$("#detailHeadRow").append(accountTr);

	//Generate Detail Filter
	var detailFilterTr = $("<tr>");
	for (var i = 0; i < headerData.length; i++) {
		var th = $("<th>");
		th.append($("<input>"));
		detailFilterTr.append(th);
	}
	$("#detailFilter").append(detailFilterTr);

	for (var j = 1; j < rows.length; j++) {
		let tr = $("<tr>");
		$("#entryRows").append(tr);
		let rowData = rows[j].split(";,");
		tr.click(function(e) {
			e.preventDefault();
			alert(j);
		});
		for (var i = 0; i < headerData.length; i++) {
			var td = $("<td>", {text: rowData[i]});
			tr.append(td);
		}
		
	}


}

window.onload = main;