        var url = "/names"
                Plotly.d3.json(url, function(error, response) {
                if (error) return console.warn(error);
                console.log(response);
                
                var select = document.getElementById("select"),
                itemArray = response;

                for (var i = 0; i < itemArray.length; i++) {

                    var opt = itemArray[i];
                    var el = document.createElement("option");
                    el.textContent = opt;
                    el.value = opt;
                    select.appendChild(el);
    
                }})
                // Update the plot with new data
                function updatePlotly(newdata) {
                    var table = document.getElementById('table');
                    Plotly.restyle(table, newdata, layout)
                        }

                // Get new data whenever the dropdown selection changes
                function optionChanged(route) {
                    console.log(route);
                    Plotly.d3.json(`metadata/${route}`, function(error, data) {
                    console.log("newdata", data);
                                       
                    updatePlotly(data);
                            });
                        }
 

// function optionChanged() {
//     /* data route */
//     var url = "/names";
//     d3.json(url, function(error, response) {
//         if (error) return console.warn(error);
        
//         console.log(response);

//         var select = document.getElementById("select"),
//         itemArray = ["sample1", "sample2", "sample3"];

//         for (var i = 0; i < itemArray.length; i++) {

//             var opt = itemArray[i];
//             var el = document.createElement("option");
//             el.textContent = opt;
//             el.value = opt;
//             select.appendChild(el);
//         }
//         });
//     }
// options();



        // var layout = {
        //     title: "Pet Pals",
        //     xaxis: {
        //         title: "Pet Type"
        //     },
        //     yaxis: {
        //         title: "Number of Pals"
        //     }
        // };

        // Plotly.newPlot("plot", data, layout);
//     });
// }

// buildPlot();

// // Get new data whenever the dropdown selection changes
// function getData(route) {
//     console.log(route);
//     Plotly.d3.json(`/${route}`, function(error, data) {
//         console.log("newdata", data);
//         updatePlotly(data);
//         });
//     }
// function getData() {
//     d3.json('/names', function(error, data) {
//         if (error) return console.warn(error);
//       // Grab values from the response json object to build the plots
//       var names = document.getElementById('names');
      

//       } 

// // Handler for dropdown value change
// var dropdownChange = function() {
//     var newData = d3.select(this).property('value'),
//     newData = cerealMap[newData];

//     updateMeta(newData);
// };

// Plotly.d3.json('/pie', function(error, data){
//     if (error) return console.warn(error);

//     var layout = {
//         title: "Lyric Frequency"}
//     var PIE = document.getElementById('pie');
//     Plotly.plot(PIE, data, layout);
// }
// )}