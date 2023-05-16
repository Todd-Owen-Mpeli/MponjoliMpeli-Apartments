import {FC} from "react";
import Image from "next/image";
import Paragraph from "./../Elements/Paragraph";

interface IProps {
	title: string;
	paragraph: string;
	imageLocation: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

const TextBoxCard: FC<IProps> = ({title, image, paragraph, imageLocation}) => {
	return (
		<div className="flex flex-col items-center justify-center mb-20 lg:flex-row">
			<div className="container relative px-0 mx-auto lg:px-4">
				<div
					className={
						imageLocation === "Left"
							? `flex flex-col-reverse items-center gap-6 lg:flex-row`
							: `flex flex-col items-center gap-6 lg:flex-row`
					}
				>
					<div
						className={
							imageLocation === "Left" ? `block w-full px-4 lg:w-1/2` : `hidden`
						}
					>
						<Image
							alt={image?.altText}
							src={image?.sourceUrl}
							width={image?.mediaDetails?.width}
							height={image?.mediaDetails?.height}
							className={
								image?.sourceUrl
									? `block object-cover object-center w-full rounded-lg h-80`
									: `hidden`
							}
						/>
					</div>
					<div className="flex flex-col w-full px-4 py-4 lg:w-1/2">
						<h3 className="my-4 text-xl font-bold text-center text-green-Two md:text-2xl">
							{title}
						</h3>
						<Paragraph
							content={paragraph}
							tailwindStyling="mt-4 text-center w-full max-w-xl mx-auto lg:text-left leading-loose lg:leading-normal text-base text-darkGrey"
						/>
					</div>
					<div
						className={
							imageLocation === "Right"
								? `block w-full px-4 lg:w-1/2`
								: `hidden`
						}
					>
						<Image
							alt={image?.altText}
							src={image?.sourceUrl}
							width={image?.mediaDetails?.width}
							height={image?.mediaDetails?.height}
							className={
								image?.sourceUrl
									? `block object-cover object-center w-full rounded-lg h-80`
									: `hidden`
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TextBoxCard;
