/* eslint-disable react/prop-types */
import { useState } from "react";
const data = [
    {
      question: "Where are these chairs assembled?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
    },
    {
      question: "How long do I have to return my chair?",
      answer:
        "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
    },
    {
      question: "Do you ship to countries outside the EU?",
      answer:
        "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
    }
  ];
  
export default function Faqanswer() {
    const [curOpen, setCurOpen] = useState(null);

  return (
    <>
    <h1 className="faq-h1">FAQs & Help</h1>
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem style = {{padding : "0px" , margin : "0px"}}
          curOpen={curOpen}
          onOpen={setCurOpen}
          question={el.question}
          num={i}
          key={el.question}
        >
          {el.answer}
        </AccordionItem>
      ))}
    </div>
    </>
  );
}

function AccordionItem({ num, question, curOpen, onOpen, children }) {
    const isOpen = num === curOpen;
  
    function handleToggle() {
      onOpen(isOpen ? null : num);
    }
  
    return (
        
        
      <div className={`item container ${isOpen ? "open" : ""}`} onClick={handleToggle}>
        <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
        <p className="title">{question}</p>
        <p className="icon">{isOpen ? "-" : "+"}</p>
  
        {isOpen && <div className="content-box">{children}</div>}
      </div>
    );
  }