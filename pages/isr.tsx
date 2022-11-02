import Head from "next/head";
import {GetStaticProps} from "next";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
    console.log('server')
    return {
        props: {
            time: new Date().toISOString(),
        },
        revalidate: 30
    }
}

export type Props = {
    time: string;
}


const ISR = ({time}: Props) => {
    return (
        <div>
            <Head>
                <title>ISR</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div>
                <Link href={"/"}>홈으로</Link>
                <h1>ISR</h1>
                <h2>{time}</h2>
            </div>
        </div>
    )
}
export default ISR