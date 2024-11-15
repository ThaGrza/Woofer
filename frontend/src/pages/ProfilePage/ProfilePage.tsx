import React from "react";
import "./ProfilePage.css";
import Navbar from "../../components/navbar/Navbar";

interface user {
  name: string;
  picture: any;
  owner: string;
  age: number;
  location: string;
  toys: string;
  bio: string;
}

export default function ProfilePage(props: any) {
  return (
    <div className="profile-page-container">
      <Navbar />
      <div className="profile-container">
        <img
          className="profile-picture"
          src="https://avatars.githubusercontent.com/u/42795152?v=4"
          alt="🐕"
        />
        <div className="profile-info-container">
          <div className="profile-info">
            <h3 className="profile-info">Harlow</h3>
            <h4 className="profile-info name">Andrew & Mckayla</h4>
          </div>
          <div className="profile-info">
            Age:
            <p className="profile-info age">6</p>
          </div>
          <div className="profile-info">
            <p className="profile-info location">Bedford</p>
          </div>
          <div className="profile-info">
            <p className="profile-info toys"> Small Tennis balls, stuffies</p>
          </div>
          <div className="profile-info">
            <p className="profile-info bio">
              Harlow Harletus mcquate griswold is the cutest woofer in the
              world. She also has admin privilages on Woofer. =)
            </p>
            <br />
          </div>
        </div>
      </div>
      <div className="favorite-parks">
        <h2 className="temptemp">Favorite Parks</h2>
        <ul className="fav-parks-ul">
          <li className="fav-park-li">
            <h3>Livingston Park</h3>
            <img
              className="li-park-img"
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/e7/12/cc/livingston-park.jpg?w=1200&h=1200&s=1"
            />
          </li>
          <li className="fav-park-li">
            <h3>Zilker Park</h3>
            <img
              className="li-park-img"
              src="https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/austin/Zilker_Park_Lifestyle_Credit_Ryan_Kyte_Lifetime_Usage_65926b40-20e5-49c5-afcc-844467a87c4e.jpg"
            />
          </li>
          <li className="fav-park-li">
            <h3>The Yard Bar</h3>
            <img
              className="li-park-img"
              src="https://static.showit.co/800/oAvZuPLjQ6eVyncWLGjsSg/218827/yardbar1075.jpg"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
