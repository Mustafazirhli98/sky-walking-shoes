import React, { useEffect } from 'react'
import img2 from './../../assets/images/Img2.jpeg'
import img3 from './../../assets/images/Img3.jpeg'
import img7 from './../../assets/images/Img7.jpeg'
import img5 from './../../assets/images/Img5.jpeg'
import img6 from './../../assets/images/Img6.jpeg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Introduction = () => {


 

  return (
    <div className='introduction'>
      <div className="info info-left">
        <div className='text'>
          <h5>Uçan Hafiflik</h5>
          <p>Gökyüzü Yürüyüş Ayakkabıları, hafifliğiyle sizi adeta uçuracak! Ayaklarınıza giyildiğinde, yerden kopmuşçasına hafif hissedecek ve adeta bulutların üzerinde yürüyormuş gibi hissedeceksiniz.</p>
        </div>
        <div className='img'>
          <img src={img2} />
        </div>
      </div>

      <div className="info info-right">
        <div className='text'>
          <h5>Renkli Yolculuk</h5>
          <p>Bu ayakkabılar sadece rahat değil, aynı zamanda renkli bir yolculuk sunuyor! Her adımınızda, ayakkabılarınızın tabanındaki LED ışıklar, renkli bir gösteri sunarak çevrenizdeki herkesi büyüleyecek.</p>
        </div>
        <div className='img'>
          <img src={img3} />
        </div>
      </div>
      <div className="info info-left">
        <div className='text'>
          <h5>Su Geçirmez Tasarım</h5>
          <p>Gökyüzü Yürüyüş Ayakkabıları, sizi yağmurda da yarı yolda bırakmaz! Su geçirmez tasarımı sayesinde, yağmurlu günlerde bile konforlu bir yürüyüş deneyimi yaşayabilirsiniz.</p>
        </div>
        <div className='img'>
          <img src={img7} />
        </div>
      </div>
      <div className="info info-right">
        <div className='text'>
          <h5>Enerji Depolayan Taban</h5>
          <p>Ayakkabı tabanındaki özel malzeme, yürüyüş esnasında üretilen enerjiyi depolar ve size daha enerjik bir adım atma gücü sağlar. Yürüdükçe enerji depolayın!</p>
        </div>
        <div className='img'>
          <img src={img5} />
        </div>
      </div>
      <div className="info info-left">
        <div className='text'>
          <h5>Çevre Dostu Malzemeler</h5>
          <p>Şimdi Gökyüzü Yürüyüş Ayakkabıları'nı satın alın ve özel lansman indiriminden faydalanın! Bu fırsatı kaçırmayın, bulutların üzerindeki yürüyüş deneyiminin keyfini çıkarın.</p>
        </div>
        <div className='img'>
          <img src={img6} />
        </div>
      </div>

    </div>
  )
}

export default Introduction