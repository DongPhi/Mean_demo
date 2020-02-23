angular.module('userControllers',[])

.controller('regCtrl', function($http){

    var app = this;

    this.regUser = function(regData){
        app.errorMsg = false;
        console.log('from submitted');
        $http.post('/api/users', this.regData).then(function(data){
            console.log(data.data.success);
            console.log(data.data.message);
            if(data.data.success){
                //Create Success Message
                app.successMsg = data.data.message;
                //Redirect to home page
            }else{
                //Create an error message
                app.errorMsg = data.data.message;
            }
        })
    };
});