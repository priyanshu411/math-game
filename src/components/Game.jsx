import { useState, useEffect, useRef } from "react";
import ScoreModal from "./ScoreModal";

let scoreModal;
let scoreCount = 0;
let preEvent = null;
function Game() {
    const [que, setQue] = useState(null);
    const [score, setScore] = useState(0);
    const timeRef = useRef(null);
    const operation = ["+", "-", "*", "/"];
    const totalTime = 20;
    let a = 0, b = 0;
    const M = window.M;

    let totalQueRef = useRef(5);
    const totalNum = 12;
    let intervalIdRef = useRef();

    useEffect(() => {
        // modal initilize
        let elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, { dismissible: false });
        scoreModal = M.Modal.getInstance(document.getElementById("score"));
        scoreCount = 0;
        // generate question for game
        setTimeout(generateQue, 500);
    }
        , []);


    // start the time 
    let startTime = () => intervalIdRef.current = setInterval(updateTime, 1000);


    // update time 
    let updateTime = () => {
        try {
            let t = Number(timeRef.current.innerHTML);
            if (t == 0) {
                resetAll();
                if (totalQueRef.current > 0) {
                    // console.log("totalQue :" + totalQueRef.current);
                    generateQue();
                }
                else {
                    setScore(scoreCount);
                    scoreModal.open();
                }
                return;
            }
            timeRef.current.innerHTML = t - 1;
        } catch (err) {
            console.log(err)
        }
    }


    // reset
    const resetAll = () => {
        try {
            console.log("reset");
            clearInterval(intervalIdRef.current);
            // console.log("b :" + totalQueRef.current);
            totalQueRef.current--;
            // console.log("a :" + totalQueRef.current);
            setQue(null);
            timeRef.current.innerHTML = totalTime;
            a = b = 0;
            // console.log(preEvent);
            if (preEvent != null) {
                preEvent.target.disabled = false;
            }
        } catch (err) {
            console.log(err);
        }
    }


    // check answer
    let checkAns = (e) => {
        try {
            let flag = false;
            if (a === 0) {
                a = Number(e.target.value);
                e.target.disabled = true;
                preEvent = e;
                // console.log(preEvent);
            }
            else {
                b = Number(e.target.value);
                e.target.disabled = true;
                switch (que.oper) {
                    case "+":
                        if (a + b == que.ans)
                            flag = true;
                        break;
                    case "-":
                        if (a - b == que.ans)
                            flag = true;
                        break;
                    case "*":
                        if (a * b == que.ans)
                            flag = true;
                        break;
                    case "/":
                        if (a / b == que.ans)
                            flag = true;
                        break;

                }
                if (flag) {
                    scoreCount++;
                    M.toast({ html: '<i class="material-icons">done</i>Right Answer', displayLength: 1200, classes: "green darken-1" });
                }
                else {
                    M.toast({ html: '<i class="material-icons">close</i>Wrong Answer', displayLength: 1200, classes: "red lighten-1" });
                }
                e.target.disabled = false;
                preEvent.target.disabled = false;
                resetAll();
                if (totalQueRef.current > 0) {
                    generateQue();
                }
                else {
                    setScore(scoreCount);
                    scoreModal.open();
                }
            }
        } catch (err) {
            console.log(err);
        }
    }


    // get random number
    let randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    //set answer
    function setAns(n1, n2, obj) {
        switch (obj.oper) {
            case "+":
                obj.num1 = n1;
                obj.num2 = n2;
                return (n1 + n2);
            case "-":
                obj.num1 = n1;
                obj.num2 = n2;
                return (n1 - n2);
            case "*":
                obj.num1 = n1;
                obj.num2 = n2;
                return (n1 * n2);
            case "/":
                if (n1 < n2) {
                    let temp = n1;
                    n1 = n2;
                    n2 = temp;
                }
                let rem = n1 % n2;
                n1 = n1 - rem;
                obj.num1 = n1;
                obj.num2 = n2;
                return (n1 / n2);

        }
    }

    // shuffle numbers
    function shuffleNumbers(arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
            let ran = randomNum(0, i);
            let temp = arr[i];
            arr[i] = arr[ran];
            arr[ran] = temp

        }
        return (arr);
    }

    // generate questions 
    function generateQue() {
        const min = 1, max = 50;
        let obj = {};
        let num = []
        let n1 = randomNum(min, max);
        let n2 = randomNum(min, max);
        obj.oper = operation[randomNum(0, operation.length - 1)];
        // obj.oper = operation[3];
        obj.ans = setAns(n1, n2, obj);
        num.push(obj.num1);
        num.push(obj.num2);
        for (let j = 0; j < totalNum - 2; j++) {
            let n = randomNum(min, max);
            if (num.includes(n)) {
                j--;
            } else {
                num.push(n);
            }
        }
        obj.ranNum = shuffleNumbers(num);
        setQue(obj);
        timeRef.current.innerHTML = totalTime;
        // console.log(que);
        // console.log(obj);
        setTimeout(startTime, 200);

    }



    return (
        <>
            {
                totalQueRef.current > 0 ?

                    <section className="row" >
                        <div className="box box-shadow col s10 m6 offset-s1 offset-m3">
                            <div className="center white-text">
                                {que != null ?
                                    <h5 >a {que.oper} b = {que.ans}</h5>
                                    : ""
                                }
                                <h5><span ref={timeRef}></span><span>&nbsp;s</span></h5>
                            </div>
                            <div className="row p2">
                                {
                                    que != null ?
                                        que.ranNum.map((n, i) => {
                                            return (
                                                <div key={i} className="col s4 m4 l3 center">
                                                    <button value={n} onClick={checkAns} className="btn-shadow num-btn btn-floating btn-large waves-effect waves-light blue-grey darken-1">{n}</button>
                                                </div>
                                            );
                                        }) : ""
                                }
                            </div>
                        </div>
                    </section> : ""
            }
            <ScoreModal currScore={score}></ScoreModal>
        </>
    );
}
export default Game;