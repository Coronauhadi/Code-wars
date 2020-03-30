

var app = new Vue({
  el: '#app',
  created: function() {
    this.addtables()
  },
  mounted: function() {
    this.setcoor("x1y1")
    window.onresize = (event) => {
     this.windowWidth = window.innerWidth;
   };
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
    "setcoor": function(id) {
      let cor = this.getCoords(document.getElementById(id))
      this.pers.pos.top = cor.top+'px'
      this.pers.pos.left = cor.left+'px'
    },
    "addshg": function() {
      this.pers.cor.y++
      this.setcoor("x"+this.pers.cor.x+"y"+this.pers.cor.y)
    },
  },
  data: {
    windowWidth: window.innerWidth,
    pers: {
      cor:{'x': 1, 'y': 1},
      pos: {"top": "1px", "left":"1px",}
    },
    x: 16,
    y: 16,
    tables: [],
    message: 'Привет, Vue!'
  },
  watch: {
    // pers: function(val) {
    //   console.log('asds');
    //   this.setcoor("x"+val.x+"y"+val.y)
    // },
    windowWidth: function (val) {
      this.setcoor("x"+this.pers.cor.x+"y"+this.pers.cor.y)
    }
  }

})
