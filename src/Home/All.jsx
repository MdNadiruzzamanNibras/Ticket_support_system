import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const All = () => {
    const [supports, setSupports] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allSupport')
            .then(res => res.json())
        .then(data=>setSupports(data))
    }, [])
    const navigate = useNavigate();

  const handleReply = (id) => {
    navigate(`/reply/${id}`);
  };
   
    return (
        <div className="container mx-auto">
            <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Quetions</th>
              <th>Reply</th>
              <th>Status</th>
              <th></th>
              
            </tr>
          </thead>
          <tbody>
            {supports.map((support, index) => (
              <tr key={support._id}>
                <th>{index + 1}</th>
                <td>{support?.support?.name}</td>
                <td>{support?.support?.email}</td>
                <td>{support?.support?.question}</td>
                
                <td>{support?.support?.reply ? support?.support?.reply: "Not reply Now"}</td>
                <td>{support?.support?.status}</td>
                <td>
                  <button onClick={()=>handleReply(support._id)}>Reply</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default All;