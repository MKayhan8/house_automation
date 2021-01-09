# House Automation Simulation

House automation simulation made with [React](https://reactjs.org/) _17.0.1_

## About Project

The aim of the project is to control and monitor different devices in different rooms of the house over the web.


## Libraries and Tools
* [React Hooks](https://reactjs.org/docs/hooks-intro.html) _For state management between pages_
* [React Router](https://reactrouter.com/web/guides/quick-start)  _For transitions between pages_
* [axios](https://github.com/axios/axios), _Promise based HTTP client for the browser and node.js_ 
* [chart.js](https://www.chartjs.org/) _Simple yet flexible JavaScript charting for designers & developers_
* [react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2)  _React wrapper for chart.js 2_  
* [cross-env](https://github.com/kentcdodds/cross-env) _for testing project different browsers_                     
## Usage

**Before installing and running this repo, go to [house_automation_api](https://github.com/MKayhan8/house_automation_api) and run it. This is the RESTful API for the house automation project I develop with [express.js](https://expressjs.com/) with `get` and `patch` methods. It listens [http://localhost:9000](http://localhost:9000)\
 _Then you can continue install and start house simulation._**

* `npm install` 
    - installs package dependencies
* `npm start`
    - Runs the app in the development mode.Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
The page will reload if you make edits.

## Screenshots
**From the dashboard page, different devices in all rooms can be managed and monitored. At the same time, it updates the data on the server.\
Graphs are generated on the pages for specific rooms with the temperature and energy data of those rooms obtained from the server.**

<p float="left" >
<img src="src/Screenshots/dashboard_lg.jpg" width="100%" />
<img src="src/Screenshots/kitchen_lg.jpg" width="100%" />
</p>
                                
<table>
  <tr>
    <td>iPhone X</td>
    <td>iPhone X</td>
    <td>iPad</td>
  </tr>
  <tr>
   <td><img src="src/Screenshots/iphonex_drawer.jpg"width=300 height=480 /></td>
   <td><img src="src/Screenshots/iphonex_sm.jpg" width=300 height=480 /></td>
   <td> <img src="src/Screenshots/kitchen_sm.jpg" width=300 height=480 /></td>
  </tr>
 </table>
