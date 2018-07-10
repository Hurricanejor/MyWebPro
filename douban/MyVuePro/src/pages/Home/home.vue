<template>
	<div>
		<Myheader bol='true'>
			<img src="../../assets/img/img1.png" class="rightImg" slot='rigth' />
			<div slot='search' class="search">
				<input type="text" placeholder="影视 图片 唱片 小组等" />
				<img src="../../assets/img/img1.png" class="searchImg" />
				<img src="../../assets/img/img1.png" class="scanImg" />
			</div>
		</Myheader>
		<Banner swiperid='go'>
			<div slot='swiper-con' class="swiper-slide">
				<img src="../../assets/img/banner/banner1.png" />
			</div>
			<div slot='swiper-con' class="swiper-slide">
				<img src="../../assets/img/banner/banner2.png" />
			</div>
			<div slot='swiper-con' class="swiper-slide">
				<img src="../../assets/img/banner/banner3.png" />
			</div>
			<!-- <div slot='swiper-con' class="swiper-slide">
				<img src="../../assets/img/banner/banner4.png" />
			</div>
			<div slot='swiper-con' class="swiper-slide">
				<img src="../../assets/img/banner/banner5.png" />
			</div> -->
		</Banner>
	</div>
</template>

<script type="text/javascript">
	import Myheader from '../../components/header'
	import Banner from '../../components/banner'

	export default {
		components: {
			Myheader,
			Banner
		}
	}
</script>