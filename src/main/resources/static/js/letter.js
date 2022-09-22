$(function () {
    $("#sendBtn").click(send_letter);
    $(".close").click(delete_msg);
});

function send_letter() {
    $("#sendModal").modal("hide");
    var targetName = $("#recipient-name").val();
    var content = $("#message-text").val();

    $.post({
        url: CONTEXT_PATH + "/letter",
        data: {"targetName": targetName, "content": content},
        success: function (data) {
            data = $.parseJSON(data);
            $("#hintModal").modal("show");
            $("#hintBody").text(data.msg)
            setTimeout(function () {
                $("#hintModal").modal("hide");
                if (data.code == 200) {
                    window.location.reload();
                }
            }, 1500);
        }
    })
}

function delete_msg() {
    // TODO 删除数据
    $(this).parents(".media").remove();
}