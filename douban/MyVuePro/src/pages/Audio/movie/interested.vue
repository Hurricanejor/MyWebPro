<template>
	<div>
		<div class="interested_cell">
			<ul>
				<interested-cell v-for="(item,index) in listTemp[0]" :key="item.id" :inMovTitle="item.title" :inMovScore="item.score" :inMovRremark="item.remark" :inMovDetail="item.target.detail">
					<img v-lazy="item.target.cover_url" slot="interest_img" class="movie_list_img">
				</interested-cell>
				<div class="background">每隔四个会有一个电影描述！</div>
				
				<!-- <interested-cell v-for="(item,index) in listTemp[1]" :key="item.id" :inMovTitle="item.title" :inMovScore="item.score" :inMovRremark="item.remark" :inMovDetail="item.target.detail">
					<img v-lazy="item.target.cover_url" slot="interest_img" class="movie_list_img">
				</interested-cell>
				<div class="background">每隔四个会有一个电影描述！</div> -->
			</ul>
		</div>
		
	</div>
</template>

<script type="text/javascript">
	import Cell from "../../../components/cell"
	import InterestedCell from "./interested_cell"

	export default {
		components: {
			Cell,
			InterestedCell
		},
		data:function() {
			return {
				arrMov:[]
			}
		},
		computed: {
			listTemp: function() {
				var arrMovList = this.arrMov;
				// // var length = arrMovList/4;
				// for (var i = 0; i < 4; i++) {
				// 	arrMovList[i]
				// }

				var a = new Array();
				var b = new Array();
				var c = new Array();
				var length = 4;
				for(let i = 0; i < length; i++) {
				    a.push(arrMovList[i]);
				}
				for(let i = length; i < arrMovList.length; i++) {
				    b.push(arrMovList[i]);
				}

				// for(let i = 0; i < arrMovList.length/4; i++) {
				//     // c[i] = new Array();
				//     // for(let j = 0; j < arrMovList.length/4; j++) {
				//     //     c[i][j] = b[i*5+j];
				//     // }
				//     c[i] = a[i];
				// }
				c[0] = a;
				c[1] = b;
				console.log(c);
				return c;
			}
		},
		created: function(){
			this.fn();
		},
		methods: {
			fn() {
				this.axios.get('/api/interestedList').then((response)=>{
					this.arrMov = response.data.data.recommend_feeds;
		        	// console.log(this.arrMov);
				});
			}
		}
	}
</script>

<style type="text/css">
	.background {
		width: 100%;
		height: 200px;
		background: red;
	}
</style>