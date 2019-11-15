function FSAddOriginalLink(){
    var body_element = document.getElementsByTagName('body')[0];
    var selection;
    selection = window.getSelection();
    var pagelink = "<br/><br/>BẠN ĐÃ BỊ THEO DÕI VÌ ĐI COPPY, NẾU MUỐN COPPY THÌ HÃY CHUYỂN KHOẢN 100K MÌNH SẼ GỬI CHO BẠN : <a href='http://duanhiepphuochabourview.blogspot.com/'>http://duanhiepphuochabourview.blogspot.com/"+document.location.pathname+"</a>";
    var copytext = pagelink;
    var newdiv = document.createElement('div');
    newdiv.style.position='absolute';
    newdiv.style.left='-99999px';
    body_element.appendChild(newdiv);
    newdiv.innerHTML = copytext;
    selection.selectAllChildren(newdiv);
    window.setTimeout(function() {
        body_element.removeChild(newdiv);
    },0);
}
document.oncopy = FSAddOriginalLink;
