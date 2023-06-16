import {FC} from "react";
import Image from "next/image";
import {IImageGrid} from "./types";

const ImageGrid: FC<IImageGrid> = ({
	image,
	imageTwo,
	imageThree,
	imageFour,
	imageFive,
	imageSix,
}) => {
	return (
		<section className="overflow-hidden bg-green-dark">
			<div className="flex flex-wrap">
				<div className="flex flex-wrap w-1/2">
					<div className="w-1/2 p-1 md:p-2">
						<Image
							alt={image?.altText}
							src={image?.sourceUrl}
							width={image?.mediaDetails?.width}
							height={image?.mediaDetails?.height}
							className="block object-cover object-center w-full h-full"
						/>
					</div>
					<div className="w-1/2 p-1 md:p-2">
						<Image
							alt={imageTwo?.altText}
							src={imageTwo?.sourceUrl}
							width={imageTwo?.mediaDetails?.width}
							height={imageTwo?.mediaDetails?.height}
							className="block object-cover object-center w-full h-full"
						/>
					</div>
					<div className="w-full p-1 md:p-2">
						<Image
							alt={imageThree?.altText}
							src={imageThree?.sourceUrl}
							width={imageThree?.mediaDetails?.width}
							height={imageThree?.mediaDetails?.height}
							className="block object-cover object-center w-full h-full"
						/>
					</div>
				</div>
				<div className="flex flex-wrap w-1/2">
					<div className="w-full p-1 md:p-2">
						<Image
							alt={imageFour?.altText}
							src={imageFour?.sourceUrl}
							width={imageFour?.mediaDetails?.width}
							height={imageFour?.mediaDetails?.height}
							className="block object-cover object-center w-full h-full"
						/>
					</div>
					<div className="w-1/2 p-1 md:p-2">
						<Image
							alt={imageFive?.altText}
							src={imageFive?.sourceUrl}
							width={imageFive?.mediaDetails?.width}
							height={imageFive?.mediaDetails?.height}
							className="block object-cover object-center w-full h-full"
						/>
					</div>
					<div className="w-1/2 p-1 md:p-2">
						<Image
							alt={imageSix?.altText}
							src={imageSix?.sourceUrl}
							width={imageSix?.mediaDetails?.width}
							height={imageSix?.mediaDetails?.height}
							className="block object-cover object-center w-full h-full"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ImageGrid;
