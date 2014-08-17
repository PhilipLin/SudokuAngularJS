var app = angular.module('testApp',[]);
app.controller('testCtrl',['$scope',function($scope) {

    $scope.storage = [];
    $scope.set_bold = function (block) {
        if (block.change == false)
            return {'font-weight': '800', 'font-size': '25px'};
        return {'font-weight': 'normal', 'font-size': '20px'};
    }
    //GENERATING ROOT BOARD
    for(var i = 0; i < 9; i ++) {
    	var temp = []
    	for(var j = 0; j < 9; j ++) {
    		temp.push({'value':(i*3 + Math.floor(i/3) + j) % 9 + 1,'x':i,'y':j,'change':false});
    	}
    	$scope.storage.push(temp);
    }
    //swap columns 20 times
    for(var i = 0; i<20; i++){
        var c1 = Math.floor(Math.random() * 3);
        var c2 = (c1 + Math.floor(Math.random() * 2) + 1 ) % 3;
        var b = Math.floor(Math.random() * 3);
        var temp;
        for(var i2=0;i2<9;i2++){
            temp = $scope.storage[i2][c1+b*3].value;
            $scope.storage[i2][c1+b*3].value = $scope.storage[i2][c2+b*3].value;
            $scope.storage[i2][c2+b*3].value = temp;
        }
    }

    //swap rows 20 times
    for(var i = 0; i<20; i++){
        var r1 = Math.floor(Math.random() * 3);
        var r2 = (r1 + Math.floor(Math.random() * 2) + 1 ) % 3;
        var b = Math.floor(Math.random() * 3);
        var temp;
        console.log(r1+b*3);
        for(var i2=0;i2<9;i2++){
            temp = $scope.storage[r1+b*3][i2].value;
            $scope.storage[r1+b*3][i2].value = $scope.storage[r2+b*3][i2].value;
            $scope.storage[r2+b*3][i2].value = temp;
        }
    }
    //block out 20 blocks could have overlaps. Just for testing purposes
    for(var i=0;i<20;i++){
        var x = Math.floor(Math.random() * 9);
        var y = Math.floor(Math.random() * 9);
        if($scope.storage[x][y].value!=undefined)
            $scope.storage[x][y].value=undefined;
        $scope.storage[x][y].change=true;
    }
    console.log($scope.storage);

}]);