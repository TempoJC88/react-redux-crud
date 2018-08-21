import React,{Component} from 'react'

class Home extends Component{
    render(){
        const url = 'http://www.vvapl.com/userfiles/guesthouse_posts/post-207.jpg';
        return(            
            <div className="col s12">
                <img src={url} className="responsive-image" alt="HomePets" />
            </div>
        );
    }
}

export default Home;
