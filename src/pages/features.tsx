import Head from "next/head";
import Image from "next/image";
import ill1 from "@/../public/assets/images/ill1.png";
import ill2 from "@/../public/assets/images/ill2.png";
import ill3 from "@/../public/assets/images/ill3.png";
import ill4 from "@/../public/assets/images/ill4.png";

const items = [
    {
        header: "Direct communication with a Telegram bot",
        content: "Find @moderedom_bot in Telegram search and send files directly to it. It will respond with an analysis result and hash sums.",
        alignment: "left",
        img: ill1,
    },
    {
        header: "Scanning of attached documents in groups",
        content: "Add @moderedom_bot to your group or channel and it will scan all attached files the same as in direct message.",
        alignment: "right",
        img: ill2,
    },
    {
        header: "The latest version of ClamAV anti-virus databases",
        content: "The server-side databases are maintained up-to-date.",
        alignment: "left",
        img: ill3,
    },
    {
        header: "Scanning for potentially unwanted behaviour",
        content: "We also scan for potentially unwanted behaviour applications. The process is the same, you will get the analysis if we find something.",
        alignment: "right",
        img: ill4,
    },
]

export default function FeaturesPage() {
    const FeaturesItems = () => items.map((item, index) => {
        const rowAlignmentCls = item.alignment === 'left' ? "flex-row " : "flex-row-reverse ";
        const div = (
            <div
                key={index} // Added a key for React's mapping
                className={rowAlignmentCls + "flex w-full flex-wrap mb-10 items-center"} // Added `mb-8` for spacing between rows
            >
                {/* Left Column: Text Content */}
                <div className="w-full md:w-1/2 px-4">
                    <h2 className="text-4xl text-center lg:text-left my-3">{item.header}</h2>
                    <p className="text-center text-lg lg:text-left my-3">{item.content}</p>
                </div>
                {/* Right Column: Image */}
                <div className="w-full md:w-1/2 flex items-center">
                    <div className="m-5 w-full h-full">
                        <Image
                            src={item.img}
                            alt={`${item.header} image`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        );
        return div;
    });

    return (
        <>
            <Head>
                <title>Moderedom | Features</title>
            </Head>
            <div className="container w-full flex flex-col lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                <div className="flex flex-col w-full items-center lg:items-start">
                    <FeaturesItems/>


                    <h2 className="text-4xl text-center lg:text-left my-3"></h2>
                    <p className="text-center text-lg lg:text-left my-3"></p>
                    <h2 className="text-4xl text-center lg:text-left my-3"></h2>
                    <p className="text-center text-lg lg:text-left my-3"></p>
                    <h2 className="text-4xl text-center lg:text-left my-3"></h2>
                    <p className="text-center text-lg lg:text-left my-3"></p>
                </div>
            </div>
        </>
    );
}