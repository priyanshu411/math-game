import { Link } from "react-router-dom";
function ScoreModal(props) {
    return (
        <>
            <div id="score" className="modal blue-grey darken-1 white-text">
                <div className="modal-content">
                    <h4>Your Score</h4>
                    <p>{props.currScore}</p>
                </div>
                <div className="modal-footer blue-grey darken-1 white-text">
                    <Link to="/" className="modal-close waves-effect waves-green btn-flat white-text">Close</Link>
                </div>
            </div>
        </>
    );
}
export default ScoreModal;