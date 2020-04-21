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

![Screen Shot 2020-04-20 at 5 15 57 PM](https://user-images.githubusercontent.com/41553045/79809000-a350c280-832c-11ea-852b-1449a5b4af32.png)

* After a user has searched for rhymes

![Screen Shot 2020-04-20 at 5 16 16 PM](https://user-images.githubusercontent.com/41553045/79808999-a350c280-832c-11ea-8c39-ce7c0b4549e4.png)

* After a user has clicked on the word to get the definition, etc. of a word

![Screen Shot 2020-04-20 at 5 16 22 PM](https://user-images.githubusercontent.com/41553045/79808998-a2b82c00-832c-11ea-81b8-830e7f3093c3.png)


* After a user has clicked on the Recent Searches button

![Screen Shot 2020-04-20 at 5 16 53 PM](https://user-images.githubusercontent.com/41553045/79808997-a21f9580-832c-11ea-8a94-d0264625eef0.png)

## Future Iterations
* Add a favoriting feature for a user to be able to save favorite words searched for
* Add a feature that allows a use to choose what part of speech they would like returned for the word details, if more than one part of speech is available.


  #### Other Notes
  For a complete list of issues on this site, see [here](https://github.com/tanishalatoya/the-soft-poet/issues).

