import NavMobile from "./components/Nav-mobile";
import NavDesktop from "./components/Nav-desktop";

const Header = () => {
  return (
    <div className="  flex items-center justify-between py-4 pl-4 bg-[url('https://res.cloudinary.com/dl6flp50k/image/upload/v1679230930/portefolio/background-784377_960_720_svbl1v.jpg')]  bg-cover text-black ">
      <a href="/" className="ml-6  h-20 w-20">
        <img
          src="https://res.cloudinary.com/dl6flp50k/image/upload/v1679223040/portefolio/WhatsApp_Image_2023-03-19_at_11.50.00_fcfovs.jpg"
          alt=""
          className=" rounded-full"
        />
      </a>
      <nav>
        <NavMobile />
        <NavDesktop />
      </nav>
    </div>
  );
};

export default Header;
