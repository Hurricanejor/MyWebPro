<template>
	<div class="movie_cell">
		<!-- <img class="movie_img" :src="{{ src }}" /> -->
		<slot name="movie_img"></slot>
		<p class="movie_title">{{ title }}</p>
		<p class="movie_score">
			<span>
				<img class="star_img" src="../../../assets/img/star_full.png" />
				<img class="star_img" src="../../../assets/img/star_full.png" />
				<img class="star_img" src="../../../assets/img/star_full.png" />
				<img class="star_img" src="../../../assets/img/star_full.png" />
				<img class="star_img" src="../../../assets/img/star_full.png" />
			</span> {{ score }}
		</p>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
			src: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: ''
			},
			score: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style type="text/css">
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
</style>