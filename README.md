# frontend-applications

This repo is created to process data provided by RDW commisioned by the
Volkskrant. The given assignment is to create interesting data visualizations
from the RDW data, using D3.js. The visualizations and concepts are to be used
by the Volkskrant as preliminary research. The data provided by the RDW (Dutch
Vehicle Authority) contains parking data with many different variables that can
be put together, made relationships with, and combined to recognize interesting
insights about the data.

I came up with the following concept:

How sustainable is the population of the Netherlands driving?

For more information regarding this project consult the wiki:
[Debriefing](https://github.com/benl95/functional-programming/wiki/1.-Debriefing).

# Which features

I'm creating a bar chart in D3.js. The user can change the data to be shown in
the bar chart by clicking on the buttons.

# Which data am I using?

For this project I used the following dataset:
[Registered_vehicles_fuel](https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_brandstof/8ys7-d773).

From this dataset I used the following variables:

-  Fuel type
-  Emisson code
-  CO2 Emission

The variables are used as following:

-  Fuel type = retrieve the records of the car and determine the composition of
   the fuel types that are used by cars.
-  Emission code = count the occurrences of each emission code and show that in
   the bar chart.
-  CO2 emission = retrieve the records of the CO2 emission of each car, divide
   these in groups and render the data to the barchart.
   
The only data that had to be cleaned were Emission code and CO2 emission. These initally came as strings and I converted them to integers. The undefined results I converted to null

# Packages used

* d3: ^6.2.0 
* react: ^17.0.1 
* react-dom: ^17.0.1

# Installation guide

Navigate to desired directory

`cd desktop`

Clone the repo to directory

`git clone https://github.com/benl95/frontend-applications.git`

Install modules

`npm i`

Run application

`npm start`

The application can now be viewed on https://localhost:3000

# Live preview

https://ben-fa.netlify.app/

<img width="865" alt="Schermafbeelding 2020-11-27 om 16 07 01" src="https://user-images.githubusercontent.com/43675725/100462491-a41fb300-30ca-11eb-82b3-1e54a67d42ba.png">

# Sources

People and courses that helped out:

-  Support group 6
-  [Modern React with Redux](https://www.udemy.com/course/react-redux/)
-  [React Docs](https://reactjs.org/docs/getting-started.html)

# License

MIT
