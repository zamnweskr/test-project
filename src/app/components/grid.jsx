import gridGenerator from "../utils/gridGenerator"
import './grid.css'

function Grid({ grid }) {
    console.log(grid)
    return (
        <div className='grid-container'>
            {
                grid.map((row, rowID) => {
                    return (
                        <div className='grid-row' key={rowID}>{row.map((letter) => {
                            return (
                                <img className='letter-tile' key={letter.id} src={letter.src} alt={letter.name}/>
                            )
                        })}</div>
                    )
                })
            }
        </div>
    )
}

export default Grid