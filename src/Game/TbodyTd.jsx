import React from "react";
import './game.css'

const TbodyTd = (props) => {
   let tdId = props.tdId
   let trId = props.trId
   const X = () => {
      if (props.GameisFetching) {
         if (props.ChangeIndex == trId) {
            props.ChangeData(trId, tdId - 1)
         }
      }
   }
   return <td onClick={X} className={"td" + props.E} id={(`${trId}` + tdId++)}>
   </td >
};
export default TbodyTd;

