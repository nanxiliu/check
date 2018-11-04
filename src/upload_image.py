from __future__ import with_statement

import cloudstorage as gcs

import webapp2
import logging

from google.appengine.ext import blobstore
from google.appengine.ext.webapp import blobstore_handlers


def CreateFile(filename,imageFile):
  with gcs.open(filename, 'w', content_type = 'image/jpeg') as f:
    f.write(imageFile)
    f.close()

  blobstore_filename = '/gs' + filename
  return blobstore.create_gs_key(blobstore_filename)

class MyImageHandler(webapp2.RequestHandler):
    def post(self):
        bucket='cal_ballots'
        imageFile = self.request.get('file')
        naemofFile=self.request.get('filename1')
        fileName='/cal_ballots'+'/'+naemofFile
        blob_key = CreateFile(fileName,imageFile)
        logging.info("Blob-Key "+blob_key)
        imageUrl = 'https://%(bucket)s.storage.googleapis.com/%(file)s' % {'bucket':bucket, 'file':naemofFile}

        app = webapp2.WSGIApplication([('/myimagehandler', MyImageHandler)],debug=True)