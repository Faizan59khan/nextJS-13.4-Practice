interface User{
  id: number;
  name: string;
}

export async function GET() {
  // Handle GET request for /api/users
  // Retrieve users from the database or any data source
  const Users: User[]=[
    {id: 1, name: 'Faizan'},
    {id: 2, name: 'Salman'},
    {id: 3, name: 'Kashif'},
  ]
  return new Response(JSON.stringify(Users));
}

