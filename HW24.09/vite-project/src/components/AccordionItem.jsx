function AccordionItem({itemData,isOpen,onToggle}){
  return(
    <div className={`accordion-item ${isOpen ? "active" : ""}`}>
      <div className="accordion-title" onClick={() => onToggle(itemData.id)}>{itemData.question}</div>
      {isOpen && <div className="accordion-content">{itemData.answer}</div>}
    </div>
  )
}

export default AccordionItem