<template>
	<div>
		<cell :bol="false" title="你可能感兴趣">
			<div slot="cell_right">
				<span class="cell_right_txt">全部</span>
				<img src="../../../assets/img/img_right.png" class="cell_right_img" />
			</div>
		</cell>

		
	</div>
</template>

<script type="text/javascript">
	import Cell from "../../../components/cell"

	export default {
		components: {
			Cell
		}
	}
</script>