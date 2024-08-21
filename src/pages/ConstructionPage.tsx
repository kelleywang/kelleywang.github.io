import "./ConstructionPage.css";
export default function ConstructionPage() {
  return (
<div className="scene">
  <div className="floor">
    <div id="floortextfront">
      Website in Progress
    </div>
    <div id="floortextback">
      <a href="mailto: kelleyewang@gmail.com" style={{color: "#FAF9F6"}}>
        Contact Me Here
      </a>
    </div>
  </div>
  <div className="cube">
    <div className="front"></div>
    <div className="back"></div>
    <div className="left"></div>
    <div className="right"></div>
    <div className="top">
      <div className="ballShadow"></div>
    </div>
    <div className="bottom"></div>
  </div>
  <div className="ball"></div>
</div>
  );
}
