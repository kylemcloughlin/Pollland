$(document).ready(function() {

    $(".add-more").click(function(){
        let html = `<div class="copy hide">
                    <div class="control-group input-group" style="margin-top:10px">
                    <input type="text" name="poll_opt" class="form-control col-lg-4 mr-1" placeholder="Option">
                    <input type="text" name="opt_des" class="form-control col-lg-8" placeholder="Description (optional)">
                    <div class="input-group-btn">
                      <button class="btn btn-danger remove" type="button"><strong>-</strong></button>
                    </div>
                  </div>
                </div>`

        $(".after-add-more").after(html);
    });

    $("body").on("click",".remove",function(){
      $(this).parents(".control-group").remove();
    });

    $(".add-more-friend").click(function(){
        let html = `<div class="input-group email-group justify-content-md-center my-2">
                        <input type="email" name="send_to" class="form-control col-lg-4" placeholder="Email">
                        <div class="input-group-btn">
                            <button class="btn btn-danger remove-friend" type="button"><strong>-</strong></button>
                            </div>
                    </div>`

        $(".after-add-more-friend").after(html);
    });

    $("body").on("click",".remove-friend",function(){
      $(this).parents(".email-group").remove();
    });

});