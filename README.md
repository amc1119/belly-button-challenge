# belly-button-challenge

# Analyzing and Exploring Belly Button Biodiversity Dataset
* Used the D3 library to access the URL `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json` to read in 'samples.json'. 


# Organizing and Displaying Data
* Worked with tutor to create visualizations

1. Created a horizontal bar with a dropdown menu to display the top 10 OTUs found in that individual.

    i. Included 'sample_values' as values, 'otu_ids' as labels, and 'otu_labels' as hovertext.

2. Created a buble chart displaying each sample.
    
    i. Included 'otu_ids' as x values, 'sample_values' as y values, 'sample_values' for marker size, 'otu_ids' for marker colors, and 'otu_labels' as text values.

3. Displayed the selected sample metadata to include each key-value pair from the metadata JSON object. 

4. Created a function 'optionChanged' to update all plots when a new sample is selected.


## Failed Attempt of Gauge Chart included
* Beginning stages of gauge chart attempt code included.
