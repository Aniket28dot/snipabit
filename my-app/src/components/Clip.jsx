import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Navigation from "./Navigation";
import ReactPlayer from "react-player";
// import Video from 'react-native-video';
function Clip() {
    const [state, setState] = useState([])
    useEffect(() => {
            getData()
    }, [])

    const navigate = useNavigate();
    
    const toCompose = () => {
        navigate('/composeblogbit');
    }

    const getData = async () => {
    fetch("http://localhost:9000/")
    .then((res) => res.json())
    .then((json) => {
        console.log(json);
        setState(json);
    })
    }

    

    return(
        <div>
            <Card className="bg-light blog-card">
                <Card.Img src="/images/snipabitBlog.png" alt="Card image" />
                <Card.ImgOverlay>
                <Navigation></Navigation>
                    <Card.Title className="blog-card-title">
                        <h1>Snip Long Videos to Clip</h1>
                    </Card.Title>
                    <Card.Text>
                        <button id="blogbit-button" onClick={() => toCompose()}>Compose ClipBit</button>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>

            <Row xs={1} md={2} className="g-1">
            { state.map((element) =>(
                <Col>
                <div className="card text-white bg-dark mb-3 homepostouterdiv" key={element._id} >
                {/* <ReactPlayer url="https://youtu.be/HIj8wU_rGIU"  style={{width:"50%"}}/> */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Gb5SDIsSqro?start=92&end=123" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div className="card-body homepostcard">
                    <h1 className="card-title">{ element.title }</h1>
                    <p className="card-text">{ element.content.substring(0, 200) + "..." }</p>
                    
                    </div>
                </div>
                </Col>
            ))}
            </Row>
        </div>
    )
}

export default Clip;

// import React from 'react';
// import ReactPlayer from "react-player";
 
// function App() {
//   return (
//     <div className="App">
    //   <ReactPlayer
    //     url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
    //   />
//     </div>
//   );
// }
 
// export default App;