import {FC} from "react";
import ApartmentCard from "./Cards/ApartmentCard";

interface IProps {
	apartmentsGrid: [
		{
			id: string;
			card: {
				title: string;
				link: {
					url: string;
					title: string;
					target: string;
				};
				backgroundImage: {
					sourceUrl: string;
				};
			};
		}
	];
}
const ApartmentsGrid: FC<IProps> = ({apartmentsGrid}) => {
	return (
		<section className="py-10 px-4 bg-darkGreen overflow-hidden">
			<div className="container mx-auto px-0 grid grid-cols-1 md:grid md:grid-cols-2 lg:grid xl:grid-cols-3 items-center justify-center gap-4 lg:gap-8">
				{apartmentsGrid?.map((keys) => (
					<ApartmentCard
						key={keys?.id}
						title={keys?.card?.title}
						link={keys?.card?.link}
						backgroundImage={keys?.card?.backgroundImage?.sourceUrl}
					/>
				))}
			</div>
		</section>
	);
};

export default ApartmentsGrid;
