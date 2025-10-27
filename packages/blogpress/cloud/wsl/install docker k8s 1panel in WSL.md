---
sidebar: false
date: 2025-10-27 18:00:00
tag: cloud
---
# wsl中安装docker 1panel k8s

>仅再2025年当前时间点测试有效，后续相关配置可能变化，自行修改

## 安装wsl并升级到最新版

```bash
#Win10或者Win11升级到最新版本即可。 启用Windows 子系统功能，使用管理员权限打开一个 PowerShell 窗口，输入以下命令：
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
#还需要再启用虚拟机平台功能，在 PowerShell 中输入以下命令，重启系统：
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

#或者安装wsl现在可以直接使用wsl命令安装（如果需要）
# wsl --install --no-distribution

#升级wsl 2（如果需要）
# wsl.exe --update --pre-release

#重启后，在 PowerShell 中输入以下命令，将 WSL 默认版本改为 WSL2:
wsl --set-default-version 2
#接下来安装Ubuntu，建议安装24.04版本
wsl --install Ubuntu-24.04

#若要设置与命令一起使用 wsl 的默认 Linux 分发版，请输入：
wsl.exe --set-default Ubuntu-24.04
```
运行进入ubuntu
```bash
# 运行进入ubuntu
wsl -d Ubuntu-24.04
# 更新系统
apt update && apt upgrade -y
# 确认systemd是否启用
systemctl status systemd-resolved
```
