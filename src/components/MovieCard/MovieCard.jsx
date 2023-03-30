import React from "react";

const MovieCard = ({movie}) => {
    const { release_date, poster_path, overview, title, vote_average, genres  } = movie;
    const year = parseInt(release_date);

    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={overview} width="370px"/>
            <div>
                <h2>{title}</h2>
                <p>Year: {year}</p>
                <p>User score: {vote_average}</p>

                <h3>Overview</h3>
                <p>{overview}</p>

                {genres && <><h3>Genres</h3><p>{genres.map(genre => genre.name).join(', ')}</p></>
                }
            </div>
    </div>
    )
}

export default MovieCard;
