import {FC} from "react";
import Link from "next/link";

interface IProps {
	title: string;
	link: {
		url: string;
		title: string;
		target: string;
	};
	backgroundImage: string;
}

const ApartmentCard: FC<IProps> = ({title, link, backgroundImage}) => {
	return (
		<Link href={link?.url} target={link?.target}>
			<div
				className="w-full h-full min-h-[450px] bg-center bg-no-repeat bg-cover p-8 "
				style={{
					backgroundImage: `url("${backgroundImage}")`,
				}}
			>
				<div className="relative mx-auto h-full w-full min-h-[450px] border-white border-[4px]">
					<div className="absolute inset-0"></div>
					<div className="absolute inset-0 flex items-center justify-center">
						<h2 className="text-xl font-[400] text-center text-white lg:text-2xl">
							{title}
						</h2>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ApartmentCard;
