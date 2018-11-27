<template>
	<li>
		<div class="movie_cell_detial">
			<div class="movie_img_box">
				<slot name="interest_img"></slot>
			</div>
			<div class="in_movie_cell_right">
				<h2 class="in_movie_list_title">{{ inMovTitle }}</h2>
				<p class="movie_score">
					<span>
						<img class="star_img" src="../../../assets/img/star_full.png" />
						<img class="star_img" src="../../../assets/img/star_full.png" />
						<img class="star_img" src="../../../assets/img/star_full.png" />
						<img class="star_img" src="../../../assets/img/star_full.png" />
						<img class="star_img" src="../../../assets/img/star_full.png" />
					</span>
					<span class="score_txt">{{inMovScore}}</span>
				</p>
				<p class="in_movie_list_detail">{{ inMovDetail }}</p>
			</div>
		</div>
		<p class="cb"></p>
		<blockquote>{{inMovRremark}}</blockquote>
	</li>
</template>

<script type="text/javascript">
	export default {
		props: ["inMovTitle","inMovDetail","inMovRremark","inMovScore"]
	}
</script>

<style type="text/css">
	.interested_cell ul {
		margin: 0 10px;
	}
	.interested_cell li {
		list-style-type: none;
		padding: 20px 10px;
		border-bottom: 1px solid #e5e5e5;
	}
	/*.interested_cell li::after {
		left: 0;
	    bottom: 0;
	    width: 100%;
	    height: 1px;
	    background: #e5e5e5;
	    -webkit-transform: scaleY(0.5);
	    content: '';
	    position: absolute;
	    -webkit-transform-origin: 0 bottom;
	}*/
	.movie_cell_detial {
		width: 100%;
	}
	.movie_cell_detial .movie_img_box {
		float: left;
		width: 25%;
	}
	.movie_list_img {
		width: 100%;
	}
	.in_movie_cell_right {
		float: left;
		width: 70%;
		margin-left: 10px;
	}
	.in_movie_list_title {
		color: #494949;
	    font-size: 17px;
	    line-height: 1.3;
	    font-weight: 500;
	    text-align: left;
	    margin: 8px 0;
	}
	.in_movie_list_detail {
		text-align: left;
		font-size: 12px;
	    line-height: 1.5;
	    color: #aaaaaa;
	    margin: 0;
	    margin-top: 5px;
	    display: -webkit-box;
	    overflow: hidden;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	}
	.in_movie_cell_right .movie_score{
		margin: 0;
		text-align: left;
	}
	.score_txt {
		font-size: 14px;
	    color: #aaaaaa;
	}
	.star_img {
		width: 10px;
	}
	.cb {
		clear: both;
	}
	blockquote {
		/*margin: 10px 0 0 6px;*/
	    /*padding: 0 8px;*/
	    font-size: 12px;
	    line-height: 1.8;
	    border-left: 2px solid #e5e5e5;
	    color: #494949;
		margin: 10px 15px 0 15px;
		padding-left: 5px;
		border-left: 3px solid #d3d3d3;
		text-align: left;
	}

</style>