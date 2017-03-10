(function() {
    function ModalCtrl($uibModalInstance, Room) {
        
        this.roomService = Room;
        
        this.dismiss = function() {
            $uibModalInstance.dismiss('cancel');
            
//            var modalInstance = $uibModal.open({
//                animation: this.animationsEnabled,
//                templateUrl : '/templates/modal.html',
//                controller: 'ModalInstanceCtrl',
//                controllerAs: 'modal'
                
            };
        
            this.submit = function (){
                if(this.text) {
                    this.roomService.addRoom(this.text);
                    this.text = '';
                    $uibModalInstance.close();
                }
            };
           
//           modalInstance.result.then(function(name) {
//               this.room = name;
//               Room.create(this.room);
//           }, function() {
//               $log.info('Modal dismissed at ' + new Date());
//           });
//       };
//        
//       this.toggleAnimation = function () {
//            this.animationsEnabled = !this.animationsEnabled;
//       };
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();