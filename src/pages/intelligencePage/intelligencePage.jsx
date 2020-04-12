import React from "react"
import intl from 'react-intl-universal'
import { withRouter } from "react-router-dom";
import IndexPageBottom from '../indexPage/indexPageBottom'
import thumb1 from '../../static/images/bannar/thumb_digitalentertainment.png'
import img1 from '../../static/images/img_1.jpg'
import img2 from '../../static/images/img_2.png'
import img3 from '../../static/images/img_3.png'
import './intelligencePage.less'
class intelligencePage extends React.Component{

    render(){
        return(
            <div id="intelligencePage">
                {/* title */}
             
                <div className="grounpPageTitle">
                {intl.get('editor.item.headerTitleT')}
                </div>
                  {/* 图片 */}
                <div className="grounpPageImg">
                    <img src={thumb1} alt=""/>
                    <div>
                    
                    </div>
                </div> 
                {/* 中心 */}
                {/* <div className="intelligencePageCenter">
                    {/* <div className="firstCenter">
                        <h3> {intl.get('editor.item.second_1')}</h3>
                        <span>{intl.get('editor.item.second_2')}</span><br/>
                        <span>{intl.get('editor.item.second_1')}</span>
                    </div> */}
                    {/* <div className="secondCenter">
                            <img src="" alt=""/>
                    </div> */}
                    {/* <div className="thirdCenter">
                       <div>{intl.get('editor.item.second_1')}</div>
                    </div> */}
              
                {/* 中下     */}
                <div className="intelligenceCenter">
                    <div className="wrap">
                        <div className="leftI">
                          
                        </div>
                        <div className="rightI">
                            <div className="fistR">
                                <h2> {intl.get('editor.item.headerTitleT')}</h2>


                                <span className="spanLeft"> {intl.get('editor.item.third_content')}</span><span className="spanRight"></span>
                            </div>
                            <div>
                                <h2> {intl.get('editor.item.third_content1')}	</h2>
                             
                                <span className="spanLeft">
                                {intl.get('editor.item.third_content2')}

                          </span><span className="spanRight"></span>
                            </div>
                            <div>
                                <h2> {intl.get('editor.item.third_content3')}	</h2>
                      
                                <span className="spanLeft">{intl.get('editor.item.third_content4')}</span><span className="spanRight">

                                </span>
                                
                            </div>
                            <div>
                                <span className="bottomSpanLoca"></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 图片· */}
                <div className="intelligenceImg">
                    <div className="imgTitle">
                    ピックアップ
                    </div>
                    <div className="imgS">
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
                {/* 模块 */}
                <div className="model_q">
                    <div className="model_div">
                        <div>
                            <div className="titles">{intl.get('editor.item.second_5')}</div><br/>
                            <span>{intl.get('editor.item.second_6')}</span><br/>
                            <span>{intl.get('editor.item.second_7')}</span><br/>
                            <span>{intl.get('editor.item.second_7')}</span><br/>
                            <span>{intl.get('editor.item.second_8')}</span>
                        </div>
                        <div>
                        <div className="titles">{intl.get('editor.item.second_5')}</div><br/>
                            <span>{intl.get('editor.item.second_6')}</span><br/>
                            <span>{intl.get('editor.item.second_7')}</span><br/>
                            <span>{intl.get('editor.item.second_7')}</span><br/>
                            <span>{intl.get('editor.item.second_8')}</span>
                        </div>
                        <div>
                        <div className="titles">{intl.get('editor.item.second_5')}</div><br/>
                            <span>{intl.get('editor.item.second_6')}</span><br/>
                            <span>{intl.get('editor.item.second_7')}</span><br/>
                            <span>{intl.get('editor.item.second_7')}</span><br/>
                            <span>{intl.get('editor.item.second_8')}</span>
                        </div>
                        <div>
                        <div className="titles">{intl.get('editor.item.second_5')}</div><br/>
                            <span>{intl.get('editor.item.second_6')}</span><br/>
                            <span>{intl.get('editor.item.second_7')}</span><br/>
                            <span>{intl.get('editor.item.second_7')}</span><br/>
                            <span>{intl.get('editor.item.second_8')}</span>
                        </div>
                    </div>
                    <div className="divs">
                        <div>{intl.get('editor.item.second_9')}</div>
                        <div>{intl.get('editor.item.second_9')}</div>
                        <div>{intl.get('editor.item.second_9')}</div>
                        <div>{intl.get('editor.item.second_9')}</div>
                        <div>{intl.get('editor.item.second_9')}</div>
                        <div>{intl.get('editor.item.second_9')}</div>
                    </div>
                </div>
                <IndexPageBottom/>

            </div>
        )
    }
}
Object.assign(intelligencePage.prototype, {
    componentDidMount() {
      let { location } = this.props
      let ps = this.parseQueryString(location.search)
      let currentLocale = ps.language || 'zh-CN'
      intl.init({
        currentLocale: currentLocale,
        commonLocaleDataUrls: {
          'zh': false,
          'en': false
        },
        locales: {
          [currentLocale]: require(`./../../locales/${currentLocale}`).default
        }
      }).then(() => {
        this.setState({ initDone: true })
      })
    },
    handleLanguage() {
      let { location } = this.props
      let ps = this.parseQueryString(location.search)
      if (ps.language === 'en-US') {
          this.props.history.push('?language=zh-CN')
      } else if (ps.language === 'zh-CN') {
          this.props.history.push('?language=en-US')
      } else {
          this.props.history.push('?language=en-US')
      }
      
      window.location.reload()
    },
    parseQueryString(url) {
      var params = {};
      var arr = url.split("?");
      if (arr.length <= 1) {
        return params;
      }
      arr = arr[1].split("&");
      for (var i = 0, l = arr.length; i < l; i++) {
        var a = arr[i].split("=");
        params[a[0]] = a[1];
      }
      return params;
    }
   })
  export default withRouter(intelligencePage)