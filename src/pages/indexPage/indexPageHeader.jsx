import React from "react"
import intl from 'react-intl-universal'
import { withRouter } from "react-router-dom";
import svg from '../../static/images/svg/logo.svg'
import serch from '../../static/images/index/search.png'
import './index.less'
class indexPageHeader extends React.Component{
  goGrounp(){
    this.props.history.push('/grounpPage')
  }
  
  goIntelligence(){
    this.props.history.push('/intelligencePage')
  }
  goIntroduce(){
    this.props.history.push('/introducePage')
  }
  goNew(){
    this.props.history.push('/newPage')
  }
    render(){
      console.log(this.props.history)
        return(
            <div id="Wrap">
                <div className="leftSvg">
                    <img src={svg} alt=""/>
                </div>
                <div className="rightWrap">
                    <div className="rightWrapTop">
                        <span  className="rightWrapTop1" onClick={this.handleLanguage.bind(this)}>
                          Chinese/English
                         </span>&nbsp;&nbsp;&nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={serch} alt="" />
                    </div>
                    <div className="rightWrapBottom">
                        <div></div>
                        
                        <div className="dropdown">
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span className="ponits1" onClick={this.goGrounp.bind(this)}>{intl.get('editor.item.headerTitleO')}</span>
                            <div className="dropdown-content">
                                <div className="child_Content">
                                    <div className="child_title">
                                    {intl.get('editor.item.headerTitleO')}
                                    </div>
                                    <div className="child_center">
                                      <div>{intl.get('editor.item.headerShe')}</div>
                                      <div className="child_font">
                                      {intl.get('editor.item.headerShe')}</div>
                                      <div className="child_font">{intl.get('editor.item.headerShe')}</div>
                                      <div className="child_font">{intl.get('editor.item.headerShe')}</div>
                                    </div>
                                    <div className="child_center">
                                      <div>{intl.get('editor.item.headerShe')}</div>
                                      <div className="child_font">{intl.get('editor.item.headerShe')}</div>
                                      <div className="child_font">{intl.get('editor.item.headerShe')}</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            {/* 第一个 */}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        <div className="dropdownO">
                          <span className="ponits2" onClick={this.goIntelligence.bind(this)}>{intl.get('editor.item.headerTitleT')}</span>
                            <div className="dropdown-content">
                                <div className="child_Content">
                                    <div className="child_title">
                                    {intl.get('editor.item.headerTitleT')}
                                    </div>
                                    <div className="child_center">
                                      <div>{intl.get('editor.item.headerShe')}</div>
                                      <div className="child_font">{intl.get('editor.item.headerShe')}</div>
                                      <div className="child_font">{intl.get('editor.item.headerShe')}</div>
                                      <div className="child_font">{intl.get('editor.item.headerShe')}</div>
                                    </div>
                                    <div className="child_center">
                                      <div>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                      </div>
                                      <div className="child_font">
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        </div>
                                      <div className="child_font">
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        </div>
                                      <div className="child_font">
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                          {/* 第二个 */}
                          <div className="dropdownTh">
                          <span className="ponits3" onClick={this.goIntroduce.bind(this)}>{intl.get('editor.item.headerTitleTh')}</span>
                            <div className="dropdown-content">
                                <div className="child_Content">
                                    <div className="child_title">
                                    {intl.get('editor.item.headerTitleTh')}
                                    </div>
                                    <div className="child_center">
                                      <div>{intl.get('editor.item.headerShe')}</div>
                                      <div className="child_font">{intl.get('editor.item.headerShe')}</div>
                                      <div className="child_font">{intl.get('editor.item.headerShe')}</div>
                                      <div className="child_font">{intl.get('editor.item.headerShe')}</div>
                                    </div>
                                    <div className="child_center">
                                      <div>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                      </div>
                                      <div className="child_font">
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        </div>
                                      <div className="child_font">
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        </div>
                                      <div className="child_font">
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                        <p>{intl.get('editor.item.headerShe')}</p>
                                      </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                          {/* 第三个 */}
                          <div className="dropdownO">
                          <span className="ponits4" onClick={this.goNew.bind(this)}>{intl.get('editor.item.headerTitleF')}</span>
                          </div>
                          {/* 第四个 */}
                      </div>
                        </div>
                    </div>
        )
    }
}
Object.assign(indexPageHeader.prototype, {
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
  export default withRouter(indexPageHeader)

