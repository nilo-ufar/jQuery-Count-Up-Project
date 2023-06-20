$(document).ready(function () {
    $(".counter").each(function () {
        var $this = $(this);
        var countTo = $this.attr("data-count");
        // console.log(countTo);
        $({ countNum: $this.text() }).animate(
            {
                countNum: countTo,
            },
            {
                duration: 10800,
                easing: "linear",
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                },
            }
        );
    });
});
