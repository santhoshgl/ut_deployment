$(document).ready(function (e) {
  $('#brand').change (function () {
    var $branch = $('#branch');
    var $url = "https://api.github.com/repos/santhoshgl/intital_repo/branches";
    fetchGitubApiResults($branch,$url);
  });
  $('#branch').change (function () {
    var $url = "https://api.github.com/repos/santhoshgl/intital_repo/branches";
    //fetchGitubApiResults($branch,$url);
  });

  function fetchGitubApiResults($value,$url) {
    console.info ($value);
    $.ajax( {
       url : $url,
       dataType : "jsonp",
       success : function ( returndata ) {
         $.each( returndata.data, function ( i, item ) {
            $value.append('<option id=' + this.name + ' value=' + this.name + '>' + this.name + '</option>');
         } );
       }
     });

  }

});
