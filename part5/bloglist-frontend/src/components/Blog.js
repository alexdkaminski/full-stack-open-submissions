import React from 'react'
import Toggleable from './Togglable'
import LikeButton from './LikeButton'
import DeleteButton from './DeleteButton'
import PropTypes from 'prop-types'

const Blog = ({ blog, user, updateBlog, deleteBlog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const addLike = () => {
    let blogObject = {}
    blogObject.user = blog.user.id
    blogObject.author = blog.author
    blogObject.title = blog.title
    blogObject.url = blog.url
    blogObject.likes = blog.likes + 1
    updateBlog(blog.id, blogObject)
  }

  const deleteClick = () => {
    console.log('delete click')
    deleteBlog(blog.id)
  }

  Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    updateBlog: PropTypes.func.isRequired,
    deleteBlog: PropTypes.func.isRequired,
  }

  return (
    <div className="blog" style={blogStyle}>
      <div>
        {blog.title} {blog.author}
        <Toggleable buttonLabel='view' hideLabel='hide'>
          <div className="blogUrl">{blog.url}</div>
          <div>likes <span className="blogLikes">{blog.likes}</span><LikeButton addLike={addLike}/></div>
          <div className="blogAuthor">{blog.author}</div>
          {blog.user.username === user.username &&
            <div><DeleteButton deleteClick={deleteClick}/></div>
          }
        </Toggleable>
      </div>
    </div>
  )
}

export default Blog
