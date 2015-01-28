/**
* @file Room Controller
* @description Contains the implementation of the Room Controller responsible
* for all the interaction between users
*/

module.exports = function RoomController($scope, $stateParams, navigator) {
    var isCameraActive = false;
    var isAudioActive = false;
    var ownStream;

    // get room name from params
    $scope.roomName = $stateParams.roomName;

    // array of streams to be presented
    $scope.streams = [];

    $scope.getCameraState = function () {
        return isCameraActive ? 'on' : 'off';
    };

    $scope.getAudioState = function () {
        return isAudioActive ? 'on' : 'off';
    };

    $scope.toggleCamera = function () {
        if(!isCameraActive) {
            navigator.getUserMediaStream({
                video: true
            }).then(function (stream) {
                ownStream = stream;
                isCameraActive = true;
                $scope.streams.push(stream);
            });
        } else {
            ownStream.stop();
            isCameraActive = false;
            $scope.streams.splice($scope.streams.indexOf(ownStream), 1);
        }
    };

    $scope.toggleAudio = function () {
        if(!isAudioActive) {
            navigator.getUserMediaStream({
                video: true,
                audio: true
            }).then(function (stream) {
                ownStream = stream;
                isCameraActive = true;
                $scope.streams.push(stream);
            });
        };
    };

};
