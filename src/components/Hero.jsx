import image1 from "../assets/images/unsplashog44d93injk@2x.png";
import image2 from "../assets/images/group-1248@2x.png";

const Hero = () => {
	return (
		<div className="absolute top-[11.69rem] left-[5rem] w-[80.94rem] h-[42.81rem] text-left text-[1rem] text-white font-heading-text-h2-poppins-48-medium">
			<div className="absolute top-[2.31rem] left-[48.44rem] w-[31.5rem] h-[36.56rem]">
				<div className="absolute top-[0rem] left-[0rem] w-[31.5rem] h-[36.56rem]">
					<div className="absolute top-[0rem] left-[0rem] w-[31.5rem] h-[36.56rem]">
						<div className="absolute top-[0rem] left-[0rem] rounded-[35.02px] [background:linear-gradient(169.44deg,_rgba(58,_129,_191,_0.08),_rgba(65,_48,_90,_0.08))] [backdrop-filter:blur(1110px)] box-border w-[31.5rem] h-[36.56rem] border-[0.9px] border-solid border-fuchsia" />
					</div>
				</div>
			</div>
			<div className="absolute top-[0rem] left-[43.56rem] rounded-[50%] bg-fuchsia [filter:blur(200px)] w-[7.69rem] h-[7.69rem]" />
			<div className="absolute top-[35.13rem] left-[73.25rem] rounded-[50%] bg-deepskyblue [filter:blur(200px)] w-[7.69rem] h-[7.69rem]" />
			<div className="absolute top-[3.13rem] left-[0rem] text-[4.5rem] tracking-[-2px] leading-[5.13rem] font-semibold whitespace-pre-wrap inline-block w-[39.81rem]">
				Discover, collect, and charity in extraordinary NFT marketplace
			</div>
			<div className="absolute top-[25.13rem] left-[0rem] text-[1.5rem] tracking-[0.5px] leading-[2.25rem] text-gainsboro inline-block w-[39.81rem]">
				In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi
				venenatis
			</div>
			<button className="cursor-pointer [border:none] py-[0.75rem] px-[1.5rem] bg-[transparent] absolute top-[33.88rem] left-[0rem] rounded-2xl [background:linear-gradient(103.91deg,_#9b51e0_19.72%,_rgba(48,_129,_237,_0.8))] w-[13.63rem] flex flex-row items-center justify-center box-border">
				<div className="relative text-[1.5rem] tracking-[-1px] leading-[2.25rem] font-semibold font-heading-text-h2-poppins-48-medium text-white text-left">
					Explore
				</div>
			</button>
			<div className="absolute top-[33.88rem] left-[16.13rem] rounded-2xl box-border w-[13.63rem] flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] text-[1.5rem] text-lightgray border-[1px] border-solid border-lightgray">
				<div className="relative tracking-[-1px] leading-[2.25rem] font-semibold">Create</div>
			</div>
			<img
				className="absolute h-[3%] w-[1.85%] top-[67.05%] right-[5.64%] bottom-[29.95%] left-[92.51%] max-w-full overflow-hidden max-h-full object-cover"
				alt=""
				src="/heart24@2x.png"
			/>
			<div className="absolute top-[33.88rem] left-[54.38rem] leading-[1.5rem] font-semibold">
				Laura
			</div>
			<div className="absolute top-[33.88rem] left-[71.75rem] leading-[1.5rem] font-semibold">
				WE ARE HERE
			</div>
			<div className="absolute top-[35.63rem] left-[54.38rem] leading-[1.5rem] font-medium text-lightgray">
				0.21 Weth
			</div>
			<img
				className="absolute top-[33.75rem] left-[50.31rem] w-[3.31rem] h-[3.5rem] object-cover"
				alt=""
				src={image2}
			/>
			<div className="absolute top-[35.56rem] left-[76.88rem] leading-[1.5rem] font-medium text-gray-5">
				25
			</div>
			<div className="absolute top-[3.81rem] left-[50.19rem] w-[27.94rem] h-[28rem]">
				<img
					className="absolute top-[0rem] left-[0rem] rounded-xl w-[27.94rem] h-[28rem] object-cover"
					alt=""
					src={image1}
				/>
			</div>
		</div>
	);
};

export default Hero;
