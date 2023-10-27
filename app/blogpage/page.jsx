import CardList from "../components/cardList/CardList"
import Menu from "../menu/Menu"


const h1 = () => {
  return (
    <div className="pt-20">
        <h1>Design Blog</h1>
        <div className="flex">
            <CardList />
            <Menu />
        </div>
    </div>
  )
}

export default h1