(function() {
    function homeCtrl(Room) {
        this.room = Room;
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', homeCtrl]);
})();