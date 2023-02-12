import useArticles from './helpers/useArticles';

export default function Articles() {
  const { articles } = useArticles();
  useArticles();
  console.log(articles);

  return (
    <div>Example Article</div>
  );
}
