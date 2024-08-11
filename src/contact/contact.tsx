import { useParams } from "react-router-dom";
 export const Contact = () => {
  let { number } = useParams();
  window.open(`https://wa.me/55${number}`);
  return null;
 };