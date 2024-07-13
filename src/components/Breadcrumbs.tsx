import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

interface Breadcrumb {
  label: string;
  to: string;
}

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbs: Breadcrumb[] = pathnames.map((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
    return { label: value, to };
  });

  return (
    <nav className={styles.breadcrumbs}>
      <Link to="/" className={styles.breadcrumbLink}>Home</Link>
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={breadcrumb.to} className={styles.breadcrumbItem}>
          <span className={styles.breadcrumbSeparator}>/</span>
          <Link to={breadcrumb.to} className={styles.breadcrumbLink}>{breadcrumb.label}</Link>
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
