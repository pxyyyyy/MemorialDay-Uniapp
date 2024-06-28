<template>
	<view>
		<van-field :value="name" left-icon="todo-list-o" placeholder="输入事件名称" border="false" @change="onChange" />
		<van-field :value="time" left-icon="clock-o" disabled placeholder="目标日" border="false"
			@click-input="showDate" />
		<van-popup :show="show" :close="onClose" position="bottom">
			<van-datetime-picker type="date" :value="currentDate" :min-date="minDate" :max-date="maxDate"
				 @confirm="confirm" @cancel="show = false" />
		</van-popup>
		<van-cell title="置顶" value="内容" >
			 <van-icon slot="right-icon" name="search" class="custom-icon" />
			 <van-icon slot="right-icon" name="search" class="custom-icon" />
		</van-cell>
		<view class="flex-around">
			<span>置顶</span>
			<van-switch :checked="checked" size="20px" @change="changeSwitch" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				time: '',
				maxDate: new Date().getTime(),
				minDate: new Date(2019, 10, 1).getTime(),
				currentDate: new Date().getTime(),
				show: false,
				checked: true,
			}
		},
		methods: {
			onChange(e) {
				console.log(e, this.name);
			},
			showDate() {
				this.show = true
				console.log(this.show);
			},
			confirm() {
				this.time = this.$util.formatData(this.currentDate)

				console.log('time:', this.time);
				this.show = false
			},
			changeSwitch(e){
				this.checked = !this.checked
				console.log(e, this.checked);
			}
		}
	}
</script>

<style>
	.van-popup {
		width: 100%;
	}
</style>