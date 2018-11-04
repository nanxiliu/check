'use strict';

// [START storage_quickstart]
// Imports the Google Cloud client library
function upload(){
    const {Storage} = require('@google-cloud/storage');

    // Your Google Cloud Platform project ID
    const projectId = 'check-221407';

    // Creates a client
    const storage = new Storage({
      projectId: projectId,
    });

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    const bucketName = 'cal_ballots';
    const filename = 'hint10.JPG';

    // Uploads a local file to the bucket
    await storage.bucket(bucketName).upload(filename, {
      // Support for HTTP requests made with `Accept-Encoding: gzip`
      gzip: true,
      metadata: {
        // Enable long-lived HTTP caching headers
        // Use only if the contents of the file will never change
        // (If the contents will change, use cacheControl: 'no-cache')
        cacheControl: 'public, max-age=31536000',
      },
    });

    console.log(`${filename} uploaded to ${bucketName}.`);
}
// [END storage_quickstart]