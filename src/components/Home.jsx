import React, { useEffect } from "react";
import TutorialModal from "./TutorialModal";
import { Link } from "react-router-dom";
function Home() {
    useEffect(() => {
        let elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, { dismissible: false });
    }
        , []);
    return (
        <>
            <main>
                <div className="row">
                    <div className="box box-shadow col s10 m6 l4 offset-s1 offset-m3 offset-l4">
                        <h3 className="center white-text p2">Math Game</h3>
                        <div className="center p2">
                            <div className="row center">
                                <div className="col s6">
                                    <a className="btn-shadow btn-floating btn-large waves-effect waves-light blue-grey darken-1 modal-trigger" href="#modal1"><i className="material-icons">question_mark</i></a>
                                </div>
                                <div className="col s6">
                                    <Link to="/game" className="btn-shadow btn-floating btn-large waves-effect waves-light blue-grey darken-1"><i className="material-icons">start</i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <TutorialModal></TutorialModal>
        </>
    );
}
export default Home;