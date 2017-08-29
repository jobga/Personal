$(document).ready(function(){
	var ancho=$(window).width();
	var alto=$(window).height();

	var controller = new ScrollMagic.Controller({});

	/*scena_01*/
	var scene_01 = new ScrollMagic.Scene({triggerElement:"#scene_01",
											offset:0,
											duration: alto/25})
				.setPin("#mywork")
				//.addIndicators()
				.addTo(controller);

	var scene_02 = new ScrollMagic.Scene({triggerElement:"#scene_02",
											offset:0,
											duration: alto/50})
				.setPin("#GANAcontrol")
				//.addIndicators()
				.addTo(controller);	

	
	
	var scenePinBox_02 = new ScrollMagic.Scene({triggerElement:"#scene_02",
											offset:50,
											duration: alto/5})	
				.setPin("#box_02")
				.addIndicators()	
				.addTo(controller);	

				

	/*var tweenBox_02 = new TimeLineMax ()
					.add([
						TweenMax.fromTo("#box_02", 1, {x: ancho/4}, {x: ancho/2}),		
						]);
	var sceneTweenBox_02 = new ScrollMagic.Scene({triggerElement:"#scene_02",
												offset:0,
												duration: alto/10})	
					.setTween(tweenBox_02)
					.addIndicators()	
					.addTo(controller);	*/													

});
	
	