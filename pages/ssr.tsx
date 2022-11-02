import Head from "next/head";
import {GetServerSideProps} from "next";

export async function getServerSideProps() {
    console.log('server')
    return {
        props: {
            time: new Date().toISOString(),
        },
    }
}

export type Props = {
    time: string;
}


const SSR = ({time}: Props) => {
    return (
        <div>
            <Head>
                <title>SSR</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div>
                <h1>SSR</h1>
                <h2>{time}</h2>
            </div>
        </div>
    )
}
export default SSR