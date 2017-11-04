/**
 * Created by huangling on 02/11/2017.
 */
import Vue from 'vue';
import App from './App.vue';

var vm = new Vue({
    el: '#app',
    // 选项
    data: {
        msg: 'test'
    },
    render: function(h) {
        return h(App);
    }
})