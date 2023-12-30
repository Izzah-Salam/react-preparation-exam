import Auctions from "../components/Auctions";
import Footer from "../components/Footer";
import Discover from "../components/Discover";
import Hero from "../components/Hero";
import Header from "./Header";

const Home = () => {
	return (
		<div className="relative bg-gray w-full h-[225rem] overflow-hidden text-left text-[0.75rem] text-silver font-heading-text-h2-poppins-48-medium">
			<Auctions />
			<Footer />
			<Discover />
			<Hero />
			<Header />
		</div>
	);
};

export default Home;
