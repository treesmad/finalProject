setTimeout(function(){
  $(document).ready(function () {
    var bubbleChart = new d3.svg.BubbleChart({
      supportResponsive: true,
      size: 600,
      innerRadius: 600 / 3.5,
      radiusMin: 50,

      data: {
        items,
        eval: function (item) {return item.count;},
        classed: function (item) {return item.text.split(" ").join("");},
        color: function(){
          return "#bada55"
        }
      },
      plugins: [
        {
          name: "central-click",
          options: {
            text: function(item){
              console.log(item);
              return item.item.start;
            },
            style: {
              "font-size": "20px",
              "font-style": "italic",
              "font-family": "Source Sans Pro, sans-serif",
              //"font-weight": "700",
              "text-anchor": "middle",
              "fill": "white"
            },
            attr: {dy: "65px"},
            centralClick: function() {
              prompt("Give me input");
            }
          }
        },
        {
          name: "lines",
          options: {
            format: [
              {// Line #0
                textField: "start.date",
                classed: {count: true},
                style: {
                  "font-size": "28px",
                  "font-family": "Source Sans Pro, sans-serif",
                  "text-anchor": "middle",
                  fill: "white"
                },
                attr: {
                  dy: "0px",
                  x: function (d) {return d.cx;},
                  y: function (d) {return d.cy;}
                }
              },
              {// Line #1
                textField: "text",
                classed: {text: true},
                style: {
                  "font-size": "14px",
                  "font-family": "Source Sans Pro, sans-serif",
                  "text-anchor": "middle",
                  fill: "white"
                },
                attr: {
                  dy: "20px",
                  x: function (d) {return d.cx;},
                  y: function (d) {return d.cy;}
                }
              }
            ],
            centralFormat: [
              {// Line #0
                style: {"font-size": "50px"},
                attr: {}
              },
              {// Line #1
                style: {"font-size": "30px"},
                attr: {dy: "40px"}
              }
            ]
          }
        }]
    });
  });
},1000);
