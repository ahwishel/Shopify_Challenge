import {useEffect, useState} from 'react'
import styles from './Response.module.css'

export default function Response({prompt, engine}){
    
    //state i'll use to store a response for each prompt
    const [response, setResponse] = useState()

    const API_KEY = process.env.REACT_APP_OPEN_AI_KEY

    //This will run only once for every generated response.
    useEffect(() => {
        //General form of the payload
        const data = {
            prompt: prompt,
            temperature: 0.5,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        };

        //Make a request to the API where we include the API key in the header, 
        //providing the payload above

        fetch(`https://api.openai.com/v1/engines/${engine}/completions`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(result => {
            setResponse(result.choices[0].text)
        })
        .catch(err => {
            console.err(err)
        });

    }, [])

    return (
        <div className={styles.container}>
            <div>
                <b>Prompt</b>
                <br/>
                <em>{prompt}</em>
            </div>
            <br/>
            <div>
                <b>Response</b>
                <br/>
                <em>{response}</em>
            </div>
        </div>
    )
}