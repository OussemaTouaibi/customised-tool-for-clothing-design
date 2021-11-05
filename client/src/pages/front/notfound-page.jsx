import React from 'react';
import Layout from '../../components/shared/layout'
import './notfound-page.styles.scss';


const NotFound = () => {
  
    return (
        <Layout>
        <section class="hero is-large is-info hero-imagee">
        <div class="hero-body">
            <div className='container'>
          <h1 className='fonts'>
          404 Not Found
          </h1>
          <h2 className='hero-title'>
          Unfortunately we can't find that page
          </h2>
        </div>
        </div>
        </section>
        </Layout>
    )

}

export default NotFound;