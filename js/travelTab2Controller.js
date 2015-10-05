travelApp.controller('travelTab2Controller',function($scope){
$scope.next = function () {
       
	   var node1 = document.getElementById("mydiv").getElementsByTagName("li")[0];
		node1.setAttribute("class", "");
		var node2 = document.getElementById("mydiv").getElementsByTagName("li")[1];
		node2.setAttribute("class", "");
		var node3 = document.getElementById("mydiv").getElementsByTagName("li")[2];
		node3.setAttribute("class", "active");
    };
});