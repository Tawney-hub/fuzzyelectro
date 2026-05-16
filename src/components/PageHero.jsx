import React from 'react';
import { Link } from 'react-router-dom';

const PageHero = ({ image, eyebrow, title, lead, breadcrumbs }) => {
  return (
    <div className="page-hero" style={{ '--page-hero-image': `url('${image}')` }}>
      <div className="page-hero__media" aria-hidden="true"></div>
      <div className="page-hero__veil" aria-hidden="true"></div>
      <div className="page-hero__inner">
        <div className="container">
          <div className="page-hero__panel text-center" data-aos="fade-up">
            {eyebrow && <p className="page-hero__eyebrow">{eyebrow}</p>}
            <h1 className="page-hero__title">{title}</h1>
            {lead && <p className="page-hero__lead mx-auto">{lead}</p>}
          </div>
        </div>
        
        {breadcrumbs && (
          <nav className="page-hero__crumbs breadcrumbs" aria-label="Breadcrumb">
            <div className="container">
              <ol>
                <li><Link to="/">Home</Link></li>
                {breadcrumbs.map((crumb, index) => (
                  <li key={index} className={crumb.current ? 'current' : ''}>
                    {crumb.current ? crumb.label : <Link to={crumb.path}>{crumb.label}</Link>}
                  </li>
                ))}
              </ol>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default PageHero;
