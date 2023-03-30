import React from "react";
import './home.css'
import defaultPicture from '../default-movie.jpg'
import { Link } from "react-router-dom";

export default function Home({ show }) {

    const category = show.show.genres[1]
    const rating = show.show.rating?.average
    const premiered = show.show.premiered
    const imageUrl = `${show.show?.image?.original}`

    return (
        <div>
            <div className="cards">
                <div className="container">
                    <div className="showName">{show.show.name}</div>
                    <div className="images">
                        <Link to={`/card/${show.show.id}`}>
                            <img
                                // Render={Render}
                                src={imageUrl ? imageUrl : defaultPicture}
                                className="img"
                                alt="ShowImage"
                            />
                        </Link>
                        <div className="contents">
                            <div className="score"> <span className="red">Score: </span>{show.score}</div>

                            <div className="averageRuntime">
                                <span className="red">Average Runtime: </span>{show.show.averageRuntime}mins.
                            </div>
                            <div className="genres">
                                <span><span className="red">Category: </span></span>
                                <div className="genres1">{show.show.genres[0]}</div>
                                <span>{category ? "/" : ""}</span>
                                <div className="genres2">{category}</div>
                            </div>
                            <div className="language"><span className="red">Language: </span>{show.show.language}</div>
                            <div className="premiered">{premiered ?
                                <><span className="red">Premiered on:  </span> {premiered}</>
                                : ""}</div>
                            <div className="rating">{rating ?
                                <><span className="red">Rating: </span> {rating}</>
                                : ""}</div>
                            <div className="url"><span>👉 </span>
                                <a href={`${show.show.url}`} target="_blank" rel="noreferrer">
                                    more info
                                </a>
                            </div>
                            <Link to={`/card/${show.show.id}`}>
                                <button className="read1">Read More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
