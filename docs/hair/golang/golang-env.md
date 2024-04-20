---
sidebar_position: 1
---

# Go Env相关配置 

一台空白机器，应该配置那些go env。


```shell
export GOPATH="/Users/dgsfor/project/golang"
export GOBIN="$GOPATH/bin"
export PATH="$PATH:$GOBIN:/Users/dgsfor/project/golang/install/go/bin"
export GO111MODULE=on
export GOPROXY=https://goproxy.cn,direct
export GOPRIVATE="gitlab.xxxxx.com"
```

:::caution

注意，`GOPRIVATE`是配置你们公司私有的gitlab地址，不要带上`https://`或者`http://`

:::