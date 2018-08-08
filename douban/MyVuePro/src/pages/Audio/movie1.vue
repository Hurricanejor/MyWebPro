<template>
	<div>

		<!-- 影院热映 -->
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
		<Movielist1>
			<div v-for="item in arr" :key="item.id" class="swiper-slide" slot="slide_box">
				<!-- 修改1 -->
				<!-- <div>
					<img class="movie_img" v-lazy="item.target.cover_url" />
					<p class="movie_title">{{ item.title }}</p>
					<p class="movie_score">
						<span>
							<img class="star_img" src="../../assets/img/star_full.png" />
							<img class="star_img" src="../../assets/img/star_full.png" />
							<img class="star_img" src="../../assets/img/star_full.png" />
							<img class="star_img" src="../../assets/img/star_full.png" />
							<img class="star_img" src="../../assets/img/star_full.png" />
						</span> {{ item.score }}
					</p>
				</div> -->

				<!-- 修改2：增加movie_cell组件 -->
				<moviecell :title="item.title" :score="item.score">
					<!-- <img slot="movie_img" class="movie_img" :src="item.target.cover_url" /> -->
					<!-- 修改3：图片懒加载 -->
					<img slot="movie_img" class="movie_img" v-lazy="item.target.cover_url" />
				</moviecell>
			</div>
			<div slot="movie_subject">
				<img src="https://img3.doubanio.com/view/dale-online/dale_ad/public/02c3f26e99f2d4a.jpg">
			</div>
		</Movielist1>
		
		<!-- 院线即将上映 -->
		<Cell :bol="false" title="院线即将上映">
			<div slot="cell_right">
				<span class="cell_right_txt">全部</span>
				<img src="../../assets/img/img_right.png" class="cell_right_img" />
			</div>
		</Cell>
		<Movielist1>
			<div v-for="item in arr2" :key="item.id" class="swiper-slide" slot="slide_box">
				<!-- <div> -->
					<!-- 修改1 -->
					<!-- <img class="movie_img" :src="item.target.cover_url" />
					<p class="movie_title">{{ item.title }}</p>
					<p class="movie_score">
						<span>
							<img class="star_img" src="../../assets/img/star_full.png" />
							<img class="star_img" src="../../assets/img/star_full.png" />
							<img class="star_img" src="../../assets/img/star_full.png" />
							<img class="star_img" src="../../assets/img/star_full.png" />
							<img class="star_img" src="../../assets/img/star_full.png" />
						</span> {{ item.score }}
					</p> -->
					
					<!-- 修改2 -->
					<moviecell :title="item.title" :score="item.score">
						<!-- <img slot="movie_img" class="movie_img" :src="item.target.cover_url" /> -->
						<!-- 修改3：图片懒加载 -->
						<img slot="movie_img" class="movie_img" v-lazy="item.target.cover_url" />
					</moviecell>
				<!-- </div> -->
			</div>
			<div slot="movie_subject">
				<img src="https://img3.doubanio.com/img/files/file-1531663680-1.jpg" />
			</div>
		</Movielist1>

		<!-- 豆瓣热门 -->
		<cell :bol="false" title="豆瓣热门">
			<div slot="cell_right">
				<span class="cell_right_txt">全部</span>
				<img src="../../assets/img/img_right.png" class="cell_right_img" />
			</div>
		</cell>
		<movielist1 :slidesPerColumn="2">
			<div v-for="item in arr3" :key="item.id" class="swiper-slide" slot="slide_box">
				<!-- <div> -->
					<!-- 修改1 -->
					<!-- <img class="movie_img" :src="item.target.cover_url" />
					<p class="movie_title">{{ item.title }}</p>
					<p class="movie_score">
						<span>
							<img class="star_img" src="../../assets/img/star_full.png" />
							<img class="star_img" src="../../assets/img/star_full.png" />
							<img class="star_img" src="../../assets/img/star_full.png" />
							<img class="star_img" src="../../assets/img/star_full.png" />
							<img class="star_img" src="../../assets/img/star_full.png" />
						</span> {{ item.score }}
					</p> -->
				<!-- </div> -->

				<!-- 修改2 -->
				<!-- 修改2 -->
				<moviecell :title="item.title" :score="item.score">
					<!-- <img slot="movie_img" class="movie_img" :src="item.target.cover_url" /> -->
					<!-- 修改3：图片懒加载 -->
					<img slot="movie_img" class="movie_img" v-lazy="item.target.cover_url" />
				</moviecell>
			</div>
		</movielist1>

		<!-- 你可能感兴趣 -->
		<Interested></Interested>

		
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
				arr3:[]
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
				this.axios.get('/api/movieList2').then((response)=>{
					this.arr2 = response.data.data.recommend_feeds;
		        	console.log(this.arr);
				});
				this.axios.get('/api/movieList3').then((response)=>{
					this.arr3 = response.data.data.recommend_feeds;
		        	console.log(this.arr);
				});
			}
		}
	}
</script>