gsap.registerPlugin(ScrollTrigger);

gsap.to(".third-scroll", {
	scale: 6,
	duration: 3,
	scrollTrigger: {
		trigger: ".third-scroll",
		togglesActions: "restart",
	},
	start: 1200,
	marginLeft: 180,
})
