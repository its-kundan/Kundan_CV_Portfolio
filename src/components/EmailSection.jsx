"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaYoutube } from 'react-icons/fa';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [useDigest, setUseDigest] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify({
      ...data,
      useDigest
    });
    const endpoint = "/api/messages";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
        e.target.reset(); // Reset form
      } else {
        setError(resData.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
      <Link
        href="https://github.com/its-kundan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={32} aria-label="GitHub Icon" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/its-kundan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn size={32} aria-label="LinkedIn Icon" />
      </Link>
      <a
        href="mailto:kundan51kk@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope size={32} aria-label="Email Icon" />
      </a>
      <Link
        href="https://www.youtube.com/channel/YourChannel"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube size={32} aria-label="YouTube Icon" />
      </Link>
    </div>
      </div>
      <div>
        {emailSubmitted ? (
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
            <p className="text-green-400 text-sm">
              ✅ {useDigest ? 'Message stored for daily digest!' : 'Email sent successfully!'} I&apos;ll get back to you soon.
            </p>
            <button
              onClick={() => setEmailSubmitted(false)}
              className="text-green-400 text-xs mt-2 hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 flex items-center gap-3">
              <label className="flex items-center gap-2 text-white text-sm">
                <input
                  type="checkbox"
                  checked={useDigest}
                  onChange={(e) => setUseDigest(e.target.checked)}
                  className="rounded border-gray-600 bg-[#18191E]"
                />
                <span>📬 Send as daily digest (reduces email clutter)</span>
              </label>
            </div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            {error && (
              <div className="mb-4 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full transition-colors ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
