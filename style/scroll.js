gsap.registerPlugin(ScrollTrigger);

gsap.to(".first-scroll", {
	scaleX: 120, 
	duration: 2,
	scrollTrigger: {
		trigger: ".first-scroll",
		toggleActions: "restart",
	},
	marginLeft: 40,
	start: 562,
	

})







