import {FC} from "react";
import {IContentBackgroundImage} from "./types";

// Components
import ContentImageCard from "./Cards/ContentImageCard";

const contentBackgroundImage: FC<IContentBackgroundImage> = ({gridContent}) => {
	return (
		<section className={`px-4 py-10 overflow-hidden bg-green-dark`}>
			<div className="container flex flex-col gap-4 px-0 mx-auto">
				{gridContent.length > 0 ? (
					gridContent?.map((item, keys) => (
						<ContentImageCard
							key={keys}
							title={item?.card?.title}
							paragraph={item?.card?.paragraph}
							contentLocation={item?.card?.contentLocation}
							backgroundImage={item?.card?.backgroundImage?.sourceUrl}
						/>
					))
				) : (
					<></>
				)}
			</div>
		</section>
	);
};

export default contentBackgroundImage;
