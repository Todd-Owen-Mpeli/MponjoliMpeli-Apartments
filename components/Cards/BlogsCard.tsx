// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import dateFormat from "dateformat";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {IBlogsCard} from "@/types/components";
import {fadeInUp, initial, stagger} from "../../animations/animations";

const BlogsCard: FC<IBlogsCard> = ({
	uri,
	date,
	title,
	paragraph,
	featuredImage,
}) => {
	/* Sanitize the WYSIWYG paragraph content */
	function createTrimmedParagraphMarkup(paragraphContent: string) {
		const sanitizedContent: string = DOMPurify.sanitize(paragraphContent);

		return {
			__html: `${sanitizedContent.substring(0, 150)}...`,
		};
	}

	return (
		<div className="w-full h-full">
			<div className="relative px-4 lg:px-0 h-[300px]">
				<Link href={uri ? `blogs${uri}` : `/`}>
					<Image
						alt={featuredImage?.node?.altText}
						src={featuredImage?.node?.sourceUrl}
						width={featuredImage?.node?.mediaDetails?.width}
						height={featuredImage?.node?.mediaDetails?.height}
						className={
							featuredImage?.node?.sourceUrl
								? `object-cover object-center w-full h-full`
								: `hidden`
						}
					/>
				</Link>
			</div>
			<motion.div
				initial={initial}
				whileInView={stagger}
				viewport={{once: true}}
				className="flex flex-col items-baseline justify-between px-4 py-10"
			>
				<Link href={uri ? `blogs${uri}` : `/`}>
					<motion.h2
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="mb-2 text-3xl font-bold text-black"
					>
						{title}
					</motion.h2>
				</Link>
				<motion.span
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="mt-2 font-semibold text-goldPrimeDark text-tiny"
				>
					{dateFormat(date, "dddd, mmmm d, yyyy")}
				</motion.span>
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
				>
					<div
						className={
							paragraph
								? `block my-3 text-base leading-normal text-darkGrey`
								: `hidden`
						}
						dangerouslySetInnerHTML={createTrimmedParagraphMarkup(paragraph)}
					/>
				</motion.div>
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
				>
					<Link
						href={uri ? `blogs${uri}` : `/`}
						className="text-sm font-bold uppercase transition duration-200 text-green-default hover:text-green-dark hover:underline"
					>
						<span>Read more</span>
						<span className="inline-block ml-2">
							<svg
								className="w-3 h-3 text-green-default"
								viewBox="0 0 8 12"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M1.875 0L0 1.875L4.125 6L0 10.125L1.875 12L7.875 6L1.875 0Z" />
							</svg>
						</span>
					</Link>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default BlogsCard;
