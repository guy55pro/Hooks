function MovieCard(props) {

    return (
        <div className="div_card">
            <img src={props.path} alt="NO POSTER"/>
            <h3>Titre : {props.title}</h3>
            <p><strong>Description : </strong> {props.description}</p>
            <div><Rating key={props.title} rating={props.rating}/></div>
        </div>
    )
}

export default MovieCard