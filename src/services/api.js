import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const createPost = async (data) => {
  try {
    const response = await API.post('/posts', data);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const response = await API.get('/posts');
    return response.data.map(post => ({
      id: post._id,  
      title: post.title,
      content: post.content,
      imageUrl: post.imageUrl, 
      tags: post.tags,
      date: new Date(post.createdAt).toDateString(),
    }));
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const getPost = async (id) => {
  try {
    const response = await API.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching post with id ${id}:`, error);
    throw error;
  }
};

export const updatePost = async (id, data) => {
  try {
    const response = await API.put(`/posts/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Error updating post with id ${id}:`, error);
    throw error;
  }
};


export const deletePost = async (id) => {
  try {
    await API.delete(`/posts/${id}`);
    return { success: true, message: `Post ${id} deleted successfully` };
  } catch (error) {
    console.error(`Error deleting post with id ${id}:`, error);
    throw error;
  }
};
