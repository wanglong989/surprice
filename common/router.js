app.provider("router", ["$stateProvider", "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider) {
        this.$get = function() {
            return {}
        },
            $stateProvider
                .state("index", {
                    url: "/index",
                    views: {
                        main: {
                            templateUrl: "views/home/home.tpl.html",
                            controller: "home.ctrl"
                        }
                    }
                })
                .state("qrcode", {
                    url: "/qrcode",
                    views: {
                        main: {
                            templateUrl: "views/qrcode/qrcode.tpl.html",
                            controller: "qrcode.ctrl"
                        }
                    }
                })
                .state("demo", {
                    url: "/demo",
                    views: {
                        main: {
                            templateUrl: "views/demo/demo.tpl.html",
                            controller: "demo.ctrl"
                        }
                    }
                });

        $urlRouterProvider.otherwise("/index")

    }]);