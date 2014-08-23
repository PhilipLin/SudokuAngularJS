app.controller('sudokuCtrl', [ '$scope', 'generateBoardService', 'validateBoardService','actionBoardService','$routeParams', function($scope, generateBoardService, validateBoardService, actionBoardService, $routeParams) {

    $scope.storage = generateBoardService.generateBoard($routeParams.difficulty);
    $scope.name = 'Sudoku';
    validateBoardService.checkBoard($scope.storage);
    $scope.currBlock;
    $scope.beforeColor;
    //store information about the block you clicked and change the color to blue to better see it
    $scope.newGame = function(){
        actionBoardService.newGame($scope, generateBoardService, validateBoardService, $routeParams)
    }
    $scope.clearGame = function(){
        actionBoardService.clearGame($scope, validateBoardService)
    }
    $scope.clickBlock = function (block) {
        actionBoardService.clickBlock($scope, block)
    }
    //if keydown and clicked, then change the value of the block accordingly
	$scope.keyDown = function (event) {
        actionBoardService.keyDown($scope, event, validateBoardService);
	}
    //sets the class of the block: color and the background
    $scope.set_Color = function (block) {
        return block.color+' '+block.background+' square';
    }
    //sets the style of the value inside the block, bold or not bold
    $scope.set_Bold = function (block) {
        if(!block.change)
            return { 'color': 'black', 'font-weight': 'bold', 'font-size' : '30px', 'position':'absolute','margin-top':'25%', 'margin-left':'-8%'};
        return {'font-style': 'italic', 'color' : '#b25fdc', 'font-weight': 'bold', 'font-size' : '30px', 'position':'absolute','margin-top':'25%', 'margin-left':'-8%'};
    }
}]);