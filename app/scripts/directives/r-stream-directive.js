'use strict';

module.exports = function() {
    return {
        restrict: 'E',
        scope: {
            stream: '=stream'
        },
        templateUrl: 'views/r-stream-directive.html',
        controller: function ($scope, $element) {
            var createSrc = window.URL ?
                window.URL.createObjectURL :
                function(stream) {
                    return stream;
                };

            var video = $element.find('video')[0];

            video.src = createSrc($scope.stream);
            video.play();
            console.log('stream directive - ', $element.find('video'));
        }
    };
};
