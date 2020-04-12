# admin： xincendahai or xiangmingxin
# data：  2019-12-25
# 电商项目 
# 项目开发
### 低耦合，高内聚

# 自定义框架REACT

# 创建项目
### npx create-react-app react_shop

# 打包
### npm run build

# 启动项目
### npm start

# 构建项目
### npm run eject
### 如果您对构建工具和配置选择不满意，则可以随时“弹出”。此命令将从项目中删除单个构建依赖项。而是将所有配置文件和传递依赖项（Webpack，Babel，ESLint等）直接复制到您的项目中，以便您完全控### 制它们。除了`eject`以外的所有命令仍然可以使用，但是它们将指向复制的脚本，因此您可以对其进行调整。至此，您就可以依靠自己了。您不必使用`eject`。精选功能集适用于中小型部署，您不应该用### 此功能。但是，我们了解到，如果您在准备就绪时无法自定义该工具，它将不会有用。
### 踩坑 如果npm run eject报错
### git init
### git add .
### git commit -m ‘Saving before ejecting’
### npm run eject
# 项目结构







# 依赖总结
### 安装less:           cnpm install less less-loader--save-dev
### 安装路由:            cnpm install react-router-dom --save
### 安装antd-mobile:    cnpm install antd-mobile --save
### 安装解决跨域         cnpm install http-proxy-middleware --save
### 国际化(阿里)         cnpm install react-intl-universal --save
### 安装redux           cnpm install --save redux js状态管理 createStore
### svg                npm i --save-dev react-svg
###                    cnpm install --save react-redux  为了在react中容易使用 connect provider
### 调试                cnpm install --save-dev redux-devtools
### redux的中间件        cnpm install --save-dev redux-logger
### redux中间件处理异步        cnpm install --save-dev redux-thunk
### redux调试依赖        cnpm install --save-dev redux-devtools-extension
### redux 
#   1.在创建 createStore
#   2.在redux中创建 reducers
#   3.把reducer放入store中
#   4.注册监听器store.subscribe
#   5.store.dispatch的dispatch(action) 方法更新 state
#   #bindActionCreators方法把action绑定到了connect方法中，其中connect方法的作用是连接react组件和redux store，也就是说通过connect方法子组件可以获取store中的state和dispatch。
#    combineReducers 合并reducers

### react-redux 
#   1. provider是让redux和react-redux关联，
#   是作为整个App的容器，在你原有的App Container的基础上再包上一层，接受Redux的store作为props，并将其声明为context的属性之一
#   2.connect是让当前组件和redux组件连接起来
#   使用 React Redux 库的 connect() 方法来生成容器组件前，需要先定义 mapStateToProps 这个函数来指定如何把当前 
#   Redux store state 映射到展示组件的 props 中
#   mapDispatchToProps() 方法接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法。它可以是一个函数，也可以是一个对象




