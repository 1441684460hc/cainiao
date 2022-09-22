$(function () {
    // $(".follow-btn").click(follow);
});

function follow(entityId) {
    var btn = this;
    $.post({
        url: CONTEXT_PATH + "/follow",
        data: {"entityType": 3, "entityId": entityId},
        success: function (data) {
            data = $.parseJSON(data);
            if (data.code == 200) {
                if (data.msg.indexOf("已关注") != -1) {
                    // 关注TA
                    $(btn).text("已关注").removeClass("btn-info").addClass("btn-secondary");
                } else {
                    // 取消关注
                    $(btn).text("关注TA").removeClass("btn-secondary").addClass("btn-info");
                }
                window.location.reload();
            } else {
                alert(data.msg);
            }
        }
    })
}