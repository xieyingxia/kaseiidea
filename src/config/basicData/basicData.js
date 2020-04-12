import React from "react"
import { Badge } from 'antd-mobile';
const shopAll = [
    {
      id: "01",
    //   imgpic: require("./../../../static/images/home/top1.png"),
      total: 15,
      count:7,
      title: "Xiaomi Smartphoneag"
    },
    {
      id: "02",
    //   imgpic: require("./../../../static/images/home/top2.png"),
      total: 15,
      count:7,
      title: "Xiaomi Smartphoneag lssadsw"
    },
    {
      id: "03",
    //   imgpic: require("./../../../static/images/home/top3.png"),
      total: 15,
      count:7,
      title: "Xiaomi Smartphoneag"
    },
    {
        id: "03",
        // imgpic: require("./../../../static/images/home/top4.png"),
        total: 15,
        count:7,
        title: "Xiaomi Smartphoneag"
      }
  ]
  const tabs = [
    { title: <Badge >Top</Badge> },
    { title: <Badge>Latest</Badge> },
    { title: <Badge>Chances</Badge> },
    { title: <Badge>Total deman</Badge> },
  ];
  export default {
    shopAll,
    tabs
  }