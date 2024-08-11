import { useParams } from "react-router-dom";
 export const Contact = () => {
  let { number } = useParams();
  window.location.href = `https://wa.me/55${number}`;
  return null;
 };