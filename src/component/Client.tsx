import Elon from"../image/Elon.jpeg"
import Fazza from"../image/fazza.jpeg"
import Mark from"../image/Mark.jpeg"

type Client = {
    id: number;
    name: string;
    contact: string;
    image:string;
  };
  
  const Clients: React.FC = () => {
    const clients: Client[] = [
      { id: 1, name: "Elon Musk", contact: "Elon@Gmail.com", image:Elon},
      { id: 2, name: "Fazza hamdan", contact: "Fazza@Gmail.com", image:Fazza},
      { id: 2, name: "Mark zuckerberg", contact: "Marck@Gmail.com", image:Mark},

    ];
  
    return (
      <div>
        <h1>Clients</h1>
        <ul className="clientlist">
          {clients.map((client) => (
            <li key={client.id} className="Client">
              <img src={client.image} alt="" className="person" />
             <div className="container_name">
              <p className="client-name">{client.name} <br/>
              {client.contact}</p>
              </div> 
              <button className="createbtn">Amount</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Clients;