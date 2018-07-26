<template>
	<div class="movie_list">
		<div class="swiper-container">
			<!-- 滚动主体 -->
			<div class="swiper-wrapper">
				<!-- <div class="swiper-slide"> -->
					<!--  v-for="item in arr" :key="item.id" -->
					<!-- <img class="movie_img" :src="item.target.cover_url" />
					<p class="movie_title">{{ item.title }}</p>
					<p class="movie_score">
						<span>
							<img class="star_img" src="../../../assets/img/star_full.png" />
							<img class="star_img" src="../../../assets/img/star_full.png" />
							<img class="star_img" src="../../../assets/img/star_full.png" />
							<img class="star_img" src="../../../assets/img/star_full.png" />
							<img class="star_img" src="../../../assets/img/star_full.png" />
						</span> {{ item.score }}
					</p> -->
					<slot name="slide_box"></slot>
				<!-- </div> -->
				<div class="swiper-slide">
					<div class="more">
						<p>全部</p>
						<div class="underline"></div>
						<p>{{ num }}部</p>
					</div>
				</div>
     		</div>
			<!-- 滚动条 -->
			<!-- <div class="swiper-scrollbar"></div> -->
		</div>

		<div class="movie_subject">
			<slot name="movie_subject"></slot>
		</div>

	</div>
</template>

<script type="text/javascript">
	import Swiper from "../../../../static/swiper.js"

	export default {
		props: {
			movietitle: {
				type: String,
				default: ""
			},
			moviescore: {
				type: String,
				default: ""
			},
			url: {
				type: String,
				default: ""
			},
			id: {
				type: String,
				default: ""
			},
			slidesPerColumn: {
				type: Number,
				default: 1
			}
		},
		data: function(){
			return {
				arr:[],
				num:1
			}
		},
		created: function(){
			this.fn();
		},
		methods: {
			fn(){
				this.axios.get('/api/movieList').then((response)=>{
					this.arr = response.data.data.recommend_feeds;
		        	// console.log(this.arr);
		        	this.num = this.arr.length;
		        	// console.log(this.num);
				});
			}
		},
		mounted: function(){
			var That = this;
			console.log(That.slidesPerColumn);

			var mySwiper = new Swiper ('.swiper-container',{
				direction: "horizontal",
				slidesPerView : 3,
				// slidesPerColumn: That.slidesPerColumn,
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
		}
	}
</script>

<style type="text/css">
	.movie_list {
		margin-bottom: 10px;
		padding-bottom: 10px;
	}
	.movie_list:last-child {
		margin-bottom: 65px;
	}
	.swiper-container {
		height: 200px;
	}
	.swiper-slide {
		width: 30%;
		margin: 10px 0;
	}
	.movie_img {
		height: 130px;
		width: 90px;
		border-radius: 5px;
	}
	.movie_title {
		font-size: 12px;
		color: #333;
		width: 80%;
		height: 20px;
		line-height: 20px;
		margin: auto;
		white-space:nowrap;
		text-overflow:ellipsis;
		overflow:hidden;
		text-align: left;
	}
	.movie_score {
		font-size: 8px;
		color: #333;
		width: 80%;
		margin: auto;
		text-align: left;
	}
	.star_img {
		width: 10px;
	}
	.more {
		height: 130px;
		width: 90px;
		border-radius: 5px;
		background: #F1F1F1;
		margin: auto;
		display: flex;
		flex-flow: column;
		justify-content: center;
	}
	.underline {
		width: 25px;
		height: 1px;
		margin: 3px auto;
		background: #999;
	}
	.more p {
		font-size: 12px;
		color: #999;
	}
	.movie_subject {
		width: 100%;
		margin: auto;
	}
	.movie_subject img {
		display: block;
		width: 95%;
		/*height: 100px;*/
		margin: auto;
	}
</style>