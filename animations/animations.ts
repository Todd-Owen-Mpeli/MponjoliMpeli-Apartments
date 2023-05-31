/*  FRAMER-MOTION ANIMATIONS
Custom reusable Animation Properties/variables */

// WhileInView
interface Initial {
	y: number;
	opacity: number;
}

interface InitialTwo {
	y: number;
	opacity: number;
}

interface FadeIn {
	opacity: number;
	transition: {
		duration: number;
		delay: number;
		ease: string;
	};
}

interface FadeInTwo {
	y: number;
	opacity: number;
	transition: {
		delay: number;
		duration: number;
		ease: string;
	};
}

interface FadeInUp {
	y: number;
	opacity: number;
	transition: {
		delay: number;
		duration: number;
		ease: string;
	};
}

interface Stagger {
	y: number;
	opacity: number;
	transition: {
		delay: number;
		duration: number;
		ease: string;
		staggerChildren: number;
		delayChildren: number;
	};
}

export const initial: Initial | any = {
	y: 30,
	opacity: 0,
};

export const initialTwo: InitialTwo | any = {
	opacity: 0,
};

export const fadeIn: FadeIn | any = {
	opacity: 1,
	transition: {
		duration: 1,
		delay: 0.5,
		ease: "easeOut",
	},
};

export const fadeInTwo: FadeInTwo | any = {
	y: 0,
	opacity: 1,
	transition: {
		duration: 1,
		delay: 0.5,
		ease: "easeOut",
	},
};

export const fadeInUp: FadeInUp = {
	y: 0,
	opacity: 1,
	transition: {
		delay: 0.5,
		duration: 0.5,
		ease: "easeInOut",
	},
};

export const stagger: Stagger = {
	y: 0,
	opacity: 1,
	transition: {
		delay: 0.25,
		duration: 0.5,
		ease: "easeInOut",
		staggerChildren: 0.1,
		delayChildren: 0.3,
	},
};

export default fadeInUp;
