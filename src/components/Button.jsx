import "./components.css"
import { useNavigate } from "react-router-dom";


function Button({text, path, variant="btn_default"}) {
  const navigate = useNavigate();

  return (
    <>
    <button className={variant} onClick={() => navigate(path)}>
      {text}
    </button>
    </>
  )
}

export default Button;