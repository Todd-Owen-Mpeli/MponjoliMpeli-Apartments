// Import
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "../animations/animations";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {ITitleStats} from "@/types/components";

// Components
import Paragraph from "./Elements/Paragraph";

const TitleStats: FC<ITitleStats> = ({
	title,
	image,
	contentGrid,
	backgroundColorOptions,
}) => {
	let backgroundColor: string;
	let SVGColor: string;

	switch (backgroundColorOptions) {
		case "Green":
			backgroundColor = "#010f10";
			SVGColor = "#e8b042";
			break;
		case "Gold":
			backgroundColor = "#d1a855";
			SVGColor = "#ffffff";
			break;
		default:
			backgroundColor = "#010f10";
			SVGColor = "#e8b042";
			break;
	}

	return (
		<>
			<div
				className="py-16 px-4 overflow-hidden relative"
				style={{
					backgroundColor: backgroundColor,
				}}
			>
				<div className="container px-0 mx-auto relative z-50">
					<motion.h2
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="flex items-center flex-col lg:flex-row justify-center lg:justify-start text-white text-4xl lg:text-6xl mb-4 tracking-tighter"
					>
						<span className={title ? "block" : "hidden"}>{title}</span>
						<Image
							decoding="async"
							alt={image?.altText}
							src={image?.sourceUrl}
							width={image?.mediaDetails?.width}
							height={image?.mediaDetails?.height}
							className={
								image?.sourceUrl
									? "my-2 mx-6 w-[120px] h-[40px] lg:h-[50px] object-cover object-center rounded-full"
									: "hidden"
							}
						/>
					</motion.h2>
					<motion.div
						initial={initial}
						whileInView={stagger}
						viewport={{once: true}}
						className="flex flex-wrap -mx-10 py-10"
					>
						{contentGrid?.length > 0 ? (
							contentGrid?.map((item: any, keys: number) => (
								<Fragment key={keys}>
									<div className="w-full md:w-1/2 lg:w-1/4 p-10 gap-4 items-center lg:items-start  justify-between flex flex-col">
										<motion.h3
											initial={initial}
											whileInView={fadeInUp}
											viewport={{once: true}}
											className="text-4xl lg:text-5xl text-white tracking-tighter"
										>
											{item?.card?.title}
										</motion.h3>
										<Paragraph
											content={item?.card?.paragraph}
											tailwindStyling="lg:max-w-2xl mx-autod text-white text-center lg:text-left text-base tracking-tight"
										/>
									</div>
								</Fragment>
							))
						) : (
							<></>
						)}
					</motion.div>
				</div>
				<motion.div
					initial={initialTwo}
					whileInView={fadeIn}
					viewport={{once: true}}
					className="absolute top-[50px] left-0"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="210.208"
						height="406.14"
						viewBox="0 0 210.208 406.14"
						className="w-full h-[600px] rotate-[5deg] object-contain object-center opacity-25 lg:opacity-35 2xl:opacity-50"
					>
						<path
							fill={`${SVGColor}`}
							id="Intersection_15"
							data-name="Intersection 15"
							stroke="rgba(0,0,0,0)"
							strokeMiterlimit="10"
							strokeWidth="1"
							transform="translate(8296.741 -20.442)"
							d="M-8275.71,419.534a168.97,168.97,0,0,1-19.473-4.036v-2.674a161.61,161.61,0,0,0,19.891,4.182c20.369,3.368,41.433,6.854,61.867,6.485,20.764-.389,38.149-4.911,51.692-13.441.665-.42,1.332-.856,1.992-1.3-35.2-7.173-70.116-14.26-103.825-21.078a250.346,250.346,0,0,0-31.616-4.757v-2.569a251.434,251.434,0,0,1,32.125,4.814c34.641,7,70.545,14.29,106.727,21.666l2.818.573-2.311,1.714c-1.476,1.091-3,2.138-4.544,3.109-10.64,6.7-23.549,11-38.5,12.838a140.191,140.191,0,0,1-14.509,1c-1.017.018-2.037.027-3.056.027C-8236.134,426.083-8256.236,422.759-8275.71,419.534Zm38.672-51.191c-14.169-2.212-27.5-8.315-40.4-14.213-5.8-2.656-11.732-5.37-17.742-7.725v-2.753c6.392,2.463,12.671,5.335,18.813,8.144,12.737,5.828,25.91,11.857,39.725,14.012,12.075,1.852,24.085.556,35.251-1.127,20.512-3.075,46.8-8.542,68.233-23.645h0q1.449-1.019,2.89-2.119a301.91,301.91,0,0,1-55.688-2.576c-6.572-.909-13.228-2.028-19.664-3.113-12.791-2.151-26.016-4.374-39.048-5.022a132.559,132.559,0,0,0-22.66.713,86.034,86.034,0,0,0-27.854,7.935V334c16.791-7.993,36.158-9.094,50.641-8.361,13.182.654,26.482,2.892,39.345,5.056,6.417,1.081,13.057,2.2,19.59,3.1a298.259,298.259,0,0,0,59.2,2.331l3.926-.248-3.025,2.514c-2.02,1.68-4.1,3.272-6.181,4.735-21.87,15.413-48.539,20.968-69.328,24.087-2.306.344-4.646.675-7.016.966a132.258,132.258,0,0,1-16.11,1.093A84.96,84.96,0,0,1-8237.038,368.344Zm-58.145-51.938c4.306-18.364,4.254-38.622,0-59.3v-11.03c6.448,23.729,7.538,47.249,3.049,68.448q6.561-10.549,12.984-21.42l-.824.023,1.1-.486q1.755-2.975,3.5-5.969,8.08-13.893,16-28.448l-1.705.769,2.5-2.229q5.644-10.412,11.16-21.072a21.425,21.425,0,0,0-3.535-5.047,57.828,57.828,0,0,0-8.771-7.175c-1.7-1.212-3.45-2.467-5.1-3.8a52.23,52.23,0,0,1-19.371-43.3c.353-6.51,1.916-13.035,3.428-19.343l.065-.274q2.895-12.074,5.757-24.261v0q1.085-4.612,2.167-9.258l2.139-9.2.393,9.434c.573,13.823,6.646,25.792,13.075,38.462,3.75,7.393,7.629,15.035,10.354,23.131a93.35,93.35,0,0,1,3.911,41.84q.5-.991,1-1.981c6.267-12.4,12.464-25.185,18.535-38.22a76.108,76.108,0,0,1-21.293-49.76c-.613-15.052,3.066-30.52,6.625-45.481l.172-.728c1.615-6.78,3.287-13.793,6.143-20.426a58.009,58.009,0,0,1,2.7-5.48l3.529-6.283-1.145,7.117c-.985,6.107.38,12.1,1.7,17.9l.43,1.9c6.457,28.968,6.472,60.143,6.06,90.57q3.94-8.65,7.795-17.413v0c.047-.108.1-.21.15-.308.947-40.256,12.016-83.009,32.056-123.755l4.907-9.98-2.686,11.581c-2.884,12.029-4.125,24.486-5.33,36.532-1.809,18.12-3.684,36.854-11.224,53.921-1.777,4-3.893,7.945-5.935,11.755-3.381,6.3-6.6,12.311-8.462,18.6a2.972,2.972,0,0,1,.3.113c.036.015.072.032.108.049,1.112-2.69,2.393-5.7,3.121-7.124l0,0c8.773-17.076,23.089-31.123,36.933-44.706,4.039-3.964,8.217-8.06,12.179-12.16,13.689-14.158,27.376-28.854,40.685-43.685l5.571-6.2-3.45,7.6c-3.977,8.759-8.194,17.367-12.536,25.586-14.29,27.089-28.174,46.379-43.691,60.71a133.21,133.21,0,0,1-37.727,24.654q-1.733,3.933-3.472,7.839-4.676,10.491-9.5,20.851l0,.276a160.229,160.229,0,0,1,34.472-29.862c8.872-5.682,18.358-10.449,27.535-15.056l2.24-1.127c15.587-7.856,31.2-16.025,46.4-24.28l3.661-1.99-2.455,4.777a142.652,142.652,0,0,1-9.57,16.8c-13.731,19.866-34.886,30.438-53.771,38.16-3.862,1.573-7.822,3.123-11.653,4.618-14.647,5.72-29.778,11.629-42.917,20.52q-7.812,16.329-15.876,32.077-2.522,4.924-5.083,9.81l.407-.369c17.18-15.528,34.943-31.584,55.228-43.948,29.69-18.12,63.508-27.161,96.214-35.907l6.115-1.637-2.011,2.881q-1.815,2.608-3.684,5.175c-26.3,36.2-56.039,59.092-88.381,68.037-9.57,2.646-19.6,4.2-29.3,5.707-13.307,2.064-27.033,4.194-39.408,9.181-6.236,11.663-12.6,23.112-19.038,34.241,53.325-22.781,108.455-31.472,159.729-25.136l2.476.306-1.69,1.835c-1.836,2-3.771,3.951-5.741,5.809a114.8,114.8,0,0,1-64.808,30.206,116.95,116.95,0,0,1-21.851.628c-10.5-.69-21.114-2.656-31.374-4.559-12.937-2.4-26.3-4.873-39.283-4.714q-1.153,1.971-2.309,3.928c-6.763,11.464-13.712,22.754-20.778,33.765Zm19.061-23.385q-8.854,15.039-18.006,29.5-.464,1.608-.972,3.2,9.417-14.807,18.487-30.179.751-1.274,1.5-2.552Zm97.887-26.871a333.686,333.686,0,0,0-89.143,24.259c11.7.382,23.53,2.573,35.032,4.705,10.186,1.888,20.722,3.839,31.075,4.521a113.033,113.033,0,0,0,84.73-30.143c1.316-1.24,2.616-2.525,3.879-3.837a268.414,268.414,0,0,0-30.279-1.694A289.667,289.667,0,0,0-8178.235,266.151Zm-77.285-9.665q-8.7,16.094-17.643,31.476-.844,1.452-1.69,2.9l.82-.363.516-.227c6.491-11.145,12.916-22.624,19.214-34.332Zm2.544-4.735q.876-.784,1.752-1.571,2.793-5.265,5.552-10.58l-.411-.928Q-8249.5,245.254-8252.976,251.75Zm64.255-48.694c-20.078,12.239-37.752,28.215-54.843,43.664l-4.217,3.809c11.623-4.115,24.125-6.054,36.279-7.941,9.634-1.493,19.59-3.036,29.015-5.644,31.769-8.788,61.037-31.357,86.99-67.073v0q.815-1.118,1.618-2.244C-8126.19,176.265-8159.554,185.259-8188.72,203.057Zm-41.553,4.109q-4.646,9.577-9.355,18.9-2.43,4.812-4.894,9.589c-.045.187-.087.374-.132.558l-.64,2.654q1.2-2.328,2.4-4.665,7.022-13.708,13.882-27.926Zm-42.187-74.1q-2.87,12.192-5.761,24.269l-.066.274c-1.483,6.2-3.017,12.61-3.36,18.887a49.664,49.664,0,0,0,18.419,41.169c1.595,1.289,3.319,2.52,4.988,3.714a59.81,59.81,0,0,1,9.151,7.506,24.724,24.724,0,0,1,2.671,3.408,91.021,91.021,0,0,0-2.843-46.424c-2.667-7.92-6.5-15.479-10.211-22.789-5.162-10.173-10.469-20.63-12.518-32.03C-8272.147,131.726-8272.307,132.4-8272.461,133.07Zm44.243,69.838.318-.448q1.033-1.449,2.1-2.879,2.476-5.2,4.916-10.445c-.189-.176-.376-.352-.562-.531Q-8224.807,195.81-8228.218,202.908Zm74.94-55.92-2.242,1.125c-9.115,4.582-18.543,9.317-27.3,14.927a157.775,157.775,0,0,0-38.67,35.132c12.2-7.417,25.66-12.676,38.742-17.785,3.822-1.493,7.773-3.034,11.619-4.6,18.532-7.578,39.279-17.929,52.628-37.243a124.277,124.277,0,0,0,8.073-13.908C-8124.507,132.233-8138.9,139.744-8153.278,146.988Zm-65.671,44.069c.021-.023.04-.047.062-.07l-.021-.019C-8218.922,191-8218.935,191.028-8218.949,191.058Zm-16.435-99.74-.177.726c-3.516,14.793-7.155,30.085-6.553,44.783a73.54,73.54,0,0,0,19.888,47.371l1.108-2.4c.467-32.107.888-65.266-5.914-95.791l-.429-1.888a71.273,71.273,0,0,1-2.062-12.483C-8232.205,77.974-8233.821,84.754-8235.384,91.317Zm16.825,91.058c0,.087,0,.172,0,.259l-.021,1.537q3.573-7.759,7.072-15.6,1.456-3.274,2.911-6.574l-.724-.1Q-8213.883,172.216-8218.559,182.375Zm9.978-22.161.188-.079-.146-.017C-8208.552,160.151-8208.566,160.183-8208.581,160.214Zm.611-.259.023-.008c.055-.14.112-.28.174-.427a.436.436,0,0,0-.085-.068C-8207.9,159.62-8207.934,159.788-8207.97,159.955Zm3.4-1.482a130.922,130.922,0,0,0,34.858-23.233c15.3-14.126,29.015-33.2,43.165-60.026,3.036-5.748,6.011-11.689,8.886-17.74-11.521,12.7-23.282,25.267-35.047,37.432-3.981,4.121-8.172,8.234-12.224,12.207-13.7,13.441-27.864,27.34-36.449,44.048l0,0C-8201.97,152.309-8203.1,154.91-8204.572,158.473Zm-3.079-7.85A148.4,148.4,0,0,1-8201,137.138c2.02-3.771,4.111-7.665,5.848-11.581,7.375-16.691,9.146-34.4,11.018-53.138.888-8.886,1.8-17.993,3.37-27.026C-8196.544,80.221-8205.749,116.23-8207.651,150.623Z"
						/>
					</svg>
				</motion.div>
				<motion.div
					initial={initialTwo}
					whileInView={fadeIn}
					viewport={{once: true}}
					className="absolute top-[550px] lg:top-[50px] right-0"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="260.567"
						height="581.591"
						viewBox="0 0 260.567 581.591"
						className="w-full h-[600px] rotate-[5deg] object-contain object-center opacity-25 lg:opacity-35 2xl:opacity-50"
					>
						<g id="Group_4897" data-name="Group 4897" opacity="1">
							<g id="Group_4896" data-name="Group 4896">
								<path
									id="Path_22469"
									data-name="Path 22469"
									d="M5910.721,7365.617a1.652,1.652,0,0,0,.345-.035c1.845-.36,2.347-2.566,2.51-3.291,13.169-57.6,26.2-125.767,23.029-194.59-1.372-29.76-5.771-59.479-11.065-88.74a1.313,1.313,0,0,0-.027-.132c-2.536-14.01-5.277-27.916-7.988-41.669q-1.424-7.227-2.838-14.449c-.5-2.552-1.014-5.186-1.52-7.885a32.528,32.528,0,0,0,1.192-8.627c11.86-3.748,15.642-19.343,17.46-30.866l6.088-38.622c1.322-8.383,3.294-17.664,10.013-21.683a25.892,25.892,0,0,1,6.022-2.34,25.141,25.141,0,0,0,7.181-2.986c4.3-2.925,6.727-6.3,7.2-10.037.932-7.291-5.642-14.786-11.439-21.4-3.761-4.288-7.311-8.338-8.446-11.767-1.833-5.543-4.324-9.679-7.617-12.639a16.121,16.121,0,0,0-11.745-3.852c-.63-10.485-6.4-23.245-17.666-26.677a37.841,37.841,0,0,0-7.02-1.216,37.62,37.62,0,0,1-6.332-1.049c-8.277-2.373-13.652-9.784-19.343-17.631-5.491-7.57-11.167-15.4-19.751-18.324-10.524-3.583-23.245,1.988-29.613,12.95-5.277,9.083-6.391,21.106-3.11,33.183a16.449,16.449,0,0,0-10.208,4.866,23.062,23.062,0,0,0-5.14,7.724,14.5,14.5,0,0,0-11.741,2.7,27.7,27.7,0,0,0-5.816,7.007,38.1,38.1,0,0,1-3.681,4.976c-6.453,6.94-16.771,7.255-26.748,7.56-10.988.337-22.347.684-28.818,9.81-4.045,5.707-4.6,13.07-5.133,20.189-.576,7.7-1.121,14.971-5.767,20.039-.768.837-1.648,1.642-2.58,2.492-3.216,2.942-6.86,6.275-5.344,11.271a8.739,8.739,0,0,0,1.561,2.884,30.548,30.548,0,0,0,19.288,11l-.766.357c-7.182,3.361-15.323,7.167-20.715,14.215-4.6,6.016-7.007,14.367-6.776,23.516.224,8.776,4.043,18.56,12.077,20.639,3.951,1.022,7.863-.082,11.646-1.146,3.2-.9,6.239-1.758,9.261-1.414,7.356.832,11.618,7.842,16.129,15.263l.3.483a10.62,10.62,0,0,0,12.575,4.871,11.437,11.437,0,0,0,7.857-12.008l-.192-2.532c-.225-2.885-.455-5.869-.487-8.712-.088-7.717,3.295-16.068,8.044-19.854.043-.036.086-.069.129-.1.323,1.13.7,2.248,1.072,3.354a37.424,37.424,0,0,1,1.734,6.34c.818,5.536-1.11,11.136-2.974,16.551-.515,1.5-1.031,2.993-1.49,4.486-1.4,4.524-3.9,15.722,2.909,21.959a24.832,24.832,0,0,0,5.692,3.561c3.045,1.545,5.919,3,6.826,5.968.845,2.767-.425,5.59-1.771,8.579-1.137,2.525-2.312,5.135-2.344,7.962a10.206,10.206,0,0,0,4.21,8.26,15,15,0,0,0,12.67,2.578c5.48-1.48,9.916-5.265,14.208-8.925,1.206-1.03,2.412-2.06,3.636-3.032,3.928-3.123,11.51-7.924,18.17-4.984a24.175,24.175,0,0,1,4.846,3.214c2.53,1.978,5.143,4.022,8.458,4.236,5.666.371,9.131-4.329,12.519-8.866a33.6,33.6,0,0,1,6.106-6.836c2.626-1.972,5.793-2.8,9.145-3.686,1.567-.412,3.192-.839,4.755-1.394a29.506,29.506,0,0,0,10.709-6.756,71.353,71.353,0,0,1,3.337,7.289,58.609,58.609,0,0,0,4.451,9.213c4.659,7.19,7.76,19.242,10.251,28.928.358,1.389.7,2.722,1.031,3.97,5.283,29.2,9.676,58.852,11.043,88.5,3.16,68.557-9.843,136.538-22.977,194-.03.137-.062.259-.1.374a1.1,1.1,0,0,0-.809-.529,1.543,1.543,0,0,0-1.543.723,2.3,2.3,0,0,0,.206,2.4A1.877,1.877,0,0,0,5910.721,7365.617Zm-67.422-318.75c-6.006,0-11.765,3.731-15.1,6.379-1.244.99-2.467,2.034-3.694,3.082-4.1,3.5-8.349,7.122-13.35,8.474a12.9,12.9,0,0,1-10.742-2.193,8.009,8.009,0,0,1-3.354-6.487c.026-2.368,1.106-4.764,2.148-7.081,1.456-3.231,2.959-6.572,1.873-10.134-1.182-3.865-4.618-5.605-7.941-7.29a23.22,23.22,0,0,1-5.2-3.222c-6.049-5.536-3.285-16.462-2.293-19.678.454-1.47.96-2.941,1.469-4.417,1.95-5.667,3.968-11.524,3.073-17.592a39.354,39.354,0,0,0-1.829-6.724c-.442-1.316-.876-2.6-1.212-3.879a8.825,8.825,0,0,1,6.11-.666c5.541,1.33,9.032,7.318,12.41,13.11,3.942,6.764,7.988,13.819,15.532,13.248,5.375-.364,8.916-4.636,12.343-8.766,2.255-2.72,4.589-5.531,7.4-7.168,9.23-5.381,20.445,2.54,28.084,8.959,6.533,5.492,14.146,8.07,21.509,10.563l.987.336a3.915,3.915,0,0,1,2.536,4.6,3.725,3.725,0,0,1-3.8,3.208c-7.138-.277-11.82-1.979-15.178-5.516a1.1,1.1,0,0,0-.761-.345,6.047,6.047,0,0,0-5.417,3.319,9.431,9.431,0,0,0-.042,9.351c2.444,3.893,7.455,5.944,13.488,5.45a54.329,54.329,0,0,0,6.229-.983,40.932,40.932,0,0,1,7.523-1.019h.083c2.946,0,5.094,1.637,6.862,4.137a27.1,27.1,0,0,1-10.211,6.647c-1.478.524-3.054.94-4.581,1.341-3.41.9-6.933,1.823-9.905,4.054a35.114,35.114,0,0,0-6.55,7.283c-3.172,4.252-6.112,8.278-10.608,7.982-2.636-.17-4.873-1.918-7.24-3.769a25.8,25.8,0,0,0-5.314-3.494A13.067,13.067,0,0,0,5843.3,7046.867Zm68.414-27.879q.405,2.1.8,4.145,1.414,7.227,2.841,14.454,1.792,9.078,3.576,18.238a53.6,53.6,0,0,0-5-10.618,57.121,57.121,0,0,1-4.266-8.861,66.072,66.072,0,0,0-3.792-8.1A33.85,33.85,0,0,0,5911.712,7018.987Zm-.83-4.361a32.409,32.409,0,0,1-6.312,11.64c-2.1-2.826-4.783-4.7-8.487-4.682a43.218,43.218,0,0,0-7.93,1.061,53.052,53.052,0,0,1-5.976.948c-5.161.4-9.442-1.242-11.441-4.423a7.242,7.242,0,0,1,.088-7.076,4.082,4.082,0,0,1,3.006-2.2c4.818,4.8,11.247,5.651,16.348,5.851a5.879,5.879,0,0,0,6.054-5.014,6.135,6.135,0,0,0-4-7.1l-.993-.336c-7.167-2.427-14.579-4.937-20.8-10.162-8.147-6.848-20.184-15.254-30.616-9.177-3.144,1.834-5.6,4.8-7.984,7.666-3.273,3.945-6.364,7.672-10.794,7.974-6.1.434-9.7-5.691-13.474-12.158-3.611-6.192-7.342-12.594-13.8-14.145a11.041,11.041,0,0,0-7.1.6,11.973,11.973,0,0,1,.022-4.126c1.5-7.829,10.975-10.269,19.059-11.521a41.688,41.688,0,0,0,5.3-1.184,8.351,8.351,0,0,0,3.088-1.058c5.328-2.114,10.876-5.973,10.909-12.883.018-3.659-1.708-6.833-3.377-9.9-1.548-2.85-3.013-5.542-3.125-8.52a9.566,9.566,0,0,1,3.518-7.647,16.373,16.373,0,0,1,12.91-3.545c4.721.824,8.978,3.06,13.486,5.427a79.112,79.112,0,0,0,8.784,4.161c8.369,3.151,18.989,2.159,23.1-5.838a25.038,25.038,0,0,0,2-6.668,25.815,25.815,0,0,1,1.542-5.576,11.561,11.561,0,0,1,8.413-6.482,15.645,15.645,0,0,1,13.413,3.321c8.487,7.442,8.428,20.286,8.01,25.461a113.361,113.361,0,0,1-3.267,17.392c-.852,3.519-1.735,7.156-2.393,10.791C5904.442,6975.532,5907.5,6996.553,5910.882,7014.626Zm-126.245-39.607q-.478.322-.945.693c-5.32,4.245-8.971,13.13-8.875,21.607.035,2.917.268,5.935.494,8.857l.189,2.522a9.142,9.142,0,0,1-6.323,9.743,8.472,8.472,0,0,1-10.02-3.914l-.293-.482c-4.589-7.549-9.336-15.356-17.767-16.312-3.461-.386-6.841.562-10.11,1.484-3.663,1.031-7.119,2.008-10.494,1.134-6.919-1.791-10.219-10.611-10.421-18.558-.218-8.646,2.028-16.5,6.323-22.117,5.062-6.617,12.942-10.3,19.9-13.555q2.117-.99,4.294-2a29.091,29.091,0,0,0,15.189-4c1.154-.68,2.3-1.448,3.442-2.22,1-.671,1.986-1.333,2.968-1.934a58.925,58.925,0,0,1,10.687-1.73,27.336,27.336,0,0,1,5.357,3.278l19.932,14.412a33.661,33.661,0,0,0,6.958,4.182c-8.733,1.379-18.841,4.163-20.583,13.238A14.832,14.832,0,0,0,5784.637,6975.019Zm145.621-122.853a13.77,13.77,0,0,1,9.093,3.332c3,2.7,5.288,6.521,7,11.691,1.274,3.854,4.969,8.069,8.881,12.53,5.491,6.263,11.715,13.362,10.909,19.666-.4,3.123-2.444,5.9-6.254,8.49a23.12,23.12,0,0,1-6.569,2.7,28.016,28.016,0,0,0-6.526,2.561c-7.538,4.51-9.661,14.358-11.062,23.237l-6.088,38.622c-1.762,11.176-5.407,26.374-16.671,29.313a1.1,1.1,0,0,0-.826,1.1,28.047,28.047,0,0,1-.1,3.224c-2.886-16.547-4.989-35.09-1.8-52.734.646-3.57,1.518-7.177,2.364-10.663a114.95,114.95,0,0,0,3.321-17.734c.6-7.336-.451-14-2.936-19.353a1.1,1.1,0,0,0,.718-.691l8.527-24.345c3.3-9.427,7.02-20.037,6.919-30.893C5929.523,6852.181,5929.889,6852.167,5930.258,6852.167Zm-119.6,102.721c-.058.006-.119.012-.177.015-3.777.232-7.227-2.014-11.023-4.759l-19.932-14.412c-.7-.5-1.441-1.042-2.228-1.563,11.253.327,21.97,4.485,33.754,9.47,2.126.9,4.108,1.855,4.969,3.629a4.5,4.5,0,0,1-.349,4.231,7.225,7.225,0,0,1-2.568,2.559C5812.271,6954.377,5811.447,6954.652,5810.653,6954.888Zm21.825-43.8a18.415,18.415,0,0,0-11.861,4.3,11.644,11.644,0,0,0-4.273,9.4c.134,3.5,1.791,6.543,3.393,9.491s3.125,5.748,3.11,8.839c-.017,3.682-2.015,6.356-4.695,8.292a6.393,6.393,0,0,0-.147-5.1c-1.2-2.462-3.668-3.673-6.1-4.7-12.5-5.289-23.84-9.666-36.029-9.666-.889,0-1.777.025-2.659.072a11.479,11.479,0,0,0-2.879-.684c-3.295-.321-6.216.922-9,2.582a127.5,127.5,0,0,0-21.24,8.007,28.543,28.543,0,0,1-21.539-10.533,6.571,6.571,0,0,1-1.173-2.152c-1.112-3.662,1.721-6.253,4.722-9,.925-.846,1.882-1.722,2.715-2.629,5.163-5.631,5.765-13.631,6.345-21.366.511-6.819,1.04-13.872,4.732-19.079,5.834-8.228,16.154-8.544,27.082-8.877,10.43-.318,21.215-.648,28.3-8.265a39.614,39.614,0,0,0,3.908-5.264,25.755,25.755,0,0,1,5.322-6.475,12.314,12.314,0,0,1,9.638-2.347,22.518,22.518,0,0,0-1.02,6.752c.069,9.473,5.293,19.165,14.327,26.591,1.091.9,2.224,1.759,3.355,2.621,3.477,2.643,6.757,5.138,8.978,8.68a43.4,43.4,0,0,1,3.8,9c1.966,5.807,4,11.813,9.578,14.124a1.1,1.1,0,0,0,1.527-1.027,89.141,89.141,0,0,0-21.6-57.464c-4.374-4.979-10.167-9.206-16.012-10.875a20.775,20.775,0,0,1,4.5-6.644,13.828,13.828,0,0,1,10.085-4.27,1.091,1.091,0,0,0,.912-.428,1.1,1.1,0,0,0,.182-.991c-3.58-11.956-2.666-23.923,2.51-32.832,5.851-10.072,17.454-15.215,26.992-11.968,7.918,2.7,13.385,10.239,18.674,17.531,5.662,7.8,11.512,15.875,20.523,18.457a39.636,39.636,0,0,0,6.7,1.123,35.675,35.675,0,0,1,6.615,1.135c10.315,3.143,15.584,15.1,16.114,24.876-.353.078-.7.168-1.052.271a10.962,10.962,0,0,0-7.882,7.748,22.064,22.064,0,0,0-.554,3.64,20.235,20.235,0,0,1-.485,3.262c-2,7.547-11.754,9.077-14.7,9.366-1.387.136-2.8.22-4.211.3-5.282.315-10.746.64-15.33,3.688a13.761,13.761,0,0,0-5.539,11.785,7.888,7.888,0,0,0,4.272,6.957,9.25,9.25,0,0,0,6.509.433,13.139,13.139,0,0,0-6.039,6.337,27.916,27.916,0,0,0-1.693,6.048,23.074,23.074,0,0,1-1.794,6.092c-3.524,6.847-12.906,7.588-20.364,4.782a77.525,77.525,0,0,1-8.532-4.05c-4.46-2.342-9.073-4.765-14.135-5.647A16.786,16.786,0,0,0,5832.479,6911.086Zm-78.018,27.25a26.521,26.521,0,0,1-7.35,2.884C5749.52,6940.2,5751.972,6939.22,5754.461,6938.337Zm57.85-91.947c5.446,1.5,10.954,5.535,15.117,10.273a86.861,86.861,0,0,1,21.021,54.157c-3.521-2.367-5.1-7.041-6.77-11.956a45.052,45.052,0,0,0-4.02-9.461c-2.435-3.883-6.033-6.62-9.514-9.265-1.11-.844-2.221-1.688-3.291-2.568-8.528-7.009-13.456-16.085-13.521-24.9A20.464,20.464,0,0,1,5812.311,6846.39Zm86.6,48.214a12.19,12.19,0,0,1,7.546,2.811,13.731,13.731,0,0,1,4.835,7.608,22.534,22.534,0,0,0-4.119-4.832,17.845,17.845,0,0,0-14.81-3.924,28.124,28.124,0,0,1,4.744-1.5A9.912,9.912,0,0,1,5898.908,6894.6Zm28.039-42.03c.016,10.358-3.588,20.648-6.793,29.8l-7.186,20.514a16.124,16.124,0,0,0-5.132-7.2,13.92,13.92,0,0,0-11.131-3.094,30.889,30.889,0,0,0-5.289,1.668c-3.25,1.242-6.314,2.416-9.041,1.089a5.9,5.9,0,0,1-3.036-5.12,11.422,11.422,0,0,1,4.559-9.8c4.085-2.718,9.017-3.01,14.236-3.322,1.443-.085,2.881-.172,4.3-.311,3.3-.324,14.255-2.075,16.617-11a22.319,22.319,0,0,0,.55-3.618,19.828,19.828,0,0,1,.49-3.279,8.82,8.82,0,0,1,6.377-6.2C5926.625,6852.658,5926.786,6852.614,5926.947,6852.573Z"
									transform="translate(-5707.849 -6784.025)"
									fill={`${SVGColor}`}
								/>
							</g>
						</g>
					</svg>
				</motion.div>
			</div>
		</>
	);
};

export default TitleStats;
