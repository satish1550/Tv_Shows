import React, { useState, useEffect } from "react";
import defaultPicture from './default-movie.jpg'
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Next() {
    const { nextId } = useParams();
    const [show, setShow] = useState({});

    useEffect(() => {
        axios
            .get(`https://api.tvmaze.com/episodes/${nextId}`)
            .then((data) => {
                setShow(data.data);
            })
    }, [nextId]);
    console.log(show)
    // console.log(show?.genres[0])
    console.log(show.image?.original)

    const category = show?.genres
    const rating = show.rating?.average
    const premiered = show.premiered
    const imageUrl = `${show.image?.original}`

    return (
        <div key={show.id} >
            <div className="main">
                <div className="cards1">
                    <div className="head">
                        <div className="tvShowName">{show.name}</div>
                        <div className="home">
                            <Link to="/">
                                <button className="home">Home</button>
                            </Link>
                        </div>

                    </div>
                    <div className="container1">
                        <div className="tvImages">
                            <img
                                // Render={Render}
                                src={
                                    imageUrl
                                        ? imageUrl
                                        : defaultPicture
                                }
                                // src= required"./default-movie.png"
                                className="imgs"
                                alt="ShowImage"
                            />
                            <div className="contents1">
                                <div className="averageRuntime">
                                    <span className="red">Average Runtime: </span>
                                    {show.averageRuntime}mins.
                                </div>
                                <div className="genres">
                                    <span>
                                        <span className="red">Category: </span>
                                    </span>
                                    <div className="genres1">{show?.genres}</div>
                                    <span>{category ? "/" : ""}</span>
                                    <div className="genres2">{category}</div>
                                </div>
                                <div className="language">
                                    <span className="red">Language: </span>
                                    {show.language}
                                </div>
                                <div className="premiered">
                                    {premiered ? (
                                        <>
                                            <span className="red">Premiered on: </span>
                                            {premiered}
                                        </>
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <div className="rating">
                                    {rating ? (
                                        <>
                                            <span className="red">Rating: </span>
                                            {rating}
                                        </>
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <div className="url">
                                    <span>👉 </span>
                                    <a href={`${show.url}`} target="_blank" rel="noreferrer">
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bottomContainer">
                            <div className="info">
                                The Tv show "{show.name} "aris on"
                                {show.network?.name} " in the
                                {show.network?.country?.name}
                                ({show.network?.country?.code}) {" "} and is available in the
                                {show.network?.country?.timezone} timezone. It has ID of "
                                {show.network?.id} " and has an average runtime of
                                {show.runtime} minutes. The show is currently
                                {show.status} and is scheduled to air on
                                {show.schedule?.days}{" "} at {" "}{show.schedule?.time}.
                                <br />
                                The Status: {show.status}
                                <br />
                                Summary: {show.summary}
                                <br />
                                The type od th show is: {show.type}
                                <br />
                                latest updated: {show.updated}
                                <br />
                                For more information about the
                                <a href={`${show.officialSite}`}>show</a> and
                                <a href={`${show.network?.officialSite}`}>network</a>,
                                please refer to their respective sources.
                                <br />
                                Click <a href={`${show.url}`}> here </a> to continue
                                <br />
                                <div className="button red">

                                    <Link to={`${show._links?.previousepisode?.href}`} >
                                        <button className="home">Prev</button>
                                    </Link>

                                    <Link to={`${show._links?.self?.href}`} >
                                        <button className="home">Self</button>
                                    </Link>

                                    <Link to={`${show._links?.nextepisode?.href}`} >
                                        <button className="home">Next</button>
                                    </Link>

                                    <br />
                                    {show._links?.nextepisode?.href}
                                    <br />
                                    {show._links?.self?.href}
                                    <br />
                                    {`${show._links?.previousepisode?.href}`}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Next;
