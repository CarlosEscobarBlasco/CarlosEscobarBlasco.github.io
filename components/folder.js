(function() {

  Vue.component('folder', function(resolve) {
    axios.get('/components/folder.html').then(function(html){
      resolve({
        template: html,
        props:{},
        data: function() { return {
          message: 'Folder'
        }}
      })
    })
  })  

})()