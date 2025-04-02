import React from "react";
import Swal from "sweetalert2";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3d1f6e38-970e-4cc4-9889-f34b49a02404");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "SUCCESS!",
        text: "Your message has been sent successfully!",
        icon: "success",
      });
    }
  };
  return (
    <div className="m-2 bg-slate-100 shadow-lg rounded-lg p-5  md:w-1/2 ">
      <form onSubmit={onSubmit}>
        <h2 className="text-[24px] font-bold">Contact Us</h2>
        <div className="mt-[20px] flex flex-col">
          <label>Full Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name.."
            required
            className="h-[50px] bg-transparent border-[2px] border-gray-300 rounded-lg px-2 text-[16px] text-black mt-[8px]"
          />
        </div>
        <div className="mt-[20px] flex flex-col">
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="example@gmail.com"
            required
            className="h-[50px] bg-transparent border-[2px] border-gray-300 rounded-lg px-2 text-[16px] text-black mt-[8px]"
          />
        </div>
        <div className="mt-[20px] flex flex-col">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Enter your message..."
            required
            className="h-[100px] bg-transparent border-[2px] border-gray-300 rounded-lg px-2 text-[16px] text-black mt-[8px]"
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-[20px] bg-red-500 p-2 rounded-lg text-white"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
