import React, { useEffect } from 'react'
import image from "../../assets/images/image.jpeg"
import { titleAnimation } from '../../utils'

const Title = () => {
    useEffect(() => {
        titleAnimation()
    }, [])

    return (
        <div className='title' style={style.title}>
            <div style={style.titleText} >
                <h4 style={style.titleTexth4}>Merhaba ayakkabı tutlunları!</h4>
                <p style={style.titleTextP}>Sizi, adımlarınızı gökyüzünde atmaya davet ediyoruz! Gökyüzü Yürüyüş Ayakkabıları, sadece bir adım ötesinde bulutları hissetmenizi sağlayan yenilikçi bir ayakkabı deneyimidir.</p>
            </div>
            <div className='title-img' style={style.titleImg}>
                <img src={image} style={style.titleImgImg} />
            </div>
        </div >
    )
}

const style = {
    title: {
        width: "100%",
        height: "80vh",
        backgroundColor: "#F9EBB2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px",
    },
    titleText: {
        flex: "0.8",
        position: "relative",
        top: "-10%",
        paddingLeft: "10px"
    },
    titleTexth4: {
        fontSize: "50px"
    },
    titleTextP: {
        marginTop: "30px",
        fontSize: "17px"
    },
    titleImg: {
        flex: "1",
        height: "600px",
        display: "flex",
        justifyContent: "right",
        alignItems: "center",
    },
    titleImgImg: {
        width: "70%",
        height: "90%",
    }
}

export default Title