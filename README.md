# The Emotional Rhymer
Contributor: [Tanisha L Davey](https://github.com/tanishalatoya)

## Abstract
**Technologies used:** _React, Redux, React Router, React Testing Library, Jest, Fetch API_

The Emotional Rhymer is a React application that allows a user to search for rhymes to a word based on emotion. Additionally, the app can get the definition of a word returned from rhymes, and list the last 10 words a user has searched for. It uses the [Datamuse API](http://www.datamuse.com/api/) to find rhymes related to emotion, and the [Linqua Robot API](https://www.linguarobot.io/) to get the definition of the rhymes found. The app utilizes Redux as it's state controller, and the React Testing Library to test all the components.

For additional details about this project's creation, see [here](https://gist.github.com/tanishalatoya/59b35b6a5e781b4a650d62d8959681b3).

**Key focal points of the app include:**
* Utilizing the technologies mentioned above
* Selecting a specific target, work within constraints to deliver a unique product that helps them in some way.
* Display the data from the API in a way that applies directly to your audience.
* The app must have the ability for users to store/manipulate the data displayed in the application, such as favoriting or adding to a list.

## Installation
1. Clone this repo
1. `npm install`
1. `cd` into directory
1. `npm start`

## Screenshots

* Initial State (_Note: The "NotFound" component is displaying in the initial state, but should not be. An issue is currently pulled out on this repo to address that._)

![Screen Shot 2020-04-27 at 8 29 35 PM](https://user-images.githubusercontent.com/41553045/80440443-08c12800-88c6-11ea-8049-5c52ea15c9c1.png)


* After a user has searched for rhymes

![Screen Shot 2020-04-27 at 8 29 42 PM](https://user-images.githubusercontent.com/41553045/80440453-0d85dc00-88c6-11ea-8cd6-9db0eb3ea7da.png)


* After a user has clicked on the word to get the definition, etc. of a word

![Screen Shot 2020-04-27 at 8 29 52 PM](https://user-images.githubusercontent.com/41553045/80440460-11196300-88c6-11ea-8e7d-076ce0935cb7.png)



* After a user has clicked on the Recent Searches button

![Screen Shot 2020-04-27 at 8 30 16 PM](https://user-images.githubusercontent.com/41553045/80440470-14acea00-88c6-11ea-9071-45ea5e1f3d31.png)



## Future Iterations
* Add a favoriting feature for a user to be able to save favorite words searched for
* Add a feature that allows a use to choose what part of speech they would like returned for the word details, if more than one part of speech is available.
