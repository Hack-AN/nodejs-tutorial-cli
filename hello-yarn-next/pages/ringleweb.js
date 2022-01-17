import axios from "axios"
import React, {useEffect, useState} from "react";
import styles from '../styles/Home.module.css'

export default function ringleweb() {

    const [pages, setPages] = useState([])



    const fetchusers = async () => {
        try {
            const response = await axios.get('https://api.ringleplus.com/api/v4/student/landing/course?locale=ko')
            setPages(response.data.categories)
        }
        catch (e){

        }
    }
    
    useEffect( () => {
        fetchusers()
    } , 
    [])

    return (
        <div>
      
            {pages && pages.map((page, index) => {
                return <div className={styles.blocks} key = {index}>
                    {
                        page && page.courses.map((course, index) => {
                            return <div className={styles.block} key = {index}>
                                {course.title}
                                
                                <img style={{width: "100px", height: "100px"}} src ={course.image_url}/>
                                </div>
                        })
                    }
                    <br/>

                </div>
            })}
        </div>
    )
}