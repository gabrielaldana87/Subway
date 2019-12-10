# A Journey Visualizing Income on the New York City Subway

<img src="https://github.com/gabrielaldana87/Subway/blob/master/subway.gif" width="600" />

## Development Environment

Run a server. I have run http-server from a Terminal window to serve up my client-side files. I've included CDN scripts
for the React, Underscore, Topojson, D3 and Babel libraries to render my React App.

## Project Description

A React Project for visualizing income disparities within NYC through a journey on the subway. I have created my own
custom datasets joining Median Household Income in 2017 based on NYC Census Tracts and NYC Subway station locations.
To animate the journey please click on the colored circle (not the name of the line) of one of the Subway Lines (1, 6,
L). You will then begin your journey at the beginning of each station and see a line graph on the left update with
the Median Household Income for each of the stations you are passing through.

To view each individual line please refresh the page. There are some bugs in re-rendering the journey as you switch
lines.

I was inspired by the Larry Buchanan's graphic and project for the New Yorker, Inequality and New York's Subway

(https://www.newyorker.com/news/news-desk/idea-of-the-week-inequality-and-new-yorks-subway)

I wanted to take this project (which is currently no longer available as a graphic and animate it as if an individual
were riding the subway).

## Future Work

### Refactoring
If I were to continue working on this exercise; I would have liked to further refactor my code to individualize even
more components.

### Making More Lines Available
I would like to make more subway lines available. For my merged dataset; there are some polygon stations where income
data does not exist or the station traverses more than one census tract.

### Pass Subway Selection as a prop to Label
I would like to pass the onClick event as a prop to my SubwayStations Component to filter for only the stations and
lines that the user has selected (currently it only shows the stations for the 1 line).

### Adding Neighborhood to Chart for More Context
I would like to tag the Neighborhoods for each station so user has more context of neighborhood and their impression
of being there.
