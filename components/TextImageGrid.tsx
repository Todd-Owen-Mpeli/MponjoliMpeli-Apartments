import Image from "next/image";
import {FC} from "react";
import Paragraph from "./Elements/Paragraph";
import TextBoxCard from "./Cards/TextBoxCard";

interface IProps {
	gridContent: [
		{
			card: {
				id: string;
				title: string;
				paragraph: string;
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						height: number;
						width: number;
					};
				};
			};
		}
	];
}

const TextImageGrid: FC<IProps> = ({gridContent}) => {
	/* Displays Cards in Either Left Or Right */
	const cardPositioning: boolean = true;

	return (
		<section className="py-20 bg-white">
			<div className="container px-4 mx-auto">
				{gridContent?.map((keys) => (
					<TextBoxCard
						title={keys?.card?.title}
						image={keys?.card?.image}
						paragraph={keys?.card?.paragraph}
						key={keys?.card?.id || keys?.card?.title}
						cardPosition={cardPositioning ? true : false}
					/>
				))}
			</div>
		</section>
	);
};

export default TextImageGrid;
