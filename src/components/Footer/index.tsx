import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="wow fadeInUp relative z-10 pt-20 lg:pt-[100px]">
      <div className="container flex justify-center">
        <Link
          href="https://beian.miit.gov.cn"
          className="mx-auto mb-6 inline-block underline"
        >
          浙ICP备2023005735号-2
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
