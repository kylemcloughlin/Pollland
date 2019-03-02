    $(document).ready(function() {


      $(".add-more").click(function(){
          let html = `<div class="copy hide">
                        <div class="control-group input-group" style="margin-top:10px">
                        <input type="text" name="addmore[]" class="form-control col-lg-4" placeholder="Option">
                        <input type="text" name="addmore[]" class="form-control col-lg-8" placeholder="Description (optional)">
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


    });