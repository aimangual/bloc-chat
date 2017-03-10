(function(){
    function HomeCtrl(Room, $uibModal) {
        
        this.all = Room.all;
        this.currentRoom = null;
        this.messages = null;
        
        this.setRoom =function(room) {
            this.currentRoom = room;
            this.messages = Room.getMessages(room);
        };
        
        this.open = function(){
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal'
            });
        };
        
        this.dismiss = function() {
            $uibModal.dismiss();
        };
        
//        rooms.$loaded().then(function(rooms) {
//            var roomMessages = '-K_dQ0WpllPn1sSlp-s_';
//            room = rooms.$getRecord(roomMessages);
//            
//            $scope.currentRoom = room;
//            $scope.messages = Message.getByRoomId($scope.currentRoom.$id);
//        });
//        
//        this.rooms = rooms;
//        
//        this.setCurrentRoom = function(room) {
//            $scope.currentRoom = room;
//            $scope.messages = Message.getByRoomId($scope.currentRoom.$id);
//        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();