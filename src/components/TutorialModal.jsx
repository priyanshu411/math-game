function TutorialModal() {
    return (
        <>
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>Ho to Play?</h4>
                    <ul className="collection">
                        <li className="collection-item">You will be given an operation, Ex : a - b = 10</li>
                        <li className="collection-item">You can select 2 numbers out of 20 and calculate and give correct result.</li>
                        <li className="collection-item">total operation is 5 (+, -, *, /).</li>
                        <li className="collection-item">Total questions is 5.</li>
                        <li className="collection-item">Each question time limit is 20s.</li>
                        <li className="collection-item">Each Correct answer will give 1 mark.</li>
                    </ul>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">close</a>
                </div>
            </div>
        </>
    );
}
export default TutorialModal;