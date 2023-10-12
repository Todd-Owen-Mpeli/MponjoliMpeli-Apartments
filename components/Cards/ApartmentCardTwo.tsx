// Imports
import {FC} from "react";
import Link from "next/link";
import {IApartmentCardTwo} from "@/types/components";

const ApartmentCardTwo: FC<IApartmentCardTwo> = ({
	title,
	link,
	backgroundImage,
}) => {
	return (
		<div>
			<Link href={`${link}`} target={``}>
				<div
					className="group w-full h-full min-h-[450px] bg-center bg-no-repeat bg-cover p-8 bg-goldPrimeDark"
					style={{
						backgroundImage: `linear-gradient(0deg,rgba(1, 42, 45, 0.45),rgba(1, 42, 45, 0.45)),url("${backgroundImage}")`,
					}}
				>
					<div className="relative mx-auto h-full w-full min-h-[450px] border-goldPrime border-[4px] border-opacity-50 transition-all ease-in-out duration-500 group-hover:border-goldPrimeDark">
						<div className="absolute inset-0" />
						<div className="absolute inset-0 flex items-center justify-center">
							<h2 className="text-xl font-semibold text-center text-white lg:text-2xl">
								{title}
							</h2>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default ApartmentCardTwo;
