import React from "react";
import "./loader.css";

function Loader() {
    const [ isLoading, setIsLoading ] = React.useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 4000);

    return (
        <div className={isLoading ? 'loader' : 'loader-off'}>
            <div className="welcome">
                <h1>Buen dia!</h1>
            </div>
        </div>
    )
}

export default Loader;