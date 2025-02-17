import { useState } from "react";
import Elon from "./Elon.jpeg";
import Fazza from "./fazza.jpeg";
import Mark from "./Mark.jpeg";

type Client = {
  id: number;
  name: string;
  contact: string;
  image: string;
  amount: number;
};

const Clients: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([
    { id: 1, name: "Elon Musk", contact: "Elon@Gmail.com", image: Elon, amount: 300000 },
    { id: 2, name: "Fazza Hamdan", contact: "Fazza@Gmail.com", image: Fazza, amount: 290000 },
    { id: 3, name: "Mark Zuckerberg", contact: "Marck@Gmail.com", image: Mark, amount: 100500 },
  ]);

  const Amount = (id: number) => {
    setClients((Clients) =>
      Clients.map((client) =>
        client.id === id ? { ...client, amount: client.amount + 500 } : client
      )
    );
  };

  return (
    <div>
      <h1>Clients</h1>
      <ul className="clientlist">
        {clients.map((client) => (
          <li key={client.id} className="Client">
            <img src={client.image} alt={client.name} className="person" />
            <div className="container_name">
              <p className="client-name">
                {client.name} <br />
                {client.contact}
              </p>
            </div>
            <div className="container-amount">
            <p className="montant"> ${client.amount}</p>
            </div>
            <button className="createbtn" onClick={() => Amount(client.id)}>
               Amount
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
