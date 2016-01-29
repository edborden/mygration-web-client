export default {

  initialize() {
    if (cloudinary) {
      cloudinary.setCloudName('mygration')
    }
  }

}