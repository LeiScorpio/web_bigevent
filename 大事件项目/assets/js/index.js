$(function () {
    // 调用函数获取用户基本信息
    getUserInfo()



})
// 定义函数获取用户基本信息
getUserInfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        // headers: {
        //     Authorization: localStorage.getItem('token') || ''
        // },
        success: function (res) {
            if (res.status !== 0) {
                return layui.layer.msg('获取用户信息失败！')
            }
            renderAvater(res.data)
        }
        // complete: function (res) {
        //     if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
        //         localStorage.removeItem('token')
        //         location.href = '/login.html'
        //     }
        // }
    })

    // }渲染用户信息
    function renderAvater() {
        var name = user.nickname || user.username;
        $('#welcome').html('欢迎nbsp;nbsp;' + name);
        if (user.user_pic !== null) {
            $('.layui-nav-img').attr('src', user.user_pic).show()
        } else {
            $('.layui-nav-img').hide()
            var first = name[0].toUpperCase();
            $('.text-avatar').html(first).show();
        }

    }