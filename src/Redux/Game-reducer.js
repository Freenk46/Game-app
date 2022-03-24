
const START_GAME = 'START_GAME';
const CHANGE_DATA = 'CHANGE_DATA';
const END_GAME = 'END_GAME';
const SET_BET = 'SET_BET';
const SET_DATA = 'SET_BET';
const CHANGE_TABLE_SIZE = 'CHANGE_TABLE_SIZE'
let initialState = {
   bigData: [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
   ],
   bigcush: [1.21, 1.52, 1.89, 2.36, 2.96, 3.7, 4.62, 5.78, 7.22, 9.03,],
   MediumData: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
   ],
   Mediumcush: [1.29, 1.72, 2.29, 3.06, 4.08, 5.45, 7.26],
   smallData: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
   ],
   smallCush: [1.45, 2.18, 3.27, 4.91,],
   data: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
   ],
   cush: [1.45, 2.18, 3.27, 4.91],
   GameisFetching: false,
   MyWallet: 100,
   Won: 0,
   bet: 0,
   ChangeIndex: null
}
const GameReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_BET: {
         return {
            ...state,
            bet: action.bet
         };
      }

      case END_GAME: {
         let stateCopy = { ...state };
         stateCopy.data = [...state.data];
         stateCopy.MyWallet += stateCopy.Won
         if (state.Won != 0) {
            stateCopy.ChangeIndex = null
            stateCopy.GameisFetching = false
            for (let i = 0; i < state.data.length; i++) {
               for (let k = 0; k < state.data[i].length; k++) {
                  if (stateCopy.data[i][k] == 2) {
                     stateCopy.data[i][k] = 4
                  }
               }
            }
         }
         return stateCopy
      }

      case START_GAME: {
         let stateCopy = { ...state };
         stateCopy.data = [...state.data];
         if (stateCopy.MyWallet > stateCopy.bet) {
            for (let i = 0; i < state.data.length; i++) {
               for (let k = 0; k < state.data[i].length; k++) {
                  stateCopy.data[i][k] = 0
               }
            }
            for (let i = 0; i < state.data.length; i++) {
               let randomNumber = Math.floor(Math.random() * state.data[i].length);
               stateCopy.data[i][randomNumber] = 2
            }
            stateCopy.ChangeIndex = 0
            stateCopy.Won = 0
            stateCopy.GameisFetching = true
         }
         return stateCopy

      }

      case CHANGE_DATA: {
         let stateCopy = { ...state };
         stateCopy.data = [...state.data];
         stateCopy.ChangeIndex++
         if (stateCopy.data[action.trId][action.tdId] == 0) {
            stateCopy.data[action.trId][action.tdId] = 1
            stateCopy.Won = stateCopy.bet * stateCopy.cush[action.trId]
            for (let i = 0; i < state.data[action.trId].length; i++) {
               if (stateCopy.data[action.trId][i] == 2) {
                  stateCopy.data[action.trId][i] = 4
               }
            }
         }
         if (stateCopy.data[action.trId][action.tdId] == 2) {
            stateCopy.data[action.trId][action.tdId] = 3
            stateCopy.Won = 0
            stateCopy.ChangeIndex = null
            stateCopy.GameisFetching = false
            stateCopy.MyWallet = stateCopy.MyWallet - stateCopy.bet
            for (let i = 0; i < state.data.length; i++) {
               for (let k = 0; k < state.data[i].length; k++) {
                  if (stateCopy.data[i][k] == 2) {
                     stateCopy.data[i][k] = 4
                  }
               }
            }
         }
         if (stateCopy.ChangeIndex == stateCopy.data.length) {
            stateCopy.GameisFetching = false
            stateCopy.MyWallet += stateCopy.Won
         }
         return stateCopy
      }

      case CHANGE_TABLE_SIZE: {
         if (action.size == 'medium') {
            return {
               ...state,
               data: [...state.MediumData],
               cush: [...state.Mediumcush]
            }
         } else if (action.size == 'big') {
            return {
               ...state,
               data: [...state.bigData],
               cush: [...state.bigcush]
            }
         } else if (action.size == 'small') {
            return {
               ...state,
               data: [...state.smallData],
               cush: [...state.smallCush]
            }
         }
         return state;
      }
      default: return state;
   }
}

export const ChangeData = (trId, tdId) => ({ type: CHANGE_DATA, trId, tdId })
export const StartGame = () => ({ type: START_GAME })
export const EndGame = () => ({ type: END_GAME })
export const setBet = (bet) => ({ type: SET_BET, bet })
export const setData = () => ({ type: SET_DATA })
export const changeTableSize = (size) => ({ type: CHANGE_TABLE_SIZE, size })


export default GameReducer;