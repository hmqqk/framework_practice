/**
 * Created by liuhong on 2017/1/13.
 */
$(document).on("pageinit","#pageone",function(){

    $(window).on("orientationchange",function(){
        alert("方向已改变！");
    });

    $(document).on("pagebeforecreate",function(event){
        alert("触发 pagebeforecreate 事件！");
    });
    $(document).on("pagecreate",function(event){
        alert("触发 pagecreate 事件！");
    });
    $(document).on("pageinit",function(event){
        alert("触发 pageinit 事件！")
    });

    $("#header_part").on("tap",function(){
        $(this).hide();
    });
    $("#myfooter").on("taphold",function(){
        $(this).hide();
    });
    $("#myfooter").on("swipe",function(){
        alert("swipe event starting");
    });
    $(document).on("scrollstart",function(){
        alert("开始滚动！");
    });

});