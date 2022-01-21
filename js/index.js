$(document).ready(function() {
  var BUILD_ENDPOINT = BINDERHUB_HOST + '/build/gh';

  $('.launch-item').click(function(event) {
    var name = $(event.currentTarget).data('example-name');
    var url = $(event.currentTarget).data('example-url');
    var ref = 'main';

    $('#loading_modal').modal({
      backdrop: 'static',
      keyboard: false,
      show: true
    });

    $('#loader_text').html('Launching ' + name);

    var buildUrl = BUILD_ENDPOINT + '/bqplot/bqplot-gallery/' + ref + '?urlpath=voila/render/' + url;
    var evtSource = new EventSource(buildUrl);
    evtSource.onmessage = function(event) {
      var data = JSON.parse(event.data);
      $('#loader_text').html(data.phase);
      console.log(data.message);
      if (data.phase === 'ready') {
        evtSource.close();
        var redirectUrl = data.url;
        var token = data.token;
        var redirect = redirectUrl + 'voila/render/' + url + '?token=' + token;
        $('#loader_text').html('Launching');
        window.location.href = redirect;
      }
    };
    return false;
  });
});
