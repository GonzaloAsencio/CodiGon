
import cIcon from '../../../assets/Image/Icons/csharpicon.png';
import unityIcon from '../../../assets/Image/Icons/unityIcon.png';
import './MiniCard.css';

export const MiniCard = ({lists}) => {
  return (
    <div className='miniCard'>
        <div className='headline'>
            <h2>Artículos Recientes</h2>
        </div>
        <div className="test-div">
        {(lists.slice((Object.keys(lists).length -6),(Object.keys(lists).length))).map(post => (
            <div className="miniCard-container">
                <div className="miniCard-img">
                    <a href={`tutorial/post/${post._id}`}>
                        <img src={post.icon === 'Unity' ? unityIcon : cIcon} alt='' />
                    </a>
                </div>
                <div className="miniCard-txt">
                    <h2>{post.title}</h2>
                    <p>{post.summary}</p>
                </div>
            </div>
            ))
        }
        </div>
    </div>
  )
}

export default MiniCard;
