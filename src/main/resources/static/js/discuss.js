function like(btn, entityType, entityId, entityUserId) {
    $.post({
        url: CONTEXT_PATH + "/like",
        data: {"entityType": entityType, "entityId": entityId, "entityUserId": entityUserId},
        success: function (data) {
            data = $.parseJSON(data);
            if (data.code == 200) {
                $(btn).children("i").text(data.likeCount);
                $(btn).children("b").text(data.likeStatus == 1 ? "已赞" : '赞');
            } else {
                alert(data.msg)
            }
        },
    })
}