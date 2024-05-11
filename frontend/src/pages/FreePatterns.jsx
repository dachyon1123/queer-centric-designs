import PatternCard from "../components/PatternCard";

export default function FreePatterns() {
  const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]


  return (
    <main className="flex flex-col items-center">
      <h1 className="text-center w-full py-10 font-poetsen text-white bg-[#F1D4DB] text-5xl mb-20">FREE PATTERNS</h1>
      <div className="grid grid-cols-5 max-w-fit gap-10">
          {array.map((number) => {
            return <PatternCard />
          })}
      </div>
    </main>
  )
}