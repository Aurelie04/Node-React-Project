import React from 'react'

function Dashboard() {
    const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="container mt-5">
      <h1>Hello {user?.name}</h1>
      <h3>Role: {user?.role}</h3>
      {/* You can later redirect or conditionally render components here based on role */}
    </div>
  )
}

export default Dashboard