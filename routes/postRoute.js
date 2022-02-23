const router = require('express').Router()

const postCrtl = require('../controllers/postCtrl')
const auth = require('../middleware/auth')

router.route('/posts')
    .post(auth, postCrtl.createPost)
    .get(auth, postCrtl.getPost)

router.route('/post/:id')
    .patch(auth, postCrtl.updatePost)

router.patch('/post/:id/like', auth, postCrtl.likePost)
router.patch('/post/:id/unlike', auth, postCrtl.unLikePost)

module.exports = router
