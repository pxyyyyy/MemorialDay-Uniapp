<template>
	<view class="content">
		<view class="top border">
			
			<view class="left">
				<view class="">在一起</view>
				<view class="font-20 color-gray">起始日：<span>2020-11-16</span></view>
			</view>
			
			<view class="font-50 font-weight">1016 <span class="days">Days</span></view>
			
		</view>
		<view v-for="(item,index) in dateList" :key="index" class="bottom">
			<view class="list border">
				<view class="">{{item.content}}</view>
				<view class="">{{item.distance}}天</view>
			</view>
		</view>
		<image src="@/static/add.png" mode="widthFix" class="wh-120 fixed"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dateList:[
					{
						time:'2020-11-16',
						distance:'1001',
						content:'在一起'
					},
					{
						time:'2020-11-16',
						distance:'1001',
						content:'在一起22'
					},
					{
						time:'2020-11-16',
						distance:'1001',
						content:'在一起33'
					},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	@import url("@/common/common.css");

	.top{
		width: 100%;
		height: 200rpx;
		/* line-height: 200rpx; */
		background-color: antiquewhite;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.top view {
		padding: 0 20rpx;
	}
	.top .days {
		border-bottom-left-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		background-color: #ffaaff;
		color: #fff;
		padding: 5rpx 10rpx;
		font-size: 26rpx;
	}
	.bottom {
		width: 100%;
	}
	.list {
		height: 70rpx;
		line-height: 70rpx;
		background-color: aquamarine;
		margin: 30rpx 0;
		display: flex;
		justify-content: space-between;
	}
	.list view {
		padding: 0 50rpx;
	}
	.fixed{
		position: fixed;
		right: 40rpx;
		bottom: 200rpx;
	}
</style>
