(function() { /* globals  VueRouter */
  "use strict";

  var router = routing()

  new Vue({
    el: '#app',
    router: router,
    data: function() {
      return {  }
    }
  })
    

  function routing() {
    var router = new VueRouter({
      routes: [
        {
          path: '/',
          redirect: '/start'
        },
        { path: '/start', name:'start',
          component: { template: '<div><folder></folder></div>' }
        }
        ]
    })

    return router
  }

})()