from segmentation_models.metrics import iou_score
import segmentation_models as sm
import matplotlib.pyplot as plt
import os
import numpy as np
from PIL import Image
import tensorflow as tf
import streamlit as st
from tensorflow import keras
import tensorflow_io as tfio
from keras.models import load_model
from tensorflow.keras.layers import *
from tensorflow.keras.models import load_model
SM_FRAMEWORK = tf.keras
focal_loss = sm.losses.cce_dice_loss

os.environ['TF_FORCE_GPU_ALLOW_GROWTH'] = 'true'

st.title('Nerve segmentation Back End')


@st.cache(allow_output_mutation=True)
def load_model():
    model_clf = keras.models.load_model(
        'E:\\ZSDGP\\Back-End\\classifier_nerve.h5')
    model = keras.models.load_model('E:\\ZSDGP\\Back-End\\segmentor.h5', custom_objects={
                                    'categorical_crossentropy_plus_dice_loss': focal_loss, 'iou_score': iou_score})
    return model_clf, model


model_clf, model = load_model()


def classifier_generator(images):
    '''Construct a data generator using tf.Dataset to load only images'''
    image = tfio.experimental.image.decode_tiff(images)
    image = tf.image.convert_image_dtype(image, tf.float32)
    image = tf.image.resize(image, [128, 128])
    return image


def model_predict(img_path):

    flag = 0
    img = classifier_generator(img_path)
    img = tf.expand_dims(img, 0)
    pred_clf = model_clf.predict(img)
    if pred_clf >= 0.4:
        pred_seg = model.predict(img)
        flag = 1
    else:
        pred_seg = np.zeros((1, 128, 128, 4), dtype=np.float32)
    return pred_seg, flag


up_file = st.file_uploader("Please upload an image file", type=["tif"])


if up_file is not None:
    fil_rd = Image.open(up_file)
    st.image(fil_rd, caption='Uploaded Image.', use_column_width=True)

    bytes_data = tf.convert_to_tensor(up_file.getvalue())
    submit = st.button('Predict')
    if submit:
        img, _ = model_predict(bytes_data)
        if _ == 1:
            st.success('Nerves found immediate medications needed')
            fig = plt.figure()
            ax = fig.add_subplot(1, 1, 1)
            ax.imshow(classifier_generator(bytes_data), cmap='gray')
            ax.imshow(img[0], alpha=0.7, interpolation='none')
            ax.contour(tf.argmax(img[0], axis=-1), colors='blue', levels=[0.6])
            ax.set_xticks([])
            ax.set_yticks([])
            st.write(fig)
        else:
            st.info('There are no nerves found in the ultrasound image')
