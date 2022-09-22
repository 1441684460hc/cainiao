$(function () {
    $("#publishBtn").click(publish);
});

function publish() {
    $("#publishModal").modal("hide");

    let title = $("#recipient-name").val();
    let content = $("#message-text").val();

    $.post({
        url: CONTEXT_PATH + "/discuss",
        data: {"title": title, "content": content},
        success: function (data) {
            data = $.parseJSON(data);
            $("#hintBody").text(data.msg);
            $("#hintModal").modal("show");
            setTimeout(function () {
                $("#hintModal").modal("hide");
                if (data.code == 200) {
                    // 刷新页面
                    window.location.reload();
                }
            }, 2000);
        }

    })


}