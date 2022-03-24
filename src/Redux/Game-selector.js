export const getData = (state) => {
   return state.GameReducer.data;
}
export const getCush = (state) => {
   return state.GameReducer.cush;
}
export const getMyWallet = (state) => {
   return state.GameReducer.MyWallet;
}
export const getWon = (state) => {
   return state.GameReducer.Won;
}
export const getGameisFetching = (state) => {
   return state.GameReducer.GameisFetching;
}

export const getChangeIndex = (state) => {
   return state.GameReducer.ChangeIndex;
}
export const getBet = (state) => {
   return state.GameReducer.bet;
}
