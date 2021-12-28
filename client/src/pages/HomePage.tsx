import { Stack } from "@mui/material";
import AboutUs from "../components/home/AboutUs";
import Contact from "../components/home/contact/Contact";
import Home from "../components/home/Home";

type THomePageProps = {};

const HomePage: React.FC<THomePageProps> = () => {
    return (
        <Stack>
            <Home />
            <AboutUs />
            <Contact />
        </Stack>
    );
};

export default HomePage