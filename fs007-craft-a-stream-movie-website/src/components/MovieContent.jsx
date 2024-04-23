import React from 'react';
import './movieContent.css'
import Button from "./Button";
import titleImg from '../images/transformer-title.png'

function MovieContent(props) {
    return (
        <div className="content active">
            <img src={titleImg} alt="Movie Title" className="movie-title"/>
            <h4>
                <span>Year</span>
                <span><i>age</i></span>
                <span>length</span>
                <span>category</span>
            </h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor
                augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a
                interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare
                nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.
            </p>
            <div className="button">
                <Button
                    icon={<ion-icon name="bookmark-outline"></ion-icon>}
                    name='Book'
                    color='#ff3700'
                    bgColor='#FFFFFF'
                />
                <Button
                    icon={<ion-icon name="add-outline"></ion-icon>}
                    name='My List'
                />
            </div>
        </div>
    );
}

export default MovieContent;