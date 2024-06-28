<template>
	<view>
		打卡100件小事
		<view>
			<van-tabs active="active" bind:change="onChange">
				<van-tab title="标签 1">内容 1</van-tab>
				<van-tab title="标签 2">内容 2</van-tab>
				<van-tab title="标签 3">内容 3</van-tab>
				<van-tab title="标签 4">内容 4</van-tab>
			</van-tabs>
		</view>

		<view class="">

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value1: 1,
				option: [{
						text: '全部商品',
						value: 0
					},
					{
						text: '新款商品',
						value: 1
					},
					{
						text: '活动商品',
						value: 2
					},
				],
			}
		},
		methods: {
			onChange(event) {
				wx.showToast({
					title: `切换到标签 ${event.detail.name}`,
					icon: 'none',
				});
			},
		}
	}
</script>

<style>

</style>
