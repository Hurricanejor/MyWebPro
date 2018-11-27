<template>
	<div>
		<Myheader txt='小组'>
			<img src="../../assets/img/ic_group_search.png" class="leftImg" slot='left' />
				<img src="../../assets/img/ic_chat_green.png" class="rightImg" slot='rigth' />
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