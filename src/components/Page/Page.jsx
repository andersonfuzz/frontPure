import './Page.css'
import Card from '../Card/Card.jsx'
function Page() {
  return (
    <div className="page">
      <h2>Meus Cards</h2>
      <div className="cards-container">
       <Card />
      </div>
    </div>
  );
}

export default Page;
