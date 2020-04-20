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

export const getRecentSearches = recentSearches => ({
  type:'GET_RECENT_SEARCHES',
  recentSearches
})

export const updateError = errorMessage => ({
  type: 'UPDATE_ERROR',
  errorMessage
})
