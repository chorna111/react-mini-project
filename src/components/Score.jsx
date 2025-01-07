export default function Score({score}){
    return (
    <div>
        <p className="score">Wins: {score.wins} | Losses: {score.losses} | Ties: {score.ties}</p>

    </div>
    )
}