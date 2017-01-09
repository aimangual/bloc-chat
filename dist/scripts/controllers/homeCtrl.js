(function () {

    function HomeCtrl($scope, Room, Message) {
        rooms = Room.all;
        
        rooms.$loaded().then(function(rooms) {
            var roomMessages = '-K_dQ0WpllPn1sSlp-s_';
            room = rooms.$getRecord(roomMessages);
            
            $scope.currentRoom = room;
            $scope.messages = Message.getByRoomId($scope.currentRoom.$id);
        });
        
        this.rooms = rooms;
        
        this.setCurrentRoom = function(room) {
            $scope.currentRoomName = room;
            $scope.messages = Message.getByRoomId($scope.currentRoomName.$id);
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', 'Message', HomeCtrl]);
})();