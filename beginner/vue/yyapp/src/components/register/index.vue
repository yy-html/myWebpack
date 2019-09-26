<template>
    <div>
        <v-header />

        <mt-field :state='telState' label="手机号" placeholder="请输入手机号" type="tel" v-model="tel"></mt-field>

        <mt-field :state='pwdState' label="密码" placeholder="请输入密码" type="password" v-model="pwd"></mt-field>

        <mt-field ref='captchaInput' :state='captchaState' label="验证码" v-model="captcha" placeholder="请输入验证码">
          <span @click='random()'>{{str}}</span>
          <span v-show='on'>&nbsp;&nbsp; & &nbsp;&nbsp;{{time}}</span>
        </mt-field>
        
        <mt-button type="danger" size="large" :disabled='!register'>register now</mt-button>
    </div>
</template>

<script>
    import Header from './header'
    import {Field,Button,Toast} from 'mint-ui'

    function isPoneAvailable(str) {
        var telReg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        if (!telReg.test(str)) {
            return false;
        } else {
            return true;
        }
    }

    export default {
        data(){
            return{
                tel: '',
                pwd: '',
                captcha: '',
                telState: '',
                pwdState: '',
                captchaState: '',
                arr: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9,0],
                str: '获取验证码',
                time: 5,
                on: false,
                
            }
        },
        mounted(){
            console.log(this)
        },
        methods:{
            random(){
                if(this.telState != 'success'){
                    Toast('Check tel number！')
                    return
                }
                if(this.on){
                    Toast('Please try again in' +this.time+  'second')
                    return
                }
                var _this = this
                this.on = true
                var timing = setInterval(function(){
                    _this.time --
                    if(_this.time <= 0){
                        clearInterval(timing)
                        _this.time = 5
                        _this.on = false
                    }
                },1000)
                this.str = ''
                this.captcha = ''
                for(var i = 0;i < 4;i ++){
                    this.str += this.arr[Math.floor(Math.random()*this.arr.length)]
                }
            },
            isPoneAvailable(str) {
                var telReg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
                if (!telReg.test(str)) {
                    return false;
                } else {
                    return true;
                }
            }
        },
        computed:{
            register(){
                return this.captchaState=='success' && this.pwdState=='success' && this.telState=='success'
            }
        },
        watch:{
            tel(newVal){
                if(this.isPoneAvailable(newVal)){
                    this.telState = 'success'
                }else if(newVal.length ==  0){
                    this.telState = ''
                }else{
                    this.telState = 'error'
                }
            },
            pwd(newVal){
                if(newVal.length > 2){
                    this.pwdState = 'success'
                }else if(newVal.length ==  0){
                    this.pwdState = ''
                }else{
                    this.pwdState = 'error'
                }
            },
            captcha(newVal){
                if(newVal == this.str){
                    this.captchaState = 'success'
                }else if(newVal.length == 0){
                    this.captchaState = ''
                }else{
                    this.captchaState = 'error'
                }
            }
        },
        components:{
            'v-header': Header
        }
    }
</script>
    
<style>

</style>