
const items = [
    {
        header: "Direct communication with a Telegram bot",
        content: "Find @moderedom_bot in Telegram search and send files directly to it. It will respond with an analysis result and hash sums.",
        alignment: "left",
    },
    {
        header: "Scanning of attached documents in groups",
        content: "Add @moderedom_bot to your group or channel and it will scan all attached file the same as in direct message.",
        alignment: "right",
    },
    {
        header: "The latest version of ClamAV anti-virus databases",
        content: "The server-side databases are maintained up-to-date.",
        alignment: "left",
    },
    {
        header: "Scanning for potentially unwanted behaviour",
        content: "We also scan for potentially unwanted behaviour applications. The process is the same, you will get the analysis if we find something.",
        alignment: "right",
    },
]

export default function FeaturesPage() {
    const FeaturesItems = () => items.map((item) => {
        const rowAlignmentCls = item.alignment === 'left' ? "flex-row " : "flex-row-reverse ";
        const div = <>
            <div className={rowAlignmentCls + "flex w-full flex-wrap"}>
                <div className="md:w-1/2 sm:w-full">
                    <h2 className="text-4xl text-center lg:text-left my-3">{item.header}</h2>
                    <p className="text-center text-lg lg:text-left my-3">{item.content}</p>
                </div>
                <div className="flex min-w-1/2 h-48 md:w-1/2 sm:w-full">
                    <div className="m-auto">IMAGE</div>
                </div>
            </div>
        </>;
        return div;
    })

    return (
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
    );
}