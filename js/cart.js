$(document).ready(function() {
    $("form").submit(function() { 
        var val = $("input[type=submit][clicked=true]").val();
        // DO WORK
    });
    $("form input[type=submit]").click(function() {
        $("input[type=submit]", $(this).parents("form")).removeAttr("clicked");
        $(this).attr("clicked", "true");
    });
});