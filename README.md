## My Party-Planning Project

This project was a tech task I was recently asked to work on (end of September 2020). It was really interesting to have the opportunity to challenge myself, put in practice my knowledge, and learn new things!<br>
I was asked to give the possibility to a not-signed-in user to get access to a list of suppliers and add one or more extra functionalities.<br>
I developed this web-app using **React** and, more specifically, the library **create-react-app**. I also had the opportunity to put into practice my newly built React testing skills using **Jest**<br>
In order to download this project and be up and running with it, clone the repository and run:
```
npm install
```

#### Useful Scripts

In the project directory, you can run:

###### `npm start`
Runs the app in the development mode.<br />


###### `npm test`
Launches the test runner in the interactive watch mode.<br />

###### `npm run build`
Builds the app for production to the `build` folder.<br />


## User Stories

My first goal for this project was to respond to the following user story: 
```
As a user
I want to be able to see a list of suppliers before I sign up to the platform
So that I get a good idea of the kind of suppliers I will be matched with
```
I fetched data from the provided API with a componentDidMount function so that, when the user opens the app is visualising the first 10 suppliers straight away. These suppliers are rendered thanks to the SuppliersList component and its children<br>
In addition to that, I worked on another user story:
```
As a user
I want to be able to see a more specific list of suppliers based on different tags
So that I get a good idea of the kind of suppliers I will be matched with based on specific needs
```
In order to do this, I created onFilterChange function that takes a filter argument(string) and is fetching data from the API accordingly. I also created a Filter component with several buttons. Everyone of them is triggering the onFilterChange function passing a specific filter string onClick.<br>
The last user story is the following:
```
As a user
I want to be able to get to a log in page
So that I sign in and get more information about specific suppliers
```
For making this happen I built a LogIn component that is rendering a log-in form. Then I set a new state for my App component. This state is called route and it's defaulting to "home". I created an onRouteChange function that is taking a route (string) as an argument and accordingly runs the SetState for the route state. Basically if the route changes from "home" to "logIn", the App component stop rendering the other components and renders just the LogIn one. <br>
This LogIn component is not actually allowing the user to log in :smile: but he would be able to see the form by clicking on the log-in link in the NavBar component or by clicking on any displayed supplier.

## Components
<img src="https://github.com/BeneArinci/Home-Task_Feast-it/blob/master/public/images/ComponentsTree.png" width="500" height="auto">

## How it looks :smile:
<img src="https://github.com/BeneArinci/Home-Task_Feast-it/blob/master/public/images/app.png" width="1300" height="auto">
