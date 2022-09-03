<template>
	<div>
		<div class="article">
			<div v-for="item in list" :key='item.id'>
				<h3>{{ item.id }}.{{ item.title }}</h3>
				<p>{{ item.date }}</p>
			</div>

		</div>
		<PageInfo :total="form.total" :current.sync="form.pageNum" @current-change="query"></PageInfo>
	</div>
</template>

<script>
	/*
	分页组件PageInfo：
	功能：实现element-ui的分页功能。
	total：是页面总数
	current：是当前所在页数
	current-change事件：监听current,改变时调用父组件的方法。
	*/
	import PageInfo from "./pageInfo.vue"
	export default {
		name: 'ArticleList',
		data() {
			return {
				list: [],
				form: {
					pageSize: 5,
					pageNum: 1,
					total: 5
				}
			}
		},
		mounted() {
			this.query()
		},
		methods: {
			query() {
				this.$axios({
					method: 'post',
					url: 'api/data',
					data: this.form
				}).then(res => {
					this.list = res.data.data
					this.form.pageSize=res.data.pageSize
					this.form.pageNum =res.data.pageNum
					this.form.total=res.data.total
				})
			}

		},
		components: {
			PageInfo
		}
	}
</script>

<style scoped>
	.article div {
		width: 300px;
		height: 100px;
		box-shadow: 0 0 2px black;
		margin: 4px;
		display: inline-block;
	}

	button {
		font-size: 30px;
	}
</style>
