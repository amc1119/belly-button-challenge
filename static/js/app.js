// Get the url endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

function init() {
  let selector = d3.select("#selDataset")
  // Retrieve JSON data
  d3.json(url). then(function(bellyButton) {
  let samples = bellyButton.names;
  for (let i =0; i < samples.length; i++) {
    selector.append("option").text(samples[i]).property("value", samples[i]);
  }
  console.log(bellyButton);

  let firstSubject = samples[0];

  info(firstSubject);
  charts(firstSubject);
  })
}

init();

function optionChanged(subjectID) {
  info(subjectID);
  charts(subjectID);
}

function info(sampleItem) {
  d3.json(url). then(function(bellyButton) {
    let meta = bellyButton.metadata;
    let metaArray = meta.filter(obj => obj.id == sampleItem);
    let metaResults = metaArray[0];

    console.log(metaResults);

    let table = d3.select("#sample-metadata");
    table.html("");

    for(key in metaResults) {
      table.append("h6").text(`${key}: ${metaResults[key]}`)
    }
  })
}

function charts(chartData) {
  d3.json(url). then(function(bellyButton) {
    let meta = bellyButton.metadata;
    let metaArray = meta.filter(obj => obj.id == chartData);
    let metaResults = metaArray[0];
    let washFrequency = metaResults.wfreq;

    let sample = bellyButton.samples;
    let sampleArray = sample.filter(obj => obj.id == chartData);
    let sampleResults = sampleArray[0];

    let otu_ids = sampleResults.otu_ids;
    let otu_labels = sampleResults.otu_labels;
    let sample_values = sampleResults.sample_values;

    // Trace for the OTU Data 
    let trace1 = {
    x: sample_values.slice(0, 10).reverse(),
    y: otu_ids.slice(0, 10).map(otu_id => `OTU ${otu_id}`).reverse(),
    text: otu_labels.slice(0, 10).reverse(),
    type: "bar",
    orientation: 'h'
  };

  // Data trace array
  let data = [trace1];

  let layout = {
    margin: {
      l: 130,
      r: 30,
      t: 30,
      b: 100
    }
  };

  Plotly.newPlot("bar", data, layout);
  var bubbleTrace = {
    x: otu_ids,
    y: sample_values,
    text: otu_labels,
    mode: 'markers',
    marker: {
      color: otu_ids,
      colorscale: "Earth",
      size: sample_values
    }
  };

  var gaugeData = [
    {
      // domain: { x: [0, 1], y: [0, 1] },
      // value: washFrequency,
      title: { 
        useHTML: true,
        text: "<strong>Belly Button Washing Frequency</strong><br>Scrubs per Week" 
    },
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: { range: [null, 9] },
        steps: [
          { range: [0, 1], color: "pink" },
          { range: [1, 2], color: "peach" },
          { range: [2, 3], color: "light pink" },
          { range: [3, 4], color: "light orange" },
          { range: [4, 5], color: "lime" },
          { range: [5, 6], color: "green" },
          { range: [6, 7], color: "gray" },
          { range: [7, 8], color: "gray" },
          { range: [8, 9], color: "gray" }
        ],
        threshold: {
          line: { color: "red", width: 4 },
          thickness: 0.75,
          value: 490
        }
      }
    }
  ];
  
  var gaugeLayout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
  Plotly.newPlot('gauge', gaugeData, gaugeLayout);
  

  var bubbleData = [bubbleTrace];
  
  var bubbleLayout = {
    xaxis: {
      title: 'OTU ID'
    },
    showlegend: false,
    margin: {
      l: 50,
      r: 0,
      t: 0,
      b: 50
    }
  };
  
  Plotly.newPlot('bubble', bubbleData, bubbleLayout);
  
  })

}

  