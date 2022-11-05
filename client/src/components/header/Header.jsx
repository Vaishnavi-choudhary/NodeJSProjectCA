import "./header.css";
import img1 from "../../assets/img1.jpeg"
import img2 from "../../assets/img2.jpeg"
import img3 from "../../assets/img3.jpeg"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">BLOG ME</span>
      </div>
      <div style = {{width : "100% !important", height : "300px !important"}}>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
