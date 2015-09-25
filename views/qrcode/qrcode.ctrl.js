
app.controller('qrcode.ctrl',['$scope','CoolService',function($scope,CoolService){


    $scope.qrcodeString = 'YOUR TEXT TO ENCODE';

    var init = function(){
        $scope.author = angular.copy(author);
    };

    init();
}]);
