import {FC} from "react";
import Image from "next/image";

interface IProps {
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	imageTwo: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	imageThree: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	imageFour: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	imageFive: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	imageSix: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}

const ImageGrid: FC<IProps> = ({
	image,
	imageTwo,
	imageThree,
	imageFour,
	imageFive,
	imageSix,
}) => {
	return (
		<section className="overflow-hidden py-2 bg-darkGreen">
			<div className="flex flex-wrap">
				<div className="flex w-1/2 flex-wrap">
					<div className="w-1/2 p-1 md:p-2">
						<Image
							alt={image?.altText}
							src={image?.sourceUrl}
							width={image?.mediaDetails?.width}
							height={image?.mediaDetails?.height}
							className="block h-full w-full object-cover object-center"
						/>
					</div>
					<div className="w-1/2 p-1 md:p-2">
						<Image
							alt={imageTwo?.altText}
							src={imageTwo?.sourceUrl}
							width={imageTwo?.mediaDetails?.width}
							height={imageTwo?.mediaDetails?.height}
							className="block h-full w-full object-cover object-center"
						/>
					</div>
					<div className="w-full p-1 md:p-2">
						<Image
							alt={imageThree?.altText}
							src={imageThree?.sourceUrl}
							width={imageThree?.mediaDetails?.width}
							height={imageThree?.mediaDetails?.height}
							className="block h-full w-full object-cover object-center"
						/>
					</div>
				</div>
				<div className="flex w-1/2 flex-wrap">
					<div className="w-full p-1 md:p-2">
						<Image
							alt={imageFour?.altText}
							src={imageFour?.sourceUrl}
							width={imageFour?.mediaDetails?.width}
							height={imageFour?.mediaDetails?.height}
							className="block h-full w-full object-cover object-center"
						/>
					</div>
					<div className="w-1/2 p-1 md:p-2">
						<Image
							alt={imageFive?.altText}
							src={imageFive?.sourceUrl}
							width={imageFive?.mediaDetails?.width}
							height={imageFive?.mediaDetails?.height}
							className="block h-full w-full object-cover object-center"
						/>
					</div>
					<div className="w-1/2 p-1 md:p-2">
						<Image
							alt={imageSix?.altText}
							src={imageSix?.sourceUrl}
							width={imageSix?.mediaDetails?.width}
							height={imageSix?.mediaDetails?.height}
							className="block h-full w-full object-cover object-center"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ImageGrid;
