import express from 'express';
import BlogsController from '../controllers/blogsControllers';
const router=express.Router();
router.get('/blogs',BlogsController.getAllBlogs);
router.post('',BlogsController.addBlog);
router.delete('/:id',BlogsController.deleteBlog);
export default router;