module.exports = {
    base: '/algorithm/',
    title: '算法',
    description: '算法学习笔记',
    head: [
        ['link', { rel: 'icon', href: `/favicon.png` }],
    ],
    themeConfig: {
        nav: [
            { text: '我的博客', link: 'https://hzjanger.github.io/', target: false}
        ],
        // 将会自动在每个页面的导航栏生成生成一个 GitHub 链接，以及在页面的底部生成一个 "Edit this page" 链接
        //假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'hzjanger/algorithm',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 默认为 "Edit this page"
        editLinkText: '在 GitHub 上编辑此页',
        //每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
        lastUpdated: '上次更新',
        sidebar: [
            {
                title: '基础',
                children: [
                    '基础/位运算'
                ]
            },
            {
                title: '链表',
                children: [
                    '链表/判断链表是否有环'
                ]
            },
            {
                title: '栈',
                children: [
                    '栈/最小栈'
                ]
            },
            {
                title: '算法',
                children: [
                    '算法/最大公约数'
                ]
            },
            {
                title: '贪心算法',
                children: [
                    '贪心算法/移掉k个数字'
                ]
            }
        ]
    }
};
