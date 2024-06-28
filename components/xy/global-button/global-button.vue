<template>
	<view>
		<view class="mt-30 btn" style="">
			{{title}}
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: ''
			},
		},
		data() {
			return {

			}
		},
		created() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	@import url("@/common/common.css");

	.btn {
		width: 98%;
		height: 70rpx;
		text-align: center;
		line-height: 70rpx;
		background-color: #ff6d78;
		color: #ffff;
		border-radius: 10rpx;
	}
</style>