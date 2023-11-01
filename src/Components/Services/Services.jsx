// import React, { Component } from "react";

// // imports react-icons
// // import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// import img1 from "../../assets/img/svg/img1.jpg";
// import img2 from "../../assets/img/svg/img2.jpg";
// import img3 from "../../assets/img/svg/img3.jpeg";
// import img4 from "../../assets/img/svg/img4.jpeg";

// // imports components
// import Title from "../Title/Title";

// export default class Services extends Component {
 

//   render() {
//     return (
//       <section className="services">
//         <Title title="services" />
//         <div className="row"> 
//          <div class="card">
//   <img src={img1} style={{width:"270px",height:"200px"}}/>
//   <div class="card-body">
//     <h5 class="card-title">Super Breakfast</h5>
//     <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum aliquid praesentium facere quod fuga quaerat perferendis doloremque, possimus tempora id, labore, inventore distinctio optio harum dolores dicta ea? Expedita, tenetur.</p>
    
//   </div>
// </div>
// <div class="card">
// <img src={img2} style={{width:"270px",height:"200px"}}/>
//   <div class="card-body">
//     <h5 class="card-title">Free wifi</h5>
//     <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit atque provident consectetur. Laborum vel eos error, repellendus dolorum, explicabo consequuntur neque quisquam suscipit dicta praesentium, adipisci ex nam excepturi ratione!</p>
    
//   </div>
// </div>
// <div class="card">
// <img src={img3} style={{width:"270px",height:"200px"}}/>
//   <div class="card-body">
//     <h5 class="card-title">Eat When You Want</h5>
//     <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod aut laborum voluptates corporis veritatis corrupti exercitationem porro accusamus, impedit aspernatur soluta, fugit beatae sunt. Eum accusantium id quas repudiandae sequi.</p>
    
//   </div>
// </div>
// <div class="card">
// <img src={img4} style={{width:"270px",height:"200px"}}/>
//   <div class="card-body">
//     <h5 class="card-title">storages beer</h5>
//     <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure nihil, illo optio quidem exercitationem nesciunt impedit debitis at veniam incidunt magni dolorum eligendi quis, consequatur expedita, doloribus cumque esse quasi?</p>
    
//   </div>
// </div>
// </div>



        
//       </section>
//     );
//   }
// }
import React, { Component } from "react";
import Title from "../Title/Title";
import img1 from "../../assets/img/svg/img1.jpg";
import img2 from "../../assets/img/svg/img2.jpg";
import img3 from "../../assets/img/svg/img3.jpeg";
import img4 from "../../assets/img/svg/img4.jpeg";

export default class Services extends Component {
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img src={img1} style={{ width: "100%", height: "200px" }} />
              <div className="card-body">
                <h5 className="card-title">Super Breakfast</h5>
                <p className="card-text">An inredible and unforgettable breakfast experience Beautifully prepared fresh and seasonal meals providing a feast for the senses that will prepare you for whatever the day present</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={img2} style={{ width: "100%", height: "200px" }} />
              <div className="card-body">
                <h5 className="card-title">Free wifi</h5>
                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto laboriosam vero similique adipisci cum excepturi obcaecati provident. Rem, praesentium, omnis et consectetur facere as</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={img3} style={{ width: "100%", height: "200px" }} />
              <div className="card-body">
                <h5 className="card-title">Eat When You Want</h5>
                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod aut laborum voluptates corporis veritatis corrupti exercitationem porro accusamus, impedit aspernatur soluta.praesentium, omnis </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={img4} style={{ width: "100%", height: "200px" }} />
              <div className="card-body">
                <h5 className="card-title">Storage Beer</h5>
                <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure nihil, illo optio quidem exercitationem nesciunt impedit debitis at veniam incidunt magni dolorum eligendi quis, consequatur expedita, </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
