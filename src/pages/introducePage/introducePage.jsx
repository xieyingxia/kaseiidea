import React from "react"
import intl from 'react-intl-universal'
import { withRouter } from "react-router-dom";
import IndexPageBottom from '../indexPage/indexPageBottom'
import thumb1 from '../../static/images/bottomImg/bg_ci.jpg'
import thumb2 from '../../static/images/bannar/thumb_digitalentertainment.png'
import thumb3 from '../../static/images/bannar/thumb_other.png'
import './introducePage.less'
class introducePage extends React.Component{
  render() {
    return (
        <div id="newPage">
      
            {/* biaoti */}
            <div className="grounpPageTitle">
             	{intl.get('editor.item.headerTitleTh')}
             </div>
            {/* 图片 */}
            <div className="grounpPageImg">
                <img src={thumb1} alt="" />
            </div>
            <div className="titlw">

            </div>
            <div className="intelligenceCenter">
                <div className="wrap">
                    <div className="leftI">

                    </div>
                    <div className="rightI">
                        <div className="fistR">
                            <h2> 	{intl.get('editor.item.headerTitleTh')} </h2>


                            <span className="spanLeft">{intl.get('editor.item.third_content')} </span><span className="spanRight"></span>
                        </div>
                        <div>

                        <div>
                            <h2> 	{intl.get('editor.item.third_content1')}</h2>

                            <span className="spanLeft">{intl.get('editor.item.third_content2')} </span><span className="spanRight">

                            </span>

                        </div>
                            <h2> 	{intl.get('editor.item.third_content3')} </h2>

                            <span className="spanLeft">
                            {intl.get('editor.item.third_content4')}    

                      </span><span className="spanRight"></span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <IndexPageBottom />
        </div>
    )
}
}

Object.assign(introducePage.prototype, {
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
  export default withRouter(introducePage)