# 从零发布到 GitHub Pages

这个包已经是完整网站，不需要安装 Jekyll、Ruby、Node.js，也不需要写命令行。

## 1. 创建主页仓库

1. 登录 GitHub。
2. 右上角点击 **+** → **New repository**。
3. Repository name 填：

   ```text
   你的GitHub用户名.github.io
   ```

   例如用户名是 `octocat`，仓库名必须是 `octocat.github.io`。
4. 选择 **Public**。
5. 可以勾选 **Add a README file**。
6. 点击 **Create repository**。

## 2. 上传网站文件

1. 解压本压缩包。
2. 打开 `UPLOAD_TO_GITHUB` 文件夹。
3. 在刚创建的 GitHub 仓库中点击 **Add file** → **Upload files**。
4. 把 `UPLOAD_TO_GITHUB` 里面的内容拖进去：
   - `index.html`
   - `essay` 文件夹
   - `assets` 文件夹
   - `404.html`
   - `README.md`（可选；仓库里已有 README 时可以不上传）
5. 点击 **Commit changes**。

注意：上传的是 `UPLOAD_TO_GITHUB` 文件夹**里面的内容**，不要让网址结构多出一层 `UPLOAD_TO_GITHUB/`。

## 3. 开启 GitHub Pages

1. 进入仓库的 **Settings**。
2. 左栏点击 **Pages**。
3. 在 **Build and deployment** 中：
   - Source：`Deploy from a branch`
   - Branch：`main`
   - Folder：`/(root)`
4. 点击 **Save**。

网站地址是：

```text
https://你的GitHub用户名.github.io/
```

文章地址是：

```text
https://你的GitHub用户名.github.io/essay/
```

## 4. 发布后需要检查的内容

主页目前使用姓名 `DongH Ye` 和一段研究简介。你可以直接在 GitHub 网页中打开 `index.html`，点击铅笔图标修改文字，再提交更改。

GitHub 链接会根据 `用户名.github.io` 自动生成，不需要手工填写。邮件、Google Scholar、ORCID 和 CV 尚未加入，因为当前没有这些准确地址。

## 5. 将来怎样添加新文章

最稳妥的方法是：每篇文章建立一个新文件夹，例如：

```text
notes/graph-probes/index.html
notes/lattice-gauge-theory/index.html
```

然后在主页 `index.html` 的 Writing 区域加入链接。这个版本采用纯静态 HTML，因此不会遇到 Jekyll 主题、插件或构建依赖问题。
