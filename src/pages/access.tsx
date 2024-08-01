import React from 'react';
import Layout from '@theme/Layout';
import Iframe from 'react-iframe';
import styles from './access.module.css';
import Breadcrumbs from '../components/Breadcrumbs';

const Access: React.FC = () => {
  return (
    <Layout title="アクセス" description="アクセスページの説明">
      <main>
        <section className={styles.breadcrumbs}>
          <div className="container">
            <Breadcrumbs />
          </div>
        </section>
        <section className={styles.gMap}>
          <div className="container">
            <h1>アクセス</h1>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh',
                fontSize: '20px',
              }}>
              <Iframe 
              url={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1384.2721221583695!2d132.4567969181497!3d34.39187644388484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355aa20de289cc87%3A0x48558045d024bffa!2z44CSNzMwLTAwMzYg5bqD5bO255yM5bqD5bO25biC5Lit5Yy66KKL55S677yV4oiS77yT77yWIOODq-ODn-ODiuOCueiii-eUuuOCouODvOODk-OCueOCs-ODvOODiA!5e0!3m2!1sja!2sjp!4v1525674529872"} 
              width="100%"
              height="100%"
              />
            </div>
          </div>
        </section>
        <section className={styles.address}>
          <div className="container">
            <table>
              <tr><th>最寄駅</th><td>広島電鉄電車 袋町駅・本通駅<br />アストラムライン 本通駅</td></tr>
              <tr><th>住所</th><td>〒730-0036<br />広島市中区袋町5-35ルミナス袋町1401（表札は「竹﨑」となっています）</td></tr>
              <tr><th>TEL</th><td>082-247-0968</td></tr>
              <tr><th>FAX</th><td>082-247-0968</td></tr>
              <tr><th>メールアドレス</th><td>info＠chugokusyoten.jp</td></tr>
              <tr><th>営業時間</th><td>AM 9:30 ~ PM 6:00<br />（土・日・祝祭日、年末年始・お盆における弊店休業日を除きます）</td></tr>
            </table>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Access;