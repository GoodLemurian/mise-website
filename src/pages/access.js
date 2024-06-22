import React from 'react';
import Iframe from "react-iframe";
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        最寄駅 	広島電鉄電車 袋町駅・本通駅、アストラムライン 本通駅
        住所 	〒７３０－００３６ 広島市中区袋町５－３５ルミナス袋町１４０１
        TEL 	０８２－２４７－０９６８
        FAX 	０８２－２４７－０９６８
        メールアドレス 	info＠chugokusyoten.jp
        営業時間 	AM９：３０～PM６：００
        （土・日・祝祭日、年末年始・お盆における弊店休業日を除きます）
        </div>
    </Layout>
  );
}