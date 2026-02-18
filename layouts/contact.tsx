import React, { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { SubmitHandler, useForm } from "react-hook-form";
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
                if (!res.ok) throw Error(res.statusText);
                return res.json();
            })
            .then((res) => {
                if (res.message === "Message Sent") setSending(2)
            })
            .catch(() => setSending(3))
    };

    return (
        <>
            <div className="relative text-white" style={{
                background: `
                    radial-gradient(ellipse 70% 60% at 80% 30%, rgba(0, 61, 182, 0.35) 0%, transparent 100%),
                    radial-gradient(ellipse 60% 50% at 15% 80%, rgba(0, 21, 95, 0.3) 0%, transparent 100%),
                    #000
                `
            }}>
                {/* Grid overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage: `linear-gradient(rgba(0,61,182,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,61,182,0.06) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }} />

                <div className="relative pt-16 pb-10 px-6">
                    {/* Heading */}
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-semibold text-white mb-2">Get In Touch</h1>
                        <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                    </div>

                    {/* Form card */}
                    <div className="mx-auto max-w-2xl rounded-xl p-8" style={{
                        background: 'linear-gradient(160deg, #003db6 0%, #00298a 100%)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderTop: '3px solid rgba(100,160,255,0.5)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                    }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="relative z-0 mb-8 w-full group">
                                <input
                                    {...register("name", { required: true, maxLength: 40 })}
                                    type="text" name="name" id="name"
                                    className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-blue-400/40 text-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-300 peer transition-colors"
                                    placeholder=" " required
                                />
                                <label htmlFor="name" className="absolute text-sm text-blue-300 duration-300 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Your Name
                                </label>
                            </div>
                            <div className="relative z-0 mb-8 w-full group">
                                <input
                                    {...register("email", { required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "invalid email address" }, maxLength: 100 })}
                                    type="email" name="email" id="email"
                                    className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-blue-400/40 text-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-300 peer transition-colors"
                                    placeholder=" " required
                                />
                                <label htmlFor="email" className="absolute text-sm text-blue-300 duration-300 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Your Email Address
                                </label>
                            </div>
                            <div className="relative z-0 mb-8 w-full group">
                                <textarea
                                    {...register("message", { required: true, maxLength: 5000 })}
                                    rows={4} name="message" id="message"
                                    className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-blue-400/40 text-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-300 peer transition-colors resize-none"
                                    placeholder=" " required
                                />
                                <label htmlFor="message" className="absolute text-sm text-blue-300 duration-300 -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Your Message
                                </label>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <button
                                    type="submit"
                                    className="px-8 py-2.5 rounded-lg text-sm font-medium text-white transition-all duration-200"
                                    style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)' }}
                                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.25)')}
                                    onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
                                >
                                    {sending === 0 && 'Send Message'}
                                    {sending === 1 && <Sending />}
                                    {sending === 2 && 'Message Sent!'}
                                    {sending === 3 && 'Error — try again'}
                                </button>
                                <p className="text-xs text-blue-200/60">
                                    Protected by reCAPTCHA &mdash; <a href="https://policies.google.com/privacy" className="underline hover:text-blue-200 transition-colors">Privacy Policy</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Contact;
