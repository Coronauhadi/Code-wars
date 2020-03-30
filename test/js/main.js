

var app = new Vue({
  el: '#app',
  created: function() {
    this.addtables()

  },
  methods:{
    "addtables": function() {
      for (var i = 0; i < this.y; i++) {
        let a = []
        for (var j = 0; j < this.y; j++) {
          a.push({"x": i+1, "y": j+1})
        }
        this.tables.push(a)
      }
    },
    "getCoords": function(elem) {
      var box = elem.getBoundingClientRect();

      return  {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };

    },
    "getcoor": function() {
      let b = document.getElementById('x1y1')

      console.log(this.getCoords(b))
    },
  },
  data: {
    pers: {
      pos: {}
    },
    x: 16,
    y: 16,
    tables: [],
    message: 'Привет, Vue!'
  }
})
