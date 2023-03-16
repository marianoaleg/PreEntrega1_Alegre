import error404 from "./images/error404.png";

const Error404 = () => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <p><img src={error404} alt="McDonalds Argentina" width={"1600"} /></p>                                  
                </div>
            </div>
        </div>
    )
}

export default Error404;