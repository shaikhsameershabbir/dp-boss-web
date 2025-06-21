/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { copywrite, gameConfigurtion } from "../constant/constant";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function constant() {
    return (
        <>
            <div className="bg-[#fc9] min-h-screen p-2 ">
                <div className="border-2 border-[#ff0016] flex justify-center items-center rounded-lg shadow-md bg-[#fc9] m-2">
                    <Link href="/">
                        <img alt="" src={gameConfigurtion.gameLogo} height={250} width={300} />
                    </Link>
                </div>
                <div className="border-2 border-[#ff0016] m-2 p-3 rounded-[10px] bg-[#fbe7ff]">
                    <div className="text-xl font-bold rounded-[15px] border-3 border-[#ffff] bg-[#ff00a2]">
                        <h3
                            className="text-white italic font-bold text-center"
                            style={{ textShadow: "2px 2px 4px black" }}>
                            DSBOSS KALYAN RESULT TODAY
                        </h3>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between gap-6 m-3">
                        {/* Form Section */}
                        <div className="w-full lg:w-1/2">
                            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-black">
                                <div>
                                    <label className="font-semibold">Customer Name *</label>
                                    <input
                                        type="text"
                                        placeholder="Please enter your name *"
                                        className="w-full border border-gray-300 p-2 rounded-md bg-[#ffff]"
                                    />
                                </div>
                                <div>
                                    <label className="font-semibold">Game Type *</label>
                                    <select className="w-full border border-gray-300 p-2 rounded-md bg-[#ffff] text-[14px]">
                                        <option>Mumbai Side Game</option>
                                        <option>Dehli Side Game</option>
                                        <option>Star Line Game</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="font-semibold">Game Name *</label>
                                    <input
                                        type="text"
                                        placeholder="Please enter game you want *"
                                        className="w-full border border-gray-300 p-2 rounded-md bg-[#ffff]"
                                    />
                                </div>
                                <div>
                                    <label className="font-semibold">Email *</label>
                                    <input
                                        type="email"
                                        placeholder="Please enter your email *"
                                        className="w-full border border-gray-300 p-2 rounded-md bg-[#ffff]"
                                    />
                                </div>
                                <div>
                                    <label className="font-semibold">Contact No. *</label>
                                    <input
                                        type="tel"
                                        placeholder="Please enter your phone*"
                                        className="w-full border border-gray-300 p-2 rounded-md bg-[#ffff]"
                                    />
                                    <div className="flex items-center gap-2 mt-2">
                                        <input type="checkbox" id="record" />
                                        <label htmlFor="record" className="italic">
                                            Do saal se adhik ka record
                                        </label>
                                    </div>
                                </div>

                                <div className="sm:col-span-2 flex justify-center mb-4">
                                    <button
                                        type="submit"
                                        className="bg-orange-300 text-white px-4 py-1 rounded-sm mt-2 text-xs cursor-pointer"
                                    >
                                        Send message
                                    </button>
                                </div>

                            </form>
                            <p className="mt-2 italic text-sm text-gray-700 text-center">
                                * These fields are required.
                            </p>
                            <h2 className="text-center text-2xl italic font-semibold mt-4 text-black">
                                DsBoss Contact Number
                            </h2>
                        </div>

                        {/* Contact Info & Map */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-4">
                            <div className="sm:col-span-2">
                                <p className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faMapMarker} height="15px" />
                                    <span className="font-bold">Address:</span>
                                    <span className="italic">Matka HeadOffice, Kalyan, Mumbai, Maharashtra 421301</span>
                                </p>
                                <p className="mt-2 flex items-center gap-2">
                                    <FontAwesomeIcon icon={faEnvelope} height="15px" />
                                    <span className="font-bold">Email:</span>
                                    <a href="mailto:support@dsboss.boston" className="text-blue-600 italic underline">
                                        support@dsboss.boston
                                    </a>
                                </p>
                            </div>

                            <iframe
                                title="Kalyan Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1883.324250880046!2d73.12702975836463!3d19.240330989983387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795103fffffff%3A0x9d2e8b52a4f263b7!2sKalyan%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1685804561204!5m2!1sen!2sin"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="border-2 border-[#ff0016] m-2 p-3 rounded-[10px] italic">
                    <p className="text-[12px] text-center text-[#000b65] font-bold mb-2">
                        Hello, all the Satta Matka Enthusiasts! Welcome to the contact details of our websiteDsBoss.Services If you are a customer and you have any queries, then you can fill out the below form here and then contact us.</p>
                    <p className="text-[12px] text-center text-[#000b65] font-bold mb-2">We will respond as soon as we check your email. So here you need to fill your name in the customer name field. Then you need to enter the game name you want to play specifically. Then you have to add your contact details here. It should be your phone number, and then you need to select the game type, and then your email, after that you can send us a message.</p>
                    <p className="text-[12px] text-center text-[#000b65] font-bold mb-2">If you want to know our address, here is our physical address written on the right side, and here is our official email where you can send us an email for any important query. Here, you can see our pinpoint location on the Google map, and you can reach out if you want to see our office.</p>
                    <p className="text-[12px] text-center text-[#000b65] font-bold mb-2">Okay, so this is our contact page, and here is our contact number, you can contact us by filling out the form and dont forget to enter all the details we asked for, otherwise your form will not be submitted.</p>
                    <p className="text-[12px] text-center text-[#000b65] font-bold mb-2">That&apos;s all from this page. I hope you will contact us when you need anything from us. Don&apos;t hesitate to contact us. Our experts are available 24/7 to help you with your queries. Just don&apos;t forget to add proper details when you submit the form, and carefully fill it out.</p>
                    <p className="text-[12px] text-center text-[#000b65] font-bold mb-2">All the entries are mandatory. You cannot skip any of the entry blanks. Make sure you fill out the form correctly, and we will respond to you as soon as we get your email. Thank you so much. We wish you very good luck with your next Satta Matka Games. May you always win!</p>
                </div>
                <button
                    className="bg-[#a0d5ff] px-12 py-3 mx-auto block text-[16px] text-[#220c82] mt-2 font-bold rounded-[10px] border-2 border-[#23527c] cursor-pointer italic"
                    style={{
                        textShadow: '1px 1px #00bcd4',
                        boxShadow: '0 8px 10px 0 rgba(0,0,0,.2), 0 6px 8px 0 rgba(0,0,0,.19)'
                    }}
                >
                    Go to top
                </button>
                <p className="text-center font-bold mt-2 text-black">108</p>
                <div className="bg-[#fff] text-lg font-bold border-2 border-[#800080] mt-2 p-1">
                    <h1 className="text-[35px] text-center text-[#007bff]">{copywrite.title}</h1>
                    <h2 className="text-[25px] text-center text-[#ff0000]" >{copywrite.message}</h2>
                    <h2 className="text-[25px] text-center text-[#ff0000]">{copywrite.year}</h2>
                    <h2 className="text-[25px] text-center text-[#ff0000]">{copywrite.contact} (<span>{copywrite.sub1}</span><span className="text-[#007bff]">{copywrite.sub2}</span>)</h2>
                </div>
            </div>
        </>
    )
}