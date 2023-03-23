import Image from "next/image";
import {FunctionComponent} from "react";

interface IProps {
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}
const LogoCard: FunctionComponent<IProps> = ({image}) => {
	return (
		<div className="mx-auto">
			<Image
				alt={image?.altText}
				src={image?.sourceUrl}
				width={image?.mediaDetails?.width}
				height={image?.mediaDetails?.height}
				className="w-full h-[75px] sm:h-[125px] object-contain object center"
			/>
		</div>
	);
};

export default LogoCard;
