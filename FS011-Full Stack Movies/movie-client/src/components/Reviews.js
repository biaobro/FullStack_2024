import {useEffect, useRef} from "react";
import {useParams} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";
import api from "../api/axiosConfig.js"

import React from 'react';
import ReviewForm from "./ReviewForm";

const Reviews = ({getMovieData, movie, reviews, setReviews}) => {
    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        getMovieData(movieId)

        {/*// fixme : two requests while get in page, why??? */}
        console.log("reviews @ Reviews.js : ", reviews)
    }, [])

    const addReview = async (e) => {
        e.preventDefault()
        const rev = revText.current;
        console.log("rev.value @ Reviews.js : ", rev.value)

        try {
            const resp = await api.post("/api/v1/reviews", {reviewBody:rev.value, imdbId:movieId})
            const updateReviews = [...reviews, {body:rev.value}]
            rev.value = "";
            setReviews(updateReviews)
        } catch (err){
            console.log(err)
        }
    }

    return (
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className="mt-2">
                <Col><img src={movie?.poster} alt=""/></Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Reviews?" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    }

                    {
                        reviews?.map((r) => {
                            return (
                                <>
                                    <Row>
                                        <Col>{r.body}</Col>
                                    </Row>
                                    <Row>
                                        <Col><hr /></Col>
                                    </Row>
                                </>
                            )
                        })
                    }

                </Col>
            </Row>
        </Container>
    );
};

export default Reviews;