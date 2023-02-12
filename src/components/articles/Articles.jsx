import { Spin } from 'antd';
import useArticles from '../helpers/useArticles';
import style from './Articles.module.css';
import { kindsMenu } from '../helpers/MainLayoutHelper';

export default function Articles() {
  // For get two articles from API
  const { articles, loading, error } = useArticles();

  // Presentation control while get info from API
  if (loading) return <Spin size="large" />;
  if (error) return <div>We have problem Houston</div>;
  return (
    <div className={style.containerArticles}>
      {articles && articles.map((data) => (
        <span key={data.id} className={style.article}>
          <h2>{data.title}</h2>
          <hr className={style.lineArticle} />
          <span> 3 Comments</span>
          <p>{data.body}</p>
          <h4>{kindsMenu(data.id)}</h4>
        </span>
      ))}
    </div>
  );
}
