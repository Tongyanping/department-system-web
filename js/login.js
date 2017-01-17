function check(){
    var txt_name = document.getElementById('username');
    var txt_pwd = document.getElementById('userpwd');
    var err = document.getElementById('error');
    if (txt_name.value == '' || txt_name.value =='请输入用户名'|| txt_pwd.value == ''|| txt_pwd.value == '******') {
        //alert('sb');
        err.style.visibility="visible";
    }
    else{
        $.ajax({
        type: "POST",
        url: 'http://www.baidu.com',
        data: { loginName: txt_name, password: txt_pwd },
        success: function (data) {
                    
        },error:function(data, message){
            //alert(message);
        }
    });
    }
}