import logo from "../assets/logo.png";





export default function PatternCard(props) {
  return (
    <div className="card card-compact w-64 bg-base-100 shadow-xl">
      <figure>
        <img
          src={props.image}
          alt="Image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
