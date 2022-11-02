import exp from "constants";
import Head from "next/head";
import {useEffect, useState} from "react";


const CSR = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        setTime(new Date().toISOString())
    }, [])
    return (
        <div>
            <Head>
                <title>CSR</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div>
                <h1>CSR</h1>
                <h2>{time}</h2>
            </div>
        </div>
    )
}
export default CSR