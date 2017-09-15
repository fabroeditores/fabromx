// Form submit
$('#submit').click(function(){
  var data = $('form').serialize();
  $.ajax({
    url: 'http://emails.tanoshii.me/submit',
    method:'post',
    data: data,
    success: function(){
      $('#contact_form')[0].reset();
      alert('Your message was sent succesfully');
    }
  });
});

