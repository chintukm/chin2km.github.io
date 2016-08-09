﻿
(function () {
    "use strict";
    angular.module('InfyGlasswall.Credits.controllers', [])
            .controller('CreditsController', CreditsController);

    CreditsController.$inject = ['$rootScope', '$scope', '$route', '$location', '$timeout', '$interval', 'AppService'];

    function CreditsController($rootScope, $scope, $route, $location, $timeout, $interval, AppService) {
        var _this = this;
        _this.notifications = [];
        $timeout(function myfunction() {
            _this.notifications.push({ message: "Please feel free to report the bugs to the developer. Help us improve your experience!", status: "success" });
        }, 3000);

        (function SetActiveTab() {
            AppService.LoadTimer(300);
        })();


    }

})();