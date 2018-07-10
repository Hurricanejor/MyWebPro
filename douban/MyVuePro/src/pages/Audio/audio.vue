<template>
	<div>
		<Myheader txt='书影音'>
			<img src="../../assets/img/img2.png" class="leftImg" slot='left' />
			<img src="../../assets/img/img1.png" class="rightImg" slot='rigth' />
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