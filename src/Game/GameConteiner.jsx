
import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { getCush, getData, getGameisFetching, getMyWallet, getWon, getChangeIndex, getBet } from '../Redux/Game-selector';
import { ChangeData, StartGame, EndGame, setBet, changeTableSize } from '../Redux/Game-reducer';
import Game from './game';
class GameConteiner extends PureComponent {
   componentDidMount() {

   }
   render() {
      return (<Game setData1={this.props.changeTableSize} {...this.props} />)
   }
}
let mapStateToProps = (state) => {
   return {
      data: getData(state),
      MyWallet: getMyWallet(state),
      cush: getCush(state),
      won: getWon(state),
      GameisFetching: getGameisFetching(state),
      ChangeIndex: getChangeIndex(state),
      bet: getBet(state),
   }
}
export default compose(
   connect(mapStateToProps,
      {
         ChangeData,
         StartGame,
         EndGame,
         setBet,
         changeTableSize,
      }
   ),
)
   (GameConteiner)