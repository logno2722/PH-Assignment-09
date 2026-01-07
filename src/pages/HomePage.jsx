import Banner from '../Components/Banner/Banner';
import Newsletter from '../Components/Newsletter/Newsletter';
import Apps from '../Components/Popular Apps/Apps';


const HomePage = () => {
    return (
        <div className="bg-[#0b0f1a] min-h-screen">
            <Banner />
            <Apps />
            <Newsletter />
        </div>
    );
};

export default HomePage;