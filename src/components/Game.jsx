import { useState, useEffect, useRef } from "react";

function Game() {
    const [que, setQue] = useState(null);
    const timeRef = useRef(10);
    const operation = ["+", "-", "*", "/"];
    const totalTime = 20;
    let totalQue = 10;
    let intervalId;
    let a = 0, b = 0;
    const M = window.M;

    useEffect(() => {
        setTimeout(generateQue, 1000);
    }
        , []);


    // start the time 
    let startTime = () => intervalId = setInterval(updateTime, 1000);


    // update time 
    let updateTime = () => {
        console.log("run" + totalQue);
        let t = Number(timeRef.current.innerHTML);
        if (t == 0) {
            resetAll();
            if (totalQue > 0) {
                generateQue();
            }
            return;
        }
        timeRef.current.innerHTML = t - 1;

    }


    // reset
    const resetAll = () => {
        clearInterval(intervalId);
        console.log("reset");
        totalQue--;
        intervalId = null;
        setQue(null);
        timeRef.current.innerHTML = totalTime;
        a = b = 0;

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
        for (let j = 0; j < 10; j++) {
            let n = randomNum(min, max);
            if (num.includes(n)) {
                j--;
            } else {
                num.push(n);
            }
            obj.ranNum = num;
        }
        setQue(obj);
        timeRef.current.innerHTML = totalTime;
        console.log(que);
        console.log(obj);
        startTime();

    }


    // check answer
    let checkAns = (e) => {
        let flag = false;
        if (a === 0) {
            a = Number(e.target.value);
            e.target.disabled = true;
        }
        else {
            b = Number(e.target.value);
            e.target.disabled = true;
            switch (que.oper) {
                case "+":
                    if (a + b == que.ans)
                        flag = true;
                case "-":
                    if (a - b == que.ans)
                        flag = true;
                case "*":
                    if (a * b == que.ans)
                        flag = true;
                case "/":
                    if (a / b == que.ans)
                        flag = true;

            }
            if (flag) {
                M.toast({ html: '<i class="material-icons">done</i>Right Answer', displayLength: 1200, classes: "green darken-1" });
            }
            else {
                M.toast({ html: '<i class="material-icons">close</i>Wrong Answer', displayLength: 1200, classes: "red lighten-1" });
            }
            resetAll();
            // generateQue();
        }

    }



    return (
        <>
            <section className="row" >
                <div className="box box-shadow col s10 m6 offset-s1 offset-m3">
                    <div className="center">
                        {que != null ?
                            <h5 >a {que.oper} b = {que.ans}</h5>
                            : ""
                        }
                        <h5 ref={timeRef} ></h5>
                    </div>
                    <div className="row p2">
                        {
                            que != null ?
                                que.ranNum.map((n, i) => {
                                    return (
                                        <div key={i} className="col s4 m4 l3 center">
                                            <button value={n} onClick={checkAns} className="my-btn">{n}</button>
                                        </div>
                                    );
                                }) : ""
                        }
                    </div>
                </div>
            </section>
        </>
    );
}
export default Game;