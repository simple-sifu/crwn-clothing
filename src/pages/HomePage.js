import React from 'react';
import "./HomePage.scss"
import Directory from "../components/directory"

const HomePage = (props) => {
    console.log("props -", props);
    return (
        <div className="homepage">
            <Directory />
        </div>
    )
}
export default HomePage