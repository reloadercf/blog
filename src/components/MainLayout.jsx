import { Tabs } from 'antd';
import style from './MainStyle.module.css';
import Articles from './Articles';
import { kindsMenu } from './helpers/MainLayoutHelper';

function Tab() {
  return (
    <Tabs
      type="card"
      items={new Array(3).fill(null).map((_, i) => {
        const id = String(i + 1);
        return {
          label: `${kindsMenu(i)}`,
          key: id,
          children: <span>{i === 0 ? <Articles /> : 'ejemplo'}</span>,
        };
      })}
    />
  );
}

export default function MainLayout() {
  return (
    <div>
      <span className={style.containerTitle}>
        <h1 className={style.logoTitle}> [Making your Life Easier]</h1>
      </span>
      <Tab />
    </div>
  );
}
