<template>
	<div class="site-footer">
		<div class="site-footer-wrap">
			<div class="site-footer-info">
				<div class="site-footer-l-info"></div>
				<div class="site-footer-r-info"></div>
			</div>
		</div>
		<div class="site-copy-wrap">
			<div>免责声明</div>
			<div>Copyright 2018-2026 资质云库 皖ICP备14055920号</div>
			<div>本站是一个信息交互平台,用户所发布信息与本站无关!请勿发布违法信息！</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.site-footer{
	color:#ccc;
	.site-footer-wrap{
		height:230px;
		background-color:#1f1f24;
		overflow: hidden;
	}
	.site-footer-info{
		width:1200px;
		margin: 30px auto;
		overflow: hidden;
	}
	.site-footer-l-info{
		float: left;
		width:462px;
		height:170px;
		background: lawngreen
	}
	.site-footer-r-info{
		float: left;
		width:738px;
		height:170px;
		background: lavender
	}
	.site-copy-wrap{
		height:115px;
		padding-top:20px;
		text-align:center;
		font-size: 12px;
		line-height: 2;
		background-color:#17171c
	}

}
</style>

