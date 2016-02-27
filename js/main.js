// the wow animation init
new WOW().init();

// get the value form the json file
$.getJSON('competitor-report-data.json', function (datas) {

	// set short object var for detail
	var oDetail = datas.customerdetails;
	var strDetailPhone = oDetail.phone;
	var strDetailTag = oDetail.tag;
	var strDetailName = oDetail.name;
	var strDetailAddress = oDetail.adress;
	$("#name").append('<p><strong>name : </strong>'+ strDetailName +'</p>');
	$("#phone").append('<p><strong>phone : </strong>'+ strDetailPhone +'</p>');
	$("#tag").append('<p><strong>tag : </strong>'+ strDetailTag +'</p>');
	$("#address").append('<p><strong>address : </strong>'+ strDetailAddress +'</p>');

	// set short object var for each child of reportdata
	var oCus = datas.reportdata.customer;
	var oCom1 = datas.reportdata.competitor1;
	var oCom2 = datas.reportdata.competitor2;
	var oCom3 = datas.reportdata.competitor3;
	var oCom4 = datas.reportdata.competitor4;
	var oCom5 = datas.reportdata.competitor5;

	// get all name valuse
	var strCusName = oCus.name;
	var strCom1Name = oCom1.name;
	var strCom2Name = oCom2.name;
	var strCom3Name = oCom3.name;
	var strCom4Name = oCom4.name;
	var strCom5Name = oCom5.name;

	// get all shopfronts values
	var strCusShop = oCus.shopfronts;
	var strCom1Shop = oCom1.shopfronts;
	var strCom2Shop = oCom2.shopfronts;
	var strCom3Shop = oCom3.shopfronts;
	var strCom4Shop = oCom4.shopfronts;
	var strCom5Shop = oCom5.shopfronts;

	// get all website speed values
	var strCusSpeed = oCus["website speed"];
	var strCom1Speed = oCom1["website speed"];
	var strCom2Speed = oCom2["website speed"];
	var strCom3Speed = oCom3["website speed"];
	var strCom4Speed = oCom4["website speed"];
	var strCom5Speed = oCom5["website speed"];

	// get all mobile friendly values
	var strCusMobile = oCus["mobile friendly"];
	var strCom1Mobile = oCom1["mobile friendly"];
	var strCom2Mobile = oCom2["mobile friendly"];
	var strCom3Mobile = oCom3["mobile friendly"];
	var strCom4Mobile = oCom4["mobile friendly"];
	var strCom5Mobile = oCom5["mobile friendly"];

	// get all findability values
	var strCusFind = oCus.findability;
	var strCom1Find = oCom1.findability;
	var strCom2Find = oCom2.findability;
	var strCom3Find = oCom3.findability;
	var strCom4Find = oCom4.findability;
	var strCom5Find = oCom5.findability;

	// get all social engagement values
	var strCusSocial = oCus["social engagement"];
	var strCom1Social = oCom1["social engagement"];
	var strCom2Social = oCom2["social engagement"];
	var strCom3Social = oCom3["social engagement"];
	var strCom4Social = oCom4["social engagement"];
	var strCom5Social = oCom5["social engagement"];

	var oShop = [
			{ y: strCusShop, label: strCusName},
			{ y: strCom1Shop, label: strCom1Name},
			{ y: strCom2Shop, label: strCom2Name},
			{ y: strCom3Shop, label: strCom3Name},
			{ y: strCom4Shop, label: strCom4Name},
			{ y: strCom5Shop, label: strCom5Name}
		];
	var oSpeed = [
			{ y: strCusSpeed, label: strCusName},
			{ y: strCom1Speed, label: strCom1Name},
			{ y: strCom2Speed, label: strCom2Name},
			{ y: strCom3Speed, label: strCom3Name},
			{ y: strCom4Speed, label: strCom4Name},
			{ y: strCom5Speed, label: strCom5Name}
		];
	var oMobile = [
			{ y: strCusMobile, label: strCusName},
			{ y: strCom1Mobile, label: strCom1Name},
			{ y: strCom2Mobile, label: strCom2Name},
			{ y: strCom3Mobile, label: strCom3Name},
			{ y: strCom4Mobile, label: strCom4Name},
			{ y: strCom5Mobile, label: strCom5Name}
	];
	var oFind = [
			{ y: strCusFind, label: strCusName},
			{ y: strCom1Find, label: strCom1Name},
			{ y: strCom2Find, label: strCom2Name},
			{ y: strCom3Find, label: strCom3Name},
			{ y: strCom4Find, label: strCom4Name},
			{ y: strCom5Find, label: strCom5Name}
	];
	var oSocial = [
			{ y: strCusSocial, label: strCusName},
			{ y: strCom1Social, label: strCom1Name},
			{ y: strCom2Social, label: strCom2Name},
			{ y: strCom3Social, label: strCom3Name},
			{ y: strCom4Social, label: strCom4Name},
			{ y: strCom5Social, label: strCom5Name}
	];

	// radar data array
	var arrCus = [strCusShop,strCusSpeed,strCusMobile,strCusFind,strCusSocial];
	var arrCom1 = [strCom1Shop,strCom1Speed,strCom1Mobile,strCom1Find,strCom1Social];
	var arrCom2 = [strCom2Shop,strCom2Speed,strCom2Mobile,strCom2Find,strCom2Social];
	var arrCom3 = [strCom3Shop,strCom3Speed,strCom3Mobile,strCom3Find,strCom3Social];
	var arrCom4 = [strCom4Shop,strCom4Speed,strCom4Mobile,strCom4Find,strCom4Social];
	var arrCom5 = [strCom5Shop,strCom5Speed,strCom5Mobile,strCom5Find,strCom5Social];
	// radar chart data setting
	var radarChartData = {
		labels: ["Shopfronts", "Website Speed", "Mobile Friendly", "Findability", "Social Engagement"],
		datasets: [
			{
				label: strCusName,
				fillColor: "rgba(239,28,39,.2)",
				strokeColor: "rgba(239,28,39,.8)",
				pointColor: "rgba(239,28,39,.8)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(239,28,39,.8)",
				data: arrCus
			},
			{
				label: strCom1Name,
				fillColor: "rgba(248,148,36,.2)",
				strokeColor: "rgba(248,148,36,.8)",
				pointColor: "rgba(248,148,36,.8)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(248,148,36,.8)",
				data: arrCom1
			},
			{
				label: strCom2Name,
				fillColor: "rgba(247,237,52,.2)",
				strokeColor: "rgba(247,237,52,.8)",
				pointColor: "rgba(247,237,52,.8)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(247,237,52,.8)",
				data: arrCom2
			},
			{
				label: strCom3Name,
				fillColor: "rgba(67,183,76,.2)",
				strokeColor: "rgba(67,183,76,.8)",
				pointColor: "rgba(67,183,76,.8)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(67,183,76,.8)",
				data: arrCom3
			},
			{
				label: strCom4Name,
				fillColor: "rgba(26,150,214,.2)",
				strokeColor: "rgba(26,150,214,.8)",
				pointColor: "rgba(26,150,214,.8)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(26,150,214,.8)",
				data: arrCom4
			},
			{
				label: strCom5Name,
				fillColor: "rgba(40,57,145,.2)",
				strokeColor: "rgba(40,57,145,.8)",
				pointColor: "rgba(40,57,145,.8)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(40,57,145,.8)",
				data: arrCom5
			},
		],
	}
	// radar chart
	window.myRadar = new Chart(document.getElementById("canvas").getContext("2d")).Radar(radarChartData, 
	{
		pointLabelFontSize : 14,
		scaleLineColor: "rgba(0,0,0,.4)",
		tooltipTitleFontStyle: "normal",
		scaleShowLabels : true,
	});

	// bar chart
	var chart = new CanvasJS.Chart("report", {
		title:{
			text: "Report Data",
			fontColor: "rgba(40,57,145,.8)"
		},
		axisY: {
			title: "Click to hide other property",
			titleFontColor: "black",
			titleFontSize: "12"
		},
		exportEnabled: true,
		animationEnabled: true,
		legend: {
			cursor:"pointer",
			itemWidth: "800",
			itemclick : function(e) {
				if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
				  e.dataSeries.visible = false;
				}
				else {
				  e.dataSeries.visible = true;
				}
				chart.render();
			}
		},
		toolTip: {
			shared: true,
			content: function(e){
				var str = '';
				var str2 ;
				for (var i = 0; i < e.entries.length; i++){
					var  str1 = "<span style= 'color:"+e.entries[i].dataSeries.color + "'> " + e.entries[i].dataSeries.name + "</span>: <strong>"+  e.entries[i].dataPoint.y + "</strong> <br/>" ;
					str = str.concat(str1);
				}
				str2 = "<span style = 'color:rgba(146,52,148,.8); '><strong>"+e.entries[0].dataPoint.label + "</strong></span><br/>";
				return (str2.concat(str));
			}
		},
		data: [
			{
				type: "bar",
				color: "rgba(239,28,39,.8)",
				showInLegend: true,
				name: "Shopfronts",
				dataPoints: oShop
			},
			{
				type: "bar",
				color: "rgba(248,148,36,.8)",
				showInLegend: true,
				name: "Website Speed",
				dataPoints: oSpeed
			},
			{
				type: "bar",
				color: "rgba(247,237,52,.8)",
				showInLegend: true,
				name: "Mobile Friendly",
				dataPoints: oMobile
			},
			{
				type: "bar",
				color: "rgba(67,183,76,.8)",
				showInLegend: true,
				name: "Findability",
				dataPoints: oFind
			},
			{
				type: "bar",
				color: "rgba(26,150,214,.8)",
				showInLegend: true,
				name: "Social Engagement",
				dataPoints: oSocial
			},
	    ],
    });
	chart.render();
});