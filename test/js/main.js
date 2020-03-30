

var app = new Vue({
  el: '#app',
  created: function() {
    this.addtable()
  },
  methods:{
    "addtable": function() {
      for (var i = 0; i < this.y; i++) {
        let a = []
        for (var j = 0; j < this.y; j++) {

        }
      }
      this.table =
    },
  },
  data: {
    x: 16,
    y: 16,
    table: [],
    message: 'Привет, Vue!'
  }
})
