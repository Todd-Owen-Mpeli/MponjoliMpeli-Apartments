// Imports
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {initial, stagger} from "../animations/animations";

// Components
import BlogsCard from "./Cards/BlogsCard";

const Blogs: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<section className="px-4 py-24 bg-white">
			<div className="container px-4 mx-auto">
				<motion.div
					initial={initial}
					whileInView={stagger}
					viewport={{once: true}}
					className="grid gap-4 mb-16 -m-4 sm:gap-y-2 sm:gap-x-0 lg:gap-4 grid-col md:grid-cols-2 lg:grid-cols-3"
				>
					{globalContext.blogs ? (
						globalContext.blogs?.length > 0 ? (
							globalContext.blogs.map((item: any, keys: any) => (
								<Fragment key={keys}>
									<BlogsCard
										uri={item?.node?.uri}
										date={item?.node?.date}
										title={item?.node?.title}
										featuredImage={item?.node?.featuredImage}
										paragraph={
											item?.node?.template?.flexibleContent?.flexibleContent[1]
												?.paragraph
										}
									/>
								</Fragment>
							))
						) : (
							<h2 className="mx-auto text-3xl text-center text-black md:text-4xl">
								Sorry No posts
							</h2>
						)
					) : (
						<></>
					)}
				</motion.div>
				{/* <motion.div variants={fadeInUp} className="text-center">
					<button className="px-8 py-5 text-base font-bold leading-normal tracking-wider text-white uppercase bg-red hover:bg-darkRed">
						Load more articles
					</button>
				</motion.div> */}
			</div>
		</section>
	);
};

export default Blogs;
