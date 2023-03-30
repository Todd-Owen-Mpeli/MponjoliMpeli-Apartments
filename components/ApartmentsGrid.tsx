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
		<section className="px-4 py-10 overflow-hidden bg-darkGreen">
			<div className="container grid items-center justify-center grid-cols-1 gap-4 px-0 mx-auto md:grid md:grid-cols-2 lg:grid xl:grid-cols-3 lg:gap-8">
				{apartmentsGrid?.map((keys) => (
					<ApartmentCard
						link={keys?.card?.link}
						title={keys?.card?.title}
						key={keys?.id || Math.floor(Math.random() * 1001)}
						backgroundImage={keys?.card?.backgroundImage?.sourceUrl}
					/>
				))}
			</div>
		</section>
	);
};

export default ApartmentsGrid;
