import { footerIconsList } from "../constants";

const Footer = () => {
  return (
    <div className="w-full flex-center flex-col md:gap-10 gap-7 bg-black-300 py-10">
      {/* <div>
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-7 h-7 object-cover object-center"
        />
      </div> */}
      <div className="flex items-center md:gap-16 gap-8">
        {footerIconsList.map((icon, index) => (
          <div
            key={index}
            className="cursor-pointer hover:-translate-y-2 transition-all duration-500"
          >
            <a href={icon.href}>
             <img
              src={icon.icon}
              alt={icon.name}
              // src={icon.href}
              className="md:size-10 size-8"
            />
            </a>
           
          </div>
        ))}
      </div>
      <p className="font-regular md:text-lg text-sm">
        2025 © All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
