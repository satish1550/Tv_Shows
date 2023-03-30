import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


{/* <div className="main"> */}
//         <div className="cards">
//           <div className="head">
//             <div className="tvShowName">{show.name}</div>
//             <button className="home">Home</button>
//           </div>
//           <div className="container">
//             <div className="tvImages">
//               <img
//                 // Render={Render}
//                 src={
//                   `${show.show?.image?.original}`
//                     ? `${show.show?.image?.original}`
//                     : pic
//                 }
//                 // src= required"./default-movie.png"
//                 className="imgs"
//                 alt="ShowImage"
//               />
//               <div className="contents">
//                 <div className="score">
//                   {" "}
//                   <span className="red">Score: </span>
//                   {show.score}
//                 </div>

//                 <div className="averageRuntime">
//                   <span className="red">Average Runtime: </span>
//                   {show.averageRuntime}mins.
//                 </div>
//                 {/* <div className="genres">
//                   <span>
//                     <span className="red">Category: </span>
//                   </span>
//                   <div className="genres1">{show.genres[0]}</div>
//                   <span>{show.genres[1] ? "/" : ""}</span>
//                   <div className="genres2">{show.genres[1]}</div>
//                 </div> */}
//                 <div className="language">
//                   <span className="red">Language: </span>
//                   {show.language}
//                 </div>
//                 <div className="premiered">
//                   {show.show?.premiered ? (
//                     <>
//                       <span className="red">Premiered on: </span>{" "}
//                       {show.show?.premiered}
//                     </>
//                   ) : (
//                     ""
//                   )}
//                 </div>
//                 <div className="rating">
//                   {show.show?.rating?.average ? (
//                     <>
//                       <span className="red">Rating: </span>{" "}
//                       {show.show?.rating?.average}
//                     </>
//                   ) : (
//                     ""
//                   )}
//                 </div>
//                 <div className="url">
//                   <span>👉 </span>
//                   <a href={`${show.show?.url}`} target="_blank" rel="noreferrer">
//                     more info
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="bottomContainer">
//               <div className="info">
//                 The Tv show "{show.show?.name}" aris on "
//                 {show.show?.network?.name}" in the
//                 {show.show?.network?.country?.name}
//                 {show.show?.network?.country?.code} ) and is available in the
//                 {show.show?.network?.country?.timezone} timezone. It has ID of "
//                 {show.show?.network?.id}" and has an average runtime of
//                 {show.show?.runtime} minutes. The show is currently
//                 {show.show?.status} and is scheduled to air on
//                 {show.show?.schedule?.days} at {show.show?.schedule?.time}.
//                 <br />
//                 The Status: {show.show?.status}
//                 <br />
//                 Summary: {show.show?.summary}
//                 <br />
//                 The type od th show is: {show.show?.type}
//                 <br />
//                 latest updated: {show.show?.updated}
//                 <br />
//                 For more information about the{" "}
//                 <a href={`${show.show?.officialSite}`}>show</a> and{" "}
//                 <a href={`${show.show?.network?.officialSite}`}>network</a>,
//                 please refer to their respective sources.
//                 <br />
//                 Click <a href={`${show.show?.url}`}> here </a> to continue
//                 <br />
//                 <div className="button">
//                   <button
//                     className="read"
//                     href={`${show.show?._links?.previousepisode?.href}`}
//                     target="_blank"
//                   >
//                     Previous Episode
//                   </button>
//                   <button
//                     className="read"
//                     href={`${show.show?._links?.self?.href}`}
//                     target="_blank"
//                   >
//                     Self
//                   </button>
//                   <button
//                     className="read"
//                     href={`${show.show?._links?.nextepisode?.href}`}
//                     target="_blank"
//                   >
//                     Next Episode
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <h1>{show.name}</h1>
//       <p>{show.summary}</p>
//       <button onClick={handleBookTicket}>Book Ticket</button> */}