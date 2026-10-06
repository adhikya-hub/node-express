let posts = [
  { id: 1, title: "Post1" },
  { id: 2, title: "Post2" },
  { id: 3, title: "Post3" },
];

//@desc get all posts
//@route GET /api/posts
export const getPosts = (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.status(200).json(posts);
  }
};

//@desc get single post
//@route GET /api/posts/id
export const getPost = (req, res, next) => {
  const id = parseInt(req.params.id);
  //res.status(200).json(posts.filter((post) => post.id === id));
  const post = posts.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`post with ${id} not found`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(post);
};

//@desc create new post
//@route POST /api/posts/
export const createPost = (req, res, next) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    const error = new Error(`please include title`);
    error.status = 400;
    return next(error);
  }
  posts.push(newPost);
  console.log(req.body);
  res.status(201).json(posts);
};

//@desc update post
//@route PUT /api/posts/:id
export const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json(`post with ${id} not found`);
  }
  post.title = req.body.title;
  res.status(200).json(posts);
};

//@desc delete post
//@route POST /api/posts/:id

export const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json(`post with ${id} not found`);
  }
  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
};
