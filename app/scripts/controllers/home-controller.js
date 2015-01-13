/**
 * @file Home Controller
 * @description Contains the implementation of the Home Controller responsible
 * for allowing the users to create a new room
 */

module.exports = function HomeController($scope, navigatorService) {

    /**
     * A variable that will be true if a new room is being
     * @var {bool}
     */
    $scope.isCreatingRoom = false;

    /**
     * Sends an HTTP request to request the creation of a new room
     */
    $scope.createRoom = function () {
        // update isCreatingRoom state while the answer doesn't arrive
        $scope.isCreatingRoom = true;
    };
};
