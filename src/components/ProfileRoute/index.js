import Header from '../Header'

const ProfileRoute = () => {
  const userDetails = localStorage.getItem('user')
  const updatedDetails = JSON.parse(userDetails)
  const {username} = updatedDetails

  return (
    <div>
      <>
        <Header />
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrb7XeVpElaj3yF0M2zBadpBwR1H32HQQumw&usqp=CAU"
            alt="profile"
          />
          <h1>{username}</h1>
        </div>
      </>
    </div>
  )
}
export default ProfileRoute
