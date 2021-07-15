import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "../App.css";

const ArtistDetails = ({ match }) => {
  const id = match.params.id;
  const [albums, setAlbums] = useState([]);

  const [artistDetails, setArtistDetails] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/artists/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setArtistDetails(data);
        setAlbums(data.albums);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="cover-txt nav-link">
          <Link to="/artists">
        <h1>MUSIC-DB</h1>
        </Link>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={`../images/covers/${artistDetails.cover}.jpg`}
          alt={`${artistDetails.name}`}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ width: "50%" }}>{artistDetails.bio}</p>
      </div>
      <div  style={{justifyContent:"center",display:"flex"}}>
      <div style={{ display: "grid",  gridRow:"1 / 3" ,gridTemplateColumns:"300px 300px",gridColumnGap:"0"}}>
        {albums.map((item) => {
          return (
            <img  style={{width:"300px",height:"300px"}} src={`../images/albums/${item.cover}.jpg`} alt={item.title} />
          );
        })}
      </div>
      </div>
    </>
  );
};
export default ArtistDetails;
