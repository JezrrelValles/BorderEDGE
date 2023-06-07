import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Border Edge"}
                </title>
            </Head>
        </>
    )
}

export default PageHead