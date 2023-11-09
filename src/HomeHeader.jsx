import { useNavigate } from "react-router-dom";
function HomeHeader() {
  const navigate = useNavigate();
  const onClickOrderOnline = () => {
    navigate("/menu/veg-pizzas", { relative: true });
  };
  return (
    <div className="background-header flex items-end justify-center pb-24 pr-96 pt-96">
      <button
        className=" onine-order-button bg-sky-400 font-sans"
        onClick={onClickOrderOnline}
      >
        ORDER ONLINE NOW
      </button>
    </div>
  );
}

export default HomeHeader;
