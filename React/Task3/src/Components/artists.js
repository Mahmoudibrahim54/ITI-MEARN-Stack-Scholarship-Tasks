import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const Artists = () => {
  const [artistsData, setArtistsData] = useState([]);

  useEffect(() => {
    fetch("db.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.artists);
        setArtistsData(data.artists);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(../images/cover.png`,
          height: "100vh",
          width: "100vw",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="cover-txt cover-text-pos">
          <h3>MUSIC-DB</h3>
        </div>
      </div>
      {artistsData.map((item) => {
        return (
          <div
            className="bkg-img"
            style={{
              backgroundImage: `url(../images/covers/${item.cover}.jpg)`,
              height: "100vh",
              width: "100vw",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            key={item.id}
          >
            <div className="artist-txt">
              <Link to={`/artists/${item.id}`}><h3>{item.name}</h3></Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Artists;
