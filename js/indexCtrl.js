/**
 * Created by JIANHAO_LI on 27/05/2016.
 */
angular.module("myWeb",[])
.controller("indexCtrl", function ($scope) {

    var status = true;                      //control the play of background music
    $scope.musicControl = function () {
        var music = angular.element("#music")[0];
        if(status == true){
            music.pause();
        }else{
            music.play();
        }
        status = !status;
    }
})