import api from "../utils/api";

export const getAllPosts = async () =>
{
    const response = await api.get("/posts/all");
    return response.data;
};

export const getFollowingPosts = async () =>
{
    const response = await api.get("/posts/followings");
    return response.data;
};

export const getUserPosts = async (userId) =>
{
    const response = await api.get(`/posts/user/${ userId }`);
    return response.data;
};

export const createPost = async (postData) =>
{
    const response = await api.post("/posts/create", postData);
    return response.data;
};

export const likePost = async (postId) =>
{
    const response = await api.post(`/posts/like/${ postId }`);
    return response.data;
};

export const unlikePost = async (postId) =>
{
    const response = await api.delete(`/posts/unlike/${ postId }`);
    return response.data;
};

export const createComment = async (commentData) =>
{
    const response = await api.post(`/posts/create-comment/${ commentData.post_id }`, commentData);
    return response.data;
};

export const deleteComment = async (commentId) =>
{
    const response = await api.delete(`/posts/delete-comment/${ commentId }`);
    return response.data;
};

export const updatePost = async (postId, postData) =>
{
    const response = await api.put(`/posts/update/${ postId }`, postData);
    return response.data;
};

export const deletePost = async (postId) =>
{
    const response = await api.delete(`/posts/delete/${ postId }`);
    return response.data;
};
