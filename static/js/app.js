// Get the url endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Retrieve JSON data
d3.json(url). then(function(data) {
    console.log(data);
});

let sample_values = 
let otu_ids =
let otu_labels = 

// Initializes the page with a default plot
function init() {
    let data = [{
      values: sample_values,
      labels: otu_ids,
      type: "bar",
      orientation: 'h',
      text: hover_text,
      hoverinfo: otu_labels
    }];
  
    let layout = {
      height: 600,
      width: 800
    };
  
    Plotly.newPlot("bar", data, layout);
  }
  
  // Call updatePlotly() when a change takes place 
  d3.selectAll("#selDataset").on("change", newsamplePlot);
  
  // This function is called when a dropdown menu item is selected
  function newsamplePlot() {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    let otuData = dropdownMenu.property("sample_values");
  
    // Initialize x and y arrays
    let x = [];
    let y = [];
  
    if (otuData === 'dataset1') {
      x = [1, 2, 3, 4, 5];
      y = [1, 2, 4, 8, 16];
    }
  
    else if (otuData === 'dataset2') {
      x = [10, 20, 30, 40, 50];
      y = [1, 10, 100, 1000, 10000];
    }
  
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
  }
  
  init();