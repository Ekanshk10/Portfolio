import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser"


const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  //ZOD is used for validation this makes easy
  const contactFormSchema = Z.object({
    name: Z.string().nonempty("Name is required"),
    email: Z.string().email("Invalid Email").nonempty("Name is required"),
    subject: Z.string().nonempty("Subject is required"),
    message: Z.string().nonempty("Message is required"),
  });
  // TO bind zod with react from hook we need reacthook/resolver library
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(contactFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const payload = {
        title:data.subject,
        name: data.name,
        email: data.email,
        message: data.message,
        time: new Date().toLocaleString(),

      }

      const  serviceId = import.meta.env.VITE_SERVICE_ID
      const  templateId = import.meta.env.VITE_TEMPLATE_ID
      const  userId = import.meta.env.VITE_PUBLIC_KEY

      await emailjs.send(serviceId, templateId, payload, {
        publicKey:userId,
      })

    } catch (error) {
        console.log("Failed...", error)
        alert("Failed to send message please try again")
    }finally{
      alert("Message sent successfully");
      setLoading(false);
      reset(initialValues);
    }
  };

  useEffect(()=>{
    console.log(errors);
  }, [errors])

  return (
    <div className="flex-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full text-[#a7a7a7] flex flex-col gap-7 "
      >
        <div>
          <label
            className="block text-white md:text-2xl font-semibold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            placeholder="John"
            className="bg-black-300 w-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50] rounded-md"
          />
          {
            errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )
          }
        </div>

        <div>
          <label
            className="block text-white md:text-2xl font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="John@gmail.com"
            className="bg-black-300 w-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50] rounded-md"
          />
          {
            errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )
          }
        </div>

        <div>
          <label
            className="block text-white md:text-2xl font-semibold mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            {...register("subject")}
            type="text"
            id="subject"
            placeholder="Liked your work"
            className="bg-black-300 w-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50] rounded-md"
          />
          {
            errors.subject && (
              <span className="text-red-500">{errors.subject.message}</span>
            )
          }
        </div>

        <div>
          <label
            className="block text-white md:text-2xl font-semibold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            {...register("message")}
            type="text"
            id="message"
            placeholder="Hey! wanna connect"
            rows={"5"}
            className="bg-black-300 w-full px-4 py-4 font-light md:text-base text-sm placeholder:text-[#fafafa50] rounded-md"
          />
          {
            errors.message && (
              <span className="text-red-500">{errors.message.message}</span>
            )
          }
        </div>

        <button
          type="submit"
          disabled = {loading}
          className=" disabled:opacity-70 w-full py-4  bg-blue-50 text-white-50 font-semibold rounded-md hover:bg-blue-600 transition-all duration-300 cursor-pointer"
        >
         {loading? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
