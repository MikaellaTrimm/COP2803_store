function createBarGraph(monthData) {

  // creating the div for the graph
  var graph = document.createElement("div");
  graph.style.position = "relative";
  graph.style.margin = "0 auto";
  graph.style.width = "75%";

  // setting height
  var height = 0;
  for (var i = 0; i < monthData.length; i+= 1) {
    height = Math.max(height , monthData[i].value);
  }
  graph.style.height = (height + 5) + "px";

  // styling bottom border
  graph.style.borderBottomStyle = "solid";
  graph.style.borderBottomwidth = "2px";
  graph.style.borderBottomColor = "darkblue";

  var barPosition = 0;
  var barWidth = 40;
  for (var i = 0; i < monthData.length; i += 1) {
    var month = monthData[i]
    var bar = document.createElement("div");
    bar.style.position = "absolute";
    bar.style.left = barPosition + "px";
    bar.style.width = barWidth + "px";
    bar.style.backgroundColor = month.color;
    bar.style.height = month.value + "px";
    bar.style.borderStyle = "inset";
    bar.style.borderColor = month.color;
    bar.style.borderWidth = "1px";
    // the fancy stuff
    bar.style.backgroundImage =
        "-moz-linear-gradient(" + month.color + ", black)";
    bar.style.backgroundImage =
        "-webkit-gradient(linear, 0% 0%, 0% 90%," +
        "color-stop(0, " + month.color + "), color-stop(1, black))";
    bar.style.backgroundImage =
        "linear-gradient(" + month.color + ", black)";

    bar.style.bottom = "0px";
    graph.appendChild(bar);

    // the new bar position
    barPosition += (barWidth *1.5);

  }

  return graph;

}

// var = resetBarsToZero() {
//
// }


window.onload = function () {
    var monthData = [{ color: "red" , value: 40 },
          { color: "orange" , value: 10 },
          { color: "yellow" , value: 100 },
          { color: "green" , value: 65 },
          { color: "cyan" , value: 75 },
          { color: "lightblue" , value: 120 },
          { color: "blue" , value: 121 },
          { color: "indigo" , value: 175 },
          { color: "purple" , value: 220 },
          { color: "magenta" , value: 275 },
          { color: "hotpink" , value: 300 },
          { color: "pink" , value: 15 },

    // document.getElementById("resetGraph").onclick = resetBarsToZero;
    ];

    var graph = createBarGraph(monthData);
    document.getElementById("graphHome").appendChild(graph);
};
