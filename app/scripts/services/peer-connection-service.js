module.exports = function ($window) {
    var PeerConnection = $window.RTCPeerConnection ||
                        $window.mozRTCPeerConnection ||
                        $window.webkitRTCPeerConnection ||
                        null;

    var configuration = {
        iceServers: [
            {url: "stun:23.21.150.121"},
            {url: "stun:stun.l.google.com:19302"}
        ]
    }
    this.create = function () {
        return new PeerConnection(configuration);
    }

};
