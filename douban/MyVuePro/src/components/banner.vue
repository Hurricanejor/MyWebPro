<template>
	<div class="banner">
		<div class="swiper-container" :class="swiperid">
			<div class="swiper-wrapper">
				<slot name="swiper-con"></slot>
			</div>
			<!-- 分页器 -->
			<div :class='{"swiper-pagination":paginationshow}' :style='{"text-align":paginationdesition}'></div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Swiper from '../../static/swiper.js'

	export default {
		props: {
			swiperid: {
				type: String,
				default: ''
			},
			paginationshow: {
				type: Boolean,
				default: true
			},
			paginationdesition: {
				type: String,
				default: 'center'
			},
			paginationType: {
				type: String,
				default: 'bullets'
			},
			delay: {
				type: Number,
				default: 1000
			},
			loop: {
				type: Boolean,
				default: true
			},
			direction: {
				type: String,
				default: 'horizontal'
			},
			effect: {
				type: String,
				default: 'slide'
			}
		},
		mounted: function(){
			var That = this;
			// console.log(That);
			// console.log(this.swiperid);

			var mySwiper = new Swiper ('.'+That.swiperid,{
				direction: That.direction,
				loop: That.loop,
				pagination: {
					el: '.swiper-pagination'
				},
				paginationType: That.paginationType,
				autoplay: true,
				delay: That.delay,
				effect: That.effect
			});
			// console.log(mySwiper);
		}
	}
</script>

<style type="text/css">
	@import '../assets/libs/swiper/css/swiper-4.3.3.min.css';

	.banner {
		width: 100%;
		height: 180px;
		overflow: hidden;
	}
	.banner .swiper-container .swiper-slide img {
		width: 100%;
	}
	/*.swiper-pagination-bullet-active {
		background: white;
	}*/
</style>