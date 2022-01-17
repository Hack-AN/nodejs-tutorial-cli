import styles from '../styles/Home.module.css'
import React, {useState} from "react"

export default function Sooz() {

    const [gameblocks, setGameblocks] = useState([
        {
            img: "img/앱 아이콘 _ 구글플레이용.png",
            title: "I LOVE U"
        },
        {
            img: "img/Title.png",
            title: "불멍이야기"
        }
    ])




    return (
        <div>
            <div className={styles.header}>
                <div className={styles.header_left}>
                    <button className={styles.menu}>
                        <span className={styles.menu_img}>≡ </span>
                        <span className={styles.menu_text}>메뉴</span>
                    </button>
                    <div className={styles.game_icon_box}>
                        <img className={styles.game_icon} src="img/앱 아이콘 _ 구글플레이용.png" alt="앱 아이콘_구글플레이용"/>
                        <span className={styles.game_icon_name}>I LOVE U</span>
                    </div>
                    <div className={styles.game_icon_box}>
                        <img className={styles.game_icon} src="img/Title.png" alt="Title"/>
                        <span className={styles.game_icon_name}>불멍이야기</span>
                    </div>
                    <div className={styles.game_icon_box}>
                        <img className={styles.game_icon} src="img/타이틀 아이디어 2.png" alt="타이틀 아이디어"/>
                        <span className={styles.game_icon_name}>메이플그라운드</span>
                    </div>

                    

                    
                </div>
                <div className={styles.header_center}>SOOZ Entertainment</div>
                <div className={styles.header_right}>
                    <button className={styles.right_icon}>로그아웃</button>
                    <button className={styles.right_icon}>노래하는고라니</button>
                </div>

            </div>
            <div className={styles.screen}>
                <img className={styles.screen_bg} src="img/가로 스크린샷.png" />
                <img className={styles.screen_src} src="img/가로 스크린샷.png" />
                <div className={styles.screen_title}>불멍이야기</div>
            </div>
            <div style={{backgroundColor : '#f8f9fa', width : '100%', heigth : '100%', paddingTop : '80px'}}>
                <div className={styles.profie}>
                    <span>
                        <span className={styles.name}>노래하는고라니</span> <span className={styles.greet}>님, 어서오세요</span>
                        <br/>
                        <div className={styles.gameblocks}>
                            {
                                gameblocks.map((gameblock, index) => {
                                    return <Gameblock
                                        key = {index}
                                        gameblock = {gameblock}
                                    />

                                })
                            }
                        </div>
                    </span>
                    <span>
                        
                    </span>

                    
                </div>
                <div className={styles.newgames}>
                    
                </div>
                <div className={styles.allgames}>
                    
                </div>
            </div>
            

        </div>
    )
}

const Gameblock = ({gameblock,}) => {
    return <span>
        <div className={styles.gameblock}>
            <img className={styles.block_img} src ={gameblock.img}></img>
            <text style={{
                fontSize : '12px',
                backgroundColor : '#07f', 
                padding: '1px',
                paddingLeft : '8px', 
                paddingRight : '8px', 
                marginLeft : '15px',
                fontWeight: 'bold', 
                color : 'white',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px'
                }}>MY</text>
            <div className={styles.block_title}>{gameblock.title}</div>
            <br/>
            <br/>
            <div style={{color : 'gray', fontSize : '12px', marginLeft : '15px'}}>최근 플레이한 게임</div>
        </div>
    </span>
}