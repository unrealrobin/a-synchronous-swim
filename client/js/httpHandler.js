(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  //
  const commandFetcher = () => {
    $.ajax({
      method: 'GET',
      url: "http://127.0.0.1:3000" + '/random',
      success: (response) => {
        console.log(response)
        SwimTeam.move(response);
      },
      error: (err) =>{
        console.log("Make more choices on Server")
      }
    });

  }
  //setInterval(commandFetcher, 10000);

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: serverUrl + '/file', //changed from 'FILL_ME_IN'
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
      console.log('File Posted')
        window.location = window.location.href;
      },
      error: () => {'Error'}
    });
  };

  //code below checks for image constraints, if image is a jpeg and selected, passes it as an argument to ajax file upload.

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();
