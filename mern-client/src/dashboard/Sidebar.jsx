import React, { useContext } from 'react';
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiShoppingBag, HiTable, HiUpload, HiUser, HiViewBoards } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { FaCircleUser } from 'react-icons/fa6';
const SideBar = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className="h-screen">
      <div className="bg-gray-300 text-gray-800 w-64 ">
        <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Logo 
      
      className='flex items-center justify-center'
    >
      {user?.photoURL ? (
        <img 
          src={user.photoURL} 
          alt={user?.displayName || 'User'} 
          className='w-12 h-12 rounded-full' 
        />
      ) : (
        < FaCircleUser className='w-12 h-12' />
      )}
      <p className='flex items-center justify-center w-12'>{user?.displayName || 'User'}</p>
    </Sidebar.Logo>

          <Sidebar.Items>
            <Sidebar.ItemGroup className="p-0">
              <Sidebar.Item as={Link} to="/admin/dashboard" icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item as={Link} to="/admin/dashboard/upload" icon={HiUpload}>
                Upload Book
              </Sidebar.Item>
              
              
              <Sidebar.Item as={Link} to="/shop" icon={HiShoppingBag}>
       All Books
              </Sidebar.Item>
              <Sidebar.Item as={Link} to="/" icon={HiArrowSmRight}>
               Home
              </Sidebar.Item>
              
              <Sidebar.Item as={Link} to="/logout" icon={HiShoppingBag}>
               Logout
              </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item as={Link} to="#" icon={HiChartPie}>
                Upgrade to Pro
              </Sidebar.Item>
              <Sidebar.Item as={Link} to="#" icon={HiViewBoards}>
                Documentation
              </Sidebar.Item>
              <Sidebar.Item as={Link} to="#" icon={BiBuoy}>
                Help
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
}

export default SideBar;
