



.replace(/[{"},]/g, "", "$&\n");



                // Default Sample
//                 var default_url = "/metadata/BB_940";
//                 Plotly.d3.json(default_url, function(error, response) {
//                     if (error) return console.warn(error);
                    
//                     var metaData = response;
//                     var tableData = Object.values(metaData);
//                     console.log(tableData);

//                     var headerValues = [];
//                     var cellValues = [];

//                     for (i = 0; i < tableData.length; i++) {
//                         headerValues[i] = tableData[0];
//                         headerValues[i] = headerValue;
//                         cellValue = tableData[i];
//                         cellValues[i] = cellValue;
//   }
                
//                     var data = [{

//                         type: 'table',
//                         header: {
//                             values: headerValue
//                         },
//                         cells: {
//                             values: cellValues
//                         }
//                     }]
//                     Plotly.plot('graph', data);
//                 })    
//                 // // Update the plot with new data
//                 function updatePlotly(newdata) {
//                     var table = document.getElementById('graph');
//                      console.log(newdata[0])
//                      console.log(newdata[1])  
//                     // var metaSample = [{
//                     // type: 'table',
//                     // header: {
//                     // values: newdata[0]
//                     // },
//                     // cells: {
//                     // values: newdata[1],
//                     // align: ["center", "center"],
//                     // line: {color: "black", width: 1},
//                     // fill: {color: ['rgba(228, 222, 249, 0.65)','rgb(235, 193, 238)', 'rgba(228, 222, 249, 0.65)']},
//                     // font: {family: "Arial", size: 10, color: ["black"]}
//                     // }
//                     // }]
//                     Plotly.restyle('graph', newdata[0])
//                     Plotly.restyle('graph', newdata[1])
//                     }
//                 //     // Plotly.restyle('graph', newdata, layout)
                    

                // Get new data whenever the dropdown selection changes
                // function optionChanged(route) {
                //     console.log(route);
                //     Plotly.d3.json(`metadata/${route}`, function(error, data) {
                //     console.log("newdata", data);
                                       
                //     updatePlotly(data);
                //             });
                //         }