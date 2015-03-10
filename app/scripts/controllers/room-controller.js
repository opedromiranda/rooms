/**
* @file Room Controller
* @description Contains the implementation of the Room Controller responsible
* for all the interaction between users
*/

module.exports = function RoomController($scope, $stateParams, $window, navigator, PeerConnectionService) {
    var isCameraActive = false;
    var isAudioActive = false;
    var ownStream;
    var pc = PeerConnectionService.create();
    var mediaOptions = {
        video: false,
        audio: false
    }

    // get room name from params
    $scope.roomName = $stateParams.roomName;

    // array of streams to be presented
    $scope.streams = [];

    $scope.getCameraState = function () {
        return mediaOptions.video ? 'on' : 'off';
    };

    $scope.getAudioState = function () {
        return mediaOptions.audio ? 'on' : 'off';
    };

    $scope.toggleCamera = function () {
        mediaOptions.video = !mediaOptions.video;
        if(!mediaOptions.video && !mediaOptions.audio) {
            removeOwnStream();
        } else {
            loadUserMediaStream();
        }
    };

    $scope.toggleAudio = function () {
        mediaOptions.audio = !mediaOptions.audio;
        if(!mediaOptions.video && !mediaOptions.audio) {
            removeOwnStream();
        } else {
            loadUserMediaStream();
        }
    };

    function removeOwnStream() {
        var ownStreamIndex = ownStream ? $scope.streams.indexOf(ownStream) : -1;
        if(ownStreamIndex !== -1) {
            ownStream.stop();
            $scope.streams.splice(ownStreamIndex, 1);
            return true;
        }
        return false;
    }

    function loadUserMediaStream() {
        navigator.getUserMediaStream(mediaOptions)
            .then(function handleStream(stream) {
                var ownStreamIndex = ownStream ? $scope.streams.indexOf(ownStream) : -1;
                if(ownStreamIndex !== -1) {
                    ownStream.stop();
                    $scope.streams[ownStreamIndex] = stream;
                } else {
                    $scope.streams.push(stream);
                }
                ownStream = stream;
            });
    }

    pc.onaddstream = function (evt) {
        $scope.streams.push(evt.stream);
    };

};
