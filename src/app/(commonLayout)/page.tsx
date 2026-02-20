import { Button } from "@/components/ui/button";



export default async function Home() {
  // const {data} = await userService.getUserSession()
  // console.log(data?.user);
  return (
    <div>
     <h1>Hello world</h1>
     <Button variant={"secondary"}>Click me</Button>
    </div>
  );
}
