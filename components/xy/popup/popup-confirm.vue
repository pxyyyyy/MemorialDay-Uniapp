<template>
	<view>
		<popup-base ref="show" :mask-click="maskClick">
			<view class="dialog">
				<view class="dialog-container" style="padding: 40rpx;">

					<view class="dialog-title">{{obj.titleName}}</view>
					<text class="flex-column-content-start-items-start">{{obj.contentName}}</text>
					<view class="dialog-btn">
						<button class="dialog-cancel" @click="closeDialog">{{obj.clearName}}</button>
						<button class="dialog-confirm" @click="confirmDialog">{{obj.confirmName}}</button>
					</view>
				</view>
			</view>

		</popup-base>
	</view>
</template>

<script>
	import popupBase from "./popup-base.vue"

	export default {
		name: 'PopupConfirm',
		components: {
			popupBase
		},
		props: {
			titleName: {
				type: String,
				default: "温馨提示"
			},
			contentName: {
				type: String,
				default: "内容"
			},
			clearName: {
				type: String,
				default: "取消"
			},
			confirmName: {
				type: String,
				default: "确定"
			},
			maskClick:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return { 
				obj: {
					titleName: this.titleName,
					contentName: this.contentName,
					clearName: this.clearName,
					confirmName: this.confirmName,
				}
			}
		},
		methods: {
			/**
			 * 2021-7-19 16:10:52
			 * 新的调用显示模态框函数
			 * titleName 标题名称
			 * contentName 内容
			 * clearName 取消按钮名称
			 * confirmName 确认按钮名称
			 * success 点击回调事件
			 * 调用格式：
			 * this.$refs.confirm.showModal({
					titleName:'提示HELLO',
					contentName:'HELLO WORID',
					clearName:'取消',
					confirmName:'确定',
					success(res){
						//console.log('用户点击确定');
					},
					cancel(){
						//console.log('用户点击取消');
					}
				})
			 * @param {Object} obj
			 */
			showModal(obj) {
				if (obj.titleName)
					this.obj.titleName = obj.titleName
				if (obj.contentName)
					this.obj.contentName = obj.contentName
				if (obj.clearName)
					this.obj.clearName = obj.clearName
				if (obj.confirmName)
					this.obj.confirmName = obj.confirmName
				if (obj.success)
					this.obj.success = obj.success
				if (obj.cancel)
					this.obj.cancel = obj.cancel
				this.$refs['show'].open()
			},
			confirmDialog() {
				this.$emit("confirm",this.confirmName)
				this.$refs['show'].close()
				if(this.obj.success){
					this.obj.success()
				}
			},
			open() {
				this.$refs['show'].open()
			},
			closeDialog() {
				this.$refs['show'].close()
				if(this.obj.cancel){
					this.obj.cancel()
				}
			}
		},
		onBackPress() {
			this.$refs['show'].close()
		}
	}
</script>

<style>
	@import url("/common/common.css");
</style>
