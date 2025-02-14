// import { useState } from "react";

// export interface ModalProps {
//   isOpen: boolean;
//   onClick?: () => void;
//   onClose: () => void;
//   onCreate: (data: any) => void;
// }

// function CreateModal(props: ModalProps) {
//   const { isOpen, onClose, onCreate } = props;
//   const [formData, setFormData] = useState<{ name: string }>({ name: "" });
  
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     onCreate(formData);
//     onClose();
//   };

//   if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-5 rounded-lg shadow-lg w-1/3">
//         <h2 className="text-xl font-bold mb-4">Créer un élément</h2>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="border p-2 w-full rounded"
//           placeholder="Nom"
//         />
//         <div className="mt-4 flex justify-end space-x-2">
//           <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Annuler</button>
//           <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Créer</button>
//         </div>
//       </div>
//     </div>
//   );


// export default CreateModal
