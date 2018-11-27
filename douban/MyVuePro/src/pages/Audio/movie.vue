<template>
	<div>
		<Cell :bol="false" title="影院热映">
			<div slot="cell_right">
				<span class="cell_right_txt">全部</span>
				<img src="../../assets/img/img_right.png" class="cell_right_img" />
			</div>
		</Cell>
		<!-- <Movielist  class="swiper-container" v-for="item in arr" :key="item.id">
				<div class="swiper-slide" slot="swiper_box">
					<img :src="item.target.cover_url">
					<p class="movie_title">{{ item.title }}</p>
					<p>{{ item.score }}</p>
				</div>
		</Movielist> -->
		<Movielist>
			<div slot="movie_subject">
				<img src="https://img3.doubanio.com/view/dale-online/dale_ad/public/02c3f26e99f2d4a.jpg">
			</div>
		</Movielist>
		<Cell :bol="false" title="院线即将上映">
			<div slot="cell_right">
				<span class="cell_right_txt">全部</span>
				<img src="../../assets/img/img_right.png" class="cell_right_img" />
			</div>
		</Cell>
		<Movielist>
			<div slot="movie_subject">
				<img src="https://img3.doubanio.com/img/files/file-1531663680-1.jpg" />
			</div>
		</Movielist>
	</div>
</template>

<script type="text/javascript">
	import Cell from "../../components/cell"
	import Movielist from "./movie/movie_list"

	export default {
		components: {
			Cell,
			Movielist
		},
		props: ["movietitle","moviescore"],
		data: function(){
			return {
				arr:[]
			}
		},
		created: function(){
			this.fn();
		},
		methods: {
			fn(){
				this.axios.get('/api/movieList').then((response)=>{
					this.arr = response.data.data.recommend_feeds;
		        	console.log(this.arr);
				});
			}
		}
	}
</script>