async function getUsers() {
    let res = fetch('https://localhost:3000/api/users');
    return (await res).json();
}

export default async function Users() {
    let {users} = await getUsers();
    return (
        <div style={{display: 'flex'}}>
            <div style={{padding: '0 50px 0 0'}}>
                <h2>Users</h2>
                <ul style={{padding: '0', listStyleType: 'none'}}>
                    {users.map((obj) => {
                        return <li key={obj.id}>{obj.name}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}