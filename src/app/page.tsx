// task 3.1: complete the getUsers() function to retrieve the data from API 
// API URL = "https://my-json-server.typicode.com/Kenzo800/interview-test-api/users"

// import User from "@/interfaces/user"
import Card from "@/components/card"

async function getUsers() {

  const data = await fetch('https://my-json-server.typicode.com/Kenzo800/interview-test-api/users')
  const posts = await data.json()

  return posts
}

// task 3.2: handle the data and show it in card view correctly
export default async function Home() {
  const member = await getUsers()
  return (
    <>
      <main className="m-4">
        <div className="grid grid-cols-4 gap-2">
          {
            member.map((value: any) => (
              <Card
                key={""}
                name={value.name}
                age={value.age}
                gender={value.gender}
                remarks={value.remarks}
              > </Card>
            ))
          }
        </div>

      </main>
    </>
  );
}
