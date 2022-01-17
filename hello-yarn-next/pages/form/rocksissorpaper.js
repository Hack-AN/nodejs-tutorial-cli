import React, {useRef, useState, useEffect} from "react"
import next from "next"
import reactDom from "react-dom"
import styles from '../../styles/Home.module.css'
import {v4 as uuidv4} from 'uuid'

export default function create() {

    const [cnt, setCnt] = useState(3);
    const [gaming, setGaming] = useState(false) // 라운드 진행 중인지
    const [a, setA] = useState(null);
    const [start, setStart] = useState(false)
    const [round, setRound] = useState(0)   // 라운드 수, 고정값 아님
    const [result, setResult] = useState(-1)    // -1: null, 0: 승 1: 패 2: 비김
    const [user, setUser] = useState(-1)    // -1: null, 0: 주먹 1: 가위: 2: 보
    const [win, setWin] = useState(0)   // 승률
    const [games, setGames] = useState(0)   // 총 진행한 라운드 수
    const [done, setDone] = useState(false) // 게임 끝났는지 여부

    const onChange = (e) => {
        setGames(e.target.value);
      };


      const onStart  = (e) => {
        setCnt(3)
        setWin(0)
        setResult(-1)
        setUser(-1)
        setRound(0)
        setGaming(true)
        setDone(false)
        setStart(true)
      }

    useEffect(() => {
        // start true이면
          // win 0 세팅, result -1 세팅, user -1 세팅, round 0 세팅, gaming true로 세팅

          if(start === true)
          {
            //setGames(0)

            _a = setInterval(() => {
                setCnt(cnt => cnt - 1)
                },1000)
                setA(_a)
          }
          else
          {
            setWin((win/games) * 100)
            setDone(true)
            clearInterval(a)
          }

        // start false면
          // 승률 공개
          // //clearInterval(a)
    },[start]);
    
    useEffect(() => {
      if(cnt === 0){
      // start true면
        // 게임 중인지 아닌지 판별
          // 게임 중이었으면
            // cnt 2로 세팅
            // gaming false 세팅
            // user 입력 받아 무작위 대전 후 result 세팅
            // win 수정 
          // 대기 중이었으면 
            //라운드 1 증가
              // 라운드 꽉 차면 start false로 바꿔 게임 종료
            //cnt 3 세팅
            // gaming true 세팅
          //clearInterval(a)

        if(start === true)
        {
            if(gaming === true)
            {
                setCnt(2)
                setGaming(false)
                const com = Math.ceil(Math.random() * 2)
                switch(user)
                {
                    case -1:
                        // 무조건 짐
                        setResult(1)
                        break;
                    case 0:
                        switch(com)
                        {
                            case 0:
                                setResult(2)
                                break;
                            case 1:
                                setResult(0)
                                break;
                            case 2:
                                setResult(1)
                                break;

                        }
                        break;
                    case 1:
                        switch(com)
                        {
                            case 0:
                                setResult(1)
                                break;
                            case 1:
                                setResult(2)
                                break;
                            case 2:
                                setResult(0)
                                break;

                        }
                        break;
                    case 2:
                        switch(com)
                        {
                            case 0:
                                setResult(0)
                                break;
                            case 1:
                                setResult(1)
                                break;
                            case 2:
                                setResult(2)
                                break;
                        }
                        break;
                            
                }
                if(result === 0)
                    setWin(win => win + 1)
            }
            else
            {
                setRound(round => round + 1)
                if(round >= games)
                {
                    setStart(false)
                }
                else
                {
                    setCnt(3)
                    setGaming(true)
                }

            }

        }


      }
    }, [cnt])
    
    
    return (
        <div>
            <h1>RockSissorPaper!</h1>
            <div>
                <h2>{round} / {games}</h2>
                <h2>
                    결과: 
                    {
                        result === -1 ? <text>null</text> : <text></text>
                    }
                    {
                        result === 0 ? <text>win!</text> : <text></text>
                    }
                    {
                        result === 1 ? <text>lose...</text> : <text></text>
                    }
                    {
                        result === 2 ? <text>draw</text> : <text></text>
                    }
                </h2>
                <h2>{cnt}초</h2>
                <h2>
                    <div>
                        <button onClick={e => setUser(0)}>rock</button>
                        <button onClick={e => setUser(1)}>sissor</button>
                        <button onClick={e => setUser(2)}>paper</button>
                    </div>
                    {
                        user === 0 && <text>rock</text>
                    }
                    {
                        user === 1 && <text>sissor</text>
                    }
                    {
                        user === 2 && <text>paper</text>
                    }
                </h2>
                <h2>
                    <input placeholder="input round number" onChange={onChange} value={games}></input>
                    <button onClick={onStart}>start</button>
                </h2>
                <h2>
                    {
                        done === true && 
                        <text>
                            승률: {win}%
                        </text>
                    }
                </h2>
            </div>
        </div>
    )
}