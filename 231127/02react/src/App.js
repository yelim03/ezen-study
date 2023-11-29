import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
//분명히 생김새는 함수 인데, 첫 단어가 대문자로 시작한다면, 컴포넌트 => 컴포넌트의 시작하는 첫단어를 소문자로 하면 안되나요?
//그냥 일반함수 VS 컴포넌트의 역할이 엄연히 다름

//Jsx 문법!! = Javascript & Xml
// svg => xmlns => xml name space : 해당 xml 문법을 창시한 창시자 혹은 기업을 기리기 위한 약속
//xml => Extensible markup language => 개발자가 자신만의 고유한 문법을 만들어서 사용하고 싶을 때

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
