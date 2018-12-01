import kscreenshot from 'kscreenshot'
new kscreenshot(
    {
        key: 65,
        needDownload: true, //   是否保存截屏图片
        endCB: ()=>{
            alert()
        }
    }
)