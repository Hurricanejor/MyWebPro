<template>
	<div>
		<Cell :bol="false" title="影院热映">
			<div slot="cell_right">
				<span class="cell_right_txt">全部</span>
				<img src="../../assets/img/img_right.png" class="cell_right_img" />
			</div>
		</Cell>
		<Movielist v-for="item in arr" :key="item.id">
			
			<div class="swiper-slide" slot="swiper_box">
				<img :url="item.target.cover_url" />
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