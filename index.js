$(function(){
    
        $('#js-shopping-list-form').on('submit', function(event) {
            event.preventDefault(); //prevents the events of the form running(add to url, clearing form, and refresh)
            let shoppingItem = $('#shopping-list-entry').val();
            let newItem = `<li>
            <span class="shopping-item">${shoppingItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`
          $('.shopping-list').append(newItem);
        });
 
        $('.shopping-item-delete').on('click', function(event) {
            $(event.target).closest('li').remove(); //target is the item that is selected
        });

        $('.shopping-item-toggle').on('click', function(event) {
            //when check is clicked
            //item becomes crossed out
            $(event.target).closest('li').children('span').toggleClass('shopping-item__checked');
        });
        //$('.shopping-item__checked')


    });

























// $(function(){

//     handleFormSubmit() { $('#js-shopping-list-form').on('submit', function(e) { e.preventDefault(); const input = $(e.currentTarget).find('#shopping-list-entry').val() $("button").click(function(event) { $("ul").append( <li> <span class="shopping-item">${input}</span> <div class="shopping-item-controls"> <button class="shopping-item-toggle"> <span class="button-label">check</span> </button> <button class="shopping-item-delete"> <span class="button-label">delete</span> </button> </div> </li> ); }); }) }

