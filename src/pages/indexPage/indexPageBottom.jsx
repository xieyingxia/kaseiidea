import React from "react"
import intl from 'react-intl-universal'
import { withRouter } from "react-router-dom";
import './index.less'
class indexPageBottom extends React.Component{

    render(){
        return(
            <div id="wrap_Bottom">
                <div className="wrap_Bottom_title">
                    <div className="title"> {intl.get('editor.item.headerhe')}</div>
                    <div className="center">
                        <div>
                            <div className="childsTitle">
                            {/* スクウェア・エニックス・グループについて */}
                            {intl.get('editor.item.headerTitleO')}
                            </div>
                            <div className="titleSmall">
                            {intl.get('editor.item.headerShe')}
                            </div>
                            <div className="titleSmall">
                            {intl.get('editor.item.headerShe')}
                            </div>
                            <div className="titleSmall">
                            {intl.get('editor.item.headerShe')}
                            </div>
                            <div className="titleSmall">
                            {intl.get('editor.item.headerShe')}
                            </div>
                            <div className="titleSmall">
                            {intl.get('editor.item.headerShe')}
                            </div>
                        </div>
                        <div>
                           <div className="childsTitle">
                           {intl.get('editor.item.headerTitleT')}
                            </div>
                            <div className="titleSmall">
                            {intl.get('editor.item.headerShe')}
                            </div>
                            <div className="titleSmall">
                            {intl.get('editor.item.headerShe')}
                            </div>
                            <div className="titleSmall">
                            {intl.get('editor.item.headerShe')}
                            </div>
                            <div className="titleSmall">
                            {intl.get('editor.item.headerShe')}
                            </div>
                            <div className="titleSmall">
                            {intl.get('editor.item.headerShe')}
                            </div> 
                            <div className="titleSmall">
                            {intl.get('editor.item.headerShe')}
                            </div>
                            <div className="titleSmall">
                            {intl.get('editor.item.headerShe')}
                            </div>
                        </div>
                        <div>
                        <div className="childsTitle">
                        {intl.get('editor.item.headerTitleTh')}
                         </div>
                         <div className="titleSmall">
                         {intl.get('editor.item.headerShe')}
                            </div>
                            <div className="titleSmall">
                            {intl.get('editor.item.headerShe')}
                            </div> <div className="titleSmall">
                            {intl.get('editor.item.headerShe')}
                            </div> <div className="titleSmall">
                            {intl.get('editor.item.headerShe')}
                            </div> <div className="titleSmall">
                            {intl.get('editor.item.headerShe')}
                            </div> <div className="titleSmall">
                            {intl.get('editor.item.headerShe')}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottomTop">
                    <div className="title">
                    ©2020  CO., LTD. All Rights Reserved.
                    </div>
                </div>
            </div>
        )
    }
}
Object.assign(indexPageBottom.prototype, {
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
  export default withRouter(indexPageBottom)