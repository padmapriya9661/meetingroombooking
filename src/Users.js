import React, {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import {useTakeusersQuery, useRemoveUserMutation} from './API/rtkQuery'
import { useNavigate } from 'react-router-dom';
const Users = () =>{
    const {data, error} = useTakeusersQuery();
    const [findUser, setFindUser] = useState('');
    const [selectStatus, setSelectStatus] = useState('All');
    const navigate = useNavigate();
    const[removeUser] = useRemoveUserMutation();
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        let timer;
        if (successMessage) {timer = setTimeout(() => {setSuccessMessage("");
          }, 1000);
        }
        return () => clearTimeout(timer);
      }, [successMessage]);


    let filterUsers = data;

    const handleStatusChange = (status) => {
        setSelectStatus(status);
    };

    const handleSearch = (event) => {
        setFindUser(event.target.value);
    };

    if (selectStatus !== 'All') {
        filterUsers = filterUsers.filter((user) => user.status === selectStatus);
    }
    filterUsers = filterUsers?.filter((response) =>
        response.username?.toLowerCase().includes(findUser.toLowerCase())
    )

    const navigateToPutUser = (user) => {
        navigate(`/editUser/${user.id}`, { state: { user } })
    }

    const handleDelete = (userId) => {
        removeUser(userId).unwrap().then((res)=>{
            setSuccessMessage("User deleted successfully!");
            window.location.reload();
        })
    }


return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-auto col-md-3 col-xl-2 p-0'>
                <Sidebar />
            </div>
            <div className='col-auto col-md-9 col-xl-10 '>
                {successMessage && <div className="mt-3 alert alert-danger">{successMessage}</div>}
                <div className='fs-2 ms-3'>List of Users</div>
                <div className='d-flex flex-row p-2 mt-5'>
                    <button type="button" className='btn btn-secondary' onClick={() => navigate("/adduser")}><i className='fa fa-plus'></i>  Add Users</button>
                    <input className="search ms-5 p-2 rounded" type="text" placeholder="Search"value={findUser}  onChange={handleSearch}/>
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                        type="button"
                        className={`rounded ${selectStatus === 'All' ? 'active' : ''}`}
                        onClick={() => handleStatusChange('All')}> All </button>
                    <button
                        type="button"
                        className={`rounded ${selectStatus === 'Active' ? 'active' : ''}`}
                        onClick={() => handleStatusChange('Active')}> Active </button>
                    <button
                        type="button"
                        className={`rounded ${selectStatus === 'InActive' ? 'inactive' : ''}`}
                        onClick={() => handleStatusChange('InActive')}> InActive </button>
                   
                </div>


                {/* table data---------- */}

                <div className='card shadow bg-body rounded mt-5 p-3'>
                    {filterUsers?.length === 0 ? (
                            <div>No data found.</div>
                        ) : (
                   
                        <table className="table table-striped border">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterUsers?.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>{user.status}</td>
                                        <td><i className='fa fa-edit ms-2' style={{ "cursor": "pointer" }}  onClick={() => navigateToPutUser(user)}></i>
                                            <i className='fa fa-trash ms-3'  style={{"cursor":"pointer"}} onClick={() => handleDelete(user.id)}></i>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                     )}
                </div>

            </div>
        </div>
    </div>
)

}

export default Users;