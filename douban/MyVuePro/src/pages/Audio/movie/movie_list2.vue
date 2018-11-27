<template>
	<div>
		
	</div>
</template>

<script type="text/javascript">
	import Swiper from "../../../../static/swiper.js"

	export default {
		props: [],
		methods: {

			fn(){
				var Swiper1 = new Swiper('#swiper-container1',{
					direction: "horizontal",
					slidesPerView : 3,
					loop: false,
					freeMode : true,
					freeModeMomentum : false,
					scrollbar: {
					    el: '.swiper-scrollbar',
						dragSize: 30,
						// hide: true
					},
					effect: "slide",
					observer:true,//修改swiper自己或子元素时，自动初始化swiper
	    			observeParents:true //修改swiper的父元素时，自动初始化swiper
				});
				var Swiper2 = new Swiper('#swiper-container2',{
					controller: {
						control: Swiper1, //控制Swiper1
					},
					direction: "horizontal",
					slidesPerView : 3,
					loop: false,
					freeMode : true,
					freeModeMomentum : false,
					scrollbar: {
					    el: '.swiper-scrollbar',
						dragSize: 30,
						// hide: true
					},
					effect: "slide",
					observer:true,//修改swiper自己或子元素时，自动初始化swiper
					observeParents:true //修改swiper的父元素时，自动初始化swiper
				});

				Swiper1.controller.control = Swiper2;//Swiper1控制Swiper2，需要在Swiper2初始化后
				Swiper2.controller.control = Swiper1;//Swiper2控制Swiper1，需要在Swiper1初始化后

				var Swiper3 = new Swiper('#swiper-container3',{
				  	controller:{
				    	control: [Swiper1, Swiper2],//控制Swiper1和Swiper2
				  	},
				  	direction: "horizontal",
					slidesPerView : 3,
					loop: false,
					freeMode : true,
					freeModeMomentum : false,
					scrollbar: {
					    el: '.swiper-scrollbar',
						dragSize: 30,
						// hide: true
					},
					effect: "slide",
					observer:true,//修改swiper自己或子元素时，自动初始化swiper
					observeParents:true //修改swiper的父元素时，自动初始化swiper
				});
				Swiper3.controller.control = [Swiper1, Swiper2]//控制Swiper1和Swiper2
			}
		}
	}
</script>