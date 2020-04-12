import React from "react"
// import intl from 'react-intl-universal'
import { Tabs } from 'antd-mobile';
import './index.less'
const tabs = [
    { title: 'すべて' },
    { title: '企業' },
    { title: '商品・事業'},
    { title: 'お知らせ'}
  ];
const list = [
    {
        icon:'お知らせ',
        title:'2019.10.17 | スクウェア・エニックス・ホールディングス',
        text:'東京藝術大学との産学協同の取り組み 今年度、東京藝術大学に新設された「大学院映像研究科ゲームコース」へ講師派遣を実施'
    },
    {
        icon:'お知らせ',
        title:'2019.10.17 | スクウェア・エニックス・ホールディングス',
        text:'東京藝術大学との産学協同の取り組み 今年度、東京藝術大学に新設された「大学院映像研究科ゲームコース」へ講師派遣を実施'
    },
    {
        icon:'お知らせ',
        title:'2019.10.17 | スクウェア・エニックス・ホールディングス',
        text:'東京藝術大学との産学協同の取り組み 今年度、東京藝術大学に新設された「大学院映像研究科ゲームコース」へ講師派遣を実施'
    },
    {
        icon:'お知らせ',
        title:'2019.10.17 | スクウェア・エニックス・ホールディングス',
        text:'東京藝術大学との産学協同の取り組み 今年度、東京藝術大学に新設された「大学院映像研究科ゲームコース」へ講師派遣を実施'
    },
    {
        icon:'お知らせ',
        title:'2019.10.17 | スクウェア・エニックス・ホールディングス',
        text:'東京藝術大学との産学協同の取り組み 今年度、東京藝術大学に新設された「大学院映像研究科ゲームコース」へ講師派遣を実施'
    },
    {
        icon:'お知らせ',
        title:'2019.10.17 | スクウェア・エニックス・ホールディングス',
        text:'東京藝術大学との産学協同の取り組み 今年度、東京藝術大学に新設された「大学院映像研究科ゲームコース」へ講師派遣を実施'
    },
    {
        icon:'お知らせ',
        title:'2019.10.17 | スクウェア・エニックス・ホールディングス',
        text:'東京藝術大学との産学協同の取り組み 今年度、東京藝術大学に新設された「大学院映像研究科ゲームコース」へ講師派遣を実施'
    },
    {
        icon:'お知らせ',
        title:'2019.10.17 | スクウェア・エニックス・ホールディングス',
        text:'東京藝術大学との産学協同の取り組み 今年度、東京藝術大学に新設された「大学院映像研究科ゲームコース」へ講師派遣を実施'
    }
]

export default class IndexPageList extends React.Component{
    render(){
        return(
            <div className="wrapListAll">
                <div id="listAcross"> 
                {/* {intl.get('editor.item.name')} */}
                ニュース
                </div>
                <div className="tabs">
                    <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height:'800px', backgroundColor: '#fff' }}>
                                <div className="Content">
                                {
                                   list.map((item,index) => {
                                        return (
                                            <div className="TabsContent" key={index}>
                                                <div className="TabsContentLeft">
                                                       <span>{item.icon}</span>
                                                </div>
                                                <div className="TabsContentCenter">
                                                    <a href="/"
                                                    target="black">
                                                    <p>{item.title}</p> 
                                                    <span>{item.text}</span>
                                                    </a>
                                                </div>
                                                <div className="TabsContentRight">
                                                    <span>667K</span>
                                                </div>
                                            </div>
                                        )
                                   }) 
                                }
                                </div>
                               
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '800px', backgroundColor: '#fff' }}>
                        <div className="Content">
                                {
                                   list.map((item,index) => {
                                        return (
                                            <div className="TabsContent" key={index}>
                                                <div className="TabsContentLeft">
                                                       <span>{item.icon}</span>
                                                </div>
                                                <div className="TabsContentCenter">
                                                    <a href="https://www.taito.co.jp/Content/images/zone/0/news/201407/9b7354e9-7cb4-4db5-87d9-bb7ca99cad7f_p_01_ja.pdf"
                                                    target="black">
                                                    <p>{item.title}</p> 
                                                    <span>{item.text}</span>
                                                    </a>
                                                </div>
                                                <div className="TabsContentRight">
                                                    <span>667K</span>
                                                </div>
                                            </div>
                                        )
                                   }) 
                                }
                                </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '800px', backgroundColor: '#fff' }}>
                        <div className="Content">
                                {
                                   list.map((item,index) => {
                                        return (
                                            <div className="TabsContent" key={index}>
                                                <div className="TabsContentLeft">
                                                       <span>{item.icon}</span>
                                                </div>
                                                <div className="TabsContentCenter">
                                                    <a href="https://www.taito.co.jp/Content/images/zone/0/news/201407/9b7354e9-7cb4-4db5-87d9-bb7ca99cad7f_p_01_ja.pdf"
                                                    target="black">
                                                    <p>{item.title}</p> 
                                                    <span>{item.text}</span>
                                                    </a>
                                                </div>
                                                <div className="TabsContentRight">
                                                    <span>667K</span>
                                                </div>
                                            </div>
                                        )
                                   }) 
                                }
                                </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '800px', backgroundColor: '#fff' }}>
                        <div className="Content">
                                {
                                   list.map((item,index) => {
                                        return (
                                            <div className="TabsContent" key={index}>
                                                <div className="TabsContentLeft">
                                                       <span>{item.icon}</span>
                                                </div>
                                                <div className="TabsContentCenter">
                                                    <a href="/"
                                                    target="black">
                                                    <p>{item.title}</p> 
                                                    <span>{item.text}</span>
                                                    </a>
                                                </div>
                                                <div className="TabsContentRight">
                                                    <span>667K</span>
                                                </div>
                                            </div>
                                        )
                                   }) 
                                }
                                </div>
                        </div>
                    </Tabs>
                </div>
             </div> 
        )
    }
}