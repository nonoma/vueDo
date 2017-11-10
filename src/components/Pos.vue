<template>
    <div class="pos">
        <div>
            <el-row>
                <el-col :span="7" id='orderList'>
                    <h3>菜单明细</h3>
                    <el-tabs>
                        <el-tab-pane label="点单">
                            <el-table :data="tableData" border style="width: 100%">
                                <el-table-column prop="goodsName" label="商品" fixed></el-table-column>
                                <el-table-column prop="count" label="数量" width="70"></el-table-column>
                                <el-table-column prop="price" label="金额" width="70"></el-table-column>
                                <el-table-column label="操作" width="100" fixed="right">
                                    <template scope="scope">
                                        <el-button type="text" size="small" @click="delOrderList(scope.row)">删除</el-button>
                                        <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <div class="total">
                            	<span class="totalNumber">总量：<strong>{{totalNumber}}</strong></span>
                            	<span class="totalMoney">总额：<strong>{{totalMoney}}元</strong></span>
                            </div>
                            <div class="orderList-btns">
                                <el-button type="warning">挂单</el-button>
                                <el-button type="danger" @click="delAllOrderList">删除</el-button>
                                <el-button type="success" @click="checkOut">结账</el-button>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="挂单"></el-tab-pane>
                        <el-tab-pane label="外卖"></el-tab-pane>
                    </el-tabs>
                </el-col>
                <!--商品展示-->
                <el-col :span="17">
                    <div class="oftengoods">
                        <h3>常用商品</h3>
                        <ul>
                            <li v-for="oftenGoodItem in oftenGoods" @click='addOrderList(oftenGoodItem)'>
                                <span>{{oftenGoodItem.goodsName}}</span>
                                <strong>¥{{oftenGoodItem.price}}</strong>
                            </li>
                        </ul>
                    </div>
                    <div class="goods-type">
                        <el-tabs>
                            <el-tab-pane label="汉堡">
                                <ul class='cookList'>
                                    <li v-for="type0GoodItem in type0Goods[0]" @click='addOrderList(type0GoodItem)'>
                                        <span class="foodImg"><img src="http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg" width="100%"></span>
                                        <span class="foodName">{{type0GoodItem.goodsName}}</span>
                                        <span class="foodPrice">¥{{type0GoodItem.price}}元</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane label="小食">
                                <ul class='cookList'>
                                    <li v-for="type0GoodItem in type0Goods[1]" @click='addOrderList(type0GoodItem)'>
                                        <span class="foodImg"><img src="http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg" width="100%"></span>
                                        <span class="foodName">{{type0GoodItem.goodsName}}</span>
                                        <span class="foodPrice">¥{{type0GoodItem.price}}元</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane label="饮料">
                                <ul class='cookList'>
                                    <li v-for="type0GoodItem in type0Goods[2]" @click='addOrderList(type0GoodItem)'>
                                        <span class="foodImg"><img src="http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg" width="100%"></span>
                                        <span class="foodName">{{type0GoodItem.goodsName}}</span>
                                        <span class="foodPrice">¥{{type0GoodItem.price}}元</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane label="套餐">
                                <ul class='cookList'>
                                    <li v-for="type0GoodItem in type0Goods[3]" @click='addOrderList(type0GoodItem)'>
                                        <span class="foodImg"><img src="http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg" width="100%"></span>
                                        <span class="foodName">{{type0GoodItem.goodsName}}</span>
                                        <span class="foodPrice">¥{{type0GoodItem.price}}元</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {
                tableData: [],
                totalNumber: 0,
                totalMoney: 0,
                oftenGoods: [{
                        goodsId: 1,
                        goodsName: '香辣鸡腿堡',
                        price: 18
                    }, {
                        goodsId: 2,
                        goodsName: '田园鸡腿堡',
                        price: 15
                    }, {
                        goodsId: 3,
                        goodsName: '和风汉堡',
                        price: 15
                    }, {
                        goodsId: 4,
                        goodsName: '快乐全家桶',
                        price: 80
                    }, {
                        goodsId: 5,
                        goodsName: '脆皮炸鸡腿',
                        price: 10
                    }, {
                        goodsId: 6,
                        goodsName: '魔法鸡块',
                        price: 20
                    }, {
                        goodsId: 7,
                        goodsName: '可乐大杯',
                        price: 10
                    }, {
                        goodsId: 8,
                        goodsName: '雪顶咖啡',
                        price: 18
                    }, {
                        goodsId: 9,
                        goodsName: '大块鸡米花',
                        price: 15
                    }, {
                        goodsId: 20,
                        goodsName: '香脆鸡柳',
                        price: 17
                    }

                ],
                type0Goods: [
                    [{
                        "goodsId": 1,
                        "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
                        "goodsName": "香辣鸡腿堡",
                        "price": 18
                    }, {
                        "goodsId": 2,
                        "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
                        "goodsName": "田园鸡腿堡",
                        "price": 15
                    }, {
                        "goodsId": 3,
                        "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
                        "goodsName": "和风汉堡",
                        "price": 15
                    }],
                    [{
                        "goodsId": 4,
                        "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
                        "goodsName": "大包薯条",
                        "price": 18
                    }, {
                        "goodsId": 5,
                        "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
                        "goodsName": "脆皮炸鸡腿",
                        "price": 20
                    }, {
                        "goodsId": 6,
                        "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
                        "goodsName": "魔法鸡块",
                        "price": 20
                    }],
                    [{
                        "goodsId": 7,
                        "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
                        "goodsName": "可乐大杯",
                        "price": 10
                    }, {
                        "goodsId": 8,
                        "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
                        "goodsName": "雪顶咖啡",
                        "price": 18
                    }],
                    [{
                        "goodsId": 9,
                        "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
                        "goodsName": "儿童欢乐套餐",
                        "price": 25
                    }, {
                        "goodsId": 10,
                        "goodsImg": "http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
                        "goodsName": "快乐全家桶",
                        "price": 99
                    }]
                ],
            }
        },
        methods: {
        	totalCalc() {
        		this.totalNumber = 0;
        		this.totalMoney = 0;
        		this.tableData.forEach(element => {
        			this.totalNumber += element.count;
        			this.totalMoney += element.count * element.price;
        		});
        	},
            addOrderList(goods) {
                var isExist = false;
                for (let i = 0; i < this.tableData.length; i++) {
                    if (this.tableData[i].goodsId == goods.goodsId) {
                        isExist = true;
                    }
                }
                if (isExist) {
                    var arr = this.tableData.filter(element => element.goodsId == goods.goodsId);
                   arr[0].count++;
                } else {
                    var newGoods = {
                        count: 1,
                        goodsId: goods.goodsId,
                        goodsName: goods.goodsName,
                        price: goods.price
                    };
                    this.tableData.push(newGoods);
                }
                this.tableData.forEach(element => {
                	this.totalNumber += element.count;
                	this.totalMoney += element.count * element.price;
                });
 				this.totalCalc();
            },
            delOrderList(goods) {
            	this.tableData = this.tableData.filter(element => element.goodsId != goods.goodsId);
            	this.totalCalc();
            },
            delAllOrderList() {
            	this.totalNumber = 0;
            	this.totalMoney = 0;
            	this.tableData = [];
            },
            checkOut() {
            	if(this.tableData.length != 0) {
            		this.totalNumber = 0;
            		this.totalMoney = 0;
            		this.tableData = [];           		
            		this.$message({
            			message: "感谢你为门店贡献出一份力量，望再接再厉！",
            			type: "success"
            		});
            	}else {
            		this.$message({
            			message: "没有订单呢，不要太着急啦~",
            			type: "error"
            		});
            	}
            }

        }
}
</script>
<style>
#orderList {
    border-right: 2px solid #dfe4ed;
}

.orderList-btns {
    margin-top: 10px;
    text-align: center;
}
.total {
	text-align: center;
	padding: 10px;
}
.total strong {
	color: red;
}
#orderList h3,
.oftengoods h3 {
    padding: 10px;
    border-bottom: 2px solid #dfe4ed;
}

.oftengoods li {
    padding: 10px;
    border: 1px solid #ff9e00;
    border-radius: 4px;
    float: left;
    margin: 10px;
    background-color: #fff;
    cursor: pointer;
    color: brown;
}

.oftengoods li strong {
    color: #37b99d;
}

.goods-type {
    clear: both;
}

.cookList {
    padding: 10px;
}

.cookList li {
    list-style: none;
    width: 23%;
    border: 1px solid #ff9e00;
    height: auto;
    overflow: hidden;
    background-color: #fff;
    padding: 2px;
    float: left;
    margin: 2px;
    cursor: pointer;
}

.cookList li span {
    display: block;
}

.foodImg {
    float: left;
    width: 40%;
    height: auto;
    margin-right: 20px;
}

.foodName {
    font-size: 18px;
    padding-left: 10px;
    color: brown;
}

.foodPrice {
    color: #37b99d;
    font-size: 16px;
    padding-left: 10px;
    padding-top: 10px;
}
</style>
