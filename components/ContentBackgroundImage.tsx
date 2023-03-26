import {FC} from "react";
import ContentImageCard from "./Cards/ContentImageCard";

interface IProps {
	gridContent: [
		{
			card: {
				id: string;
				title: string;
				paragraph: string;
				backgroundImage: {
					sourceUrl: string;
				};
			};
		}
	];
}

const ContentBackgroundImage: FC<IProps> = ({gridContent}) => {
	return (
		<section className="py-10 px-4 bg-darkGreen overflow-hidden">
			<div className="container mx-auto px-0 flex flex-col gap-4">
				{gridContent?.map((keys) => (
					<ContentImageCard
						key={keys?.card?.id}
						title={keys?.card?.title}
						paragraph={keys?.card?.paragraph}
						backgroundImage={keys?.card?.backgroundImage?.sourceUrl}
					/>
				))}
			</div>
		</section>
	);
};

export default ContentBackgroundImage;
