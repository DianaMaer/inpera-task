var $form = $('form#contact-form'),
    url = 'https://script.google.com/macros/s/AKfycbzZQnTNffVUNRsNce4aCEbghXKh76llMf4yobU69Ov1qjl16Gi2/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})