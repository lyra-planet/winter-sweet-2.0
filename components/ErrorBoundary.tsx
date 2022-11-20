import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  };

  /*
      控制台报错 - Error: 警告
      页面崩溃白屏

      自身的错误自己不能处理，会冒泡找有没有其它的错误边界，没有被捕获就崩溃
    * */
  // componentWillReceiveProps(nextProps, nextContext) {
  //   if (JSON.stringify(nextProps.data) === '{}') {
  //     throw new Error('警告');
  //   }
  // }

  // 返回一个对象，更新state，用于渲染备用UI
  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  };

  // 获取错误日志，可用于上传服务器
  componentDidCatch(error, errorInfo) {

    // 和上面的return功能一样，两个选其一
    // this.setState({
    //   hasError: true
    // });

    this.logErrorToMyService(error, errorInfo);
  };

  // 自定义上传的方法
  logErrorToMyService = (error, errorInfo) => {
    console.log(error);
    console.log(errorInfo);
  };

  render() {
    const { hasError } = this.state;
    //@ts-ignore
    const { children } = this.props;
    if (hasError) {
      return (
        <div>
          备用组件
        </div>
      )
    } else {
      return children;
    }
  }
}
