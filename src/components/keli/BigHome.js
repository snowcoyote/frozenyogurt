import React from 'react';
import ReactDOM from 'react-dom';
import bgHome from '../../images/bg-home.jpg';

/*
const homepagepicture = {
    src: "../../images/bg-home.jpg",
    alt: 'Home Page Picture'
  };

/*
function chgPic(e){
    e.target.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg');
    //e.target.setAttribute('src', 'frozenyogurt/src/images/bg-home.jpg');
    e.target.setAttribute('alt', 'Second Home Page Picture');
}
*/

export class BigHome extends React.Component {
    render() {
      return (
        <div id="body" className='home'>
          <h1>
          <a href="">Frozen Yogurt</a>
          </h1>
          <img //onClick ={chgPic}
            src={bgHome} 
            alt="" />
        </div>
      );
    }
  };
  
  ReactDOM.render(
    <BigHome />,
    document.getElementById('root')
  );