

angular.module('Cool.ApiService', [])

    .factory('CoolService',['$http', '$q', function ($http, $q) {

        return {
            //动态加载cssjsfile
            //APIService.loadjscssfile("js/myscript.js", "js") //打开页面时浏览器动态的加载文件
            //APIService.loadjscssfile("view/javascript.php", "js") // 打开页面时浏览器动态的加载"javascript.php" ，
            //APIService.loadjscssfile("css/myscript.css", "css") // 打开页面时浏览器动态的加载"myscript.css" ，
            loadjscssfile : function(filename, filetype){
                if (filetype=="js"){ //判断文件类型
                    var fileref=document.createElement('script')//创建标签
                    fileref.setAttribute("type","text/javascript")//定义属性type的值为text/javascript
                    fileref.setAttribute("src", filename)//文件的地址
                }
                else if (filetype=="css"){ //判断文件类型
                    var fileref=document.createElement("link")
                    fileref.setAttribute("rel", "stylesheet")
                    fileref.setAttribute("type", "text/css")
                    fileref.setAttribute("href", filename)
                }
                if (typeof fileref!="undefined")
                    document.getElementsByTagName("head")[0].appendChild(fileref)
            },
            //与后台数据交互
            getService : function(param){

                var deffered = $q.defer();
                    $http({
                        //method: config.data.method==='files'? 'GET':'POST',
                        method:  'GET',
                        dataType: "json",
                        contentType:'application/json; charset=UTF-8',
                        url: param.url,
                        headers: {},
                        data:{}
                    })

                    .success(function(data){
                        deffered.resolve(data);
                    })
                    .error(function(e, code){
                        deffered.reject(code);
                    });

                    return deffered.promise;
            }

        };
    }])
