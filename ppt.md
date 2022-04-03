# Cookie + Session 实现登录
## 流程图

## 问题演示
示例：采购立项项目
1）测试环境和正式环境登录态想通
2）别人可以通过非正常登录进入系统

## 原理探究
### signed false
1、访问test接口
2、访问login接口
3、收到cookies，解析数据结构
4、mock其他用户，得到加密后的值
3、携带cookies（第四步生成的），访问test接口

### signed true
1、访问login接口
2、收到cookies 解码数据结构
3、收到cookies，解析数据结构
4、mock其他用户，得到加密后的值
3、携带cookies（第四步生成的和已经响应的.sig），访问test接口

### 外部存储
externalKey是如何来的？

### 如何退出登录？


# SSO单点登录
一次登录，访问其他系统可以不用再次登录
别的系统的接入过程
认证中心如何实现 ？ demo