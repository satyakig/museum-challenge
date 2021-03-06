# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run

### `npm install` (I used Node v14, but any version of Node should work)
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## How it works
### Searching
    1. As the user is typing their input string is being checked against the stored value in Redux every 500ms. If the values differ, then an action is dispatched to update Redux.
    2. If the user presses Enter or clicks the icon button, I immediately check if the current input is different from the one in Redux, if it is then an action is dispatched to update Redux.
### Loading Data
    1. The Museum API requires two different api calls to load the full data about an object. First to get a list of objectIDs based on a search term.
    2. Secondly, each of these objectIDS data must be requested seperately to actually load the data for them
    3. As you type in the search box, there is a DataLoadContainer component which is checking this value against "loaded" data in Redux. (ResultModel.searchMap)
    4. If the search term does not already exist in Redux, that means we need to load data for this search term.
    5. Once a search term is being loaded from the API, its entry is added to Redux, if the request succeeds, then this object is modified and the returned objectIDs are attached to it.
    6. If the request fails then the search term is removed from the map in Redux, so that it can be reloaded again
    7. As the map of searchTerms -> objectIds changes, there is another piece of code in the DataLoadContainer which checks for whether the data for an objectId has been loaded.
    8. If the data for an objectId does not exist, then an request is made to the Museum API to load this data
### Displaying the list
    1. The Items.tsx component uses the search term and the available data to create a list of items that matches the search term. If there is more than 0 results, then a maximum of 20 items will be displayed.
    2. Otherwise a error is displayed
