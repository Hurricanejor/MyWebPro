<template>
	<div>
		<Myheader txt='我的'>
			<!-- <img src="../../assets/img/img2.png" class="leftImg" slot='left' /> -->
				<img src="../../assets/img/ic_settings.png" class="rightImg" slot='rigth' />
		</Myheader>
		<Cell title='提醒' :bol='false'>
			<img src="../../assets/img/img_lights.png" slot="icon" class="cell_img" />
			<img src="../../assets/img/img_right.png" slot="cell_right" class="cell_right_img" />
		</Cell>
	</div>
</template>

<script type="text/javascript">
	import Myheader from '../../components/header'
	import Cell from '../../components/cell'

	export default {
		components:{
			Myheader,
			Cell
		}
	}
</script>