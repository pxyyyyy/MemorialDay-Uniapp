<template>
	<view>
		<view  @click="toPages('/pagesMy/pages/setLoveTime/setLoveTime')" class="flex-between background-color-fff pdlr-20 mt-20" style="border-top: 1rpx solid #d5d5d5;border-bottom: .5rpx solid #d5d5d5;">
			<view class="label">相恋时间</view>
			<view class="flex-start">
				<view class="text">2020-11-16 01:40</view>
				<image src="@/static/right.png" mode="" class="wh-30 ml-10"></image>
			</view>
		</view>
		
		<view class="background-color-fff mt-20" style="border-top: 1rpx solid #d5d5d5;border-bottom: .5rpx solid #d5d5d5;padding-left: 20rpx;">
			<view class="flex-between" style="padding: 20rpx 20rpx 20rpx 0; ">
				<view class="label">我的头像</view>
				<view class="flex-start">
					<image src="@/static/avatar.png" mode="" class="wh-50 ml-10"></image>
				</view>
			</view>
			<view @click="toPages('/pagesMy/pages/setNickName/setNickName')" class="flex-between" style="padding: 20rpx 20rpx 20rpx 0; border-top: 1rpx solid #d5d5d5;">
				<view class="label">我的昵称</view>
				<view class="flex-start">
					<view class="text">pxy</view>
					<image src="@/static/right.png" mode="" class="wh-30 ml-10"></image>
				</view>
			</view>
			<view class="flex-between" style="padding: 20rpx 20rpx 20rpx 0; border-top: 1rpx solid #d5d5d5;">
				<view class="label">我的生日</view>
				<view class="flex-start">
					<view class="text">2020-11-16 01:40</view>
					<image src="@/static/right.png" mode="" class="wh-30 ml-10"></image>
				</view>
			</view>
		</view>
		<view class="background-color-fff mt-20" style="border-top: 1rpx solid #d5d5d5;border-bottom: .5rpx solid #d5d5d5;padding-left: 20rpx;">
			<view class="flex-between" style="padding: 20rpx 20rpx 20rpx 0; ">
				<view class="label">另一半头像</view>
				<view class="flex-start">
					<image src="@/static/avatar2.png" mode="" class="wh-50 ml-10"></image>
				</view>
			</view>
			<view class="flex-between" style="padding: 20rpx 20rpx 20rpx 0; border-top: 1rpx solid #d5d5d5;">
				<view class="label">另一半昵称</view>
				<view class="flex-start">
					<view class="text">hzh</view>
					<image src="@/static/right.png" mode="" class="wh-30 ml-10"></image>
				</view>
			</view>
			<view class="flex-between" style="padding: 20rpx 20rpx 20rpx 0; border-top: 1rpx solid #d5d5d5;">
				<view class="label">另一半生日</view>
				<view class="flex-start">
					<view class="text">2020-11-16 01:40</view>
					<image src="@/static/right.png" mode="" class="wh-30 ml-10"></image>
				</view>
			</view>
		</view>
		<view class="flex-between background-color-fff pdlr-20 mt-20" style="border-top: 1rpx solid #d5d5d5;border-bottom: .5rpx solid #d5d5d5;">
			<view class="label">恋爱宣言</view>
			<view class="flex-start">
				<image src="@/static/right.png" mode="" class="wh-30 ml-10"></image>
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
			toPages(url){
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style>
	@import url("@/common/common.css");
	page{
		background-color: #efefef;
	}
	.text{
		color: #b4b4b4
	}
</style>