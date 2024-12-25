import Image from "next/image";
import user1Img from "../../public/assets/images/user1.jpg";
import user2Img from "../../public/assets/images/user2.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckDouble, faFile, faShare} from "@fortawesome/free-solid-svg-icons";
import logoBot from "../../public/assets/images/logo_in_work.png";
import {MouseEventHandler} from "react";
import Link from "next/link";

const openTg: MouseEventHandler<HTMLButtonElement> = () => {
    alert('Opened Tg');
};

export default function IndexPage() {
    return (
        <div className="container w-full flex flex-col lg:flex-row items-center gap-12 mt-14 lg:mt-28">
            <div className="flex flex-col lg:w-5/12 items-center lg:items-start">
                <h2 className="text-4xl text-center lg:text-left mb-6">Anti-virus bot for your Telegram conversations</h2>
                <p className="text-center lg:text-left mb-6">
                    Add
                    <a href="https://t.me/moderedom_bot" target="_blank" rel="noopener noreferrer">
                        @moderedom_bot
                    </a> to your chat or communicate with it directly.
                    Each sent file will be analysed in ClamAV antivirus
                    and searched against known malware databases.
                </p>
                <div className="flex justify-center flex-wrap gap-6 mb-6">
                    <button type="button" className="btn btn-purple" onClick={openTg}>Get it on Telegram</button>
                    <Link href="/features" className="p-3 text-mdm-grey">More on features...</Link>
                    {/*<button type="button" className="btn btn-white">More on Features...</button>*/}
                </div>
            </div>
            <div className="flex justify-center w-full lg:w-7/12 mb-10 md:mb-16 min-w-[325px]">
                <div className="bg-tg-wallpaper bg-[length:300px_500px] bg-contain rounded-lg shadow-lg p-4 w-full min-h-96">
                    {/*  Request from user */}
                    <div className="flex items-end justify-start space-x-2 mb-4 md:max-w-3/4 sm:max-w-full sm:min-w-72 ">
                        <div className="flex-shrink-0 w-10 h-10">
                            <Image src={user1Img} alt="User sending a message" className="w-full h-full rounded-full object-cover"/>
                        </div>
                        <div className="bg-green-100 sm:min-w-3/4 text-gray-900 p-3 rounded-lg shadow">
                            <div className="w-full">
                                <p className="text-sm flex items-center text-green-600 overflow-x-clip">
                                    Forwarded from&nbsp;
                                    <span className="inline-flex flex-shrink-0 items-center justify-center w-5 h-5">
                                              <Image src={user2Img} alt="User being forwarded"
                                                     className="w-full h-full rounded-full object-cover"/>
                                          </span>
                                    <span className="">&nbsp;Angela Martin</span>
                                </p>
                                {/*<p className="text-sm flex items-center text-green-600">*/}
                                {/*    <span className="inline-flex flex-shrink-0 items-center justify-center w-5 h-5">*/}
                                {/*              <Image src={user2Img} alt="User being forwarded"*/}
                                {/*                     className="w-full h-full rounded-full object-cover"/>*/}
                                {/*          </span>&nbsp;Angela Martin*/}
                                {/*</p>*/}
                                <div className="flex items-center space-x-2 mt-2">
                                    <div
                                        className="bg-green-600 p-3 w-12 h-12 rounded-full inline-flex items-center justify-center">
                                        <FontAwesomeIcon className="text-white" icon={faFile}></FontAwesomeIcon>
                                    </div>
                                    <div className="w-full">
                                        <p className="p-tg"><strong>budget_2024.doc.exe</strong></p>
                                        <div className="flex justify-between mt-1 items-center">
                                            <span>66.5 KB</span>
                                            <div className="flex items-center space-x-2">
                                                <span>14:48</span>
                                                <FontAwesomeIcon className="text-green-500"
                                                                 icon={faCheckDouble}></FontAwesomeIcon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  Response from bot */}
                    <div className="flex items-end justify-start space-x-2 mb-4 md:max-w-3/4 sm:max-w-full min-w-72 ">
                        <div className="flex-shrink-0 w-10 h-10">
                            <Image src={logoBot} alt="Anti-virus bot logo"
                                   className="w-full h-full rounded-full object-cover"/>
                        </div>
                        <div className="bg-white text-gray-900 p-3 rounded-lg shadow max-w-full min-w-56">
                            <div
                                className="text-sm border-l-4 border-purple-500 pl-2 mb-2 py-2 bg-purple-100 rounded-s flex items-center">
                                <div className="ml-3">
                                    <p className="p-tg">Dwight&nbsp;<FontAwesomeIcon className=""
                                                                                     icon={faShare}></FontAwesomeIcon>&nbsp;
                                        <strong>Angela
                                            Martin</strong></p>
                                    <p className="p-tg">budget_2024.doc.exe</p>
                                </div>
                            </div>
                            <p className="p-tg"><strong>🚨 Heads up! We found &#39;Win.Malware.Dexter-9654223-0&#39; in
                                your file.</strong></p>
                            <p className="p-tg">⚠️ Make sure you know what you&#39;re doing before opening it.</p>
                            <p className="p-tg">📝 Here are the file&#39;s hashes:</p>
                            <p className="p-tg"><strong>MD5</strong>: <span
                                className="tg-hash">7d419cd096fec8bcf945e00e70a9bc41</span></p>
                            <p className="p-tg"><strong>SHA-256</strong>: <span
                                className="tg-hash">5ffd4c5e1766196ac1cbd799de829812757684f4432f1b8de59054890997c30d</span>
                            </p>
                            <p className="p-tg"><strong>SHA-1</strong>: <span
                                className="tg-hash">df963c2ef9544c2b49488a67bf9efe841af53f0f</span></p>
                            <p className="p-tg">🕒 It popped up on our radar first on:
                                2024-12-08T13:48:10.951934171Z</p>
                            <p className="p-tg">🔗 Stay safe and keep your files secure!</p>
                            <div className="flex justify-end items-end w-full">
                                <div>14:48</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}