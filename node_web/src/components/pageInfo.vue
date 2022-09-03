<template>
	<div>
		<ul class="page">
			<li @click="prev()">«</li>
			<li v-for="index in total" :key="index" @click="change(index)" :class="index===current?'isActive':''" >{{index}}</li>
			<li @click="next()">»</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'PageInfo',
		props:['current','total'],
		data(){
			return {
			}
		},
		watch:{
			current(newVal,oldVal){
				if(newVal!=oldVal){
					this.$emit('current-change',this.current)
				}
			}
		},
		methods:{
			next(){
				this.$emit('update:current',this.current<this.total?this.current+1:this.total)
				},
			prev(){
				this.$emit('update:current',this.current>1?this.current-1:1)
			},
			change(index){
				this.$emit('update:current',index)
			}
		}
	}
</script>

<style scoped>
	ul.page {
		cursor: pointer;
		display: inline-block;
		font-size: 1.25rem;
		list-style: none;
		user-select: none;
	}
	.page li{
		display: inline;
		padding: 5px 10px;
	}
	.page li:hover{
		background-color: #666;
	}
	li.isActive{
		background-color: #0f0;
		color: #fff;
	}
</style>