// @ts-nocheck
import { defineConfig } from "umi";

export default defineConfig({
  // routes: [
  //   { path: "/", component: "index" },
  //   { path: "/docs", component: "docs" },
  // ],
  // publicPath: './',
  //   history: {
  //       type: 'hash',
  //   },
  extraBabelPlugins: ["babel-plugin-react-remove-properties"],
  plugins: ["umi-plugin-electron-builder", "@umijs/plugins/dist/dva"],
  npmClient: "pnpm",
  dva: {},
  electronBuilder: {
    builderOptions: {
      appId: "com.LZD.app",
      productName: "项目管理系统", //项目名，也是生成的安装文件名，即aDemo.exe
      copyright: "LZD © 2023", //版权信息
      win: {
        icon: "./1.png", //这里注意配好图标路径
        target: [
          {
            // 打包成一个独立的 exe 安装程序
            target: 'nsis',
            // 这个意思是打出来32 bit + 64 bit的包，但是要注意：这样打包出来的安装包体积比较大，所以建议直接打32的安装包。
            arch: [
            // 'x64',
              'ia32'
            ]
          }
      ],
      },
      nsis: {
       
        // 是否一键安装，建议为 false，可以让用户点击下一步、下一步、下一步的形式安装程序，如果为true，当用户双击构建好的程序，自动安装程序并打开，即：一键安装（one-click installer）
        oneClick: false,
        // 是否开启安装时权限限制（此电脑或当前用户）
        perMachine: true,
        // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
        allowElevation: false,
        // 允许修改安装目录，建议为 true，是否允许用户改变安装目录，默认是不允许
        allowToChangeInstallationDirectory: true,
        // 卸载时删除用户数据
        deleteAppDataOnUninstall: true,
        // 安装图标
        // installerIcon: 'build/installerIcon_120.ico',
        // 卸载图标
        // uninstallerIcon: 'build/uninstallerIcon_120.ico',
        // 安装时头部图标
        // installerHeaderIcon: 'build/installerHeaderIcon_120.ico',
        // 创建桌面图标
        createDesktopShortcut: true,
        // 创建开始菜单图标
        createStartMenuShortcut: true
      }
    }, //electronBuilder参数

  },
    
});
