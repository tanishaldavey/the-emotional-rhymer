import React from 'react';
import Navigation from '../Navigation/Navigation';
import HomePageContainer from '../HomePageContainer/HomePageContainer';
import RhymesContainer from '../../containers/RhymesContianer/RhymesContainer';
import WordDetails from '../../containers/WordDetails/WordDetails';
import RecentSearchesContainer from '../../containers/RecentSearchesContainer/RecentSearchesContainer';
import NotFound from '../NotFound/NotFound';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

const App = () => {
  return (
    <main className="App">
      <Navigation />
      <HomePageContainer />
      <Switch>
        <Route exact path='/:word/rhymes' render={() => <RhymesContainer />} />
        <Route path='/:word/rhymes/:otherWord/word-details' render={() => <WordDetails />} />
        <Route path='/recentSearches' render={() => <RecentSearchesContainer />} />
        <Route path='*' render={() => <NotFound />} />
      </Switch>
    </main>
  );
}

export default App;
