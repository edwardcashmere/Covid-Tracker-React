# React-ContextAPI- Application

## Covid Tracker
This is a covid Tracking App build with React with context api for state management,3rd party api's,Material UI,chart.js .

# Project
The project has line chart and bar chart for visualization of trends.


## Run Locally

To run the app locally, clone the repository. Then run the command :-

```bash
npm project-local

```

This script will install all the dependencies and run your development server.



## production deployment 

This deployment will be done on a digital ocean server, a script has been added to the package.json file to make the deployment
as easy as possible `prod`(without pm2)  `prod2`(with pm2 installed).

However to set up the server ,google ``server set-up for node application ubuntu server`` and pick the digital ocean documentation.
The digital ocean documentation is clear and precise on the steps to take and commands to run to set up the server successfuly. 

After which you can clone the repository in your server then run

```bash
cd covidTracker

npm run prod 

```

This will do all dependency install and start the application. You can check by typing your server ip with the port 8080 included  i.e ` 172:89:54:30:8080`


You will notice the app will be running on the foreground,and this is not adviced ,install pm2 with command 

```bash
npm i pm2 -g

```

If you run into a permission problem add sudo to the start of the command. Use pm2 to run your application.

```bash
npm run prod2

```

This script the same as the `npm run prod` script but now this will run your application in the background.

[Preview Project](https://edwardcashmere.github.io/Covid-Tracker-React/)

## Author

>EDWIN OMONDI



