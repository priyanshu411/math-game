import React from "react";
import { Link } from "react-router-dom";
function Home() {
    return (
        <main>
            <div className="row">
                <div className="box box-shadow col s10 m6 l4 offset-s1 offset-m3 offset-l4">
                    <h3 className="center white-text p2">Math Game</h3>
                    <div className="center p2">
                        <div className="row center">
                            <div className="col s6">
                                <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">question_mark</i></a>
                            </div>
                            <div className="col s6">
                                <Link to="/game" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">start</i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Home;