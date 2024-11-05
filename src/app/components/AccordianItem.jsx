const AccordianItem = ({question, answer, isOpen, onToggle}) =>
{
    return (
        <div className="accordian-item">
            <h2 className="question bg-green-300 h-12 flex align-center justify-center items-center uppercase font-bold letter tracking-wider cursor-pointer" onClick={onToggle}>{question}</h2>
            {
                isOpen &&
                <div className="accordian-content">
                    <p className="answer flex align-center justify-center items-center text-black">{answer}</p>
                </div>
            }
        </div>
    )
}
 
export default AccordianItem