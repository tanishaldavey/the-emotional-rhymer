export const getRhymes = rhymes => ({
  type: 'GET_RHYMES',
  rhymes
});

export const getQueriedWord = queriedWord => ({
  type: 'GET_QUERIED_WORD',
  queriedWord
})

export const getWordDetails = wordDetails => ({
  type: 'GET_WORD_DETAILS',
  wordDetails
})

export const getRecentSearches = recentSearch => ({
  type:'GET_RECENT_SEARCHES',
  recentSearch
})
