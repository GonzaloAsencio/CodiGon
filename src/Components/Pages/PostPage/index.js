import {useContext, useEffect, useState} from "react";
import {useParams,Link} from "react-router-dom";
import './PostPage.css';
import {UserContext} from "../../UserContext";


export default function  PostPage()  {
  const [postInfo,setPostInfo] = useState(null);
  const {userInfo} = useContext(UserContext);
  const {id} = useParams();
  
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`)
      .then(response => {
        response.json().then(postInfo => {
          setPostInfo(postInfo);
        });
      });
  }, []);
  
  console.log(postInfo);
  if (!postInfo) return '';

  return (
    <>
    <div className="post-container">
      <h2>{postInfo.title}</h2>
      <div className="post-summary">
        <h4>{postInfo.summary}</h4>
      </div>
      <div className="author">by @{postInfo.author.username}</div>
      {userInfo.id === postInfo.author._id && (
        <div className="edit-row">
          <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            </svg>
            Edit this post
          </Link>
        </div>
      )}
      <div className="post-image">
        <img src={`http://localhost:4000/${postInfo.cover}`} alt=""/>
      </div>
      <div className="content" dangerouslySetInnerHTML={{__html:postInfo.content}} />
  </div>
  </>
  );
}
