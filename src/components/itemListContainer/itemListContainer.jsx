import './itemListContainer.css'

const itemListContainer = ({ greeting }) => {
    console.log(greeting)
    return (
        <div>
            {greeting}
        </div>
    )
}

export default itemListContainer;