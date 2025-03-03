import express from 'express';
import Post from '../models/post.js';

const router = express.Router();

// CREATE (Tambahkan ID otomatis di response)
router.post('/posts', async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(201).json({ id: post._id, ...post.toObject() });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// READ (All Posts) - Pastikan ID terlihat
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts.map(post => ({ id: post._id, ...post.toObject() })));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// READ (Single Post)
router.get('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });
        res.json({ id: post._id, ...post.toObject() });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// UPDATE
router.put('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!post) return res.status(404).json({ message: "Post not found" });
        res.json({ id: post._id, ...post.toObject() });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE
router.delete('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });
        res.json({ message: 'Post deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
