import Thumbnail from "./Thumbnail"
import FlipMovie from "react-flip-move"
function Results({results}) {
    return (
        <FlipMovie className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-conter">
            {results.map(result=>{
            return(
                <Thumbnail key={result.id} result={result}/>


 )})}
        </FlipMovie>
    )
}

export default Results
