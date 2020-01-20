import React from 'react';
import './home.css';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    render() {
        return(
            // word wrap: alt + z
            <div className = 'home'>

            <h2>Ready to get started?</h2>

            <Link to = '/login'>
            <button type="button" className="btn btn-primary">Log In</button>
            </Link>

            <Link to = '/register'>
            <button type="button" className="btn btn-primary">Register</button>
            </Link>

                <div className = 'container'>
                <div className = 'row'>
                        <div className = 'col-sm'>
                            <h4>Post your purchases</h4><br/>
                            <p>
                                Whenever you make a purchase or contribute to a savings account, post the transaction to Budget Buddy and we'll do the math for you.<br/>
                            </p>
                            <i className="large material-icons">view_list</i>
                        </div>
                        <div className = 'col-sm'>
                            <h4>Know where you stand</h4><br/>
                            <p>
                            When you know how much money you have left for a given month, you can rest easy; knowledge is power.<br/>
                            </p>
                            <i className="large material-icons">tag_faces</i>
                        </div>
                        <div className = 'col-sm'>
                            <h4>Plan for the future</h4><br/>
                            <p>It is easier to plan for the future when you know how much money you have, down to the cent.</p><br/>
                            <i className="large material-icons">trending_up</i>
                        </div>
                    </div>
                </div>

                <img 
                    className = 'image'
                    src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ugallery.com%2Fart%2Fphotography-Nantucket-Moors-in-Fog&psig=AOvVaw0Z-DjCO_Uq3O0q9w-wyHSb&ust=1579552429924000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPC-sb3BkOcCFQAAAAAdAAAAABAD'
                    alt = 'Foggy Moor'    
                />
        </div>
           
        )
    }
}

export default Home;