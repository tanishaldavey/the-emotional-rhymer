export const findRhymingWords = async (word) => {
  try {
    let response = await fetch(`https://api.datamuse.com/words?ml=emotion&rel_rhy=${word}`)
    return await response.json()

  } catch (error) {
    return error.message
  }
}
