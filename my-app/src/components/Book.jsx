import React from "react";
import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Navigation from "./Navigation";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Book() {
    const [state, setState] = useState([])
    useEffect(() => {
            getData()
    }, [])

    const navigate = useNavigate();
    
    const toCompose = () => {
        navigate('/composebookbit');
    }

    const getData = async () => {
    fetch("http://localhost:9000/book")
    .then((res) => res.json())
    .then((json) => {
        console.log(json);
        setState(json);
    })
    }

    const toPost=(element)=>{
        navigate('/postbook',{state:{bookName: element.bookName, bitTitle: element.bitTitle, bitContent: element.bitContent, chapter: element.chapter}});
    }

    return (
        <div>
            <Card className="bg-light blog-card">
                <Card.Img src="/images/snipabitBook.png" alt="Card image" />
                <Card.ImgOverlay>
                <Navigation></Navigation>
                    <Card.Title className="blog-card-title">
                        <h1>Experience new way of Reading books</h1>
                    </Card.Title>
                    <Card.Text>
                        <button id="blogbit-button" onClick={() => toCompose()}>Compose bookBit</button>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>

            <Row xs={1} md={2} className="g-4">
            { state.map((element) =>(
                <Col>
                <div className="card text-white mb-3 homepostouterdiv" key={element._id}>
                    <img src="/images/Snipabit.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body homepostcard">
                    <h1 className="card-title">{ element.bookName }</h1>
                    <h4>{element.bitTitle}</h4>
                    <p className="card-text">{ element.bitContent.substring(0, 200) + "..." }</p>
                    <h4>{element.chapter}</h4>
                    <a onClick={() => toPost(element)} className="btn btn-outline-light">Read More</a>
                    </div>
                </div>
                </Col>
            ))};
            </Row>
        </div>
    );
}

export default Book;
