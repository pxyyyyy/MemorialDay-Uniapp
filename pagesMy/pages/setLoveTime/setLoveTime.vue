<template>
	<view class="pdlr-20">
		<view class="color-gray font-26">
			从这一刻开始，我们成为了世界上最幸福的人
		</view>
		<view @click="show = true" class="background-color-fff mt-10 border-10"
			style="width: 98%;height: 70rpx;line-height: 70rpx;">
			<text class="ml-20">{{time}}</text>
		</view>
		<global-button title="确认并开始我们的恋爱之旅"></global-button>
		<view>
			<u-datetime-picker :show="show" @close="show = false" @cancel="show = false" @confirm="confirm" v-model="value1"
				visibleItemCount="6" mode="date" :formatter="formatter" confirmColor="#ff6d78"
				:closeOnClickOverlay="true"></u-datetime-picker>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				value1: Number(new Date()),
				currentDate: new Date(),
				time:'2024-06-18'
			}
		},
		methods: {
			confirm(){
				this.show = false
				this.time = this.$util.formatData(this.value1)
				console.log(this.time);
			},
			formatter(type, value) {
				if (type === 'year') {
					return `${value}年`
				}
				if (type === 'month') {
					return `${value}月`
				}
				if (type === 'day') {
					return `${value}日`
				}
				return value
			},
		}
	}
</script>

<style>
	page {
		background-color: #efefef;
	}

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