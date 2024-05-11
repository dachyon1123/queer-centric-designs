import '../App.css'

export default function Carousel() {
  return (
      <div className="carousel carousel-center max-w-7xl pb-6">
        <div className="item-pop carousel-item mx-10 h-80 w-auto pt-4 hover:scale-105">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            alt="Burger"
          />
        </div>
        <div className="item-pop carousel-item mx-10 h-80 w-auto pt-4 hover:scale-105">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            alt="Burger"
          />
        </div>
        <div className="item-pop carousel-item mx-10 h-80 w-auto pt-4 hover:scale-105">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            alt="Burger"
          />
        </div>
        <div className="item-pop carousel-item mx-10 h-80 w-auto pt-4 hover:scale-105">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            alt="Burger"
          />
        </div>
      </div>
  );
}
