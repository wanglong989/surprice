
app.controller('demo.ctrl',['$scope','CoolService',function($scope,CoolService){

    $scope.project = [];
    $scope.getdata = function(){
        CoolService.getService({url:'./data/dashboard.json'}).then(
            function(data){
                $scope.project = data;
            },
            function(e){
                console.log(e);
            }
        )
    };
    $scope.qrcodeString = 'YOUR TEXT TO ENCODE';
    $scope.size = 250;
    $scope.correctionLevel = '';
    $scope.typeNumber = 0;
    $scope.inputMode = '';
    $scope.image = true;

    $scope.getInputMode = function(text){
        var inputMode = $scope.inputMode;
        inputMode = inputMode || ($scope.isNUMBER(text) ? 'NUMBER' : undefined);
        inputMode = inputMode || ($scope.isALPHA_NUM(text) ? 'ALPHA_NUM' : undefined);
        inputMode = inputMode || ($scope.is8bit(text) ? '8bit' : '');

        return $scope.checkInputMode(inputMode, text) ? inputMode : '';
    };


    var init = function(){
        $scope.author = angular.copy(author);
        $scope.getdata();
    };


    init();
}]);
