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
		<section className="py-12 px-4 bg-[#07694e] bg-gradient-to-r from-green-Two">
			<div className="container px-0 mx-auto">
				<div className="flex flex-wrap items-center">
					<div className="w-full max-w-lg px-4 py-10 mx-auto mr-auto text-center lg:w-auto lg:ml-0 lg:text-left">
						<h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
							{title}
						</h2>
						<Paragraph
							content={paragraph}
							tailwindStyling="text-white text-base mt-8"
						/>
					</div>
					<div className="w-full lg:w-2/5">
						<div className="max-w-3xl px-6 py-10 mx-auto bg-white rounded-md lg:mr-0 sm:px-12">
							<h3 className="mb-4 text-2xl font-medium text-green-dark">
								{titleTwo}
							</h3>
							<Paragraph
								content={paragraphTwo}
								tailwindStyling="leading-7 mb-8"
							/>
							<form action="" className="flex flex-col">
								<div className="flex flex-col gap-4 sm:flex-row">
									<input
										className="block w-full p-4 mb-4 border rounded-sm outline-none text-darkGrey placeholder-darkGrey border-darkGrey"
										type="text"
										placeholder="Full Name"
									/>
									<input
										className="block w-full p-4 mb-4 border rounded-sm outline-none text-darkGrey placeholder-darkGrey border-darkGrey"
										type="email"
										placeholder="Email Address"
									/>
								</div>
								<button
									className="inline-block w-full px-6 py-4 text-base font-medium text-center text-white transition duration-200 bg-green-default hover:bg-green-Two"
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
