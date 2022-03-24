import React, { useState, useEffect } from "react";

const Bet = (props) => {
   const [bet, setBet] = useState(1)
   const [buttonBet, setButtonBet] = useState(null)

   useEffect(() => {
      props.setBet(bet)
   }, [bet]);

   const changeBet = (newBet) => {
      if (newBet === true) {
         setBet(bet + 0.1)
      } else if (newBet === false) {
         setBet(bet - 0.1)
      }
   }

   let setInputBet = (e) => {
      setBet(e.target.value)
   }

   let setStartBet = (value) => {
      if (buttonBet == value) {
         setBet(value + bet)
      } else {
         setBet(value)
      }
      setButtonBet(value)
   }

   return <div className='panel_conteiner'>
      <div className='panel_left' >
         <p className="bet_title">Bet Amount</p>
         <div className='input_conteiner' >
            <button disabled={props.GameisFetching} className='bet_btn' onClick={() => changeBet(true)}>+</button>
            <input disabled={props.GameisFetching} className='bet_input' type='number' value={bet}
               onChange={setInputBet}
            />
            <button disabled={props.GameisFetching} className='bet_btn' onClick={() => changeBet(false)}>-</button>
         </div>
      </div>
      <div className="panel_right">
         <div className='btn_conteiner'>
            <button disabled={props.GameisFetching} className='btn2' onClick={() => setStartBet(5)}>5$</button>
            <button disabled={props.GameisFetching} className='btn2' onClick={() => setStartBet(10)}>10$</button>
         </div>
         <div className='btn_conteiner'>
            <button disabled={props.GameisFetching} className='btn2' onClick={() => setStartBet(1)}>1$</button>
            <button disabled={props.GameisFetching} className='btn2' onClick={() => setStartBet(3)}>3$</button>
         </div>
      </div>
   </div>
}

export default Bet;