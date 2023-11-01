import styled from "styled-components";
// import assets
import defaultImg from "./../../assets/img/jpeg/room-1.jpeg";

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${(props) => (props.img ? props.img : defaultImg)})
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;


{/* <div className="services-center">
        {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.img}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        
        </div> */}
        // state = {
        //   services: [
        //     {
        //       img:https://www.google.com/url?sa=i&url=https%3A%2F%2Fmotuscc.com%2Frestaurant-point-of-sale%2Fpros-cons-offering-free-wifi-restaurants%2F&psig=AOvVaw3fNDTiomzTLVzLhZZWUSjw&ust=1698696024381000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNCeu_uFnIIDFQAAAAAdAAAAABAE,
        //       title: "Super Breakfast",
        //       info:
        //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
        //     },
        //     {
        //       img:<img2/>,
        //       title: "Free wifi",
        //       info:
        //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
        //     },
        //     {
        //       img:<img3/>,
        //       title: "Eat When You Want",
        //       info:
        //         "Whether working,relaxing or spending quality time together,let The Premium Resort room service deliver delectable favorites to you whennever you like",
        //     },
        //     {
        //       img:<img4/>,
        //       title: "storages beer",
        //       info:
        //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
        //     },
        //   ],
        // };