import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <nav className="border-b-2 bg-[#FAF7EF] font-poetsen">
      <div className="flex justify-between py-4 pr-20 pl-10">
        <Link to='/'>
          <h1>Queer Centric Designs</h1>
        </Link>
        <ul className="flex justify-end gap-10">
          <li><button>About Us</button></li>
          <li><button>Portfolio</button></li>
          <Link to='free-patterns'>
            <button>
              <li><button>Free Patterns</button></li>
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  )
}