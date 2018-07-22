<template>
	<div class="movie_list">
		<div class="swiper-container">
			<!-- 滚动主体 -->
			<div class="swiper-wrapper">
				<img :src="url">
				<slot name="swiper_box"></slot>
				<p>{{ movietitle }}<span>{{ moviescore }}</span></p>
			</div>
			<!-- 滚动条 -->
			<div class="swiper-scrollbar"></div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Swiper from "../../../../static/swiper.js"

	export default {
		props: ["movietitle","moviescore","url"],
		mounted: function(){
			// var That = this;
			// console.log(That);
			// console.log(this.swiperid);

			var mySwiper = new Swiper ('.swiper-container',{
				direction: "horizontal",
				slidesPerView : 3,
				loop: false,
				// pagination: {
				// 	el: '.swiper-pagination'
				// },
				scrollbar: {
				    el: '.swiper-scrollbar',
					dragSize: 30,
					hide: true
				},
				// paginationType: That.paginationType,
				// autoplay: true,
				// delay: That.delay,
				effect: "slide",
				centeredSlides : false
			});
		}
	}
</script>

<style type="text/css">
	.swiper-container {
		height: 200px;
	}
	.swiper-wrapper {

	}
	.swiper-slide {
		height: 130px;
		margin: 10px 0;
	}
	.swiper-slide img {
		height: 130px;
		width: 90px;
		border-radius: 5px;
		display: inline-block;
	}
	.movie_title {
		display: block;
		width: 100%;
		height: 30px;
	}
</style>