import MovieCard from "../MovieCard/MovieCard"

function MovieList(props) {

    const tab = Object.values(props)

    return (
        <div>
            {tab.map((el,index)=><MovieCard key={index} {...el}/>)}
        </div>
    )
}

export default MovieList