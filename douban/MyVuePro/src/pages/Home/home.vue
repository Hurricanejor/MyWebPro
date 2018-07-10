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
	</div>
</template>

<script type="text/javascript">
	import Myheader from '../../components/header'

	export default {
		components: {
			Myheader
		}
	}
</script>