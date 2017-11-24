var vm = new Vue({
  el: '.app',
  data: function () {
    var now = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
   	
    return  {
    	person: ['Merkel', 'Seehofer', 'Lindner', 'Oezdemir', 'Steinmeier', 'Schulz']
    };
  }
})
