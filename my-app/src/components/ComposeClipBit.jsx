import React, { useState } from "react";
import { useNavigate } from "react-router";

function ComposeClip() {

    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (value.length >= 2000) {
            window.alert("Content field cannot contain more than 2000 characters.")
        }
        else setInputs(values => ({...values, [name]: value}))
    }

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:9000/composeblogbit", {
            method: "POST",
            body: JSON.stringify(inputs),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            const resJson = res.json();
            if (res.status === 200) {
                setInputs({});
            }
        }).catch((err) => {
            console.log(err);
        });
        navigate('/');
    }

    return(
        <div>
        <div>
            <h1>Add Clip</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    {/* <label>Title */}
                        <input
                            className="form-control" 
                            type="text"
                            placeholder="Clip Title"
                            name="title"
                            value={inputs.title}
                            onChange={handleChange}
                        />
                    {/* </label> */}
                </div>
                <div className="form-group">
                    {/* <label>Title */}
                        <input
                            className="form-control" 
                            type="text"
                            placeholder="Clip Link"
                            name="link"
                            value={inputs.link}
                            onChange={handleChange}
                        />
                    {/* </label> */}
                </div>
                <input
                            className="form-control" 
                            type="number"
                            placeholder="Start Time (in sec)"
                            name="startTime"
                            value={inputs.startTime}
                            onChange={handleChange}
                />
                <input
                            className="form-control" 
                            type="number"
                            placeholder="End Time (in sec)"
                            name="endTime"
                            value={inputs.endTime}
                            onChange={handleChange}
                />
                <div className="form-group">
                    {/* <label>Post */}
                        <textarea 
                            className="form-control"
                            cols="40" rows="10"
                            placeholder="Clip Description"
                            maxLength={3000}
                            name="content"
                            value={inputs.content}
                            onChange={handleChange}
                        />
                    {/* </label> */}
                </div>
                <button type="submit" className="btn btn-dark btn-md" name="button">Publish</button>
            </form>
            </div>
        </div>
    )
}

export default ComposeClip;