(function() {
    function NewRoomCtrl(room, $uibModalInstance) {
        this.cancel = function () {
            $uibModalInstance.dismiss();
        };
        
        this.submit = function () {
            room.add(this.newRoom);
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['room', '$uibModalInstance', NewRoomCtrl]);
})();