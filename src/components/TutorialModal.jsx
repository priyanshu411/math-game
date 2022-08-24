function TutorialModal() {
    return (
        <>
            <div id="modal1" className="modal blue-grey darken-1 white-text">
                <div className="modal-content">
                    <h4>Ho to Play?</h4>
                    <ul className="collection">
                        <li className="collection-item blue-grey darken-1">You will be given an operation, Ex : a - b = 10</li>
                        <li className="collection-item blue-grey darken-1">You can select 2 numbers out of 12 and calculate and give correct result.</li>
                        <li className="collection-item blue-grey darken-1">total operation is 5 (+, -, *, /).</li>
                        <li className="collection-item blue-grey darken-1">Total questions is 5.</li>
                        <li className="collection-item blue-grey darken-1">Each question time limit is 20s.</li>
                        <li className="collection-item blue-grey darken-1">Each Correct answer will give 1 mark.</li>
                    </ul>
                </div>
                <div className="modal-footer blue-grey darken-1">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat white-text">close</a>
                </div>
            </div>
        </>
    );
}
export default TutorialModal;