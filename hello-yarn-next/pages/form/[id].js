import { Router, useRouter } from "next/router"
import { useReducer } from "react";

export default function one() {
    const router = useRouter()
    const {id} = router.query

    return (
        <div>
            {id}
        </div>
    )
}