
module.exports = function ($q) {

    var navigator = window.navigator || {};
    navigator.getUserMedia = navigator.getUserMedia ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia    ||
                            null;

    /**
     * Checks if current browsers supports User Media
     * @return {bool}
     */
    this.supportsUserMedia = function () {
        return !!this.navigator.getUserMedia;
    };

    /**
     * Returns a promise that will resolve the User Media Stream
     * @param {Object} options Options for getUserMedia
     * @return {Promise} 
     */
    this.getUserMediaStream = function (options) {
        var deferred = $q.defer();
        this.navigator.getUserMedia(options,
            function onSuccess(stream) {
                deferred.resolve(stream);
            }, function onError(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    };
}
