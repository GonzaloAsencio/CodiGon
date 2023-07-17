import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import './EditorPost.css';
import {useState} from 'react';
import {Navigate} from 'react-router-dom';
import Button from '../../SharedComponents/Button/index';


export default function CreatePost() {
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const [icon, setIcon] = useState('Unity');
  const [redirect, setRedirect] = useState(false);

  const handleChangeLanguague = (event) => {
    setIcon(event.target.value);
  };
  async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);
    data.set('color','');
    data.set('icon',icon);
    ev.preventDefault();

    const response = await fetch('https://codigon.onrender.com/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
  <div className='post-container'>
     <h2>Crea tu Artículo</h2>
    <form className="post-form" onSubmit={createNewPost}>
      <div className="post-inputs">
      <input type="title"
             placeholder={'Título'}
             value={title}
             onChange={ev => setTitle(ev.target.value)} />
      <input type="summary"
             placeholder={'Subtítulo'}
             value={summary}
             onChange={ev => setSummary(ev.target.value)} />
      <div className="post-selectors">
        <input type="file"
              onChange={ev => setFiles(ev.target.files)} />
          <div className='select-box'>
            <p>Lenguaje</p>
            <select value={icon} onChange={handleChangeLanguague}>
                <option value="Unity">Unity</option>
                <option value="Csharp">C#</option>
            </select>
          </div>
      </div>
    </div>
      <EditorToolbar/>
      <ReactQuill theme='snow' value={content} onChange={newValue => setContent(newValue)} modules={modules} formats={formats} cols="40" rows="5" style={{'marginBotton':`1rem`, 'width':'100%'}}/>
      <div style={{'paddingTop':`1rem`}}>
        <Button text='Create Post' />
      </div>
    </form>
  </div>
  );
}
