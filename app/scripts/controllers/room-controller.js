/**
* @file Room Controller
* @description Contains the implementation of the Room Controller responsible
* for all the interaction between users
*/

module.exports = function RoomController($scope, $stateParams) {
    // get room name from params
    $scope.roomName = $stateParams.roomName;

};
