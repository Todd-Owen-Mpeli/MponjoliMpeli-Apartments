import {FC} from "react";
import Image from "next/image";
import Paragraph from "./../Elements/Paragraph";

interface IProps {
	title: string;
	paragraph: string;
	cardPosition: boolean;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

const TextBoxCard: FC<IProps> = ({title, image, paragraph, cardPosition}) => {
	// console.log(cardPosition);

	const cardPositioningStyling: string =
		"w-full px-4 mb-8 lg:w-1/2 order-0 lg:order";

	return (
		<div className="flex flex-wrap mb-20">
			<div className="flex flex-col items-center justify-center order-1 w-full px-4 lg:w-1/2 lg:pr-20 lg:pt-4 lg:order-0">
				<h3 className="my-4 text-xl font-bold text-greenTwo md:text-2xl">
					{title}
				</h3>
				<Paragraph
					content={paragraph}
					tailwindStyling="mb-4 text-base leading-loose md:text-medium text-darkGrey"
				/>
			</div>
			<div
				className={
					cardPosition
						? `${cardPositioningStyling}-1`
						: `${cardPositioningStyling}-0`
				}
			>
				<Image
					alt={image?.altText}
					src={image?.sourceUrl}
					width={image?.mediaDetails?.width}
					height={image?.mediaDetails?.height}
					className="object-cover object-center w-full rounded-lg h-80"
				/>
			</div>
		</div>
	);
};

export default TextBoxCard;