const {google} = require('googleapis');
var compute = google.compute('beta');

authorize(function(authClient) {
  var request = {
    // Project ID for this request.
    project: 'symmetric-span-283211',  // TODO: Update placeholder value.

    // The name of the zone for this request.
    zone: 'us-central1-a',  // TODO: Update placeholder value.

    // Name of the instance resource to return.
    instance: '3181900723546637213',  // TODO: Update placeholder value.

    auth: authClient,
  };

  compute.instances.get(request, function(err, response) {
    if (err) {
      console.error(err);
      return;
    }

    // TODO: Change code below to process the `response` object:
    console.log(JSON.stringify(response, null, 2));
  });
});

function authorize(callback) {
  google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/cloud-platform']
  }).then(client => {
    callback(client);
  }).catch(err => {
    console.error('authentication failed: ', err);
  });
}