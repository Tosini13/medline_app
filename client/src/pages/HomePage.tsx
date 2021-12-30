import AboutUs from "../components/home/AboutUs";
import Contact from "../components/home/contact/Contact";
import Home from "../components/home/Home";
import HowItWorks from "../components/home/HowItWorks";



type THomePageProps = {};

const HomePage: React.FC<THomePageProps> = () => {
    return (
        <>
            <Home />
            <AboutUs />
            <HowItWorks />
            <Contact />
        </>
    );
};

export default HomePage