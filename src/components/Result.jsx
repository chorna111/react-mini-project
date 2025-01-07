export default function Result({moves,result}){
    return(
    <div>
        <p className='result'dangerouslySetInnerHTML={{ __html: result }}></p>

        <p className='js-moves'dangerouslySetInnerHTML={{ __html: moves }}></p>
    </div>
    )
}