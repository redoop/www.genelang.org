---
sidebar_position: 5
description: 安装 Hive 服务
---

## 添加 Hive 服务

安装服务时选中 Hive 服务

![5-1](./img/5-1.png)

## 分配主服务

将 HiveServer2、Hive MetaStore、WebHCat Server 分配给要运行它们的主机

![5-2](./img/5-2.png)

## 分配从服务及客户端

将 Hive Client、HCat Client 分配给您要运行它们的主机

![5-3](./img/5-3.png)

## 数据库配置

Hive 需要配置对应的元数据库，您可以使用已存在的库，或者让 Ambari 自动帮您创建新的库

![5-4](./img/5-4.png)

点击 Test Connection，测试通过后即可进入下一步

![5-5](./img/5-5.png)

## 自定义配置

用户可以根据自己的需求配置其他参数

![5-6](./img/5-6.png)

## 部署服务

检查配置无误后，进行部署

![5-7](./img/5-7.png)

## 部署完成

Hive 服务安装成功

![5-8](./img/5-8.png)

![5-9](./img/5-9.png)