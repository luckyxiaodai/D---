(function () {
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList = $('.siteList');
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$$lastLi = $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList.find('li.last');
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$key = localStorage.getItem('key');
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$keyObject = JSON.parse($16b5ad875ae907e2f7f79e7b8fe116cc$var$key);
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap = $16b5ad875ae907e2f7f79e7b8fe116cc$var$keyObject || [
    {
        logo: 'A',
        url: 'https://www.acfun.cn'
    },
    {
        logo: 'B',
        url: 'https://www.bilibili.com/'
    }
];
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl = (url)=>{
    return url.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/.*/, '');
};
const $16b5ad875ae907e2f7f79e7b8fe116cc$var$render = ()=>{
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList.find('li:not(.last)').remove();
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.forEach((node, index)=>{
        const $li = $(`<li>\n            <div class="site">\n                <div class="logo">${node.logo}</div>\n                <div class="link">${$16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl(node.url)}</div>\n                <div class="close">\n                    <svg class="icon">\n                        <use xlink:href="#icon-close"></use>\n                    </svg>\n                </div>\n            </div>        \n        </li>`).insertBefore($16b5ad875ae907e2f7f79e7b8fe116cc$var$$lastLi);
        $li.on('click', ()=>{
            window.open(node.url);
        });
        $li.on('click', '.close', (e)=>{
            e.stopPropagation();
            $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.splice(index, 1);
            $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
        });
    });
};
$16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
$('.addButton').on('click', ()=>{
    let url = window.prompt('请输入你要添加的网址');
    if (url.indexOf('http') !== 0) url = 'https://' + url;
    console.log(url);
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.push({
        logo: $16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl(url)[0].toUpperCase(),
        url: url
    });
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
});
window.onbeforeunload = ()=>{
    const string = JSON.stringify($16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap);
    localStorage.setItem('key', string);
};

})();
//# sourceMappingURL=index.379a1ab7.js.map
