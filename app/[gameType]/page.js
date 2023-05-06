export default function Game({ params }) {
  const { gameType } = params
  return (
    <div>
      Playing {gameType} game
    </div>
  )  
}
