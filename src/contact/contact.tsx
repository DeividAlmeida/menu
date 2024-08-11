import { useParams, useNavigate } from "react-router-dom";
 export const Contact = () => {
  let { number } = useParams();
  const navigate = useNavigate();
  navigate(`https://wa.me/55${number}`);
  return null;
 };