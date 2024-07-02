import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Play SaaS Starter Kit and Boilerplate for Next.js",
};

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageName="登录页面" />

      <Signin />
    </>
  );
};

export default SigninPage;
