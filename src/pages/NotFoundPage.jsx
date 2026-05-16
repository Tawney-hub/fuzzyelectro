import React from 'react';
import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <PageHero 
        image="/assets/img/fuzzy/triple-security-cameras-pole-highdefinition-surveillance-system.png"
        eyebrow="Error"
        title="404 - Page Not Found"
        lead="The page you're looking for doesn't exist."
        breadcrumbs={[{ label: '404', current: true }]}
      />
      <section className="section text-center py-5">
        <div className="container">
          <h2>Oops! We can't find that page.</h2>
          <p className="mt-4">Let's get you back on track.</p>
          <Link to="/" className="btn btn-danger mt-3">Back to Home</Link>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
