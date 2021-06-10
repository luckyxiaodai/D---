const $siteList = $('.siteList')
const $lastLi = $siteList.find('li.last')
const key = localStorage.getItem('key')
const keyObject = JSON.parse(key)
const hashMap = keyObject || [
    {logo: 'A', url:'https://www.acfun.cn'},
    {logo: 'B', url:'https://www.bilibili.com/'}
]

const simplifyUrl = (url) => {
    return url.replace('https://','')
        .replace('http://','')
        .replace('www.','')
        .replace(/\/.*/,'')
}

const render = () => {
    $siteList.find('li:not(.last)').remove()
    hashMap.forEach((node,index) => {
        const $li = $(`<li>
            <div class="site">
                <div class="logo">${node.logo}</div>
                <div class="link">${simplifyUrl(node.url)}</div>
                <div class="close">
                    <svg class="icon">
                        <use xlink:href="#icon-close"></use>
                    </svg>
                </div>
            </div>        
        </li>`).insertBefore($lastLi)
        $li.on('click', () => {
            window.open(node.url)
        })
        $li.on('click','.close', (e) => {
            e.stopPropagation()
            hashMap.splice(index,1)
            render()
        })
    })
}

render()

$('.addButton').on('click', () => {
        let url = window.prompt('请输入你要添加的网址')
        if(url.indexOf('http')!==0){
            url = 'https://' + url
        }
        console.log(url)
        hashMap.push({
            logo: simplifyUrl(url)[0].toUpperCase(),
            url: url
        })

    render()
})

window.onbeforeunload = () => {
   const string = JSON.stringify(hashMap)
   localStorage.setItem('key',string)
}