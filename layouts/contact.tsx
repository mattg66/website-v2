import { FetchEventResult } from "next/dist/server/web/types";
import React, { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Sending from "../components/Sending";

const Contact: React.FC<{}> = ({ }) => {
    type FormValues = {
        name: string;
        email: string;
        message: string;
    }

    const { register, handleSubmit } = useForm<FormValues>()

    const [sending, setSending] = useState(0)

    const { executeRecaptcha } = useGoogleReCaptcha();


    const onSubmit: SubmitHandler<FormValues> = (data) => {
        if (sending !== 1 && sending !== 2) {
            if (!executeRecaptcha) {
                setSending(3)
                return;
            }
            setSending(1)
            executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
                submitEnquiryForm(gReCaptchaToken, data);
            });
        }
    }

    const submitEnquiryForm = (gReCaptchaToken: any, data: FormValues) => {
        fetch("/api/enquiry", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data,
                gRecaptchaToken: gReCaptchaToken,
            }),
        })
            .then((res) => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }
                return res.json();
            })
            .then((res) => {
                if (res.message === "Message Sent") {
                    setSending(2)
                }
                console.log(res)
            })
            .catch(() => {
                setSending(3)
            })

    };
    return (
        <>
            <div className="bg-gray-700 pb-5 float-middle text-white">
                <div className="text-center">
                    <h1 className="text-white text-4xl mx-auto pt-4 pb-4">Get In Touch</h1>
                </div>
                <div className="container mx-auto max-w-4xl pl-10 pr-10">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="relative z-0 mb-6 w-full group">
                            <input {...register("name", { required: true, maxLength: 40 })} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-otherBlue focus:outline-none focus:ring-0 focus:border-otherBlue peer" placeholder=" " required />
                            <label htmlFor="name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input {...register("email", { required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "invalid email address" }, maxLength: 100 })} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-otherBlue focus:outline-none focus:ring-0 focus:border-otherBlue peer" placeholder=" " required />
                            <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email address</label>
                        </div>
                        <div className="relative z-0 pb-6 w-full group">
                            <textarea {...register("message", { required: true, maxLength: 5000 })} rows={4} name="message" id="message" className=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-otherBlue focus:outline-none focus:ring-0 focus:border-otherBlue peer" placeholder=" " required />
                            <label htmlFor="message" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Message</label>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <button type="submit" className="text-white bg-otherBlue hover:bg-lightBlue focus:ring-4 focus:outline-none focus:ring-darkBlue font-medium rounded-lg text-sm w-40 px-5 py-2.5 text-center mb-4 z-5 inline-flex items-center" >{sending === 0 ? <p className="mx-auto">Submit</p> : (sending === 1 ? <Sending/> : (sending === 2 ? <p className="mx-auto">Message Sent!</p> : <p className="mx-auto">Error!</p>))}</button>
                            <div className="text-right text-white">
                                <p>This site is protected by reCAPTCHA</p>
                                <p>Google <a href="https://policies.google.com/privacy"><u>Privacy Policy</u></a></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}
export default Contact;
