---
sidebar_position: 1
---

# shell 脚本中运行 export 命令不生效

:::caution
如果你想在 shell 脚本中运行 export 命令，比如(`kubeswitch`)[https://github.com/dgsfor/kubeswitch]，你会发现直接 sh switch_cluster.sh 会无效。
:::

在你的脚本中，当你定义一个函数并在脚本内部调用它时，只会影响脚本作用域内的环境变量。在脚本执行完毕后，系统将回到原来的环境中，所以你看不到新的环境变量。
为了在脚本执行之后保留环境变量，你需要在当前 shell 环境中执行脚本。你可以使用 `source` 命令运行脚本，而不是直接运行它。假设你的脚本名为 `switch_cluster.sh` ，你应该这样运行它：

```bash
source switch_cluster.sh
```

或者使用点号（`.`）运行：

```bash
. switch_cluster.sh
```

```bash
#!/bin/bash
SwitchCluster() {
    export KUBECONFIG="a.conf"
}
SwitchCluster
```

现在运行 `source switch_cluster.sh` 或 `. switch_cluster.sh` 应该能设置 KUBECONFIG 环境变量。执行 `env` 命令后，你应该能看到这个新的环境变量。
