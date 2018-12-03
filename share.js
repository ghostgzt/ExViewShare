function base64encode(str) {
    return btoa(unescape(encodeURIComponent(str)));
}
function base64decode(str) {
    return decodeURIComponent(escape(atob(str)));
}
function isWeiXin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger" || ua.match(/WeiBo/i) == "weibo") {
        return true;
    } else if (ua.indexOf('mqqbrowser') > -1) {
        return true;
    } else if (ua.indexOf('iphone') > -1 || ua.indexOf('mac') > -1) {
        if (ua.indexOf('qq') > -1) {
            return true;
        }
    }
    return false;
}
if(self!=top){
    if(isWeiXin()){
        alert('请在右上角点击选择用浏览器打开！');
    }else{
        // top.location.href=self.location.href;
    }
}
var icon='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAC+lBMVEUAAAD29vb4+Pj7+/v5+fn9/f2fnZ3////+/v739/f+/v7////6+vr////////z8/P9/f3////////////////////////w8PD////+/v7////////////////////e3d319fX29vb////////////////x8fH39/f////29vb7+/v9/f309PTy8vL9/f329fX19fX////8/Pzv7+/y8vLu7e15d3eCgYG5uLj///+Yl5fLy8v+/v74+Pjn5+f29fX29vb8/Pzf3t7///////////+PjY3v7++4uLj4+PjFxMT////5+fnt7Oz////n5ubt7Ozv7+/39/eurKylpaXz8vLt7e3S0tKTkpL////d3Nz39/fU09P////e3d3i4eHr6+txb2/08/Pw8PCfnZ1hX19raWn////39/ewr6/l5eWCgIClpKTa2dnb2tq4uLj+/v719fXi4uKqqKj39/e1tLT39/fo5+fo6OhTUVFmZGTp6enn5+d+fHz////g4ODl5OTu7u7Qz8+pqKi3tra/v7////+Uk5M+Ozv08/P19fXy8vLw8PDr6+v09PTt7e1PTEzv7u739/eCgYGFg4NAPT3q6emGhIQ6NzeVlJTl5eXg4OCTkZHo6Ojk4+OBf3/9/f2Jh4eWlJSCgICOjIyamZlycHCDgoLm5ubn5+c1MjLe3t6Pjo6HhoaXlZWQj4/4+Ph/fX3l5OSIhoZBPz/Dw8OKiIg3NDRQTk7i4uLh4eGSkZE4NTVMSkre3d08OTnc3NwyLy9DQECnpqZDQUHPzs7b2tr7+/t9fHxKSEhUUlK5uLilpKSZl5dFQkIzMDHa2dmioaGMiopST0/Ly8tQTU2XlpYwLS3T0tLR0NDOzc2JiIhPTU3JyMjKycm+vb2ko6NhXl7Z2Nh5eHjQz8+4t7d0cnKtrKyhoKBWVFTV1NTNzc2gn59mZGRaWFhHRETHxsbBwMCxsLCqqamenZ1raWlta2tjYWFbWVm3t7e2tbVxb29oZmZdW1u+jRnqAAAAhnRSTlMAAg0SFg/D6SsGGUQESzwpCtrysZXhq0Ptyr1za15GEeqTknn6xHRpaEY6I8WreHVdVDW/Vwr7+fX079vVysC+rYSCdFxA9erg18/MsZaJazUj8+zl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';
document.writeln(base64decode('PG1ldGEgY2hhcnNldD0iVVRGLTgiLz48bWV0YSBuYW1lPSJ2aWV3cG9ydCJjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgbWF4aW11bS1zY2FsZT0xLCBtaW5pbXVtLXNjYWxlPTEsIHVzZXItc2NhbGFibGU9bm8sIG1pbmltYWwtdWkiPjxkaXYgc3R5bGU9InRleHQtYWxpZ246IGNlbnRlcjsiPjxpbWcgY2xhc3M9InNoYXJlaW1nInN0eWxlPSJtYXgtd2lkdGg6MTAwJTtib3JkZXItcmFkaXVzOiAzcHg7Ym94LXNoYWRvdzogMCA4cHggMTZweCAtNXB4IGJsYWNrOyIvPjxoMSBjbGFzcz0ic2hhcmVuYW1lIj5FeFZpZXc8L2gxPjxhIGNsYXNzPSJvcGVuc2hhcmV1cmwiaHJlZj0iZXh2Oi8vb3BlbkFwcCJzdHlsZT0iYmFja2dyb3VuZDogIzUyODg4ODtwYWRkaW5nOiA4cHggMTZweDtib3JkZXItcmFkaXVzOiAzMnB4O3RleHQtZGVjb3JhdGlvbjogbm9uZTtjb2xvcjogd2hpdGU7Ij7miZPlvIBFeFZpZXc8L2E+PGEgaHJlZj0iaHR0cHM6Ly93d3cuZXh2aWV3Lm1sLyJzdHlsZT0iYmFja2dyb3VuZDogIzUyODg4ODtwYWRkaW5nOiA4cHggMTZweDtib3JkZXItcmFkaXVzOiAzMnB4O3RleHQtZGVjb3JhdGlvbjogbm9uZTtjb2xvcjogd2hpdGU7Ij7kuIvovb1FeFZpZXc8L2E+PGhyIHN0eWxlPSJtYXJnaW46IDE2cHggMDsiLz48aDYgY2xhc3M9InNoYXJldXJsc2hvdyJzdHlsZT0ibWFyZ2luOiAxNnB4O2Rpc3BsYXk6bm9uZTsiPuWkjeWItuS7peS4i+WGheWuueW5tuWIhuS6q+e8luWPtyzlnKgi57yW5Y+36Lez6L2sIuWKn+iDvemHjOeymOi0tCE8L2g2PjxkaXYgc3R5bGU9InRleHQtYWxpZ246IGNlbnRlcjt3aWR0aDogMTAwJTsiPjxkaXYgY2xhc3M9InNoYXJldXJsInN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjogbGVmdDt3aGl0ZS1zcGFjZTogbm9ybWFsO3dvcmQtYnJlYWs6IGJyZWFrLWFsbDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Ym9yZGVyOiAxcHggZ2FpbnNib3JvIHNvbGlkO3BhZGRpbmc6IDhweDtib3JkZXItcmFkaXVzOiAzcHg7Ij48L2Rpdj48L2Rpdj48L2Rpdj4='));

var shareimgdom=document.querySelector('.shareimg');
shareimgdom.addEventListener("error",function(){
    this.src=icon;
});
shareimgdom.src=icon;
var shareurl=window.location.hash.substring(1);
if(shareurl){
    document.querySelector('.openshareurl').href=shareurl;
    var sharecode=decodeURIComponent(shareurl||'');
    sharecode=sharecode.replace('exv://openShareCode?data=','');
    document.querySelector('.shareurl').innerHTML=sharecode;
    document.querySelector('.shareurlshow').style.display='block';
    var sharearr=sharecode.split('::');
    var sharename=sharearr.pop();
    document.querySelector('.sharename').innerHTML=sharename;
    var shareimg=sharearr.pop()||'';
    if(shareimg.indexOf('exview://')==0){
        var shareimgarr=shareimg.split('?');
        shareimgarr.shift();
        shareimg=shareimgarr.join('?').split('&')[0];
        shareimg=base64decode(shareimg);
        shareimg=JSON.parse(shareimg);
        shareimg=shareimg.imgurl;
        document.querySelector('.shareimg').src=shareimg;
    }
    document.title=sharename+' - ExView分享';                
}