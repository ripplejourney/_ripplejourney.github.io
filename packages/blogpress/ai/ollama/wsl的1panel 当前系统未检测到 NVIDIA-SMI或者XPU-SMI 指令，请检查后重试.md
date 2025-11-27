---
sidebar: false
date: 2025-11-28 18:00:00
tag: AI
---

# 1Panel 当前系统未检测到 NVIDIA-SMI 或 XPU-SMI 指令，请检查后重试

### 特殊情况：1Panel 对 WSL 的 GPU 适配限制

1Panel 的 GPU 检测功能主要针对 **原生 Linux 服务器**，WSL 作为虚拟化环境，可能存在以下适配问题，需针对性处理：

#### 情况 1：1Panel 检测逻辑不支持 WSL 的 GPU 路径

解决：创建 `nvidia-smi` 的软链接到 1Panel 预期的路径（如 `/usr/local/bin/`）：

```bash
    # 若 1Panel 找不到 nvidia-smi，手动创建软链接
    sudo ln -s $(which nvidia-smi) /usr/local/bin/nvidia-smi
    # 重启 1Panel
    1pctl restart all
```

#### 情况 2：WSL 无 XPU-SMI（仅 NVIDIA GPU 无需关注）

提示中提到的 `XPU-SMI` 是 Intel/AMD XPU 的监控工具，若你是 NVIDIA GPU，无需安装，1Panel 会自动忽略，只需确保 `nvidia-smi` 可正常调用。

#### 情况 3：1Panel 版本过低，未适配 WSL GPU

解决：更新 1Panel 到最新版本（WSL 中支持更新）：

```bash

    1pctl upgrade
```

更新后重启 1Panel，再检查 GPU 检测情况。

### 四、最终验证与兜底方案

1.  若 1Panel 仍未识别，但 WSL 终端 `nvidia-smi` 正常：

    说明 1Panel 的检测逻辑未兼容 WSL，可忽略该提示 —— 只要 WSL 中能正常调用 GPU（如 Docker 容器、CUDA 程序），不影响实际使用，1Panel 的 GPU 监控功能仅为辅助。

2.  兜底：手动在 1Panel 中配置 GPU 路径（若支持）：

    部分 1Panel 版本支持手动指定 `nvidia-smi` 路径，可在 1Panel 后台「系统设置」→「监控配置」中，找到 “GPU 工具路径”，手动填写 `nvidia-smi` 的实际路径（如 `/usr/bin/nvidia-smi`），保存后刷新。
