<template>
	<view>
		<view class="flex-between background-color-fff" style="position: fixed;top: 0;right: 0;left: 0;height: 90rpx;line-height: 90rpx;">
			<view style="width: 33%;" class="">
				<uni-icons type="arrowleft" size="22" :color="titleColor" @click="goBack"></uni-icons>
				<text>我们的信息</text>
			</view>
			<view style="width: 40%;" class="title">设置啊啊啊啊啊啊啊</view>
			<view style="width: 10%;" class="">
				<uni-icons type="search" size="22" :color="titleColor"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titleColor: "#ff6d78"
			}
		},
		methods: {

		}
	}
</script>

<style>
	@import url(@/common/common.css);

	.title {
	}
</style>