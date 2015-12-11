$(document).ready(function () {
  var bubbleChart = new d3.svg.BubbleChart({
    supportResponsive: true,
    //container: => use @default
    size: 600,
    //viewBoxSize: => use @default
    innerRadius: 600 / 3.5,
    //outerRadius: => use @default
    radiusMin: 50,
    //radiusMax: use @default
    //intersectDelta: use @default
    //intersectInc: use @default
    //circleColor: use @default
    data: {
      items: [
        {text: "Family", count: "236"},
        {text: "Friends", count: "382"},
        {text: "Work", count: "170"},
        {text: "House", count: "123"},
        {text: "Appointments", count: "12"},
        {text: "Lists", count: "170"},
        {text: "Reminders", count: "382"},
        {text: "Addresses", count: "10"},
        {text: "SocialMedia", count: "170"},
      ],
      eval: function (item) {return item.count;},
      classed: function (item) {return item.text.split(" ").join("");}
    },
    plugins: [
      {
        name: "central-click",
        options: {
          text: "(pull data from google calendar or input )",
          style: {
            "font-size": "12px",
            "font-style": "italic",
            "font-family": "Source Sans Pro, sans-serif",
            //"font-weight": "700",
            "text-anchor": "middle",
            "fill": "white"
          },
          attr: {dy: "65px"},
          centralClick: function() {
            alert("Add events here!", function(){
             /* (function() {*/
              /*  var data = JSONData.slice()
                var format = d3.time.format("%a %b %d %Y")
                var amountFn = function(d) { return d.amount }
                var dateFn = function(d) { return format.parse(d.created_at) }

                var x = d3.time.scale()
                  .range([10, 280])
                  .domain(d3.extent(data, dateFn))

                var y = d3.scale.linear()
                  .range([180, 10])
                  .domain(d3.extent(data, amountFn))
                
                var svg = d3.select("#demo").append("svg:svg")
                .attr("width", 300)
                .attr("height", 200)

                var refreshGraph = function() {
                    svg.selectAll("circle").data(data).enter()
                     .append("svg:circle")
                     .attr("r", 4)
                     .attr("cx", function(d) { return x(dateFn(d)) })
                     .attr("cy", function(d) { return y(amountFn(d)) }) 
                  }

                  d3.selectAll(".add-data")
                   .on("click", function() {
                     var start = d3.min(data, dateFn)
                     var end = d3.max(data, dateFn)
                     var time = start.getTime() + Math.random() * (end.getTime() - start.getTime())
                     var date = new Date(time)

                      obj = {
                         'id': Math.floor(Math.random() * 70),
                         'amount': Math.floor(1000 + Math.random() * 20001),
                         'created_at': date.toDateString()
                       }
                       data.push(obj)
                       refreshGraph()
                    })

                    refreshGraph()
              /*})(); /*closes calendar grapgh function*/                                                                                                                
           /* });/*closes alert*/
          }/*closes central click*/
          }
        },
      {
        name: "lines",
        options: {
          format: [
            {// Line #0
              textField: "count",
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
