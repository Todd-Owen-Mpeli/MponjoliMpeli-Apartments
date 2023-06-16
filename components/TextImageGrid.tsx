import {FC} from "react";
import {ITextImageGrid} from "./types";

// Components
import TextBoxCard from "./Cards/TextBoxCard";

const TextImageGrid: FC<ITextImageGrid> = ({gridContent}) => {
	return (
		<section className="py-20 bg-white">
			<div className="container px-4 mx-auto">
				{gridContent?.map((keys) => (
					<TextBoxCard
						title={keys?.card?.title}
						image={keys?.card?.image}
						paragraph={keys?.card?.paragraph}
						imageLocation={keys?.card?.imageLocation}
						key={keys?.card?.id || keys?.card?.title}
					/>
				))}
			</div>
		</section>
	);
};

export default TextImageGrid;
