import React from "react";

const Card = ({name,email,username}) => {
    return[
        <div className="tc bg-light-green dib br3 br--top pa3 ma2 grow bw2 shadow-5">
            <img alt="robots" src={`https://robohash.org/${name}?set=set3`}/>
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    ];
}

export default Card;