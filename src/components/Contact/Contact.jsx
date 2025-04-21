import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "@/styles";
import { AvatarCanvas } from "@/components/canvas";
import { SectionWrapper } from "@/hoc";

const Contact = () => {
  const formRef = useRef(null);
  const formState = useRef({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [animationName, setAnimationName] = useState("waving");

  const handleChange = (e) => {
    const { name, value } = e.target;
    formState.current[name] = value;
  };

  const handleFocus = () => {
    if (animationName !== "typing") {
      setAnimationName("typing");
    }
  };

  const handleBlur = () => {
    setAnimationName("waving");
  };

  const handleSubmit = (e) => {
    const { name, email, message } = formState.current;
    if (!name || !email || !message) {
      e.preventDefault();
      alert(
        "Some fields are not filled in. Please check your information and try again."
      );
      return;
    }
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_96j99h6",
        "template_7dufnj9",
        {
          from_name: name,
          to_name: "Denys",
          from_email: email,
          to_email: "yeremenko.den@gmail.com",
          message: message,
        },
        "WAfrLYG3LpaJg93ow"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible");
          formState.current = { name: "", email: "", message: "" };
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      )
      .finally(() => {
        setAnimationName("salute");
      });
  };

  return (
    <div className="flex flex-col-reverse overflow-hidden xl:mt-12 xl:flex-row">
      <div className=" flex-[0.5] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 mt-12 "
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white ">Your Name</span>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="What's your name"
              className="px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white ">Your Email</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="What's your email"
              className="px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white ">Your Message</span>
            <textarea
              rows={7}
              name="message"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="What do you want to say?"
              className="px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary"
            />
          </label>
          <button
            type="submit"
            className="px-8 py-3 font-bold text-white shadow-md outline-none bg-tertiary w-fit shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
      <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <AvatarCanvas animationName={animationName} />
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
