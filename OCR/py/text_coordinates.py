import io
import os


def detect_text(path):
    """Detects text in the file."""
    from google.cloud import vision
    client = vision.ImageAnnotatorClient()

    with io.open(path, 'rb') as image_file:
        content = image_file.read()

    image = vision.types.Image(content=content)

    response = client.text_detection(image=image)

    texts = response.text_annotations
    print('Texts:')

    f = open('ballot_coords.txt', 'w')

    for text in texts:
        f.write('\n"{}"'.format(text.description))
        print('\n"{}"'.format(text.description))

        vertices = (['({},{})'.format(vertex.x, vertex.y)
                    for vertex in text.bounding_poly.vertices])

        f.write('bounds: {}'.format(','.join(vertices))+ '\n')

        print('bounds: {}'.format(','.join(vertices)))

    f.close()

detect_text('/Users/lillianbu/Documents/Cal_hacks/check/sampleBallot.png')