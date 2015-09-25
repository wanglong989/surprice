

angular.module('Cool.ApiFilter', [])
    .filter('icon',[function(){
        //过滤器
        return function(code){
            var value = '';
            switch(code){
                case('0'):
                    value = '成功';
                    break;
                case('1'):
                    value =  '失败';
                    break;
                case('2'):
                    value =  '没成功，没失败';
                    break;
            }
            return value;
        }
    }])

