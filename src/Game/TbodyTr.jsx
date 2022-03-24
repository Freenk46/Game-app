import React from "react";
import TbodyTd from "./TbodyTd";
import './game.css'

const TbodyTr = (props) => {
   let tdId = props.tdId
   let trId = props.trId
   let Name
   if (trId == props.ChangeIndex) {
      Name = "Active"
   }

   const tbodyItem = props.data[trId].map((E) =>
      <TbodyTd ChangeIndex={props.ChangeIndex} GameisFetching={props.GameisFetching}
         ChangeData={props.ChangeData} tdId={tdId++} trId={trId} E={E} />
   );
   return <tr id={props.trId} className={"tr" + Name} >
      {tbodyItem}
   </tr >
}
export default TbodyTr;

