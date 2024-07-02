import SignUp from "@/components/Auth/SignUp";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Play SaaS Starter Kit and Boilerplate for Next.js",
};

const SignupPage = () => {
  return (
    <>
      <Breadcrumb pageName="注册页面" />

      <SignUp />
    </>
  );
};

export default SignupPage;
