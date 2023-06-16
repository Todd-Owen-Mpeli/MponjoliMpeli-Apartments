// Import
import {FC} from "react";
import {IApartmentsGrid} from "./types";

// Components
import ApartmentCard from "./Cards/ApartmentCard";

const ApartmentsGrid: FC<IApartmentsGrid> = ({apartmentsGrid}) => {
	return (
		<section className="px-4 py-10 overflow-hidden bg-green-dark">
			<div className="container grid items-center justify-center grid-cols-1 gap-4 px-0 mx-auto md:grid md:grid-cols-2 lg:grid xl:grid-cols-3 lg:gap-8">
				{apartmentsGrid?.map((keys) => (
					<ApartmentCard
						link={keys?.card?.link}
						title={keys?.card?.title}
						key={keys?.card?.id || keys?.card?.title}
						backgroundImage={keys?.card?.backgroundImage?.sourceUrl}
					/>
				))}
			</div>
		</section>
	);
};

export default ApartmentsGrid;
