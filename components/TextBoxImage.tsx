import {FC} from "react";
import Image from "next/image";
import Paragraph from "./Elements/Paragraph";

interface IProps {
	title: string;
	subtitle: string;
	paragraph: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

const TextBoxImage: FC<IProps> = ({title, image, subtitle, paragraph}) => {
	return (
		<section className="py-24 bg-white lg:px-8">
			<div className="container px-0 mx-auto">
				<div className="relative flex">
					<div className="w-full xl:w-4/5 xl:ml-auto">
						<Image
							alt={image?.altText}
							src={image?.sourceUrl}
							width={image?.mediaDetails?.width}
							height={image?.mediaDetails?.height}
							className="relative object-cover mx-auto mt-0 rounded-none sm:rounded-lg lg:mt-5 md:max-w-xl xl:max-w-4xl"
						/>
						<div className="top-0 left-0 max-w-3xl px-6 py-8 mx-auto text-center rounded-none sm:rounded-lg bg-darkGreen xl:absolute xl:mx-0 lg:px-12 lg:py-16 border-green">
							<span className="font-medium tracking-widest text-gold text-medium">
								{subtitle}
							</span>
							<h2 className="max-w-lg mx-auto my-8 text-5xl font-medium leading-tight text-white">
								{title}
							</h2>
							<Paragraph
								content={paragraph}
								tailwindStyling="max-w-2xl pt-8 mx-auto leading-loose text-left text-white text-medium"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TextBoxImage;
