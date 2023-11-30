async function getCompanies() {
    let res = fetch('http://localhost:3000/api/companies');

    return (await res).json();
}

export default async function Companies() {
    let {companies} = await getCompanies();
    return (
        <div style={{padding: '0 50px 0 0 '}}>
            <h2>Companies</h2>
            <ul style={{padding: '0', listStyleType: 'none'}}>
                {companies.map((obj) => {
                    return<li key={obj.id}>{obj.name}</li>
                })}
            </ul>
        </div>
    )
}