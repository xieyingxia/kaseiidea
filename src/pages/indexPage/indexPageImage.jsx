import React from "react"
import './index.less'
import IndexPageBottom from './indexPageBottom'
import img1 from '../../static/images/bottomImg/bg_ci.jpg'
import img2 from '../../static/images/bottomImg/picup_message.jpg'
import img3 from '../../static/images/bannar/thumb_publishing.png'
export default class indexPageImage extends React.Component{
    
    render(){
        return(
            <div id="wrapAllTip">
               <div className="TipDiv">
                    <div className="TipDivLeft"> 
                    重要なお知らせ
                    </div>
                    <div className="TipDivRight">
                        <p>2019.10.17</p>
                        <span>
                        一連の風水害により被害を受けられた皆様へのお見舞い
                        </span>
                    </div>
               </div>
                <div className="imgageDiv">
                    <div>
                        <img src={img1} alt=""/>
                    </div>
                    <div>
                        <img src={img2} alt=""/>
                    </div>
                </div>
                <div className="imgCenterDiv">
                    <div className="imgCenterDivTitle">
                    事業紹介
                    </div>
                    <div className="imgCenterDivImg">
                        <div>
                            <img src={img1} alt=""/>
                        </div>
                        <div>
                            <img src={img2} alt=""/>
                        </div>
                        <div>
                            <img src={img3} alt=""/>
                        </div>
                        <div>
                            <img src={img1} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="imgCenterDiv">
                    <div className="imgCenterDivTitleT">
                    ピックアップ
                    </div>
                    <div className="imgCenterDivImgT">
                        <div>
                            <img src={img1} alt=""/>
                        </div>
                        <div>
                            <img src={img2} alt=""/>
                        </div>
                        <div>
                            <img src={img3} alt=""/>
                        </div>
                      
                    </div>
                </div>
                <IndexPageBottom/>
            </div>  
        )
    }
}