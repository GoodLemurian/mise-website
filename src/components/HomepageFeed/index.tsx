import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

function BlogFeedComponent() {
  const [blogFeed, setBlogFeed] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = 'https://goodlemurian.github.io/mise-website/feed.json';

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setBlogFeed(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading blog feed:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blogFeed) {
    return <div>Error loading blog feed.</div>;
  }

  return (
    <section className={styles.blogfeed}>
      <div className="container">
        <h3>お知らせ</h3>
        <ul className={styles.latestArticle}>
          {blogFeed.items.map((item, index) => (
            <article key={index} className={styles.article}>
              <a href={item.url} className={styles.articleLink}>
                <li className={styles.articleTitle}>
                  {item.date_modified && (<span className={styles.articleDate}>{item.date_modified.substring(0, 10)}</span>)}：{item.title}
                </li>
              </a>
            </article>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BlogFeedComponent;
