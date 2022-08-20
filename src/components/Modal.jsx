import { Link } from "react-router-dom";
function Modal(props) {
    return (
        <>
            <div id="score" className="modal">
                <div className="modal-content">
                    <h4>Your Score</h4>
                    <p>{props.currScore}</p>
                </div>
                <div className="modal-footer">
                    <Link to="/" className="modal-close waves-effect waves-green btn-flat">Close</Link>
                </div>
            </div>
        </>
    );
}
export default Modal;