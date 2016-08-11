/*
* ajax模块
* 请求请求接口
* 发送接口（待开发）
*/
export var async = {
    requsetXHR:(option)=>{
        let httpRequest = false;
        //判断ie与非ie实例化XHR对象
        if(window.XMLHttpRequest){
            httpRequest = new XMLHttpRequest();
            httpRequest.overrideMimeType('text/xml');//解决某些mozilla内核的问题
        }else if(window.ActiveXObject){
            try{  
                httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
            }catch(e){
                try {
                    http_request = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {}
            }
        }
        if(!httpRequest){
            console.log('请实例化XHR object');
        }

        httpRequest.onreadystatechange =()=>{
            // readyState的取值如下:
            // 0 (未初始化)
            // 1 (正在装载)
            // 2 (装载完毕)
            // 3 (交互中)
            // 4 (完成)
            if(httpRequest.readyState === 4){
                if(httpRequest.status === 200){
                    console.log(httpRequest.responseText);
                }else{
                    //一些状态码比如400参数错误 可自行判断
                    console.log(httpRequest.status);
                }
            }else{
                console.log('readyState状态：'+httpRequest.readyState)
            }
        }

        httpRequest.open(option.method,option.url);
        if(typeof option.data === 'object'){
            httpRequest.send(JSON.stringify(option.data));
        }else{
            httpRequest.send(null);
        }
    }
}