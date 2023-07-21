---
sidebar_position: 2
---

# vscode 配置 go 环境

如果你的 mac 电脑装的 golang 环境是自定义目录的，那么在你要使用 vscode 进行开发的时候，需要配置下 go 环境，不然你装了扩展也没用。

## 配置 go 环境

配置 Visual Studio Code 使用自定义的 Go 环境。打开 Visual Studio Code 的设置，可以通过在顶部菜单“Code” → “Preferences” → “Settings”找到设置选项。在设置界面的搜索框中输入`go.goroot`以及`go.gopath`，然后在右侧配置窗口中添加你的自定义路径

```shell
"go.goroot": "/Users/dgsfor/project/golang/install/go",
"go.gopath": "/Users/dgsfor/project/golang"
```

## 配置保存自动格式化代码

```shell
"editor.formatOnType": true,
"editor.formatOnSave": true,
"editor.formatOnPaste": true,
```

## 安装扩展

在扩展页面，在应用商店里安装两个扩容即可: `Go` 和 `Go Nightly`

:::caution

配置完成之后，重启 vscode

:::
