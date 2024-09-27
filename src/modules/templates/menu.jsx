import { Link } from "react-router-dom";

export const MenuLists = ({ role, is_verified }) => {
  return <>{role === "admin" ? <AdminList /> : <UserList is_verified={is_verified} />}</>;
};

const AdminList = () => {
  return (
    <>
      <li>
        <Link to="/admin/" class="flex items-center p-2 text-gray-900 hover:text-amber-500 rounded-lg bg-gray-100 group">
          <svg class="w-5 h-5 text-gray-900 transition duration-75 group-hover:text-amber-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
          </svg>
          <span class="ms-3">Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to="/admin/notif" class="flex items-center p-2 text-gray-900 hover:text-amber-500 rounded-lg bg-gray-100 group">
          <svg class="w-5 h-5 text-gray-900 transition duration-75 group-hover:text-amber-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 21">
            <path
              fill-rule="evenodd"
              d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z"
              clip-rule="evenodd"
            />
          </svg>

          <span class="ms-3">Notifikasi</span>
        </Link>
      </li>
      <li>
        <Link to="/admin/rent" class="flex items-center p-2 text-gray-900 hover:text-amber-500 rounded-lg bg-gray-100 group">
          <svg class="w-5 h-5 text-gray-900 transition duration-75 group-hover:text-amber-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M4 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2v14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2V5a1 1 0 0 1-1-1Zm5 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1Zm-5 4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1Zm-3 4a2 2 0 0 0-2 2v3h2v-3h2v3h2v-3a2 2 0 0 0-2-2h-2Z"
              clip-rule="evenodd"
            />
          </svg>

          <span class="ms-3">Penyewa</span>
        </Link>
      </li>
      <li>
        <Link to="/admin/my-room" class="flex items-center p-2 text-gray-900 hover:text-amber-500 rounded-lg bg-gray-100 group">
          <svg class="w-5 h-5 text-gray-900 transition duration-75 group-hover:text-amber-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M4 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2v14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2V5a1 1 0 0 1-1-1Zm5 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1Zm-5 4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1Zm-3 4a2 2 0 0 0-2 2v3h2v-3h2v3h2v-3a2 2 0 0 0-2-2h-2Z"
              clip-rule="evenodd"
            />
          </svg>

          <span class="ms-3">Informasi Kamar</span>
        </Link>
      </li>
      <li>
        <Link to="/admin/payments" class="flex items-center p-2 text-gray-900 hover:text-amber-500 rounded-lg bg-gray-100 group">
          <svg class="w-5 h-5 text-gray-900 transition duration-75 group-hover:text-amber-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clip-rule="evenodd" />
            <path fill-rule="evenodd" d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clip-rule="evenodd" />
            <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
          </svg>

          <span class="ms-3">Histori Pembayaran</span>
        </Link>
      </li>
      <li>
        <Link to="/admin/verification" class="flex items-center p-2 text-gray-900 hover:text-amber-500 rounded-lg bg-gray-100 group">
          <svg class="w-5 h-5 text-gray-900 transition duration-75 group-hover:text-amber-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
              clip-rule="evenodd"
            />
          </svg>

          <span class="ms-3">Verifikasi User</span>
        </Link>
      </li>
      <li>
        <Link to="/user/profile" class="flex items-center p-2 text-gray-900 hover:text-amber-500 rounded-lg bg-gray-100 group">
          <svg class="w-5 h-5 text-gray-900 transition duration-75 group-hover:text-amber-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd" />
          </svg>

          <span class="ms-3">Profil</span>
        </Link>
      </li>
    </>
  );
};

const UserList = ({ is_verified }) => {
  return (
    <>
      <li>
        <Link to="/user/" class="flex items-center p-2 text-gray-900 hover:text-amber-500 rounded-lg bg-gray-100 group">
          <svg class="w-5 h-5 text-gray-900 transition duration-75 group-hover:text-amber-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
          </svg>
          <span class="ms-3">Dashboard</span>
        </Link>
      </li>
      {is_verified && (
        <>
          <li>
            <Link to="/user/notif" class="flex items-center p-2 text-gray-900 hover:text-amber-500 rounded-lg bg-gray-100 group">
              <svg class="w-5 h-5 text-gray-900 transition duration-75 group-hover:text-amber-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 21">
                <path
                  fill-rule="evenodd"
                  d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="ms-3">Notifikasi</span>
            </Link>
          </li>

          <li>
            <Link to="/user/my-room" class="flex items-center p-2 text-gray-900 hover:text-amber-500 rounded-lg bg-gray-100 group">
              <svg class="w-5 h-5 text-gray-900 transition duration-75 group-hover:text-amber-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M4 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2v14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2V5a1 1 0 0 1-1-1Zm5 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1Zm-5 4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1Zm-3 4a2 2 0 0 0-2 2v3h2v-3h2v3h2v-3a2 2 0 0 0-2-2h-2Z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="ms-3">Informasi Kamar</span>
            </Link>
          </li>
          <li>
            <Link to="/user/payments" class="flex items-center p-2 text-gray-900 hover:text-amber-500 rounded-lg bg-gray-100 group">
              <svg class="w-5 h-5 text-gray-900 transition duration-75 group-hover:text-amber-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clip-rule="evenodd" />
                <path fill-rule="evenodd" d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clip-rule="evenodd" />
                <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
              </svg>

              <span class="ms-3">Histori Pembayaran</span>
            </Link>
          </li>
        </>
      )}
      <li>
        <Link to="/user/profile" class="flex items-center p-2 text-gray-900 hover:text-amber-500 rounded-lg bg-gray-100 group">
          <svg class="w-5 h-5 text-gray-900 transition duration-75 group-hover:text-amber-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd" />
          </svg>

          <span class="ms-3">Profil</span>
        </Link>
      </li>
    </>
  );
};
