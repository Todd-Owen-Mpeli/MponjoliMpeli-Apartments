// Import
import {FC, Fragment} from "react";
import {useGlobalContext} from "@/context/global";

// Components
import ApartmentCardTwo from "./Cards/ApartmentCardTwo";

const ApartmentsGrid: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className="px-4 py-10 overflow-hidden bg-white">
				<div className="container grid items-center justify-center grid-cols-1 gap-4 px-0 mx-auto md:grid md:grid-cols-2 lg:grid xl:grid-cols-3 lg:gap-8">
					{globalContext?.apartmentsContent?.map((items: any, keys: number) => (
						<Fragment key={keys}>
							<ApartmentCardTwo
								link={items?.node?.uri}
								title={items?.node?.title}
								backgroundImage={items?.node?.featuredImage?.node?.sourceUrl}
							/>
						</Fragment>
					))}
				</div>
			</div>
		</>
	);
};

export default ApartmentsGrid;
