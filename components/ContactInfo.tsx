import {FC} from "react";
import Link from "next/link";
import Paragraph from "../components/Elements/Paragraph";

interface IProps {
	email: string;
	phoneNumber: string;
	phoneNumberTwo: string;
	contactAddress: string;
}

const ContactInfo: FC<IProps> = ({
	email,
	phoneNumber,
	contactAddress,
	phoneNumberTwo,
}) => {
	return (
		<section className="relative pt-24 pb-36 bg-darkGreen overflow-hidden">
			<div className="relative z-10 container px-4 mx-auto">
				<h2 className="mb-10 text-6xl md:text-8xl xl:text-10xl text-center font-bold text-white tracking-px-n leading-none">
					Get connected
				</h2>
				<Paragraph
					content={`<p>Our expert team is on hand to give help, advice and support. So what are you waiting for? Get in touch today!</p>`}
					tailwindStyling="mb-20 text-medium text-white text-center leading-normal md:max-w-lg mx-auto"
				/>
				<div className="flex flex-wrap -m-3">
					<div className="w-full md:w-1/3 p-3">
						<div className="p-11 h-full text-center border border-goldPrime rounded-xl shadow-11xl">
							<div className="mb-6 relative mx-auto w-16 h-16 border border-goldPrime rounded-full">
								<div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
									<svg
										width="32"
										height="33"
										viewBox="0 0 32 33"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4 11.1666L14.5208 18.1805C15.4165 18.7776 16.5835 18.7776 17.4792 18.1805L28 11.1666M6.66667 25.8333H25.3333C26.8061 25.8333 28 24.6394 28 23.1666V9.83329C28 8.36053 26.8061 7.16663 25.3333 7.16663H6.66667C5.19391 7.16663 4 8.36053 4 9.83329V23.1666C4 24.6394 5.19391 25.8333 6.66667 25.8333Z"
											stroke="#dfc695"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										></path>
									</svg>
								</div>
							</div>
							<h3 className="mb-4 text-xl font-bold text-goldPrime leading-snug">
								Send Email
							</h3>
							<Link
								href={`mailto:${email}`}
								className="font-medium text-white text-medium leading-relaxed text-white transition-all duration-500 ease-in-out hover:text-brightGreen"
							>
								{email}
							</Link>
						</div>
					</div>
					<div className="w-full md:w-1/3 p-3">
						<div className="p-11 h-full text-center border border-goldPrime rounded-xl shadow-11xl">
							<div className="mb-6 relative mx-auto w-16 h-16  border border-goldPrime rounded-full">
								<div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
									<svg
										width="32"
										height="33"
										viewBox="0 0 32 33"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4 7.16667C4 5.69391 5.19391 4.5 6.66667 4.5H11.039C11.6129 4.5 12.1224 4.86724 12.3039 5.4117L14.301 11.4029C14.5108 12.0324 14.2258 12.7204 13.6324 13.0172L10.6227 14.522C12.0923 17.7816 14.7184 20.4077 17.978 21.8773L19.4828 18.8676C19.7796 18.2742 20.4676 17.9892 21.0971 18.199L27.0883 20.1961C27.6328 20.3776 28 20.8871 28 21.461V25.8333C28 27.3061 26.8061 28.5 25.3333 28.5H24C12.9543 28.5 4 19.5457 4 8.5V7.16667Z"
											stroke="#dfc695"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										></path>
									</svg>
								</div>
							</div>
							<h3 className="mb-4 text-xl font-bold text-goldPrime leading-snug">
								Call Us
							</h3>
							<div className="flex flex-col items-center justify-center gap-2">
								<span className="flex text-white text-medium font-medium  text-center lg:text-left">
									Main Office:
									<Link
										href={`tel:${phoneNumber}`}
										className="ml-2 text-white text-medium leading-relaxed transition-all duration-500 ease-in-out hover:text-brightGreen"
									>
										{phoneNumber}
									</Link>
								</span>
								<span className="flex text-white text-medium font-medium text-center lg:text-left">
									Enquires:
									<Link
										href={`tel:${phoneNumberTwo}`}
										className="ml-2 text-white text-medium leading-relaxed transition-all duration-500 ease-in-out hover:text-brightGreen"
									>
										{phoneNumberTwo}
									</Link>
								</span>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/3 p-3">
						<div className="p-11 h-full text-center border border-goldPrime rounded-xl shadow-11xl">
							<div className="mb-6 relative mx-auto w-16 h-16 border border-goldPrime rounded-full">
								<div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
									<svg
										width="32"
										height="33"
										viewBox="0 0 32 33"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M23.5431 22.7091C22.1797 24.0725 19.192 27.0602 17.4133 28.8389C16.6323 29.62 15.3693 29.6203 14.5883 28.8392C12.8393 27.0903 9.91373 24.1647 8.45818 22.7091C4.29259 18.5435 4.29259 11.7898 8.45818 7.62419C12.6238 3.4586 19.3775 3.4586 23.5431 7.62419C27.7087 11.7898 27.7087 18.5435 23.5431 22.7091Z"
											stroke="#dfc695"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										></path>
										<path
											d="M20.0007 15.1667C20.0007 17.3758 18.2098 19.1667 16.0007 19.1667C13.7915 19.1667 12.0007 17.3758 12.0007 15.1667C12.0007 12.9575 13.7915 11.1667 16.0007 11.1667C18.2098 11.1667 20.0007 12.9575 20.0007 15.1667Z"
											stroke="#dfc695"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										></path>
									</svg>
								</div>
							</div>
							<h3 className="mb-4 text-xl font-bold leading-snug text-goldPrime">
								Address
							</h3>
							<Paragraph
								content={contactAddress}
								tailwindStyling="font-medium text-medium leading-relaxed text-white"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactInfo;
