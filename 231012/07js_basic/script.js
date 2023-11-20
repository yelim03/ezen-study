let t = "Hello Thank you good luck to you";
document.write(t, "<br/>");

document.write(t.charAt(16), "<br/>");
document.write(t.indexOf("you"), "<br/>"); // 인덱스값으로 12번째 단어
document.write(t.indexOf("you", 16), "<br/>"); // 인덱스값으로 16번째에서 you의 인덱스값
document.write(t.lastIndexOf("you"), "<br/>"); // 뒤에서부터
document.write(t.lastIndexOf("you", 25), "<br/>"); 
document.write(t.match("luck"), "<br/>"); //luck 이라는 단어랑 매칭되는 단어 가져옴
document.write(t.search("luck"), "<br/>"); // luck 이라는 단어 시작 인덱스값
document.write(t.substr(21, 4), "<br/>"); // 
document.write(t.substring(6, 12), "<br/>"); // 




