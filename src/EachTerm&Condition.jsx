
/* eslint-disable react/prop-types */
import { FaPlus,FaMinus  } from "react-icons/fa";
import { useState } from "react"
import "./Terms&Conditions.css"
export default function EachTermAndCondition({question,answer}) {
    const [isAnswerVisible,setIsAnswerVisible] = useState(false)
    return(
        <div className="faq-one">
            <hr className="hr-line"/>
            
              <div className="flex flex-row pr-3 pl-3">
               
                <h1 className="faq-page">{question}</h1>
                <i className="p-3" style={{cursor:"pointer"}} onClick={()=>setIsAnswerVisible(!isAnswerVisible)}>{isAnswerVisible ? <FaMinus />:<FaPlus/>}</i>
                </div>
               
                {isAnswerVisible ?<div className="faq-body" style={{backgroundColor:"#f5f5f5"}}>
                    {answer.map((eachListItem) =>
                    <ul key={eachListItem} style={{listStyleType:"square"}}><li>{eachListItem}</li> 
                    </ul>)}
                </div> : ""}
                <hr className="hr-line"/>
            </div>
    )
}