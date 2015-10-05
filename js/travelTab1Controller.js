travelApp.controller('travelTab1Controller',function($scope,$rootScope){
	$scope.nydata={};
	$scope.Seconddata={};
	$scope.next = function (emp) {
		$scope.nydata=emp;

	   var node = document.getElementById("mydiv").getElementsByTagName("li")[0];
		node.setAttribute("class", "");
		var node = document.getElementById("mydiv").getElementsByTagName("li")[1];
		node.setAttribute("class", "active");
		var node = document.getElementById("mydiv").getElementsByTagName("li")[2];
		node.setAttribute("class", "");
    };
	$scope.second=function(dept)
	{	
		$scope.Seconddata=dept;
	
		var node = document.getElementById("mydiv").getElementsByTagName("li")[0];
		node.setAttribute("class", "");
		var node = document.getElementById("mydiv").getElementsByTagName("li")[1];
		node.setAttribute("class", "");
		var node = document.getElementById("mydiv").getElementsByTagName("li")[2];
		node.setAttribute("class", "active");
	}
});