// 每次调用$.get(),$.post(),$.ajax()的时候，都会先调用这个函数
// 在这个函数中可以拿到我们给ajax的配置对象
$.ajaxPrefilter(function (options) {
    // 在发起真正的ajax的请求之前。统一拼接请求的根路径
    options.url = 'http://ajax.frontend.itheima.net' + options.url
    // 为有权限的接口，统一设置headers请求头
    if (options.url.indexOf('/my') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }
    // 给全局统一挂载 complete函数
    options.complete = function (res) {
        if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
            localStorage.removeItem('token')
            location.href = '/login.html'
        }

    }
})