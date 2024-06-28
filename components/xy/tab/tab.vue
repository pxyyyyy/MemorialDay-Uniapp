<template>
	<view>
		<view class="flex-start" style="width: 100%;">
			<view @click="switchTab(index)" v-for="(item,index) in tabList" :key="index" class="tab" :id="`id${index}`"
				:class="{ active: current === index }">
				<view class="">{{item.title}}</view>
				<view v-if="current == index" class="line"></view>
			</view>
		</view>
		<view ref="id0" id="id0" class="section-title" style="height: 1000rpx;background-color: #7bff23;">标题1</view>
		<view ref="id1" id="id1" class="section-title" style="height: 1000rpx;background-color: #ffe978;">标题1</view>
	</view>
</template>

<script>
	export default {
		props: {
			tabList: {
				type: Array,
				default: new Array()
			},
		},
		data() {
			return {
				current: 0,
				scrollTop: 0
			}
		},
		created() {
			this.tabList.forEach((item, index) => {
				item.id = index
			})
			console.log('tabList', this.tabList);
		},
		methods: {
			switchTab(index) {
				this.current = index
				// 延迟滚动以避免影响Tab的切换动画
				// setTimeout(() => {
				// 	const targetId = this.tabList[index].id;
				// 	console.log('targetId', targetId, this.$refs[targetId]);
				// 	const offset = 0; // 根据需要设置滚动偏移量
				// 	uni.pageScrollTo({
				// 		scrollTop: this.$refs[targetId].offsetTop + offset,
				// 		duration: 300, // 滚动动画持续时间
				// 	});
				// }, 100); // 延迟100毫秒，等待Tab切换动画完成

				// const sectionId = 'id' + index;
				// this.getSectionTop(sectionId).then((res) => {
				// 	console.log('scrollTop', res, this.scrollTop);
				// 	uni.pageScrollTo({
				// 		scrollTop: res, // 获取标题的顶部位置
				// 		duration: 300, // 滚动动画持续时间
				// 	});
				// })

				const sectionId = 'id' + index;
				document.querySelector(sectionId).scrollIntoView({
					behavior: "smooth"
				})

			},
			// 获取标题元素的顶部位置
			getSectionTop(sectionId) {
				return new Promise((resolve, reject) => {
					console.log('sectionId', sectionId);
					const section = uni.createSelectorQuery().select('#' + sectionId);
					section.boundingClientRect(function(rect) {
						console.log('rect', rect);
						if (rect) {
							this.scrollTop = rect.bottom;
							resolve(rect.bottom)
						}
					}).exec();
				})

			},
		}
	}
</script>

<style  lang="scss" scoped>
	@import url("@/common/common.css");

	.tab {
		padding: 0 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.line {
		width: 40rpx;
		height: 7rpx;
		background-color: #ff557f;
		border-radius: 100rpx;
	}

	.active {
		font-weight: bold;
	}

	uni-page-body {
		height: 100%;
		overflow: hidden;
	}

	.tab-scroll-sticky {
		height: 100%;
	}

	.flexRowCc {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.scroll-content {
		position: relative;

		::-webkit-scrollbar {
			display: none;
			width: 0 !important;
			height: 0 !important;
			-webkit-appearance: none;
			background: transparent;
			color: transparent;
		}

		.scroll-tab {
			@extend .flexRowCc;
			justify-content: space-between;
			width: 100%;
			height: 44px;
			box-sizing: border-box;
			border-top: 1px solid #F1F1F1;
			border-bottom: 1px solid #F1F1F1;
			background: #FFFFFF;
			position: relative;
			z-index: 999;
			// overflow-x: auto;

			&-static {
				position: relative !important;
			}

			&-fixed {
				position: fixed;
				top: 0px;
				left: 0;
				width: 100%;
				z-index: 9999;
			}

			&-list {
				text-align: center;
				font-size: 24upx;
				color: #2266BC;
				flex: 1 1 auto;
				padding: 0 10upx;
				position: relative;

				&-text {
					display: inline-block;

					&-line {
						position: absolute;
						height: 4upx;
						transform: translateX(-50%);
						left: 50%;
						border-radius: 16upx;
						transition-duration: .5s;
						margin-top: 4rpx;
					}
				}
			}
		}
	}

	.scroll-warp {
		height: 100vh;
		padding-bottom: 200upx;
		// margin-bottom: 200upx;
	}

	// ---------------------------------------------
	.directSignature {
		&-top {
			width: 750upx;
			background: #f3c55c;
			height: 500upx;
			padding: 21upx;
		}

		&-tabstatus {
			background-image: linear-gradient(to left, #f97e36, #f3c55c);
			padding: 10upx 30upx;
			display: inline-block;
			margin: 20upx 0;
			color: #FFFFFF;
			border-radius: 0 30upx 30upx 0;
		}

		&-checkProject {
			padding: 0 20upx;
		}
	}

	// 检查项目
	.directSignature-checkProject {
		&-title {
			color: #2266bc;
			font-size: 30upx;
			font-weight: 550;
			// background-image: linear-gradient(to bottom, #e3edf9, #fff);
			padding: 20upx;
			border-radius: 15upx;
			border-bottom: 3upx solid #eff5fb;
			white-space: 4upx;
			margin-bottom: 7upx;
			background-color: #e3edf9;
		}

	}
</style>