<template>
	<view class="content1">
<!-- 		<van-dropdown-menu>
		  <van-dropdown-item :value="value1" :options="option1" />
		  <van-dropdown-item :value="value2" :options="option2" />
		</van-dropdown-menu> -->
		<view class="flex-between bgcolor-pink">
			<view class="">
				<view class="color-gray font-26">2013年</view>
				<view class="font-40">
					<text>10月</text>
					<image src="@/static/clock.png" class="wh-30"></image>
				</view>
			</view>
			<view class="">
				<view class="color-gray font-26">收入</view>
				<view class="font-40">0.00</view>
			</view>
			<view class="">
				<view class="color-gray font-26">支出</view>
				<view class="font-40">2177.30</view>
			</view>
		</view>
		
		<view class="">
			<view class="">
				<view class="flex-between font-26 color-gray">
					<text>10月11日 星期三</text>
					<text>支出：224</text>
				</view>
				<view class="flex-between cell">
					<view class="">
						<image src="@/static/tabbar/my1.png" mode="" class="wh-50"></image>
						<text>鸭脖</text>
					</view>
					
					<text>-20</text>
				</view>
			</view>
		</view>
		
		<image src="@/static/add.png" class="add"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				option1: [
				      { text: '全部商品', value: 0 },
				      { text: '新款商品', value: 1 },
				      { text: '活动商品', value: 2 },
				    ],
				    option2: [
				      { text: '默认排序', value: 'a' },
				      { text: '好评排序', value: 'b' },
				      { text: '销量排序', value: 'c' },
				    ],
				    value1: 0,
				    value2: 'a',
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.content1{
		width: 100%;
		min-height: 100vh;
		position: relative;
	}
	.content .add{
		position: absolute;
		bottom: 200rpx;
		right: 50rpx;
		width: 150rpx;
		height: 150rpx;
	}
	.cell{
		border: 1rpx solid #efefef;
		height: 100rpx;
		/* line-height: 100rpx; */
	}
</style>
