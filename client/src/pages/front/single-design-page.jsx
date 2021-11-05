import React, { useContext, useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { MydesignsContext, PrototypesContext } from '../../context/mydesigns-context'
import Layout from '../../components/shared/layout'
import './single-design-page.styles.scss'


const SingleDesign = ({ match, history }) => {
    const { designs } = useContext(MydesignsContext);
    const { id } = match.params;
    const [design, setDesign] = useState(null);
    
    useEffect(()=> {
        const design = designs.find(item => Number(item.id) === Number(id))
  
          // if design does not exist, redirec to not found page
    if (!design){
        
    }
    setDesign(design)

    });

    if (!design) { return null 
    }
  const {title, imageUrl, discription} = design;

  return (
      <Layout>
          <div className='single-design-container'>
              <div className='design-image'>
                  <img src={imageUrl} alt='prototype' />
                  
              </div>
              <div className='name-size'>
                  <h2>{title}</h2>
                  <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
                  <h3>{discription}</h3>
              </div>
              <div className='add-to-favorite'>
              <button className='button is-black noname-btn'>
                  ADD TO FAVORITES
              </button>
              </div>
          </div>
      </Layout>
  )
}

 export default withRouter(SingleDesign);