import Head from 'next/head'
import { Fragment } from 'react'
import PasswordGen from '@/components/password-gen/passwordGen'

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Password Generator</title>
                <meta name="description" content="Generate random passwords with 3 additional options!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <PasswordGen />
            </main>
        </Fragment>
    )
}
