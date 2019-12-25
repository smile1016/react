const swiper = require('./swiper.json')
const hotcate = require('./hotcate.json')
const list = require('./cookbook-list.json')
const category = require('./cookbook-category.json')
module.exports=()=>{
    return {
        swiper,
        hotcate,
        list,
        category
    }
}