---
sidebar_position: 2
description: 安装 Hadoop 服务
---

## 添加 Hadoop 服务

Hadoop 服务包括 HDFS、YARN、MapReduce2，此处全部选中

![2-1](./img/2-1.png)

## 分配主服务

将 NameNode、SNameNode、ResourceManager、History Server 分配给要运行它们的主机

![2-2](./img/2-2.png)

## 分配从服务及客户端

将 NodeManager、DataNode 及 HDFS Client、YARN Client、MapReduce2 Client 分配给您要运行它们的主机

![2-3](./img/2-3.png)

## 自定义配置

找到 HDFS 的配置，将 `hadoop.proxyuser.*` 的参数填入 `*`

![2-4](./img/2-4.png)

其余配置用户可按需进行修改

![2-5](./img/2-5.png)

## 部署服务

检查配置无误后，进行部署

![2-6](./img/2-6.png)

## 部署完成

Hadoop 服务安装成功

![2-7](./img/2-7.png)

![2-8](./img/2-8.png)