const AccordianItem = ({question, answer}) =>
{
    return (
        <div className="accordian-item">
            <h2 className="question bg-green-300 h-12 flex align-center justify-center items-center uppercase font-bold letter tracking-wider cursor-pointer">{question}</h2>
            <p className="answer flex align-center justify-center items-center text-black">{answer}</p>
        </div>
    )
}
 
export default AccordianItem