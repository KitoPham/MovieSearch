# MovieSearch

Hi this project is to demonstrate basic React Native network calls, pagination, and navigation. This application takes in a search query
and then returns a listing of movies that match the search query given. Currently implemented is lazy loaded scrolling in a FlatList for pagination
however commented is code for the possibility of pagination via "next button" instead of scrolling. To utilize this app you'll need to acquire your
own apikey from [the open movie data base](http://www.omdbapi.com/).

Then you'll need to create a file called 'apiKeys.js' in the root directory with contents that looks like
```javascript
export default {API_KEY : [YOUR API KEY HERE]};
```
Afterwards point your terminal to your root directory, start an ios or android emulator and run the commands
`react-native run-android`
or
`react-native run-ios`


For more information go to the [react-native getting started guide](https://facebook.github.io/react-native/docs/getting-started) and go to the Building Projects tab


Current To-Do Items :

* Data Caching
* Error Checking
