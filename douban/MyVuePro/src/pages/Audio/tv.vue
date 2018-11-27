<template>
	<div>

		<!-- 近期热门国产剧 -->
		<Cell :bol="false" title="近期热门国产剧">
			<div slot="cell_right">
				<span class="cell_right_txt">全部</span>
				<img src="../../assets/img/img_right.png" class="cell_right_img" />
			</div>
		</Cell>

		<Movielist1>
			<div v-for="item in arr" :key="item.id" class="swiper-slide" slot="slide_box">
				
				<moviecell :title="item.title" :score="item.score">
					<img slot="movie_img" class="movie_img" v-lazy="item.target.cover_url" />
				</moviecell>
			</div>

			<!-- 更多 -->
			<div class="more" slot="more">
				<p>全部</p>
				<div class="underline"></div>
				<p>{{ arr.length }}部</p>
			</div>
		</Movielist1>
		
		<!-- 近期热门美剧 -->
		<Cell :bol="false" title="近期热门美剧">
			<div slot="cell_right">
				<span class="cell_right_txt">全部</span>
				<img src="../../assets/img/img_right.png" class="cell_right_img" />
			</div>
		</Cell>
		<Movielist1>
			<div v-for="item in arr2" :key="item.id" class="swiper-slide" slot="slide_box">
				<moviecell :title="item.title" :score="item.score">
					<img slot="movie_img" class="movie_img" v-lazy="item.target.cover_url" />
				</moviecell>
			</div>

			<!-- 更多 -->
			<div class="more" slot="more">
				<p>全部</p>
				<div class="underline"></div>
				<p>{{ arr2.length }}部</p>
			</div>
		</Movielist1>

		<!-- 近期热门日剧 -->
		<cell :bol="false" title="近期热门日剧">
			<div slot="cell_right">
				<span class="cell_right_txt">全部</span>
				<img src="../../assets/img/img_right.png" class="cell_right_img" />
			</div>
		</cell>
		<movielist1 :slidesPerColumn="2">
			<div v-for="item in arr3" :key="item.id" class="swiper-slide" slot="slide_box">
				
				<moviecell :title="item.title" :score="item.score">
					<img slot="movie_img" class="movie_img" v-lazy="item.target.cover_url" />
				</moviecell>
			</div>

			<!-- 更多 -->
			<div class="more" slot="more">
				<p>全部</p>
				<div class="underline"></div>
				<p>{{ num }}部</p>
			</div>
		</movielist1>

		<!-- 你可能感兴趣 -->
		<cell :bol="false" title="你可能感兴趣">
			<div slot="cell_right">
				<span class="cell_right_txt">全部</span>
				<img src="../../assets/img/img_right.png" class="cell_right_img" />
			</div>
		</cell>
		<Interested>
			
		</Interested>

		
	</div>
</template>

<script type="text/javascript">
	import Cell from "../../components/cell"
	import Movielist1 from "./movie/movie_list1"
	import Moviecell from "./movie/movie_cell"
	import Interested from "./movie/interested"


	export default {
		components: {
			Cell,
			Movielist1,
			Interested,
			Moviecell
		},
		props: ["movietitle","moviescore"],
		data: function(){
			return {
				arr:[],
				arr2:[],
				arr3:[],
				num: 1
			}
		},
		created: function(){
			this.fn();
		},
		methods: {
			fn(){
				this.axios.get('/api/tvList').then((response)=>{
					this.arr = response.data.data.recommend_feeds;
					this.num = this.arr.length;
		        	console.log(this.num);
				});
				this.axios.get('/api/movieList2').then((response)=>{
					this.arr2 = response.data.data.recommend_feeds;
					this.num = this.arr2.length;
		        	// console.log(this.arr);
				});
				this.axios.get('/api/movieList3').then((response)=>{
					this.arr3 = response.data.data.recommend_feeds;
					this.num = this.arr3.length;
		        	// console.log(this.arr);
				});
			}
		}
	}
</script>