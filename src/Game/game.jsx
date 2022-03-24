import React from 'react'
import Bet from './bet';
import './game.css'
import TbodyTr from './TbodyTr'


const Game = (props) => {
   let setData2 = (size) => {
      props.setData1(size)
   }
   var trId = 0
   var tdId = 0
   const tbodyTr = props.data.map((K) =>
      <TbodyTr ChangeIndex={props.ChangeIndex} GameisFetching={props.GameisFetching} ChangeData={props.ChangeData} data={props.data} trId={trId++} tdId={tdId} K={K} />);

   return <div className="Goal_wrapper">
      <div className='header'>
         <div className='bet'>
            <h3 className='MyWallet_lable' >Bet:</h3>
            <div className='bet_conteiner'>
               <h1>{Math.floor(props.bet)}</h1> <h2 className='dolar'> $</h2>
            </div>

         </div>
         <div className='MyWallet'>
            <h3 className='MyWallet_lable'>MyWallet:</h3>
            <div className='MyWallet_conteiner'>
               <h1>{Math.floor(props.MyWallet)} </h1> <h2 className='dolar'> $</h2>
            </div>
         </div>

      </div>
      <div className='table_conteiner'>
         <table >
            <tbody>
               {tbodyTr}
            </tbody>
            <thead className='table_header' >
               <tr >
                  {props.cush.map((E) =>
                     (<td className='cushtd'>{E}</td>))}
               </tr>
            </thead>
         </table >
      </div>
      <div className='BetAmount_conteiner'>
         <Bet GameisFetching={props.GameisFetching} setBet={props.setBet} bet={props.Bet} />
      </div>
      <div className='fildsize_conteiner'>
         <p className='size_title' >Fild Size</p>
         <div className='fildsize_btn' >
            <button className='btn2' disabled={props.GameisFetching} onClick={() => setData2('medium')}>medium</button>
            <button className='btn2' disabled={props.GameisFetching} onClick={() => setData2('big')}>big</button>
            <button className='btn2' disabled={props.GameisFetching} onClick={() => setData2('small')}>small</button>
         </div>
      </div>
      <div className='SEbtn_conteiner'>
         {props.GameisFetching ? <button className={'btn'} onClick={props.EndGame}>{props.won}$</button>
            : <button className={'btn'} onClick={props.StartGame}> Start</button>}
      </div>
   </div>
};
export default Game;