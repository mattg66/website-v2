import { useCallback, useEffect, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const Contact: React.FC<{}> = ({ }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleSumitForm = useCallback(
        (e) => {
            e.preventDefault();
            if (!executeRecaptcha) {
                console.log("Execute recaptcha not yet available");
                return;
            }
            executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
                submitEnquiryForm(gReCaptchaToken);
            });
        },
        [executeRecaptcha]
    );

    const submitEnquiryForm = (gReCaptchaToken: any) => {
        fetch("/api/enquiry", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message,
                gRecaptchaToken: gReCaptchaToken,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res, "response from backend");
                if (res?.status === "success") {
                } else {
                }
            });
    };
    return (
        <>
            <div className="bg-gray-700 mb-25 float-middle">
                <div className="text-center">
                    <h1 className="text-white text-4xl mx-auto pt-4">Get In Touch</h1>
                </div>
                <div className="container mx-auto max-w-4xl pl-10 pr-10">

                    <div className="relative z-0 mb-6 w-full group">
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-otherBlue focus:outline-none focus:ring-0 focus:border-otherBlue peer" placeholder=" " required />
                        <label htmlFor="name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-otherBlue focus:outline-none focus:ring-0 focus:border-otherBlue peer" placeholder=" " required />
                        <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email address</label>
                    </div>
                    <div className="relative z-0 pb-6 w-full group">
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} name="floating_password" id="floating_password" className=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-otherBlue focus:outline-none focus:ring-0 focus:border-otherBlue peer" placeholder=" " required />
                        <label htmlFor="floating_password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Message</label>
                    </div>
                    <div className="grid grid-cols-2">
                        <button type="submit" className="text-white bg-otherBlue hover:bg-lightBlue focus:ring-4 focus:outline-none focus:ring-darkBlue font-medium rounded-lg text-sm w-24 px-5 py-2.5 text-center mb-4">Submit</button>
                        <div className="text-right">
                            <p>This site is protected by reCAPTCHA</p>
                            <p>Google <a href="https://policies.google.com/privacy"><u>Privacy Policy</u></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Contact;