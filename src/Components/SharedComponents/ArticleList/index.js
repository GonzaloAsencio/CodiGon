/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";


const Marker = styled.div`
padding-top:1rem;
padding-bottom:1rem;
.headline{
    margin-left:1rem;
}
.headline > h2{
    display: inline-block;
    border-bottom: 3px solid #0984e3;
}
 .marker-icon{
    padding-right:0.5rem;

 }
 .article-list {
    box-sizing: border-box;
    column-count: 1;
    margin-top:0px;
    padding:0px;
}
.article-list > div {
    display: list-item;
    padding-left:1rem;
    padding-bottom:1rem;
    list-style-type: none;
}
.article-list > p {
    padding-left:1rem;

}
 .article-list > div > a{
    cursor:pointer;
    text-decoration: none;
 }
 .article-list > div > a:hover{
    text-decoration: underline;
 }
 @media (min-width: 720px) {
    .article-list {
        column-count: 2;
    }

`;

const ArticleList= ({title, lists, marker}) => {
    const navigate = useNavigate()
return (
    <Marker>
        <div className='headline'>
            <h2>{title }</h2>
        </div>
        <div>
        <ul  className='article-list'>
            { Object.keys(lists).length > 0 ?(lists).map(post => (
                <div key={post._id}>
                    <FontAwesomeIcon icon={marker} className='marker-icon' />
                    <a onClick={()=> navigate(`/tutorial/post/${post._id}`)} id={`${post._id}`}>{post.title}</a>
                </div>
                )) : <p>No se escontró ningún artículo.</p>
            }
            </ul>
        </div>
    </Marker>
  );
};

export default ArticleList;