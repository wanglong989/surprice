app.controller('main.ctrl',['$scope','$rootScope',function($scope,$rootScope){

    $scope.str = 'HOLLE WORLD!';

    var init = function(){
        $scope.isBusy = false;
        $scope.loading = false;

    };
    $scope.onOffMenu = function(){
        var t = $('.icon-close');
        if(t.hasClass('on')){
            $('.menu-warp').css({'width':'240px'}).animate({
                'width':'65px'
            },300,function(){
                t.toggleClass('on glyphicon-chevron-left glyphicon-chevron-right');
            });
            $('.content-warp').css({'padding-left':'240px'}).animate({
                'padding-left':'65px'
            },300,function(){
            });
            $('.face-box').css({'width':'140px','height':'140px'}).animate({
                'width':'45px',
                'height':'45px'
            },300,function(){});
            $('.qr-box').css({'width':'200px','height':'200px'}).animate({
                'width':'45px',
                'height':'45px'
            },300,function(){});

        }else{
            $('.menu-warp').css({'width':'65px'}).animate({
                'width':'240px'
            },300,function(){
                t.toggleClass('on glyphicon-chevron-left glyphicon-chevron-right');
            });
            $('.content-warp').css({'padding-left':'65px'}).animate({
                'padding-left':'240px'
            },300,function(){
            });
            $('.face-box').css({'width':'45px','height':'45px'}).animate({
                'width':'140px',
                'height':'140px'
            },300,function(){});
            $('.qr-box').css({'width':'45px','height':'45px'}).animate({
                'width':'200px',
                'height':'200px'
            },300,function(){
                $('.qr-box').addClass('hover-box')
            });
        }
    };
    $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
        //assign the "from" parameter to something
        if(to.url === '/index'){
            $('.home-page-btn').addClass('hide');
        }else{
            $('.home-page-btn').removeClass('hide');
        }
    });
    init();
}]);

