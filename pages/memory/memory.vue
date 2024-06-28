<template>
	<view class="">
		<!-- 轮播图 -->
		<view class="pic">
			<swiper class="swiper" autoplay="true" indicator-dots="true" indicator-color="#ffffff"
				indicator-active-color="#5C9DFC">
				<block v-for="(item,index) in banner" :key="index">
					<swiper-item>
						<view class="pic">
							<image class="pic" :src="item.img">
							</image>
						</view>
					</swiper-item>
				</block>
			</swiper>
		</view>
		<view class="top">

			<view class="left">
				<view class="">在一起</view>
				<view class="font-20 color-gray">起始日：<span>2020-11-16</span></view>
			</view>

			<view class="font-50 font-weight">1016 <span class="days">Days</span></view>

		</view>
		<view v-for="(item,index) in dateList" :key="index" style="display: flex;flex-direction: column;align-items: center;">
			<view class="list">
				<view class="" style="display: flex;flex-direction: column;justify-content: center;">
					<view class="">{{item.content}}</view>
					<view class="font-26 color-gray">{{item.time}}</view>
				</view>
				<view class="color-pink">已经<text class="font-40">{{item.distance}}</text>天</view>
			</view>
		</view>
		<!-- <image src="@/static/add.png" mode="widthFix" class="wh-100 fixed" @click="add"></image> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				banner: [{
						img: '/static/1.png'
					},
					{
						img: '/static/2.png'
					},
					{
						img: '/static/3.png'
					},
					{
						img: '/static/4.png'
					},
				],
				dateList: [{
						time: '2020-11-16',
						distance: '1001',
						content: '纪念日1'
					},
					{
						time: '2020-11-16',
						distance: '1001',
						content: '纪念日2'
					},
					{
						time: '2020-11-16',
						distance: '1001',
						content: '纪念日3'
					},
				]
			}
		},
		methods: {
			add() {
				uni.navigateTo({
					url: '/pagesA/addMemory/addMemory'
				})
			}
		}
	}
</script>

<style>
	@import url("@/common/common.css");

	.pic {
		width: 100vw;
	}

	.swiper {
		height: 500rpx;
	}

	.top {
		width: 100%;
		height: 200rpx;
		/* line-height: 200rpx; */
		background-color: pink;
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
		background-color: #fb7aae;
		color: #fff;
		padding: 5rpx 10rpx;
		font-size: 26rpx;
	}

	.bottom {
		width: 100%;
	}

	.list {
		width: 80%;
		height: 170rpx;
		/* line-height: 70rpx; */
		background-color: #ffffff;
		margin: 30rpx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom-right-radius: 100rpx;
		border-top-right-radius: 100rpx;
		border-left: 5rpx solid #fb7aae;
		padding: 0 30rpx;
	}
	


	.fixed {
		position: fixed;
		right: 40rpx;
		bottom: 200rpx;
	}
</style>