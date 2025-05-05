import { useParams } from "react-router";

 function HouseInfo() {
  let params = useParams();
  // params.teamId
  console.log(params.rentId);
}
  
  export default HouseInfo
  