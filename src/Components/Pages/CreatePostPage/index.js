import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
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
    
    const response = await fetch('http://localhost:4000/post', {
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

  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        
    ['blockquote', 'code-block'],
    [{ 'header': 1 }, { 'header': 2 }],              
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],
    [{ 'indent': '-1'}, { 'indent': '+1' }],        
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],        
    [{ 'font': [] }],
	  ['link', 'image','video'],
    [{ 'align': [] }],
    ['clean']                                      
  ];

  const module = {
    toolbar:toolbarOptions,
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];


  return (
    <form className="post-form" onSubmit={createNewPost}>
      <div className="post-inputs">
      <input type="title"
             placeholder={'Title'}
             value={title}
             onChange={ev => setTitle(ev.target.value)} />
      <input type="summary"
             placeholder={'Summary'}
             value={summary}
             onChange={ev => setSummary(ev.target.value)} />
      <div className="post-selectors">
      <input type="file"
             onChange={ev => setFiles(ev.target.files)} />
      <select value={icon} onChange={handleChangeLanguague}>
          <option value="Unity">Unity</option>
          <option value="Csharp">C#</option>
      </select>
      </div>
    </div>
      <ReactQuill theme='snow' value={content} onChange={newValue => setContent(newValue)} modules={module} formats={formats} style={{'marginBotton':`1rem`}}/>
      <div style={{'paddingTop':`1rem`}}>
        <Button text='Create Post' size={'medium'} />
      </div>
    </form>
  );
}
