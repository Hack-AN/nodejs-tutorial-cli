import React, {useRef, useState} from "react"
import next from "next"
import reactDom from "react-dom"
import styles from '../../styles/Home.module.css'
import {v4 as uuidv4} from 'uuid'

function Option({onRemove}){

    const uuid = uuidv4();

    return (
        <div>
            <textarea placeholder="default"></textarea>
            {uuid}
            <br></br>
            <textarea placeholder="default description"></textarea>
            <button onClick={() => onRemove()}>Delete Option</button>
        </div>
    )
}

function Question({remove}){

    const uuid = uuidv4()

    const [options, setOptions] = useState([<Option  onRemove={onRemove} />])
    const optionlist = ["checkbox", "radio", "text", "long text"]

    const [Selected, setSelected] = useState("checkbox")

    const add = () => {
        setOptions(options => [...options, <Option  onRemove={onRemove}/>])
    }

    const changed = (e) => {
        setSelected(e.target.value)
    }

    const onRemove = id => {
        setOptions(options.filter(option => option.id !== id))
    }

    return (
        <div className={styles.option}>
            <br></br>
            <br></br>
            <textarea placeholder="default title"></textarea>
            <br></br>
            <textarea placeholder="input description"></textarea>
            <select name = "kind" onChange={changed} value={Selected}>
                {optionlist.map((item) => (
                    <option key ={item} value = {item}>
                        {item}
                    </option>
                ))}
            </select>
            <br></br>
            here, if the question itself is...
            {
                Selected === "checkbox" || Selected === "radio" ? 
                <div className={styles.option}>
                    {options}
                    <button onClick={add}>add</button>
                </div>
                : null
            }

            <br></br>
            <button id ="remove" onClick={() => remove(uuid)}>delete</button>
            {uuid}

        </div>
    )
}

export default function create() {

    const [questions, setQuestions] = useState([])

    const add = () => {
        setQuestions(questions => [...questions, <Question remove={remove}/>])
    }

    const remove = (uuid) => {
        console.log("questions : " + questions)
        console.log("uuid : " + uuid)

        const cp = [...questions]
        const index = cp.findIndex(ele => ele.uuid === uuid)
        console.log("index : " + index)
        cp.splice(index, 1)
        setQuestions(cp)
    }



    return (
        <div>
            create form
            <br></br>
            <textarea className="area" placeholder="start here..."></textarea>
            <br></br>     

            
            {questions}

            <div className="control">
                <button id="add" onClick={add}>add</button>
                <button id="submit">submit</button>
            </div>


        </div>
    )
}

