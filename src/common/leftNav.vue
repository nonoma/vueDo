<template>
    <div class="leftNav">
        <ul>
            <router-link to="/" class="item">
                <li>
                    <i class="icon iconfont icon-shouyin"></i>
                    <div>收银</div>
                </li>
            </router-link>
            <router-link to="/store" class="item">
                <li>
                    <i class="icon iconfont icon-dianpu"></i>
                    <div>店铺</div>
                </li>
            </router-link>
            <router-link to="/vip" class="item">
                <li>
                    <i class="icon iconfont icon-huiyuan"></i>
                    <div>会员</div>
                </li>
            </router-link>
            <router-link to="/product" class="item">
                <li>
                    <i class="icon iconfont icon-shangpin"></i>
                    <div>商品</div>
                </li>
            </router-link>
            <router-link to="/count" class="item">
                <li>
                    <i class="icon iconfont icon-tongji"></i>
                    <div>统计</div>
                </li>
            </router-link>
            <router-link to="/setting" class="item">
                <li>
                    <i class="icon iconfont icon-settings"></i>
                    <div>设置</div>
                </li>
            </router-link>
        </ul>
    </div>
</template>
<script>
	export default {
		data() {
			return {
				active: false
			}
		}
	}
</script>
<style>
.leftNav {
    width: 5%;
    height: 100%;
    float: left;
    background-color: #37b99d;
}

.leftNav li {
    font-size: 14px;
    color: #fff;
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid #fff;
    cursor: pointer;
}

.leftNav li:hover {
    color: #ff9e00;
}

.leftNav li i {
    font-size: 45px;
}
.leftNav .item {
	text-decoration: none;
}
</style>
