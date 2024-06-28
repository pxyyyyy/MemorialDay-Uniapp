<template>
	<!-- <view class="width-100 height-100 pdlr-20 bgc-image"> -->
	<view class="pdlr-20 ">
		<view @click="toOur" class="pdlr-20 position-relative flex-start background-color-fff border-10"
			style="width: 94%;">
			<view class="">
				<image src="../../static/avatar.png" mode="" class="avatar border-radius-50"></image>
				<image src="../../static/avatar2.png" mode="" class="wh-50 position-absolute border-radius-50"
					style="top: 120rpx;left: 120rpx;border: 5rpx solid #fff;"></image>
			</view>
			<view class="ml-30" style="width: 70%;height: 150rpx; ">
				<view class="font-36">pxy & hzh</view>
				<view class="mt-30 tag font-26">热恋ing</view>
			</view>
			<view class="">
				<image src="../../static/right.png" class="wh-30"></image>
			</view>

		</view>

		<view class="position-relative" style="height: 650rpx;">
			<view class="mt-20">
				<image src="../../static/cat.png" mode=""></image>
			</view>
			<view class="background-color-fff border-10 position-absolute flex-start pdlr-20"
				style="opacity: .7;top: 250rpx;width: 94%;flex-wrap: wrap;">
				<view v-for="(item,index) in 8" class="" style="width: 25%;height: 170rpx;text-align: center;">
					<image src="../../static/icon.png" mode="" class="wh-100"></image>
					<view>爱你</view>
				</view>
			</view>
		</view>

		<view class="background-color-fff border-10 pdlr-20" style="width: 94%;">
			<view style="display: flex;align-items: center;">
				<image src="../../static/setting.png" mode="" class="wh-40"></image>
				<view class="ml-20" style="width: 90%;">设置</view>

				<view>
					<image src="../../static/right.png" class="wh-30"></image>
				</view>
			</view>
		</view>
		<view class="mt-20 background-color-fff border-10 pdlr-20" style="width: 94%;">
			<view style="display: flex;align-items: center;">
				<image src="../../static/setting.png" mode="" class="wh-40"></image>
				<view class="ml-20" style="width: 90%;">设置</view>

				<view>
					<image src="../../static/right.png" class="wh-30"></image>
				</view>
			</view>
		</view>
		<view class="mt-20 background-color-fff border-10 pdlr-20" style="width: 94%;">
			<view style="display: flex;align-items: center;">
				<image src="../../static/setting.png" mode="" class="wh-40"></image>
				<view class="ml-20" style="width: 90%;">设置</view>

				<view>
					<image src="../../static/right.png" class="wh-30"></image>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			toOur() {
				uni.navigateTo({
					url: '/pagesMy/pages/ourInformation/ourInformation'
				})
			}
		}
	}
</script>

<style>
	@import url("@/common/common.css");

	.bgc-image {
		background-image: url('@/static/bgc.png');
		background-repeat: no-repeat;
	}

	.tag {
		width: 150rpx;
		text-align: center;
		border-radius: 50rpx;
		background-color: pink;
	}
</style>