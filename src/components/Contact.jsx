import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_7hkmhkm", "template_ll9s3ce", form.current, {
        publicKey: "hX3I4IwFC40CMKOQK",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error(error);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="pb-[64px] text-black">
      <div className="mb-4 flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="name"
          name="from_name"
          className="p-2 rounded-md"
          required
        />
        <input
          type="email"
          placeholder="email"
          name="from_email"
          className="p-2 rounded-md"
          required
        />
        <textarea
          name="message"
          placeholder="message"
          rows="6"
          className="resize-none p-2 rounded-md"
          required
        />
      </div>
      <button className="block px-8 py-2  bg-white text-black text-sm rounded-md font-semibold hover:bg-white/[0.8] hover:shadow-lg cursor-pointer">
        SUBMIT
      </button>
    </form>
  );
};
