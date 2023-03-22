import {FC} from "react";
import Link from "next/link";
import Paragraph from "./Elements/Paragraph";

interface IProps {
	title: string;
	titleTwo: string;
	paragraph: string;
	paragraphTwo: string;
}

const Newsletter: FC<IProps> = ({title, titleTwo, paragraph, paragraphTwo}) => {
	return (
		<section className="py-12 bg-[#07694e] bg-gradient-to-r from-greenTwo">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap items-center">
					<div className="py-10 w-full lg:w-auto max-w-lg mx-auto lg:ml-0 mr-auto text-center lg:text-left">
						<h2 className="text-white text-3xl sm:text-4xl mt-2">{title}</h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="text-white text-medium mt-8"
						/>
					</div>
					<div className="w-full lg:w-2/5">
						<div className="max-w-3xl mx-auto lg:mr-0 py-10 px-6 sm:px-12 bg-white rounded-md">
							<h3 className="text-darkGreen font-medium text-2xl mb-4">
								{titleTwo}
							</h3>
							<Paragraph
								content={paragraphTwo}
								tailwindStyling="leading-7 mb-8"
							/>
							<form action="" className="flex flex-col">
								<div className="flex flex-col sm:flex-row gap-4">
									<input
										className="block w-full p-4 mb-4 text-darkGrey placeholder-darkGrey border border-darkGrey rounded-sm outline-none"
										type="text"
										placeholder="Full Name"
									/>
									<input
										className="block w-full p-4 mb-4 text-darkGrey placeholder-darkGrey border border-darkGrey rounded-sm outline-none"
										type="email"
										placeholder="Email Address"
									/>
								</div>
								<button
									className="inline-block w-full py-4 px-6 text-center font-medium text-white text-base bg-green hover:bg-greenTwo transition duration-200"
									type="submit"
								>
									Sign up
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Newsletter;
