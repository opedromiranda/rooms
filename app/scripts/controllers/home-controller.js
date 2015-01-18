/**
 * @file Home Controller
 * @description Contains the implementation of the Home Controller responsible
 * for allowing the users to create a new room
 */

module.exports = function HomeController($scope, $state, navigatorService) {

    /**
     * A variable that will be true if a new room is being
     * @var {bool}
     */
    $scope.isCreatingRoom = false;

    /**
     * Sends an HTTP request to request the creation of a new room
     * The state of the application is update if the room is created succesfully
     */
    $scope.createRoom = function () {
        // update isCreatingRoom state while the answer doesn't arrive
        $scope.isCreatingRoom = true;

        if($scope.roomName.length > 0 ) {
            $state.go('room', {
                roomName: $scope.roomName
            });
        } else {
            // TODO prompt user to enter room name
        }
    };
};
