import React from "react"
import intl from 'react-intl-universal'
import { withRouter } from "react-router-dom";
import IndexPageBottom from '../indexPage/indexPageBottom'
import thumb1 from '../../static/images/bannar/thumb_other.png'
import './groupPage.less'
class grounpPage extends React.Component {
  goGrounp(){
    this.props.history.push('/grounpPage')
  }

  render() {
    return (
      <div id="grounpPage">
        {/* 标题 */}
        <div className="headerTitleO">
        </div>
                   
        {/* 图片 */}
        <div className="grounpPageImg">
          <img src={thumb1} alt="" />

        </div>
        {/* 内容   */}

        {/* 模块 */}
        <div className="grounpPageModel">
          <div className="grounpPageCenters">
            <div className="kuai1">
              <div className="topCenter">
                &nbsp;&nbsp;&nbsp;&nbsp; {intl.get('editor.item.headerTitleO')}
              </div>
              <div className="bottomCenter">
                &nbsp;&nbsp;&nbsp;&nbsp;{intl.get('editor.item.first_content')}
              </div>
            </div>
            <div className="kuai">
              <div className="topCenter">
                &nbsp;&nbsp;&nbsp;&nbsp; {intl.get('editor.item.first_title')}
              </div>
              <div className="bottomCenter">
                &nbsp;&nbsp;&nbsp;&nbsp;{intl.get('editor.item.first_titles')}
              </div>
            </div>
          </div>
        </div>
        <IndexPageBottom/>
      </div>

    )
  }
}

Object.assign(grounpPage.prototype, {

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
          this.props.history.push('?language=en-US')
      } else  {
          this.props.history.push('?language=zh-CN')
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

export default withRouter(grounpPage)