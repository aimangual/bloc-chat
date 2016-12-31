(function() {
    function room($firebaseArray) {
        var room = {};
        
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        room.all = rooms;
            
        room.add = function (room) {
            rooms.$add(room);
        };
        
        return {
            all: rooms
        };
    }
    
angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', room]);
})();