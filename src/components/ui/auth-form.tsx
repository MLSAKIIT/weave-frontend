"use client";
import { FaEnvelope, FaLock, FaGoogle, FaUser } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import React, { JSX } from "react";
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidate } from "zod-formik-adapter";

interface AuthFormProps {
  title: string;
  buttonText: string;
  extraFields?: { name: string; type: string; placeholder: string; icon?: JSX.Element }[];
  footerText: string;
  footerLink: string;
  footerLinkText: string;
}

const validationSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  name: z.string().optional(),
});

export function AuthForm({ title, buttonText, extraFields = [], footerText, footerLink, footerLinkText }: AuthFormProps) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validate: toFormikValidate(validationSchema),
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-[#101426] shadow-lg flex flex-col items-center py-12 px-12">
        <h1 className="text-3xl text-[#E76F04] mb-6">{title}</h1>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="w-full flex flex-col items-center">
          {extraFields.map((field, index) => (
            <div key={index} className="flex items-center w-[16rem] mb-4 border-b border-[#E76F04] relative">
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                className="bg-transparent outline-none flex-1 text-sm pl-3"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[field.name as keyof typeof formik.values]}
              />
              {field.icon}
              {formik.touched[field.name as keyof typeof formik.touched] &&
                formik.errors[field.name as keyof typeof formik.errors] && (
                  <p className="text-red-500 text-xs absolute -bottom-4">{formik.errors[field.name as keyof typeof formik.errors]}</p>
                )}
            </div>
          ))}

          {/* Login/Signup Button */}
          <Button type="submit" className="w-3/4 bg-[#E76F04] text-black hover:opacity-90 transition">
            {buttonText}
          </Button>
        </form>

        {/* OR Divider */}
        <div className="text-[#E76F04] my-2">OR</div>

        {/* Google Login Button */}
        <Button className="w-3/4 bg-[#E76F04] text-black flex items-center justify-center gap-2 hover:opacity-90 transition">
          <FaGoogle /> {buttonText} with Google
        </Button>

        {/* Footer Link */}
        <p className="text-gray-400 mt-4 text-xs">
          {footerText} <a href={footerLink} className="text-[#E76F04] hover:underline">{footerLinkText}</a>
        </p>
      </div>
    </div>
  );
}
