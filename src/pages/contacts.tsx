import Head from "next/head";


export default function ContactsPage() {
    return (
        <>
            <Head>
                <title>Moderedom | Contacts</title>
            </Head>
            <div className="container w-full flex flex-col lg:flex-row items-center gap-12 mb-10 mt-14 lg:mt-28">
                <div className="flex flex-col w-full items-center lg:items-start">
                    <p> Hey, my name is Oleg. I developed this bot on Rust and hosted it on my home server. If you have any ideas, suggestions, or just want to chat,
                        please reach me out via email oyflores&nbsp;(at)&nbsp;gmail.com or in Telegram: <a href="https://t.me/oyflores">@oyflores</a></p>
                </div>
            </div>
        </>
    );
}