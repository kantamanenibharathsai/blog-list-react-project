// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachBlogItem} = props
  const {title, description, publishedDate} = eachBlogItem

  return (
    <li className="list-item">
      <div className="title-date-container">
        <h1 className="title">{title}</h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}
export default BlogItem
