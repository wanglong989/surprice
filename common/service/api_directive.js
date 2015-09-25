

angular.module('Cool.ApiDirective', [])
    .directive('box', [ function () {

        return {
            //To recap: “E” is for element,
            // “A” is for attribute,
            // “C” is for class,
            // and “M” is for comment.
            // Attributes are going to be the main ones as far as adding behaviors that get used the most. If you don’t specify the restrict property it will default to “A”
            restrict: 'AECM',
            replace: true,
            templateUrl: 'template/project/project.html',
            scope: {
                project:'='
            },
            link: function ($scope) {
                $scope.project = $scope.project;
            }
        };
    }])
    .directive('qrcode', function() {
        return {
            restrict: 'AECM',
            replace: true,
            template: '<div class="qrcodeTable"></div>',
            scope: {
                qrurl:'='
            },
            link: function($scope, attrs) {

                $scope.qrurl = $scope.qrurl;
                $scope.$watch('qrurl',function(){
                    $('.qrcodeTable').empty();
                    $('.qrcodeTable').qrcode({
                        render	: "canvas",
                        size:'300',
                        text	:  $scope.qrurl
                    });
                },true);

            }
        }
    });


