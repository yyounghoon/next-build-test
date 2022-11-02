import Head from "next/head";

export async function getStaticProps() {
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


const SSG = ({time}: Props) => {
    return (
        <div>
            <Head>
                <title>SSG</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div>
                <h1>SSG</h1>
                <h2>{time}</h2>
            </div>
        </div>
    )
}
export default SSG