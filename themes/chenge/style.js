/* eslint-disable react/no-unknown-property */
/**
 * 这里的css样式只对当前主题生效
 * 主题客制化css
 * @returns
 */
const Style = () => {
  return (<style jsx global>{`
    :root {
        --color-cyan-light: #e3fdf5; 
        --color-pink-light: #ffe6fa; 
        --grey-a7: rgba(253,253,253,0.7);
        --grey-a5: rgba(253,253,253,0.5);
        --grey-a3: rgba(253,253,253,0.3);
        --grey-a0: #fdfdfd;
        --color-purple: #928CEE;
        --color-aqua: #3e999f;
        --menu-bg: linear-gradient(90deg, var(--color-aqua) 0%, var(--color-aqua) 100%);
        --nav-bg: linear-gradient(-225deg, var(--color-cyan-light) 0%, var(--color-pink-light) 100%);
    }

    .dark {
        --color-cyan-light: #2d3230;
        --color-pink-light: #322d31;
        --grey-a7: rgba(34,34,34,0.7);
        --grey-a5: rgba(34,34,34,0.5);
        --grey-a3: rgba(34,34,34,0.3);
        --color-aqua: #97d3d6;
        --grey-a0: #21252b
    }

    // iconfont 图标支持
    .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    // 底色
    body{
        background-color: #f5f5f5
    }
    .dark body{
        background-color: black;
    }

    .waves {
        width: 100%;
        height: 15vh;
        //margin-bottom: -.6875rem;
        min-height: 3.125rem;
        max-height: 9.375rem;
        position: relative
    }
    
    @media (max-width: 767px) {
        .waves {
            height:10vh
        }
    }
    
    .parallax>use {
        -webkit-animation: wave 25s cubic-bezier(.55,.5,.45,.5) infinite;
        animation: wave 25s cubic-bezier(.55,.5,.45,.5) infinite
    }
    
    .parallax>use:nth-child(1) {
        -webkit-animation-delay: -2s;
        animation-delay: -2s;
        -webkit-animation-duration: 7s;
        animation-duration: 7s;
        fill: var(--grey-a7)
    }
    
    .parallax>use:nth-child(2) {
        -webkit-animation-delay: -3s;
        animation-delay: -3s;
        -webkit-animation-duration: 10s;
        animation-duration: 10s;
        fill: var(--grey-a5)
    }
    
    .parallax>use:nth-child(3) {
        -webkit-animation-delay: -4s;
        animation-delay: -4s;
        -webkit-animation-duration: 13s;
        animation-duration: 13s;
        fill: var(--grey-a3)
    }
    
    .parallax>use:nth-child(4) {
        -webkit-animation-delay: -5s;
        animation-delay: -5s;
        -webkit-animation-duration: 20s;
        animation-duration: 20s;
        fill: var(--grey-a0)
    }
    
    @-webkit-keyframes wave {
        0% {
            transform: translate3d(-90px,0,0)
        }
    
        100% {
            transform: translate3d(85px,0,0)
        }
    }
    
    @keyframes wave {
        0% {
            transform: translate3d(-90px,0,0)
        }
    
        100% {
            transform: translate3d(85px,0,0)
        }
    }

    /*  菜单下划线动画 */
    #theme-hexo .menu-link {
        text-decoration: none;
        background-image: var(--menu-bg);
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: 0 2px;
        transition: background-size 400ms ease-in-out;
    }
    
    #theme-hexo .menu-link:hover {
        background-size: 100% 2px;
        color: var(--color-aqua);
    }

    /* 设置了从上到下的渐变黑色 */
    #theme-hexo .header-cover::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background:  linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,0) 25%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0.5) 100%);
    }

    /* Custem */
    .tk-footer{
        opacity: 0;
    }

    // 选中字体颜色
    ::selection {
        background: rgba(45, 170, 219, 0.3);
    }

    // 自定义滚动条
    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #6b6c6d;
    }

    * {
        scrollbar-width:thin;
        scrollbar-color: #6b6c6d transparent
    }
    

  `}</style>)
}

export { Style }